const fs = require("fs");
module.exports.config = {
  name: "admin2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("ADMIN")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("/Admin")==0 || event.body.indexOf("#admin")==0) {
    var msg = {
        body: "🫅 𝐎𝐖𝐍𝐄𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 🫅\n✧═════════•❁❀❁•═════════✧\n🌸🐬 𝐎𝐖𝐍𝐄𝐑 :- 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 😘🥰\n✧═════════•❁❀❁•═════════✧\n🐬🌸👉𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 👇👇👇\n✧═════════•❁❀❁•═════════✧\n[ https://www.facebook.com/profile.php?id=100062282613155&mibextid=ZbWKwL ]",
        attachment: 
fs.createReadStream(__dirname + `/noprefix/IMG_20250428_002959.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
