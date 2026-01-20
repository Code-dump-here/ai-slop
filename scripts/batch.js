import fs from "fs";
import { generateContent } from "./content.js";
import { tts } from "./tts.js";
import { makeSubs } from "./subtitles.js";
import { buildVideo } from "./video.js";

const COUNT = 7;
const BG_VIDEOS = Array.from({ length: 15 }, (_, i) => `assets/bg${i + 1}.mp4`);

async function run() {
  for (let i = 0; i < COUNT; i++) {
    const id = Date.now() + "_" + i;
    const text = generateContent();

    const audio = `output/${id}.mp3`;
    const subs = `output/${id}.srt`;
    const video = `output/videos/${id}.mp4`;
    const caption = `output/captions/${id}.txt`;

    const bgVideo = BG_VIDEOS[Math.floor(Math.random() * BG_VIDEOS.length)];

    await tts(text, audio);
    makeSubs(text, subs);
    await buildVideo(bgVideo, audio, subs, video);

    fs.writeFileSync(
      caption,
      `${text}\n\n#tamly #naobo #suthat #fyp`
    );

    console.log("Đã tạo:", video);
  }
}

run();
