import fs from "fs";

export function makeSubs(text, file) {
  const parts = text.split("…");
  let srt = "";
  let t = 0;

  parts.forEach((p, i) => {
    srt += `${i+1}\n`;
    srt += `00:00:${t.toString().padStart(2,"0")},000 --> 00:00:${(t+3).toString().padStart(2,"0")},000\n`;
    srt += `${p.trim()}\n\n`;
    t += 3;
  });

  fs.writeFileSync(file, srt);
}
