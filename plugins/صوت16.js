let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/يبضاني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يبضاني.mp3`}, {quoted: m});
};

// دي كلمات المساعدة والأوسمة الخاصة بالأمر
handler.help = ['notification']
handler.tags = ['notification']

// دي الكلمات اللي الكود هيتفاعل معاها
handler.customPrefix = /يبيضي|يابيضي|بيض|نينينيني|بيضي/i;
handler.command = new RegExp;

export default handler