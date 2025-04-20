const fs = require("fs");
module.exports.config = {
        name: "evening",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "ARYAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Evening",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("evening")==0 || event.body.indexOf("Evening")==0 || event.body.indexOf("EVENING")==0 || event.body.indexOf("EvEnInG")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n_______________________\n\n🌸💖__𝐕𝐄𝐑𝐈 𝐆𝐎𝐎𝐃 𝐄𝐕𝐄𝐍𝐈𝐍𝐆 𝐉𝐈____🐧🥰🐬\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_1640387229946456.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐬", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
