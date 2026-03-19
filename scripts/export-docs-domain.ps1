$ErrorActionPreference = "Stop"

$env:SITE_BASE_PATH = "__ROOT__"
$env:SITE_CUSTOM_DOMAIN = "www.nokatart.ie"

try {
  & (Join-Path $PSScriptRoot "export-docs.ps1")
}
finally {
  Remove-Item Env:SITE_BASE_PATH -ErrorAction SilentlyContinue
  Remove-Item Env:SITE_CUSTOM_DOMAIN -ErrorAction SilentlyContinue
}
