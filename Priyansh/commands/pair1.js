module.exports.config = {
  name: "pair1",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "KRISHNA",
  description: "THIS BOT IS MR KRISHNA",
  commandCategory: "COUPLE LOVE PAIRING", 
  usages: "pair1", 
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

        let gifLove = (await axios.get( `https://i.imgur.com/sWKpIKL.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁:- 𝐊𝐑𝐈𝐒𝐇𝐍𝐀_____________________________________________________________________‎‎[•||•●•||•┼┼──🌸,,💟..ƙɧ𝘂ɗ𝗔  ƙi͠ 𝗴𝘂r᩶𝐬𝗔𝗧 ɱɘ ɘƙ p᩶𝗔ɭ 𝗔𝗔ɣ𝗔 ɧ❍𝗴𝗔 ʝ𝗔ß 𝘂𝐬ɳɘ 𝗧𝘂ʝɧɘ ʝɘ𝐬𝗔 p᩶ɣ𝗔r᩶ i͠ɳ𝐬𝗔𝗔ɳ ß𝗔ɳ𝗔ɣ𝗔 ɧ❍𝗴𝗔...💗 🥰•||•🐬•||•]]
🌹✦━━━━━🌹━━🌹━━━━━✦🌹
\n[•||•●•||•┼┼──🌸🌿 ɳ𝗔 ʝ𝗔ɳɘ ƙ❍ɳ 𝐬ɘ ɗ𝘂𝗔 ƙ𝘂ß❍❍ɭ ɧ𝘂i͠ ɧ𝗔ɱ𝗔r᩶i͠ ʝ❍ 𝘂𝐬ɳɘ ɱ𝘂ʝɧɘ 𝗧𝘂ʝɧ𝐬ɘ ɱi͠ɭ𝗔ɣ𝗔 ɧ❍𝗴𝗔...💜 ♥️✨ 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 •||•🌸•||• ]]
🌹✦━━━━━🌹━━🌹━━━━━✦🌹
\n•||•_🎋𝗔𝗔p᩶ ɗ❍ɳ❍ ƙ𝗔 p᩶ɣ𝗔r᩶ 👉 [ ${tle} ] ɧ𝗔i͠ 🤐👈\n`+namee+" "+"😘"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}
