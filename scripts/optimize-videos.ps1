$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $scriptDir "..")
$sourceDir = Join-Path $projectRoot "public\recursos"
$targetDir = Join-Path $projectRoot "public\videos"

function Get-FfmpegPath {
  $command = Get-Command ffmpeg -ErrorAction SilentlyContinue
  if ($command) {
    return $command.Source
  }

  $localTools = Join-Path $projectRoot ".tools\ffmpeg"
  if (Test-Path $localTools) {
    $localBinary = Get-ChildItem $localTools -Recurse -Filter ffmpeg.exe -ErrorAction SilentlyContinue |
      Select-Object -First 1

    if ($localBinary) {
      return $localBinary.FullName
    }
  }

  throw "FFmpeg was not found. Install it or place it under .tools\\ffmpeg before running optimize-videos."
}

function Convert-Video {
  param(
    [string]$FfmpegPath,
    [string]$InputFile,
    [string]$OutputFile,
    [string]$VideoFilter,
    [string]$AudioBitrate = "128k",
    [switch]$MuteOutput
  )

  $inputPath = Join-Path $sourceDir $InputFile
  $outputPath = Join-Path $targetDir $OutputFile

  if (-not (Test-Path $inputPath)) {
    throw "Source video not found: $inputPath"
  }

  $arguments = @(
    "-y",
    "-i", $inputPath,
    "-vf", $VideoFilter,
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "25",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    "-profile:v", "high",
    "-level", "4.1"
  )

  if ($MuteOutput) {
    $arguments += "-an"
  }
  else {
    $arguments += @("-c:a", "aac", "-b:a", $AudioBitrate)
  }

  $arguments += $outputPath

  Write-Host "Optimizing $InputFile -> public/videos/$OutputFile"
  & $FfmpegPath @arguments

  if ($LASTEXITCODE -ne 0) {
    throw "FFmpeg failed while processing $InputFile"
  }
}

New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

$ffmpegPath = Get-FfmpegPath

$jobs = @(
  @{
    InputFile = "Insidecalm wending formato para reel.mp4"
    OutputFile = "hidden-realms.mp4"
    VideoFilter = "scale=-2:1280"
    AudioBitrate = "96k"
  },
  @{
    InputFile = "video principal.MP4"
    OutputFile = "ceremony-story.mp4"
    VideoFilter = "crop=3840:1632:0:264,scale=1600:-2"
    AudioBitrate = "128k"
  },
  @{
    InputFile = "video principal.MP4"
    OutputFile = "hero-background.mp4"
    VideoFilter = "crop=3840:1632:0:264,scale=1280:-2"
    MuteOutput = $true
  },
  @{
    InputFile = "wending movie.mp4"
    OutputFile = "evening-afterglow.mp4"
    VideoFilter = "crop=3840:1632:0:264,scale=1600:-2"
    AudioBitrate = "128k"
  }
)

foreach ($job in $jobs) {
  Convert-Video -FfmpegPath $ffmpegPath @job
}
