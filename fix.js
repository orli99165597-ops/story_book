const fs = require("fs");
const filepath = "c:\\Users\\samsung\\Downloads\\test3\\index.html";
let content = fs.readFileSync(filepath, "utf8");

let i = 1;
content = content.replace(/<span class="tts-sent">/g, function () {
  return `<span class="sentence" data-sentence="${i++}">`;
});

fs.writeFileSync(filepath, content, "utf8");
console.log(`Replaced ${i - 1} occurrences.`);
