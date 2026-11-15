$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'photo-helpers.ps1')

$projectRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $projectRoot 'src\data\storyImages.json'
$manifest = [ordered]@{}
$photoCount = 0
$sourceBytes = 0L
$optimizedBytes = 0L
$expectedCounts = [ordered]@{ zelia = 6; jaime = 6; dorotilde = 6; luiz = 4 }

foreach ($participant in $expectedCounts.Keys) {
    $expectedCount = $expectedCounts[$participant]
    $sourceDirectory = Join-Path $projectRoot ('public\images\' + $participant)
    $files = @(Get-ChildItem -LiteralPath $sourceDirectory -File -Filter '*.jpg' |
        Where-Object { $_.BaseName -match '\d+$' } |
        Sort-Object { [int]([regex]::Match($_.BaseName, '\d+$').Value) })
    if ($files.Count -ne 0 -and $files.Count -ne $expectedCount) {
        throw ($participant + ': sao necessarias ' + $expectedCount + ' fotos numeradas, ou nenhuma enquanto o ensaio estiver pendente.')
    }
    $manifest[$participant] = @()
    if ($files.Count -eq 0) { continue }
    $outputDirectory = Join-Path $sourceDirectory 'optimized'
    New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
    foreach ($index in 0..($files.Count - 1)) {
        $file = $files[$index]
        $number = [int]([regex]::Match($file.BaseName, '\d+$').Value)
        if ($number -ne $index + 1) { throw ($participant + ': a sequencia deve ir de 1 a ' + $expectedCount + ', sem repeticoes.') }
        $version = Write-PhotoVersion $file.FullName (Join-Path $outputDirectory $file.Name)
        $manifest[$participant] += [ordered]@{
            id = $participant + '-' + $number.ToString('00')
            src = './images/' + $participant + '/optimized/' + $file.Name
            originalSrc = './images/' + $participant + '/' + $file.Name
            width = $version.width
            height = $version.height
        }
        $photoCount++
        $sourceBytes += $version.originalBytes
        $optimizedBytes += $version.optimizedBytes
    }
}
$json = ConvertTo-Json -InputObject $manifest -Depth 5
[System.IO.File]::WriteAllText($manifestPath, $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
[pscustomobject]@{ Photos = $photoCount; OriginalBytes = $sourceBytes; OptimizedBytes = $optimizedBytes } | ConvertTo-Json -Compress
