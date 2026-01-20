import { exec } from "child_process";

export function tts(text, output) {
  return new Promise((resolve, reject) => {
    exec(
      `C:\\Users\\timer\\AppData\\Roaming\\Python\\Python313\\Scripts\\edge-tts.exe --voice vi-VN-HoaiMyNeural --text "${text}" --write-media ${output}`,
      err => err ? reject(err) : resolve()
    );
  });
}
