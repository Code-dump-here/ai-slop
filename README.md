# AI Slop - Automated Video Content Generator

Automated tool for generating short-form social media videos in Vietnamese with AI-generated speech, subtitles, and background footage.

## Features

- Generates psychological/brain fact videos in Vietnamese
- Text-to-speech using Microsoft Edge TTS (Vietnamese voice)
- Automatic subtitle generation
- Random background video selection from 15+ clips
- Batch processing (7 videos at a time)
- Auto-generates captions with hashtags

## Prerequisites

- Node.js (v16+)
- Python 3.x
- FFmpeg

## Installation

1. Install Node dependencies:
```bash
npm install
```

2. Install edge-tts for text-to-speech:
```bash
pip install edge-tts
```

3. Download background videos:
```bash
powershell -ExecutionPolicy Bypass -File get-assets.ps1
```

## Usage

Run the batch generator:
```bash
node scripts/batch.js
```

This will create 7 videos in `output/videos/` with corresponding audio, subtitles, and captions.

## Project Structure

```
scripts/
  batch.js      - Main batch processing script
  content.js    - Content generation (hooks + facts)
  tts.js        - Text-to-speech conversion
  subtitles.js  - SRT subtitle file generation
  video.js      - Video composition with FFmpeg
assets/         - Background video files (bg1-bg15.mp4)
output/
  videos/       - Generated MP4 files
  captions/     - Caption files with hashtags
```

## Output

Each run generates:
- MP4 video file with audio and embedded subtitles
- MP3 audio file (Vietnamese TTS)
- SRT subtitle file
- TXT caption file with hashtags (#tamly #naobo #suthat #fyp)

## Configuration

Edit `batch.js` to change:
- `COUNT` - Number of videos to generate per batch (default: 7)
- Background videos are randomly selected from `assets/bg1.mp4` through `assets/bg15.mp4`

Edit `content.js` to customize:
- Hooks (attention-grabbing openers)
- Facts (psychological/brain facts)
