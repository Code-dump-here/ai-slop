$API_KEY = "mF9ng8TTPWYhWIvajESSlJNeBZK0Jz4uZuQcbeGa9LtEPI5CFfANKU1P"
$QUERY = "abstract vertical"
$COUNT = 15

$headers = @{
  Authorization = $API_KEY
}

$url = "https://api.pexels.com/videos/search?query=$QUERY&orientation=portrait&per_page=$COUNT"

$response = Invoke-RestMethod -Uri $url -Headers $headers

New-Item -ItemType Directory -Force -Path assets | Out-Null

$i = 1
foreach ($video in $response.videos) {
  $file = $video.video_files |
    Where-Object { $_.quality -eq "sd" -and $_.width -le 1080 } |
    Select-Object -First 1

  if ($file) {
    $out = "assets\bg$i.mp4"
    Invoke-WebRequest -Uri $file.link -OutFile $out
    Write-Host "Downloaded $out"
    $i++
  }
}
