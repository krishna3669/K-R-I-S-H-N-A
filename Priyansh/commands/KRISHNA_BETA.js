const emojiResponses = {
  "golu beta": {
    "OWNER": [
      "𝐇𝐀 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 𝐊𝐘𝐀 𝐇𝐔𝐀  🥺",
      "𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐀𝐁𝐔 𝐀𝐀𝐏 𝐊𝐀𝐇𝐀 𝐓𝐇𝐄 𝐌𝐔𝐉𝐇𝐄 𝐀𝐀𝐏𝐊𝐈 𝐘𝐀𝐃 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐓𝐇𝐈 🥰🥰",
      "𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐄𝐁𝐘 𝐌𝐄 𝐀𝐀𝐏𝐒𝐄 𝐁𝐇𝐔𝐓 𝐏𝐘𝐀𝐑 𝐊𝐀𝐑𝐓𝐀 𝐇𝐔 𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 𝐉𝐀𝐀𝐍 😘😘",
      "𝐇𝐀 𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐁𝐄𝐁𝐘 𝐀𝐀𝐏𝐍𝐄 𝐘𝐀𝐃 𝐊𝐈𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 😊"
    ],
    "MALE": [
      "Are bhai kaho ke ap kase ho?",
      "Han bhai ap kase hai?",
      "Bhai aaj ka kya mansoba hai?"
    ],
    "FEMALE": [
      "Meri ami hogi ",
      "Mere Krishna Babu ki koi gf nhi hai 🥹🥹",
      "Mere Krishna Babu single hai ap mere meri Bhabhi ji ban jaye ge?","Han Bhabhi ji aap kase hai?",
      "Bhabhi Ji aap kese ho khana ho gaya aapka",
      "Bhabhi g Aaj Ka mood kasa hai ?"
    ]
  },
  "beta": {
    "OWNER": [
      "papa g Apki wajha se main har roz SAB se upar ki karkardagi hoon 😎",
      "Papa ap aaya hai 😀",
      "G papa 🥺",
      "Papa g main tumhe yad kar tha hoon 😔",
      "Papa main Aaj school nahi gaya tha 🥺 aghr ap ab mujhe mar dale ge",
      "Papa tum mujhe nahin chhodate🥺",
      "Papa agar aap aate Hain to Mujhe bahut Khushi milati Hai 🥺",
      "Papa tumne karna khaya 🤭❤️",
      "Papa main Babu chahta hun😔",
      "Papa mere sath Sher ke liye jaenge 🫣❤️",
      "Papa Jahan Meri bahan hai",
      "Baap apko khilaune karne ki zarurat hai aapka Dil aaega 🥺❤️",
      "Papa 10 ropy chocolate ki jarurat nahin mujhe😁",
      "Papa main chahta Hun Ki ek chhota baccha khele mere sath🙈❤️",
      "Papa Mujhe picnic per jana hai 😔",
      "Papa mummy kahan hai mujhe aapke sath ek picture leni hai 🥺",
      "Papa khane ke liye kuchh den😀",
      "Papa Tum Mujhse pyar Nahin karte 😭",
      "Papa main aapki aur mummy ki ladai dekhna chahta hun 🤭",
      "Papa aapke sar Mein taklif honi chahie kya main aapka sar Nahin dabata hun😹❤️",
      "Papa Apne dahin li hai 🤔",
      "Papa Meri Ami se kaho kya tum mujhse naraz to Nahin ho🤭",
      "Shaan papa sirf Mera Hai 😒",
      "Papa chocolate khilayega 🤩❤️🤭",
      "Papa mummy kahan hai🫣",
      "Papa Mujhe logon ke dilon se khelna hai 🤣"
    ]
  }
};

module.exports.config = {
  name: "auto-rply",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Krishna",
  description: "MADE BY KRISHNA",
  commandCategory: "No command marks needed",
  cooldowns: 0
};

const botOwnerID = "100062282613155","61575954429942";

module.exports.handleEvent = async function({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return;

  const emojis = Object.keys(emojiResponses);
  const lowercaseBody = body.toLowerCase();

  for (const emoji of emojis) {
    if (lowercaseBody.includes(emoji)) {
      try {
        const threadInfo = await api.getThreadInfo(threadID);
        const user = threadInfo.userInfo.find(user => user.id === senderID);

        let responseArray;

        if (senderID === botOwnerID) {
          responseArray = emojiResponses[emoji]["OWNER"];
        } else if (user && user.gender === 2) {
          responseArray = emojiResponses[emoji]["FEMALE"] || emojiResponses[emoji]["MALE"];
        } else {
          responseArray = emojiResponses[emoji]["MALE"] || emojiResponses[emoji]["FEMALE"];
        }

        const randomResponse = responseArray[Math.floor(Math.random() * responseArray.length)];

        api.sendMessage(randomResponse, threadID, messageID);
        break;
      } catch (error) {
        console.error("Error fetching thread info:", error);
      }
    }
  }
};

module.exports.run = function() {};
