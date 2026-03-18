$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$sourceDir = Join-Path $PSScriptRoot "..\\public\\recursos"
$outputDir = Join-Path $PSScriptRoot "..\\public\\portfolio"
$maxLandscapeWidth = 2200
$maxPortraitHeight = 2400
$quality = 82L

if (-not (Test-Path $outputDir)) {
  New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }

if (-not $jpegCodec) {
  throw "JPEG encoder not available."
}

$encoder = [System.Drawing.Imaging.Encoder]::Quality

Get-ChildItem -Path $sourceDir -File |
  Where-Object { $_.Extension -match "^(?i)\.(jpg|jpeg|png)$" } |
  ForEach-Object {
    $outputName = [System.IO.Path]::GetFileNameWithoutExtension($_.Name) + ".jpg"
    $outputPath = Join-Path $outputDir $outputName

    if ((Test-Path $outputPath) -and (Get-Item $outputPath).LastWriteTimeUtc -ge $_.LastWriteTimeUtc) {
      return
    }

    $image = [System.Drawing.Image]::FromFile($_.FullName)

    try {
      $scale = 1.0

      if ($image.Width -ge $image.Height -and $image.Width -gt $maxLandscapeWidth) {
        $scale = $maxLandscapeWidth / $image.Width
      }
      elseif ($image.Height -gt $maxPortraitHeight) {
        $scale = $maxPortraitHeight / $image.Height
      }

      $targetWidth = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
      $targetHeight = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))

      $bitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)

      try {
        $bitmap.SetResolution($image.HorizontalResolution, $image.VerticalResolution)

        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

        try {
          $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
          $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
          $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
          $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
          $graphics.DrawImage($image, 0, 0, $targetWidth, $targetHeight)
        }
        finally {
          $graphics.Dispose()
        }

        $encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)

        try {
          $encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $quality)
          $bitmap.Save($outputPath, $jpegCodec, $encoderParameters)
        }
        finally {
          $encoderParameters.Dispose()
        }
      }
      finally {
        $bitmap.Dispose()
      }
    }
    finally {
      $image.Dispose()
    }
  }
