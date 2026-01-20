import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";

ffmpeg.setFfmpegPath(ffmpegPath);

export function buildVideo(bg, audio, subs, out) {
  return new Promise((resolve, reject) => {
    ffmpeg(bg)
      .input(audio)
      .outputOptions([
        "-vf subtitles=" + subs,
        "-shortest",
        "-c:v libx264",
        "-c:a aac"
      ])
      .save(out)
      .on("end", resolve)
      .on("error", reject);
  });
}
