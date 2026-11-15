Add-Type -AssemblyName System.Drawing

function Write-PhotoVersion([string]$sourcePath, [string]$destination, [int]$maxDimension = 2560, [long]$quality = 88) {
    $originalHash = (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash
    $photo = [System.Drawing.Image]::FromFile($sourcePath, $true)
    try {
        if ($photo.PropertyIdList -contains 274) {
            switch ([System.BitConverter]::ToUInt16($photo.GetPropertyItem(274).Value, 0)) {
                2 { $photo.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $photo.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }
        $scale = [math]::Min([double]1, [double]$maxDimension / [math]::Max($photo.Width, $photo.Height))
        $width = [math]::Max(1, [int][math]::Round($photo.Width * $scale))
        $height = [math]::Max(1, [int][math]::Round($photo.Height * $scale))
        $bitmap = [System.Drawing.Bitmap]::new($width, $height)
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
        try {
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.DrawImage($photo, 0, 0, $width, $height)
            $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
            $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality, $quality)
            $bitmap.Save($destination, $encoder, $parameters)
        } finally {
            $parameters.Dispose()
            $graphics.Dispose()
            $bitmap.Dispose()
        }
    } finally { $photo.Dispose() }
    if ((Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash -ne $originalHash) {
        throw ('O original foi alterado: ' + $sourcePath)
    }
    return [pscustomobject]@{
        width = $width
        height = $height
        originalBytes = (Get-Item -LiteralPath $sourcePath).Length
        optimizedBytes = (Get-Item -LiteralPath $destination).Length
    }
}
