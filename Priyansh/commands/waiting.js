const fs = require("fs");
module.exports.config = {
	name: "waiting",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Shaan ka Jugad", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chocolate",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(".music")==0 || event.body.indexOf(".video")==0 || event.body.indexOf(".Video")==0 || event.body.indexOf(".Music")==0) {
		var msg = {
				body: "Uff Mera Network 🥹",
				attachment: fs.createReadStream(__dirname + `/cache/received_1580521139270101.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
