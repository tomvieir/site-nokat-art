$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$docsDir = Join-Path $projectRoot "docs"
$outDir = Join-Path $projectRoot "out"

Push-Location $projectRoot
try {
  $env:GITHUB_ACTIONS = "true"
  npm run build

  if ($LASTEXITCODE -ne 0) {
    throw "Build failed while exporting docs."
  }
}
finally {
  Remove-Item Env:GITHUB_ACTIONS -ErrorAction SilentlyContinue
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
