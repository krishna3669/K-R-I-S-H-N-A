module.exports.config = {
  name: "pair1",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "KRISHNA", 
  description: "Get Pair From Mention",
  commandCategory: "png",
  usages: "[@mention]",
  cooldowns: 5, 
  dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "jimp": ""
  }
};

module.exports.onLoad = async() => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/cache/canvas/`;
  const path = resolve(__dirname, 'cache/canvas', 'bestu.png');
  if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.imgur.com/Rwb9Pi7.jpeg", path); 
}

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"]; 
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "cache", "canvas");

  let batgiam_img = await jimp.read(__root + "/bestu.png");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(160, 160), 108, 115).composite(circleTwo.resize(160, 160), 478, 115);

  let raw = await batgiam_img.getBufferAsync("image/png");

  fs.writeFileSync(pathImg, raw);
  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}
async function circle(image) {
  const jimp = require("jimp");
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {    
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("🤣 𝙺𝙸𝚂𝙸 𝙴𝙺 𝙺𝙾 𝙼𝙴𝙽𝚂𝙾𝙸𝙽 𝙺𝙰𝚁𝙾 𝙽𝙷𝙸 𝚃𝙾 𝙺𝚁𝙸𝚂𝙷𝙽𝙰 𝙱𝙰𝙱𝚄 𝚂𝙴 𝙿𝚄𝙲𝙷 𝙻𝙾 🙋🐥🧚", threadID, messageID);
  else {
      const one = senderID, two = mention[0];
      return makeImage({ one, two }).then(path => api.sendMessage({ body: "𝐎𝐰𝐧𝐞𝐫 ➻   💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n\n[•||•●•||•┼┼──🌸,,💟..#_𝕋𝕦𝕞𝕙𝕠 𝕂𝕠 𝕁𝕒𝕒𝕟  💟 ...💗 𝕊𝕖 #_ℙ𝕪𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒...💗 🥰𝔻𝕚𝕝 _💖 𝕂𝕒 𝕊𝕦𝕜𝕦𝕟_𝔸𝕒𝕟𝕜𝕙 𝕂𝕒 𝕋𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒 🥰... 🌸 #_𝔸𝕓 𝕋𝕦𝕞 𝕊𝕒𝕥𝕙 𝔻𝕠 𝕐𝕒 𝕄𝕒𝕥 𝔻𝕠 𝕍𝕠 𝔸𝕒𝕡𝕜𝕚 𝕄𝕒𝕣𝕛𝕚🐬__💖 #_ℍ𝕒𝕞𝕟𝕖 𝕋𝕠 𝕒𝕒𝕡𝕜𝕠 𝕁𝕚𝕟𝕕𝕖𝕘𝕚 𝕂𝕒 𝕊𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒•||•🐬•||•]]\n\n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n\n➻ 𝐍𝗔ɱɘ ✦  ${namee} \n\n➻ 𝐍𝗔ɱɘ ✦  ${name} \n\n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n\n🌸🍁✶⊶⊷⊷❍⊶⊷⊷✶🌸🍁", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
  }
}
