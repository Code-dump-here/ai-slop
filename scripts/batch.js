import fs from "fs";
import { generateContent } from "./content.js";
import { tts } from "./tts.js";
import { makeSubs } from "./subtitles.js";
import { buildVideo } from "./video.js";

const COUNT = 7;

async function run() {
  for (let i = 0; i < COUNT; i++) {
    const id = Date.now() + "_" + i;
    const text = generateContent();

    const audio = `output/${id}.mp3`;
    const subs = `output/${id}.srt`;
    const video = `output/videos/${id}.mp4`;
    const caption = `output/captions/${id}.txt`;

    await tts(text, audio);
    makeSubs(text, subs);
    await buildVideo("assets/bg1.mp4", audio, subs, video);

    fs.writeFileSync(
      caption,
      `${text}\n\n#tamly #naobo #suthat #fyp`
    );

    console.log("Đã tạo:", video);
  }
}

run();
