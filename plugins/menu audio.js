let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/3237b066ba0b62f193563.mp4'
  let { name } = global.db.data.users[who]
  m.react('🔊')
let str = `                  ✥━─━⌬ 𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏 ⌬━─━✥
【..≼قــسم الصــوتيـــات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
❏..🔊╎❯ .عميق⌉
❏..🔊╎❯ .منفوخ⌉
❏..🔊╎❯ .تخين⌉
❏..🔊╎❯ .صاخب⌉
❏..🔊╎❯ .سريع⌉
❏..🔊╎❯ .رفيع⌉
❏..🔊╎❯ .روبوت⌉
❏..🔊╎❯ .بطئ⌉
❏..🔊╎❯ .ناعم⌉
❏..🔊╎❯ .سنجاب⌉
❏..🔊╎❯ .مكس⌉
                    ✥━─━⌬ 𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏 ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الاصوات']

export default handler
