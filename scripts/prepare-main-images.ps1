$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'photo-helpers.ps1')

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceDirectory = Join-Path $projectRoot 'public\images'
$outputDirectory = Join-Path $sourceDirectory 'optimized'
New-Item -ItemType Directory -Path $outputDirectory -Force | Out-Null
$files = 'zelia\zelia.jpg', 'jaime\jaimerecortecolorida.jpg', 'dorotilde\dorotilde.jpg', 'luiz\luiz.jpg', 'cidadedoidoso.jpg'
$results = @()

foreach ($name in $files) {
    $sourcePath = Join-Path $sourceDirectory $name
    $destination = Join-Path $outputDirectory (Split-Path -Leaf $name)
    $version = Write-PhotoVersion $sourcePath $destination
    $results += [pscustomobject]@{
        File = $name
        Width = $version.width
        Height = $version.height
        OriginalBytes = $version.originalBytes
        OptimizedBytes = $version.optimizedBytes
    }
}
$results | ConvertTo-Json -Compress
