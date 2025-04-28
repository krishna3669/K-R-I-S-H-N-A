const fs = require("fs");
module.exports.config = {
  name: "KRISHNA",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "KRISHNA BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || react.includes("OWNER") || react.includes("Boss") ||
react.includes("BOSS") ||
react.includes("Ravi") ||     
react.includes("RAVI")) {
    var msg = {
        body: `${name} ●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== 𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄺🅁🄸🅂🄷🄽🄰𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 👉[💖 https://www.facebook.com/profile.php?id=100062282613155&mibextid=ZbWKwL 💖]`,attachment: fs.createReadStream(__dirname + `/noprefix//IMG_20250428_002931.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
