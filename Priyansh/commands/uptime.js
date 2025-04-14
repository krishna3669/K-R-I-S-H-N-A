const fetch = require('node-fetch');
const os = require('os');
const fs = require('fs');
const language = process.env.REPL_LANGUAGE;
const platform = os.platform();
const architecture = os.arch();
const cpuModel = os.cpus()[0].model;
const uptime = os.uptime();
const nodejs = process.version;
global.client.timeStart = new Date().getTime();

module.exports.config = {
  name: "upt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "KRISHNA",
  description: "Koii Prefix nhi",
  commandCategory: "Hukum Ke Bagher",
  usages: "Online Time Timing Dekhye",
  cooldowns: 5
};

function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.handleEvent = async ({ api, event, Threads }) => {
  const xuly = Math.floor((Date.now() - global.client.timeStart) / 4444);
  const trinhtrang = xuly < 10 ? "  Acha ✔️" : xuly > 10 && xuly < 100 ? "Thir" : "Ammi";

  if (!event.body) return;

  const { threadID, messageID } = event;

  if (event.body.toLowerCase().indexOf("upt") == 0) {
    const time = process.uptime(),
          gio = Math.floor(time / (60 * 60)),
          phut = Math.floor((time % (60 * 60)) / 60),
          giay = Math.floor(time % 60);

    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString('en-US', { 
      hour12: true, 
      timeZone: 'Asia/kolkata' 
    });
    const formattedDate = currentDate.toLocaleDateString('en-GB', { 
      timeZone: 'Asia/kolkata' 
    });
    const formattedDay = currentDate.toLocaleDateString('en-US', { 
      weekday: 'long', 
      timeZone: 'Asia/kolkata' 
    });

    const responseMessage = `♡   ∩_∩
 （„• ֊ •„)♡
╭─∪∪────────────⟡
│ 𝗨𝗣𝗧𝗜𝗠𝗘 𝗜𝗡𝗙𝗢 𝗔𝗡𝗗 𝗢𝗪𝗡𝗘𝗥 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 
├───────────────⟡
│ ⏰ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘
│  ${uptimeFormatted}
├───────────────⟡
│ 👑 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢
│𝙾𝚂: ${os.type()} ${os.arch()}
│𝙻𝙰𝙽𝙶 𝚅𝙴𝚁: ${process.version}
│𝙲𝙿𝚄 𝙼𝙾𝙳𝙴𝙻: ${os.cpus()[0].model}
│𝚂𝚃𝙾𝚁𝙰𝙶𝙴: ${usedMemoryGB.toFixed(2)} GB / ${totalMemoryGB.toFixed(2)} GB
│𝙲𝙿𝚄 𝚄𝚂𝙰𝙶𝙴: ${cpuUsage.toFixed(1)}%
│𝚁𝙰𝙼 𝚄𝚂𝙶𝙴: ${process.memoryUsage().heapUsed / 1024 / 1024} MB;
├───────────────⟡
│ ✅ 𝗢𝗧𝗛𝗘𝗥 𝗜𝗡𝗙𝗢
│𝙳𝙰𝚃𝙴: ${date}
│𝚃𝙸𝙼𝙴: ${time}
│𝙿𝙸𝙽𝙶: ${ping}𝚖𝚜
│𝚂𝚃𝙰𝚃𝚄𝚂: ${pingStatus}
╰───────────────⟡
`;

    api.sendMessage(responseMessage, event.threadID, event.messageID);
  }
};

module.exports.run = () => {};
