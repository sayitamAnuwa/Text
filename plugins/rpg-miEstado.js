let handler = async function (m, { conn, text, command, usedPrefix }) {
let miEstado
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }	
let user = global.db.data.users[m.sender]
let name = await conn.getName(m.sender)
let emoji = [ 
'😀', '😃', '😄', '😁', '😆', '🥹', '😅', '😂' ,'🤣', '🥲',
'☺️', '😊' ,'😇', '🙂', '🙃', '😉', '😌' ,'😍', '🥰', '😘', 
'😗', '😙' ,'😚', '😋', '😛', '😝', '😜' ,'🤪', '🤨', '🧐', 
'🤓', '😎' ,'🥸', '🤩', '🥳', '😏', '😒' ,'😞', '😔', '😟',
'😕', '🙁' ,'☹️', '😣', '😖', '😫', '😩' , '🥺', '😢', '😭',
'😤', '😠' ,'😡', '🤬', '🤯', '😳', '🥵' ,'🥶', '😶‍🌫️', '😱',
'😨', '😰' ,'😥', '😓', '🤗', '🤔', '🫣' ,'🤭', '🫢', '🫡',
'🤫', '🫠' ,'🤥', '😶', '🫥', '😐', '🫤' ,'😑', '😬', '🙄',
'😯', '😦' ,'😧', '😮', '😲', '🥱', '😴' ,'🤤', '😪', '😮‍💨',
'😵', '😵‍💫' ,'🤐', '🥴', '🤢', '🤮', '🤧' ,'😷', '🤒', '🤕',
'🤑', '🤠' ,'😈', '👿', '🤡' 
]

let significado = ['Adarei.mp3','adarei.mp3','Adarey.mp3','adarey.mp3','Akke.mp3','akke.mp3','alive.mp3','Alive.mp3','Baba eka.mp3','baba eka.mp3','Baduwa.mp3','baduwa.mp3','Balaganin.mp3','balaganin.mp3','Balagena.mp3','balagena.mp3','Balli.mp3','balli.mp3','Bb ek.mp3','bb ek.mp3','Bich.mp3','bich.mp3','Bitch.mp3','bitch.mp3','Bot.mp3','bot.mp3','Bye.mp3','bye.mp3','Denawada.mp3','denawada.mp3','en nane.mp3','En nane.mp3','Enne nane.mp3','enne nane.mp3','Ep wel.mp3','ep wel.mp3','Epa wela.mp3','epa wela.mp3','Esawa.mp3','esawa.mp3','Fuck.mp3','fuck.mp3','Gahanawa.mp3','Gahanawa.mp3','Gahano.mp3','gahano.mp3','Gm.mp3','gm.mp3','Gn.mp3','gn.mp3','Good morning.mp3','good morning.mp3','Good night.mp3','Gothaya.mp3','gothaya.mp3','Guti.mp3','guti.mp3','Ha ha.mp3','ha ha.mp3','Hako.mp3','hako.mp3','Hello.mp3','hello.mp3','Helo.mp3','helo.mp3','Hey.mp3','hey.mp3','Hi.mp3','hi.mp3','Hmm','hmm','Hukanna.mp3','hukanna.mp3','Hum.mp3','hum.mp3','Huththa.mp3','huththa.mp3','Hy.mp3','hy','I love you.mp3','i love you.mp3','Kariya.mp3','kariya.mp3','Kellekda.mp3','Kellekda.mp3','kellekda.mp3','Kohomada.mp3','kohomada.mp3','Kohomd.mp3','kohomd.mp3','Love.mp3','love.mp3','Marilada.mp3','marilada.mp3','Mk.mp3','mk.mp3','Mokek.mp3','mokek.mp3','Na na.mp3','na na.mp3','Nah.mp3','nah.mp3','Namaskaram.mp3','namaskaram.mp3','Namasthe.mp3','namasthe.mp3','Namgi.mp3','namgi.mp3','Natahan.mp3','natahan.mp3','Natanna.mp3','natanna.mp3','notes.mp3','Notes.mp3','Pakaya.mp3','pakaya.mp3','Ponnaya.mp3','ponnaya.mp3','Ponni.mp3','ponni.mp3','Raviya.mp3','raviya.mp3','robo.mp3','Sapak.mp3','sapak.mp3','Seen.mp3','seen.mp3','SEW.mp3','sewmaker.mp3','U girl.mp3','u girl.mp3','Uddika.mp3','Umma.mp3','umma.mp3','Ummah.mp3','ummah.mp3','Vesavi.mp3','vesavi.mp3','Vesawi.mp3','vesawi.mp3','Vesi.mp3','vesi.mp3','Wesi.mp3','wesi.mp3','Why ban.mp3','Why ban.mp3','Y ban.mp3','Y bn.mp3','You girl.mp3','you girl.mp3','zzaaa.mp3','zzaab.mp3','zzaac.mp3','zzaad.mp3','zzaae.mp3','zzaaf.mp3','zzaag.mp3','zzaah.mp3'
]

let sections = Object.keys(emoji, significado).map((v, index) => ({ title: `🤔 CÓMO ESTÁ HOY?`,
rows: [{ title: `» ${emoji[v]}${emoji[v]}${emoji[v]}${emoji[v]}`, description: `${1 + index}. ${significado[v]}`, rowId: usedPrefix + command + ' ' + text + significado[v] + ' ' + emoji[v], }], }))

const listMessage = {
text: `❖ ${user.registered === true ? user.name : name}\n👋 *SELECCIONE SU ESTADO ACTUAL POR FAVOR*\n*❖ SU ESTADO ACTUAL:* ${typeof user.miestado === 'string' ? user.miestado : 'Estado no asignado'}\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹ 》*\n",
buttonText: "👉 MI ESTADO 👈",
sections
} 

if (command == 'miestado') { 
if (!text) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
miEstado = text.trim()
user.miestado = miEstado
if (text) return conn.sendButton(m.chat, eg + `*GENIAL!! SE HA AGREGADO UN ESTADO*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n` + `*❖ SU ESTADO:* ${user.miestado}`, wm, null, [[`🐈 MENU`, usedPrefix + 'menu']], m)
miEstado = 0
}}
handler.command = ['miestado'] 
export default handler
