let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/73fd2daa9dca15ae5db80.mp4'
  let { name } = global.db.data.users[who]
  m.react('🔕')
let str = `                  ✥━─━⌬ 𝙏𝙐𝙍𝘽𝙊_𝘽𝙊𝙏 ⌬━─━✥
【..≼قــســم الجروبات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
❐..🔕╎❯ .جروبي⌉
❐..🔕╎❯ .معلوم_الجروب⌉
❐..🔕╎❯ .منشن⌉
❐..🔕╎❯ .مخفي⌉
❐..🔕╎❯ .طرد⌉
❐..🔕╎❯ .اضافه⌉
❐..🔕╎❯ .ترقيه⌉
❐..🔕╎❯ .خفض⌉
❐..🔕╎❯ .حذف⌉
❐..🔕╎❯ .جروب⌉
❐..🔕╎❯ .تغير_المغادره⌉
❐..🔕╎❯ .تغير_الدخول⌉
❐..🔕╎❯ .تغييرالصورة⌉
❐..🔕╎❯ .تغيير_الوصف⌉
❐..🔕╎❯ .تغيير_الاسم⌉
❐..🔕╎❯ .لينك⌉
❐..🔕╎❯ .رستر⌉
❐..🔕╎❯ .المشرفين⌉
❐..🔕╎❯ .انذار⌉
❐..🔕╎❯ .الغاء_الانذار ⌉
❐..🔕╎❯ .الانذارات⌉
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
handler.command = ['الجروب']

export default handler
