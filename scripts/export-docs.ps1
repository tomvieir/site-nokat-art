$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$docsDir = Join-Path $projectRoot "docs"
$outDir = Join-Path $projectRoot "out"
$siteBasePath = $env:SITE_BASE_PATH
$siteCustomDomain = $env:SITE_CUSTOM_DOMAIN

Push-Location $projectRoot
try {
  $env:GITHUB_ACTIONS = "true"
  if ($null -ne $siteBasePath) {
    $env:SITE_BASE_PATH = if ($siteBasePath -eq "") { "__ROOT__" } else { $siteBasePath }
  }
  if (Test-Path $outDir) {
    Remove-Item $outDir -Recurse -Force
  }
  $nextDir = Join-Path $projectRoot ".next"
  if (Test-Path $nextDir) {
    Remove-Item $nextDir -Recurse -Force
  }
  npm run build

  if ($LASTEXITCODE -ne 0) {
    throw "Build failed while exporting docs."
  }
}
finally {
  Remove-Item Env:GITHUB_ACTIONS -ErrorAction SilentlyContinue
  Remove-Item Env:SITE_BASE_PATH -ErrorAction SilentlyContinue
  Pop-Location
}

if (Test-Path $docsDir) {
  Remove-Item $docsDir -Recurse -Force
}

New-Item -ItemType Directory -Force -Path $docsDir | Out-Null
Copy-Item (Join-Path $outDir "*") $docsDir -Recurse -Force

$rawAssetsDir = Join-Path $docsDir "recursos"
if (Test-Path $rawAssetsDir) {
  Remove-Item $rawAssetsDir -Recurse -Force
}

New-Item -ItemType File -Path (Join-Path $docsDir ".nojekyll") -Force | Out-Null

$cnamePath = Join-Path $docsDir "CNAME"
if ([string]::IsNullOrWhiteSpace($siteCustomDomain)) {
  if (Test-Path $cnamePath) {
    Remove-Item $cnamePath -Force
  }
}
else {
  Set-Content -Path $cnamePath -Value $siteCustomDomain -NoNewline
}
