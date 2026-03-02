const fs = require("fs");

const filename = "c:\\Users\\samsung\\Downloads\\test3\\index.html";
const html = fs.readFileSync(filename, "utf8");

const regex = /<span class="sentence"[^>]*>(.*?)<\/span>/g;
let match;
const sentences = [];

while ((match = regex.exec(html)) !== null) {
  sentences.push(match[1]);
}

fs.writeFileSync(
  "c:\\Users\\samsung\\Downloads\\test3\\sentences.json",
  JSON.stringify(sentences, null, 2),
  "utf-8",
);
