const fs = require("fs");
module.exports.config = {
        name: "afternoon",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "KRISHNA", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Afternoon",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("afternoon")==0 || event.body.indexOf("Afternoon")==0 || event.body.indexOf("AFTERNOON")==0 || event.body.indexOf("AfTeRnOoN")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n_______________________\n\n💖🐬 𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐀𝐅𝐓𝐄𝐑𝐍𝐎𝐎𝐍 𝐉𝐈____🌸💖🐬\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_3059017594255386.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐒", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
