const fs = require("fs");
const files = [
  "speech_6f32b669_1772414671119.wav",
  "speech_f108a473_1772414675599.wav",
  "speech_ff22b944_1772414679630.wav",
  "speech_de8c2cbf_1772414683808.wav",
  "speech_3919d43a_1772414758527.wav",
  "speech_21aa800d_1772414762869.wav",
  "speech_cb1d51fb_1772414768125.wav",
  "speech_f578d336_1772414772089.wav",
  "speech_2f08fd6c_1772414775466.wav",
  "speech_4e0f5d80_1772414778713.wav",
  "speech_e6667a1e_1772414783484.wav",
  "speech_11fed59c_1772414786352.wav",
  "speech_342098de_1772414789546.wav",
  "speech_f0ead5f4_1772414795083.wav",
  "speech_bca4f06b_1772414814907.wav",
  "speech_1c1089e2_1772414819892.wav",
  "speech_7eb71913_1772414823466.wav",
  "speech_56dfce38_1772414826607.wav",
  "speech_fa828202_1772414831269.wav",
  "speech_e96fdc59_1772414836130.wav",
  "speech_7a6a6fb6_1772414839350.wav",
  "speech_fd18ff2b_1772414841517.wav",
  "speech_7b2b27c8_1772414846314.wav",
  "speech_a4c44b41_1772414850321.wav",
  "speech_1db34723_1772414854191.wav",
  "speech_9c1c9dae_1772414858326.wav",
  "speech_1227d9eb_1772414862243.wav",
  "speech_c22dd235_1772414866129.wav",
];

let timestamps = [];
let currentTime = 0;

let header = null;
let pcmData = [];
let totalDataLength = 0;

files.forEach((file) => {
  const filePath = `c:\\Users\\samsung\\Downloads\\test3\\Audio\\${file}`;
  if (!fs.existsSync(filePath)) {
    console.log(`Missing: ${filePath}`);
    return;
  }
  let buf = fs.readFileSync(filePath);
  if (!header) {
    header = Buffer.from(buf.slice(0, 44));
  }
  let audioBytes = buf.slice(44);
  pcmData.push(audioBytes);

  let byteRate = header.readUInt32LE(28); // 4 bytes
  let duration = audioBytes.length / byteRate;
  timestamps.push({
    start: Number(currentTime.toFixed(3)),
    end: Number((currentTime + duration).toFixed(3)),
  });
  currentTime += duration;
  totalDataLength += audioBytes.length;
});

header.writeUInt32LE(36 + totalDataLength, 4);
header.writeUInt32LE(totalDataLength, 40);

const finalBuf = Buffer.concat([header, ...pcmData]);
fs.writeFileSync(
  "c:\\Users\\samsung\\Downloads\\test3\\Audio\\Audio.wav",
  finalBuf,
);
fs.writeFileSync(
  "c:\\Users\\samsung\\Downloads\\test3\\sync.json",
  JSON.stringify(timestamps, null, 2),
);

console.log("Success!", currentTime, "seconds");
