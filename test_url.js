const https = require("https");
https.get(
  "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ukulele_Picking.ogg",
  (res) => {
    if (res.statusCode === 200) console.log("OK Ukulele_Picking.ogg");
  },
);
https.get(
  "https://upload.wikimedia.org/wikipedia/commons/2/23/Ukulele.ogg",
  (res) => {
    if (res.statusCode === 200) console.log("OK Ukulele.ogg");
  },
);
https.get(
  "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ukulele_Strum.ogg",
  (res) => {
    if (res.statusCode === 200) console.log("OK Ukulele_Strum.ogg");
  },
);
