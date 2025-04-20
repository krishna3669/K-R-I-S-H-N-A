const fs = require("fs");
module.exports.config = {
        name: "dance",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "ARYAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Dance",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("dance")==0 || event.body.indexOf("Dance")==0 || event.body.indexOf("DANCE")==0 || event.body.indexOf("DaNcE")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n_______________________\n\n🌸💖__𝐀𝐀𝐎 𝐁𝐄𝐁𝐘 𝐃𝐎𝐍𝐎 𝐒𝐀𝐓𝐇 𝐊𝐀𝐑𝐓𝐄 𝐇𝐄 𝐃𝐀𝐍𝐂𝐄____💃🕺🐬\n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_1236473811218803.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💃", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
