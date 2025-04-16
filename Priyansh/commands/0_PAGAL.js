const fs = require("fs");
module.exports.config = {
        name: "pagal",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "ARYAN", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "Pagal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("pagal")==0 || event.body.indexOf("Pagal")==0 || event.body.indexOf("pgl")==0 || event.body.indexOf("PAGAL")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n_______________________\n\n𝐓𝐔 𝐏𝐀𝐆𝐀𝐋 𝐓𝐄𝐑𝐈 𝐆𝐅 𝐏𝐀𝐆𝐀𝐋 𝐎𝐑 𝐓𝐄𝐑𝐄 𝐇𝐎𝐍𝐄 𝐕𝐀𝐋𝐄 𝐁𝐀𝐂𝐇𝐄 𝐏𝐀𝐆𝐀𝐋 🌸🐬🐧 \n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Messenger_creation_1562875767716238.webp`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🦧", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
