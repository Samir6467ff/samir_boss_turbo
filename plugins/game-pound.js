let handler  = async (m, { conn }) => {
conn.reply(m.chat,`*『🌀┇turbo bot *\n*╼━━ •﹝🌀﹞• ━━╾*\n*『${pickRandom(global.boss)}』*\n*╼━━ •﹝🌀﹞• ━━╾*`, m)
}
handler.help = ['reto']
handler.tags = ['fun']
handler.command = /كتابه|كتابة/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

 global.boss = [ , 

 "مبروووك كسبت ✨ توقعك صح", 
  "خسرت🚫 توقع غلط",  
 ] 
