$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceDirectory = Join-Path $projectRoot 'public\images\cidadedoidoso'
$outputDirectory = Join-Path $sourceDirectory 'optimized'
$manifestPath = Join-Path $projectRoot 'src\data\cityGalleryImages.json'
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$manifest = @()
$sourceBytes = 0L
$optimizedBytes = 0L

function Save-PhotoVersion($photo, [string]$destination, [int]$maxWidth, [int]$maxHeight, [long]$quality) {
    $scale = [math]::Min([double]1, [math]::Min([double]$maxWidth / $photo.Width, [double]$maxHeight / $photo.Height))
    $width = [math]::Max(1, [int][math]::Round($photo.Width * $scale))
    $height = [math]::Max(1, [int][math]::Round($photo.Height * $scale))
    $bitmap = [System.Drawing.Bitmap]::new($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
    try {
        $graphics.Clear([System.Drawing.Color]::White)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($photo, 0, 0, $width, $height)
        $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, $quality)
        $bitmap.Save($destination, $encoder, $parameters)
    } finally {
        $parameters.Dispose()
        $graphics.Dispose()
        $bitmap.Dispose()
    }
    return @{ width = $width; height = $height }
}

$files = Get-ChildItem -LiteralPath $sourceDirectory -File -Filter 'editadas_*.jpg' | Sort-Object { [int]($_.BaseName -replace '\D', '') }
foreach ($file in $files) {
    $photo = [System.Drawing.Image]::FromFile($file.FullName, $true)
    try {
        if ($photo.PropertyIdList -contains 274) {
            switch ([System.BitConverter]::ToUInt16($photo.GetPropertyItem(274).Value, 0)) {
                3 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                6 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                8 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }
        $thumbnailPath = Join-Path $outputDirectory ($file.BaseName + '-thumb.jpg')
        $viewPath = Join-Path $outputDirectory ($file.BaseName + '-view.jpg')
        $thumbnail = Save-PhotoVersion $photo $thumbnailPath 720 1080 80
        $view = Save-PhotoVersion $photo $viewPath 2400 2400 86
        $manifest += [ordered]@{
            id = $file.BaseName
            thumbnailSrc = './images/cidadedoidoso/optimized/' + $file.BaseName + '-thumb.jpg'
            src = './images/cidadedoidoso/optimized/' + $file.BaseName + '-view.jpg'
            originalSrc = './images/cidadedoidoso/' + $file.Name
            width = $view.width
            height = $view.height
        }
        $sourceBytes += $file.Length
        $optimizedBytes += (Get-Item -LiteralPath $thumbnailPath).Length + (Get-Item -LiteralPath $viewPath).Length
    } finally { $photo.Dispose() }
}
if ($manifest.Count -eq 0) { throw 'Nenhuma fotografia encontrada.' }
$json = ConvertTo-Json -InputObject $manifest -Depth 4
[System.IO.File]::WriteAllText($manifestPath, $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
[pscustomobject]@{ Photos = $manifest.Count; OriginalBytes = $sourceBytes; OptimizedBytes = $optimizedBytes } | ConvertTo-Json -Compress
