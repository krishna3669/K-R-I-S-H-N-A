module.exports.config = {
  name: "pair3",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "KRISHNA",
  description: "THIS BOT IS MR KRISHNA",
  commandCategory: "COUPLE LOVE PAIRING", 
  usages: "pair3", 
  cooldowns: 15
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.imgur.com/8nepivI.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `🌸🌹🄾🅆🄽🄴🅁 🐧 🄺🅁🄸🅂🄷🄽🄰 😘\n✧═════════•❁❀❁•═════════✧\n🌸🐬_𝐋𝐎 𝐀𝐀𝐏 𝐃𝐎𝐍𝐎 𝐊𝐈 𝐉𝐎𝐃𝐈 𝐀𝐁 𝐊𝐇𝐔𝐒𝐇 𝐇𝐎 𝐉𝐀𝐎_🌸🐬\n✧═════════•❁❀❁•═════════✧\n😘 𝐈 🇱 🇴 🇻 🇪  𝐘𝐎𝐔 😘\n✧═════════•❁❀❁•═════════✧\n•||•_🎋𝗔𝗔𝗣𝗡 𝗗𝗢𝗡𝗢 𝗞𝗔 𝗣𝗬𝗔𝗥 𝗞𝗔 𝗟𝗘𝗩𝗘𝗟 👉 [ ${tle} ] 👈𝗛𝗔𝗜_🧚🌹🌿\n✧═════════•❁❀❁•═════════✧\n➻ 𝐍𝗔ɱɘ ✦  ${namee} \n [${tle}] \n➻ 𝐍𝗔ɱɘ ✦  ${name} \n💖😘🌹😘💖`, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
