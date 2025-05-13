const fs = require("fs");
module.exports.config = {
        name: "krishna",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "KRISHNA",
        description: "THIS BOT IS MR ARYAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("krishna") ||
     react.includes("Krishna") || react.includes("KRISHNA") || react.includes("KrIsHnA") ||
react.includes("कृष्ण") ||
react.includes("@▂ｯﾃ⌥✪╤╤━───╼ 🩷🪿☠️🄺🅁🄸🅂🄷🄽🄰🩷🫨😈🅁🄺🩵🩷🍷🄱🅁🄰🄽🄳 🄻🄴🄶🄴🄽🄳🥂🏴‍☠️🎭")) {
                var msg = {
                                body: `𝐎𝐖𝐍𝐄𝐑 ➻ ꧁𓊈≛⃝💖̶K̶R̶I̶S̶H̶N̶A̶≛⃝💖𓊉꧂`,attachment: fs.createReadStream(__dirname + `/noprefix/IMG_20250428_002931.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
