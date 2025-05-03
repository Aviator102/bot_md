//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡
//.       SR.𝑻𝒐𝒎𝒊𝒐𝒌𝒂 </> DOMINA
//｡☆✼★━━━━━━ATENÇÃO━━━━━━━━━━★✼☆｡

//SE QUISER UM BOT COMPLETO POR 70R$ CHAMA NO PV 5549999066034🎩
const {default: AnyWASocket,
delay,templateMessage,makeInMemoryStore,downloadContentFromMessage,DisconnectReason,
makeWASocket,
sleep,
useMultiFileAuthState,
fetchLatestBaileysVersion,
prepareWAMessageMedia,
useSingleFileAuthState } = require ('@whiskeysockets/baileys')
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const axios = require('axios')
const readline = require('readline')
const clui = require("clui")
const cfonts = require('cfonts')
const NodeCache = require('node-cache')
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const infoSystem = require('os')
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const googleImage = require("g-i-s")
const cheerio = require("cheerio")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { color } = require("./database/lib/color")
const { fetchJson } = require("./database/lib/fetcher")
const { fromBuffer } = require("file-type")
const { banner, banner2 } = require("./database/lib/functions")
const { tmpdir } = require("os")
// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

//APIS AQUI 🥱❤️
const SANDRO_MD = "sandro-api"
const SANDRO_API = "Sandro_api_bot"

/// ⚜️ARQUIVOS JSON ⚜️ ////
const config = JSON.parse(fs.readFileSync("./settings/dono.json"))
const upload = require("./database/lib/functions")
const TelegraPh = require("./database/lib/functions")
const img = JSON.parse(fs.readFileSync("./database/imagens/logo.json"))
const antilink = JSON.parse(fs.readFileSync('./database/grupos/antilink.json'))
const { menu } = require("./menus/menu.js")
const { menudono } = require("./menus/menudono.js")

const { menuadm } = require("./menus/menuadm.js")
const { infomestre } = require("./menus/infomestre.js")

///  prefixo e dono aqui ///
const logo = img.logo
const nomeBot = config.nomeBot
const numeroBot = config.numeroBot
const nomeDono = config.nomeDono
const numeroDono = config.numeroDono
const dono = config.numeroDono
const prefix = config.prefix
const prefixo = config.prefix
//

let girastamp = speed()
let latensi = speed() - girastamp

const usePairingCode = process.argv.includes('--use-pairing-code')
const msgRetryCounterCache = new NodeCache();
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

async function startbot() {
        const { state, saveCreds } = await useMultiFileAuthState('./database/SANDRO_QR-CODE')
        const { version } = await fetchLatestBaileysVersion();
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        const store = makeInMemoryStore({
            logger: P().child({
                level: 'debug',
                stream: 'store'
            })
        })


        const md = makeWASocket({
            version,
            logger: P({ level: "silent" }),
            usePairingCode,
            mobile: false,
            browser: ["FireFox (linux)"],
            auth: state,
            msgRetryCounterCache,
            defaultQueryTimeoutMs: undefined,
            getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id)
                    return msg.message || undefined
                } return {
                    conversation: "bot"
                }
            },
      patchMessageBeforeSending: (message) => {
         const requiresPatch = !!(
            message?.interactiveMessage
         );
         if (requiresPatch) {
            message = {
               viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
                     ...message,
                  },
               },
            };
         }
         return message;
      }
        });

        function limparNumero(entrada) {
            const numeros = entrada.replace(/\D/g, '');
            const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
            return numeroLimpo;
        }

        if (!md.authState.creds.registered) {
            const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ("553172595934")\n `);
            const numeroLimpo = limparNumero(phoneNumber);
            const code = await md.requestPairingCode(numeroLimpo);
            console.log(`Seu código de conexão é: \n\n${code}\n~>`);
            console.log(`Abra seu WhatsApp, vá em ("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")`)
        } else {
            console.log(                     'Conectado...')
        }

const banner = cfonts.render(("NAXX"), {
font: "simple",
align: "center",
colors: [`red`,`white`,`red`],
})

        console.log('[ BOT ]')
        store.bind(md.ev)

        md.ev.on("creds.update", saveCreds)
        store.bind(md.ev)
        md.ev.on("chats.set", () => {
            console.log("Tem conversas", store.chats.all())
        })
        md.ev.on("contacts.set", () => {
            console.log("Tem contatos", Object.values(store.contacts))
        })

        md.ev.on("connection.update", (update) => {
            const { connection, lastDisconnect } = update
            if (connection === "close") {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
                if (shouldReconnect) {
                    startkirito()                    
                }

} else if(connection === "open") {
console.log(banner.string)
console.log(`${color(`${nomeBot} [ Conectado com sucesso ]`,'red')}`)
}
})
        async function getMessage(key) {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg?.message
            }
            return {
                conversation: "aaa"
            }
        }

store.bind(md.ev)
md.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})

md.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})

md.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);

if(shouldReconnect) {
startbot()
}

} else if(connection === "open") {
console.log(`${color(`BOT CONECTADO COM SUCESSO`,'green')}`)
}

})


md.ev.on('messages.upsert', async (msg) => {
m = msg
  try {
//*******************************************//
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
//***************[ FUNÇÕES ]***************//
const info = msg.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''


const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
bidy =  budy.toLowerCase()




///////////////
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? md.sendMessage(from, {text: teks.trim(), mentions: memberr}) : md.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = md.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant : info.key.remoteJid
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await md.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const text = args.join(" ")
const c = args.join(' ')
const reply = (texto) => {
md.sendMessage(from, { text: texto }, {quoted: contato})
} 

function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }

// VERIFICADOS ⭐️
const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName:`${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}



//configruracao de dono, adm etc...
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isCreator = sender.includes(numeroDono)
//const isCreator = numeroDono.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const argis = bidy.trim().split(/ +/)

///



// Consts isQuoted
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

outrasVariavel = "bot"

let {name, urlMinhaApikey, aurlSexo, compreSuaApikey, cdd, crtt, baterai, charging, autoHourActivate, emoji_bot, blocked, multi, nopref, variosPrefixo, leitor} = outrasVariavel





// FUNCAO DE ANTILINK \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
md.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
md.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
md.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }




// RESPOSTAS DOS COMANDOS \\
msg = {
registro: "_[❗] Para ver o menu você precisa se registrar use /login_",
botadm: "[❗] bot precisa ser adm",
aguarde: "[❗] aguarde uns minutinho estou processado👨‍🦯",
dono: "[❗] este comando so podera ser usado pelo meu dono💣",
grupo: "[❗] este comando so pode ser usado em grupo🫂",
private: "[❗] este comando so pode ser usado no privado👀",
premium: "[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*",
adm: "este comando so pode ser usado por um adm",
botadm: "[❗] bot precisa ser adm pra executar esse comando",
erro: "[❗] ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "[❗] Esse comando so pode ser usado pelo meu dono!!!",
abrindomenu: "_[❗]Carregando menu aguarde..._",
}


////////////////////////////////////
 if (!isGroup && isCmd) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(nomeBot, 'red'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'red'),'\n',
color('⪼ COMANDO:','red'),color(budy, 'red'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'red'),'\n',
color('⪼ DAТA:','red'),color(data,'red'),'\n')

if (!isCmd && !isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐍𝐎 𝐏𝐑𝐈𝐕𝐀𝐃𝐎`,'red'),'\n',
color('⪼ NOME DO BOT:','red'),color(nomeBot, 'red'),'\n',
color('⪼ USUÁRIO:','red'),color(pushname,'red'),'\n',
color('⪼ MENSAGEM:','red'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','red'),color(hora,'red'),'\n',
color('⪼ DATA:','red'),color(data,'red'),'\n')

if (isCmd && isGroup) console.log(
color(`𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'yellow'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(nomeBot, 'red'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'red'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'red'),'\n',
color('⪼ COMANDO:','yellow'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'red'),'\n',
color('⪼ DATA:','yellow'),color(data,'red'),'\n')

if (!isCmd && isGroup) console.log(
color(`𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐌 𝐆𝐑𝐔𝐏𝐎`,'yellow'),'\n',
color('⪼ NOME DO BOT:','yellow'),color(nomeBot, 'red'),'\n',
color('⪼ NOME DO GRUPO:','yellow'),color(groupName,'red'),'\n',
color('⪼ USUÁRIO:','yellow'),color(pushname,'red'),'\n',
color('⪼ MENSAGEM:','yellow'),color(budy,'red'),'\n',
color('⪼ HORÁRIO:','yellow'),color(hora,'red'),'\n',
color('⪼ DATA:','yellow'),color(data,'red'),'\n')

switch (comando) {
// Começo dos comandos com prefix //
//     /\/\                              
//    (° v °)                             
//    /|    |\                            
//     V---V                             
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


case "menudono":
templateMassage = {
image: {url:"./database/imagens/dono.jpg",
quoted: contato},
caption: menudono(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
md.sendMessage(from, templateMassage)
break

case "menu":
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: menu(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.reagir1,
mediaType:2,
//templateButtons: templateButtons
}}
}
md.sendMessage(from, templateMassage)
break

case "menuadm":
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: menuadm(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
md.sendMessage(from, templateMassage)
break

case "infomestre":
case 'infodono':
templateMassage = {
image: {url:"./database/imagens/menu.jpg",
quoted: contato},
caption: infomestre(prefixo, nomeBot, numeroDono, nomeDono, hora, data, pushname, sender),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
//templateButtons: templateButtons
}}
}
md.sendMessage(from, templateMassage)
break

case 'sorte'://feito por jp
    try {
        const sortes = [
            { mensagem: "🍀 Hoje a sorte está ao seu lado! Aproveite! 😎", simbolo: "🔮" },
            { mensagem: "⚡ Cuidado! Algo inesperado pode acontecer... 👀", simbolo: "💥" },
            { mensagem: "💰 Dinheiro no bolso? Talvez sim, talvez não... 💸", simbolo: "🤑" },
            { mensagem: "🎉 Um momento especial está chegando! Fique atento! ✨", simbolo: "🎊" }
        ];

        const sorteEscolhida = sortes[Math.floor(Math.random() * sortes.length)]; // Escolhendo uma sorte aleatória

        const mensagem = `
${sorteEscolhida.simbolo} *PREVISÃO DO SEU DIA DE MERDA!* ${sorteEscolhida.simbolo}
━━━━━━━━━━━━━━━
🔮 *Mensagem:* ${sorteEscolhida.mensagem}
━━━━━━━━━━━━━━━
😏 *Será que acontece mesmo?* 👀
        `;
        reply(mensagem);
    } catch (error) {
        console.error(error);
        reply("❌ *Algo deu errado na leitura da sorte!* ❌");
    }
    break;
    
    case 'saldo'://slayer
try {
    let apiKey = '1fc3ffd557851971138ef39273bfcc27'; // Sua API Key
    let apiUrl = 'https://upmidiass.net/api/v2';
    let fetch = require('node-fetch');

    reply("💰 *Consultando saldo...*");

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key: apiKey,
            action: 'balance'
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data || data.error) return reply(`❌ Erro ao consultar saldo: ${data?.error || "Erro desconhecido."}`);

        reply(`💰 *Saldo disponível:*\n📢 *${data.balance}* ${data.currency}`);
    })
    .catch(() => {
        return reply("❌ Erro ao conectar-se à API.");
    });

} catch (e) {
    return reply("❌ Erro interno ao verificar saldo.");
}
break;

case 'comprarup': {
    // Defina as permissões corretamente antes de usar
    const SoDono = true;  // Substitua por sua lógica real
    const isnit = false;  // Substitua por sua lógica real
    const issupre = false; // Substitua por sua lógica real
    const ischyt = false; // Substitua por sua lógica real

    if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) {
        return reply(Res_SoDono);
    }

    if (args.length < 3) {
        return reply('❌ Use: `!comprarup <ID do serviço> <link> <quantidade>`');
    }

    const serviceID = args[0];
    const link = args[1];
    const quantity = args[2];

    const fetch = require('node-fetch');

    (async () => {
        try {
            const response = await fetch('https://upmidiass.net/api/v2', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    key: '1fc3ffd557851971138ef39273bfcc27', // Certifique-se de substituir pela chave real
                    action: 'add',
                    service: serviceID,
                    link: link,
                    quantity: quantity
                })
            });

            const data = await response.json();

            if (data.error) {
                return reply(`❌ Erro ao comprar: ${data.error}`);
            }
            
            reply(`✅ *Pedido realizado com sucesso!*\n📦 ID do Pedido: ${data.order}`);
        } catch (err) {
            console.error(err);
            reply('❌ Erro ao processar a compra.');
        }
    })();

    break;
}
    
    case 'servicos'://slayer//jp
    let apiKey = '1fc3ffd557851971138ef39273bfcc27'; // Sua API Key
    let apiUrl = 'https://upmidiass.net/api/v2';

    let fetch = require('node-fetch');

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            key: apiKey,
            action: 'services'
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data || data.length === 0) return reply('❌ Nenhum serviço encontrado.');

        let resposta = '📋 *Lista de Serviços:* \n\n';
        data.forEach(servico => {
            resposta += `🆔 ID: ${servico.service}\n📌 Nome: ${servico.name}\n💰 Preço: $${servico.rate}\n📏 Min: ${servico.min} / Max: ${servico.max}\n\n`;
        });

        reply(resposta);
    })
    .catch(err => {
        console.error(err);
        reply('❌ Erro ao buscar os serviços.');
    });
    break;
    
    case 'gps'://slayer
try {
    if (!args[0]) {
        return reply('❌ Comando usado de forma errada!\n✅ Use: /gps (endereço)');
    }

    const endereco = args.join(' ');
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;

    const response = await axios.get(url);
    const data = response.data;

    if (!data || data.length === 0) {
        return reply('❌ Localização não encontrada! Tente ser mais específico.');
    }

    const resultado = data[0];
    const latitude = resultado.lat;
    const longitude = resultado.lon;
    const enderecoFormatado = resultado.display_name;

    const mensagem = `
📍 *Localização Encontrada!* 📍

🔹 *Endereço:* ${enderecoFormatado}
🔹 *Latitude:* ${latitude}
🔹 *Longitude:* ${longitude}

🌍 *Google Maps:* [Clique aqui](https://www.google.com/maps?q=${latitude},${longitude})`;

    await conn.sendMessage(from, { text: mensagem }, { quoted: info });

} catch (error) {
    console.log('Erro ao buscar localização:', error);
    reply('❌ Ocorreu um erro ao buscar a localização. Tente novamente mais tarde.');
}
break;

case 'profissao'://feito por jp
    try {
        const profissoes = [
            "Padeiro 🍞👨‍🍳",
            "Motoboy 🏍️📦",
            "Engenheiro 🏗️📐",
            "Youtuber 🎥💻",
            "Programador 💻👨‍💻",
            "Pedreiro 🧱🔨",
            "Cantor 🎤🎶",
            "Dublador 🎙️🗣️",
            "Astronauta 🚀🌌",
            "Detetive 🕵️‍♂️🔍",
            "Palhaço 🤡🎭",
            "Piloto de avião ✈️👨‍✈️",
            "Garçom 🍽️🧑‍🍳",
            "Streamer 🎮📡",
            "Advogado ⚖️👨‍⚖️",
            "Mágico 🎩✨",
            "Motorista de ônibus 🚌🛣️",
            "Tatuador 🖋️🖤",
            "Coveiro ⚰️💀",
            "DJ 🎧🎛️"
        ];

        const profissaoEscolhida = profissoes[Math.floor(Math.random() * profissoes.length)]; // Escolhendo uma profissão aleatória

        const mensagem = `
🔥 *DESCUBRA SUA PROFISSÃO DE MERDA!* 🔥
━━━━━━━━━━━━━━━━━━━━━━
👨‍💼 Sua profissão de bosta será:  
➡️ *${profissaoEscolhida}*  
━━━━━━━━━━━━━━━━━━━━━━
😂 *Aceita ou vai chorar?* 😜
        `;
        reply(mensagem);
    } catch (error) {
        console.error(error);
        reply("❌ *Erro ao determinar sua profissão, fi!* ❌");
    }
    break;
    
case 'clima'://slayer
    try {
        if (!args[0]) {
            return reply('❌ Por favor, informe o nome da cidade. Exemplo: /clima sp');
        }

        const cidade = args.join(' ');  
        const url = `https://wttr.in/${encodeURIComponent(cidade)}?format=%C+%t`;

        const response = await axios.get(url);
        const data = response.data.split(' '); // Divide a resposta para pegar a descrição e a temperatura

        if (!data[0] || !data[1]) {
            return reply('❌ Cidade não encontrada! Tente novamente com o nome correto.');
        }

        const descricao = data[0];  
        const temperatura = data[1];

        const mensagem = `
🌤 *Clima Atual em ${cidade.toUpperCase()}:* 🌤

🔹 *Descrição:* ${descricao}
🔹 *Temperatura:* ${temperatura}
        `;

        await conn.sendMessage(from, { text: mensagem }, { quoted: info });

    } catch (error) {
        console.log('Erro ao buscar o clima:', error);
        reply('❌ Ocorreu um erro ao buscar o clima. Tente novamente mais tarde.');
    }
    break;
    
    case 'genio'://jp
    try {
        const porcentagem = Math.floor(Math.random() * 101); // Gera um número aleatório de 0 a 100
        let nivel;

        if (porcentagem >= 90) {
            nivel = "🧠🚀 *Super Gênio!*";
        } else if (porcentagem >= 70) {
            nivel = "📚💡 *Muito inteligente!*";
        } else if (porcentagem >= 50) {
            nivel = "🤓📖 *Inteligente na média!*";
        } else if (porcentagem >= 30) {
            nivel = "🧐😅 *Precisa estudar mais!*";
        } else {
            nivel = "🙃💭 *Já ouviu falar em estudar?*";
        }

        const mensagem = `
🧠 *Teste de Genialidade* 🧠
━━━━━━━━━━━━━━━━━━
📊 *Seu nível de gênio:* *${porcentagem}%*  
🏅 ${nivel}
━━━━━━━━━━━━━━━━━━
😏 *Concorda ou bugou o cérebro?* 🤯
        `;
        reply(mensagem);
    } catch (error) {
        console.error(error);
        reply("❌ *Erro ao calcular sua genialidade!* ❌");
    }
    break;
    
    case 'dia'://jp
    try {
        const frases = [
            "🚿😁 *Hoje é dia de você tomar banho!*",
            "💼🤣 *Hoje é dia de você arrumar um emprego!*",
            "😴🫢 *Hoje é dia de você parar de ser preguiçoso!*",
            "🥶🤭 *Hoje é dia de você cuidar da sua vida e não da dos outros!*"
        ];

        const fraseEscolhida = frases[Math.floor(Math.random() * frases.length)]; // Escolhendo uma frase aleatória

        const mensagem = `
🌟 *Adivinha só...* 🌟
━━━━━━━━━━━━━━━
📅 ${fraseEscolhida}  
━━━━━━━━━━━━━━━
😂 *Concorda ou discorda?* 🤣
        `;
        reply(mensagem);
    } catch (error) {
        console.error(error);
        reply("❌ *Erro ao processar o dia, mano!* ❌");
    }
    break;
    
    case 'comunicar'://jp
    try { 
        const mensagens = [
            "Quero se comunicar não, sou anti-social 😃",
            "Comunicar? Nunca! 🤣",
            "O que tu quer? Desembucha 😘",
            "Vó nada 🤪"
        ]; 
        const mensagemEscolhida = mensagens[Math.floor(Math.random() * mensagens.length)]; // Escolhendo uma mensagem aleatória
        const resposta = `💬 *Mensagem do Bot:* \n${mensagemEscolhida} \n👉 *Pronto para começar a trabalhar?* 💪✨`; 
        reply(resposta); 
    } catch (error) { 
        console.error(error); 
        reply("❌ *Erro ao comunicar-se, chefe!* ❌"); 
    } 
    break;
    
    case 'seujogo'://jp
    try {
        const jogos = [
            { jogo: "Fortnite", emoji: "🛸" },
            { jogo: "Minecraft", emoji: "⛏️" },
            { jogo: "League of Legends", emoji: "⚔️" },
            { jogo: "Call of Duty", emoji: "🔫" },
            { jogo: "Among Us", emoji: "👽" },
            { jogo: "FIFA", emoji: "⚽" },
            { jogo: "Grand Theft Auto V", emoji: "🚗" },
            { jogo: "PUBG", emoji: "🎯" },
            { jogo: "Valorant", emoji: "💥" },
            { jogo: "The Witcher 3", emoji: "🦸" },
            { jogo: "Red Dead Redemption 2", emoji: "🐎" },
            { jogo: "Overwatch", emoji: "💣" }
        ];

        const jogoEscolhido = jogos[Math.floor(Math.random() * jogos.length)]; // Escolhendo um jogo aleatório

        const mensagem = `
🎮 *SEU JOGO DE BOSTA É:* 🎮
━━━━━━━━━━━━━━━━━━━━
🕹️ *Jogo escolhido:* ${jogoEscolhido.jogo} ${jogoEscolhido.emoji}
💥 *Aí, boa sorte! Não vai quebrar o controle, hein?* 💥
━━━━━━━━━━━━━━━━━━━━
😂 *Tá jogando ou só reclamando do lag?* 😜
        `;
        reply(mensagem);
    } catch (error) {
        console.error(error);
        reply("❌ *Opa, deu erro ao sortear o jogo! Tenta de novo!* ❌");
    }
    break;
    
    case 'sensi'://slayer
    if (!args[0]) return reply('❌ Especifique o sistema: `/sensi android` ou `/sensi ios`');

    let sistema = args[0].toLowerCase();
    if (sistema !== 'android' && sistema !== 'ios') {
        return reply('❌ Sistema inválido! Use `/sensi android` ou `/sensi ios`.');
    }

    // Gerando valores aleatórios
    let geral = Math.floor(Math.random() * (200 - 60 + 1)) + 60;
    let redDot = Math.floor(Math.random() * (200 - 60 + 1)) + 60;
    let mira2x = Math.floor(Math.random() * (200 - 60 + 1)) + 60;
    let mira4x = Math.floor(Math.random() * (200 - 60 + 1)) + 60;
    let miraAWM = Math.floor(Math.random() * (200 - 60 + 1)) + 60;
    let dpi = Math.floor(Math.random() * (1200 - 300 + 1)) + 300;

    // Mensagem de resposta
    let mensagem = `
🎯 *Sensibilidade Aleatória (${sistema.toUpperCase()})* 🎯

🕹 *Geral:* ${geral}
🔴 *Red Dot:* ${redDot}
🔍 *Mira 2x:* ${mira2x}
🔭 *Mira 4x:* ${mira4x}
🎯 *Mira AWM:* ${miraAWM}
📱 *DPI:* ${dpi}
    `;

    reply(mensagem);
    break;
    
    case 'play':
    try {
        if (!q) return reply(`- Exemplo: ${prefix}play nome da música\nA música será baixada, basta escolher áudio ou vídeo. Se não baixar, pode ser que o YouTube tenha restringido.`);

        let data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${encodeURIComponent(q)}&apikey=` + OrbitalCloud);

        if (!data || !data[0]) return reply("Nenhuma música encontrada. Tente outro nome.");

        if (IS_sistemGold) {
            if (QNTD_GOLDS < 3) return reply("Você não tem Golds suficientes para completar esta ação. Tente novamente após conseguir mais...");
            setTimeout(async () => {
                await ConsumirGold(3, sender);
            }, 1000);
        }

        let tempo = data[0].tempo || "";
        if (tempo.length >= 7) return reply("Desculpe, este vídeo ou áudio é muito grande. Peça outra música com duração menor que uma hora.");

        let mensagem = `
๖ۣ• 🎵 *Título:* ${data[0].titulo}
๖ۣ• ⏳ *Duração:* ${data[0].tempo}
๖ۣ• 📅 *Postado:* ${data[0].postado}
๖ۣ• 📝 *Descrição:* ${data[0].desc}

✅ 100% disponível!

🎶 Escolha uma opção:
- Para baixar o vídeo, use: *${prefix}play_video ${q.trim()}*
`;

        await conn.sendMessage(from, { image: { url: data[0].thumb }, caption: mensagem }, { quoted: info });

        await conn.sendMessage(from, { 
            audio: { url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(q)}&apikey=` + API_KEY_ALEATORY }, 
            mimetype: "audio/mpeg", 
            fileName: data[0]?.titulo || "play.mp3" 
        }, { quoted: info }).catch(e => {
            console.error(e);
            return reply("Ocorreu um erro ao baixar o áudio.");
        });

    } catch (e) {
        console.error(e);
        return reply("Erro ao processar o pedido. Tente ser mais específico ao buscar a música.");
    }
    break;

    
case "transmição": 
case "transmitir": {
if (!isCreator) return reply(resposta.dono)
if (!args.join(" ")) return reply(`kd o texto amiguinho?`)
const tm = args.join(' ')
let getGroups = await md.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Transmitido para os grupos com sucesso`)
waifuzdd = await axios.get('https://waifu.pics/api/sfw/neko')
for (let i of anu) {
await delay(1500)
templateButtons = [
{index: 1, urlButton: {displayText: 'Criador', url: canal}},
{index: 2, urlButton: {displayText: 'Dono', url: grupo}},
]
templateMessago = {
image: {url:waifuzdd.data.url,
quoted: contato},
caption: tm,
footer: 'transmissão',
//templateButtons: templateButtons
}
md.sendMessage(i, templateMessago)
}
reply("✔️pronto...")
}
break


case "ppt": 
if (!isGroup) return reply(resposta.grupo)
if (args.length < 1) return reply('exemplo: /ppt pedra')
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 50)
pptb = ppy
pph = `Você ganhou ${ppg} em money`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(linguagem.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do bot"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case "bot": 
{md.sendMessage(
from, {audio: fs.readFileSync('./audio/xandao.mp3'), mimetype: 'audio/mp4', ptt: true 
},
{quoted: contato}
)
}
break

case "linkgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
const link = await md.groupInviteCode(from)
reply(`https://chat.whatsapp.com/${link} `)
break

case "resetlinkgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await md.groupRevokeInvite(from)
reply("Link do grupo resetado com sucesso  ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break;

case "sair":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply("Meu dono Pxz mandou eu sair kkkk")
await delay(1000)
try {
await md.groupLeave(from)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "idgp":
reply(`Id : ${from}`)
break

case 'nick':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
nick = args.join(' ')
if(!q) return reply(`Escreveva um nome para eu enviar ele com letras modificadas.\n*Exemplo:* ${prefix+command}LB Bot`);
axios.get(`http://br4.bronxyshost.com:4059/api/fazernick?nome=${q}&apikey=${SANDRO_MD}`)
.then(dados => {
var emoji = `〽️`
nicks = dados.data
txt = '[ Nicks Gerados Com Sucesso! ]\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n
SANDRO BOT`
reply(`${txt.trim()}`)
}).catch(e => {
reply('Acho que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou noo foi possivel executar esta ação, espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas!") 
}
}
break

case 'pinterest':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
if(!q) return reply(`Exemplo: ${prefix+command} Thais Carla`)
await md.sendMessage(from, {image: {url: (`http://br4.bronxyshost.com:4059/api/pinterest?text=${q}&apikey=${SANDRO_MD}`)}, caption: 'Aqui esta sua imagem.'}, {quoted:info})
} catch (e) {
return reply(`${e}`);
}
break

case 'rebaixar': case 'demote':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsepm = await md.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responsepm[0].status === "200") return reply('Vacilou perdeu o adm kkkkk')
else if (responsepm[0].status === "404") return reply('Esse cara nem ta no grupo')
else return reply('tente dnv')
break

case 'metadinha':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
MET = await fetchJson(`http://br4.bronxyshost.com:4059/random/metadinha?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: {url: MET.masculina}, caption: `*HOMEM*`})
md.sendMessage(from, {image: {url: MET.feminina}, caption: `*MULHER*`})
} catch (e) {
return reply("Erro..")
}
break;

case 'playstore':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
if(!q) return reply(mess.noArgsSearch()+`use como exemplo: *${prefix+command} minecraft*`);
AB = await fetchJson(`http://br4.bronxyshost.com:4059/api/playstore?nome=${q}&apikey=${SANDRO_MD}`)
ABC = `〽️*Pesquisa:* ${q} - *[ PlayStore ]*\nTotal de aplicativos encontrados: ${AB.pesquisa.resultado.length}\n${"-\t".repeat(24)}\n`
for (var i of AB.pesquisa.resultado) {
ABC += `*〽️Aplicativo:* ${i.nome}\n*〽️ Desenvolvedor do App:* ${i.desenvolvedor}\n*〽️ Avaliação do Aplicativo:* ${i.estrelas}\n*〽️ Link do Aplicativo:* ${i.link}\n`;
ABC += `${"-\t".repeat(24)}\n`
}
md.sendMessage(from, {image:{url: AB.pesquisa.resultado[0].imagem}, caption: ABC});
} catch (e) {
return reply(mess.error())
}
break

case 'promover': case 'promote':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai colocar o vento como adm???')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responsedm = await md.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") return reply('Temos um novo admir')
else if (responsedm[0].status === "404") return reply('Esse maluco nem ta no grupo 🤔')
else return reply('Tenta dnv '-'')
break

case 'ping': {
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
respon = `⏱️ *Velocidade de Resposta:* ${String(r.toFixed(3))} _segundos._\n🤖 *O bot se encontra online por:* ${kyun(uptime)}\n💻 *Sistema Operacional:* ${infoSystem.type()}\n📂 *Versão:* ${infoSystem.release()}\n💾 *Memoria RAM total:* ${(infoSystem.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n💾 *Memoria RAM disponível:* ${(infoSystem.freemem()/Math.pow(1024, 3)).toFixed(2)}GB`.trim()
await md.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DO%20BOT&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: respon, mentions: [sender]}, {quoted: info}) 
}
break                 

case 'marcar':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
members_id = []
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? md.sendMessage(from, {
text: '@12345678901', contextInfo: {
"mentionedJid": memberr
}}): md.sendMessage(from, {
text: teks.trim(), contextInfo: {
"mentionedJid": memberr
}}, {
quoted: contato
})
}
teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}𝑀𝐴𝑅𝐶𝐴𝐶𝐴𝑂 𝐷𝑂 𝐴𝐷𝑀:\n`
for (let mem of groupMembers) {
teks += `@${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break

case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${nomeDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
md.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'resetarlink':
if (!isGroup) return reply(msg.grupo)
if (!isGroupAdmins) return reply(msg.adm)
try {
await md.groupRevokeInvite(from)
reply("*LINK DO GRUPO RESETADO COM SUCESSO✅*")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break


case 'ban': case 'kick':
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply('mamaco sem adm 🤠')
{
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Vai tirar o adm do vento???')
if(info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
let responseb = await md.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") return reply('*Alá foi banido troxa kkk*')
else if (responseb[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb[0].status === "404") return reply('*Esse maluco nem ta aqui '-'*')
else return reply('tenta dnv')
} else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai arquivar msm??`)
sexocomrato = 0
for (let banned of mentioned) {
let responseb2 = await md.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
return reply('Se ele mandou ta mandado')
} else {
let responseb3 = await md.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") return reply('tchau troxa kkkk')
else if (responseb3[0].status === "406") return reply('Como vc quer que eu remova o adm supremacy????')
else if (responseb3[0].status === "404") return reply('Cara nem desse grupo e')
else return reply('Tenta dnv')
}
}
}
break

case "grupo":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
if (q == "a") {
await md.groupSettingUpdate(from, "not_announcement")
reply("Grupo aberto com sucesso")
}
if (q == "f") {
await md.groupSettingUpdate(from, "announcement")
reply("Grupo fechado com sucesso ")
}
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "infogp":
if (!isGroup) return reply(resposta.grupo)
if (!isBotGroupAdmins) return reply(resposta.botadm)
reply(`
 Nome : ${groupName}
 Descrição : ${groupDesc}
 Id : ${from}
 Data : ${data}
 Horário : ${hora}
`)
break

case "descgp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await md.groupUpdateDescription(from, `${q}`)
reply("Descrição do grupo alterada com sucesso ")
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case "nomegp":
if (!isGroup) return reply(resposta.grupo)
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
try {
await md.groupUpdateSubject(from, `${q}`)
reply(`*Nome do alterado com sucesso*`)
} catch(e) {
console.log(e)
reply(resposta.erro)
}
break

case 'listadm':
				if (!isGroup) return reply(resposta.grupo)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case 'antilink':
if (!isGroupAdmins) return reply(resposta.adm)
if (!isBotGroupAdmins) return reply(resposta.botadm)
					if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('o anti-link está ativo')
						antilink.push(from)
						fs.writeFileSync('./database/grupos/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi ativo no grupo ✔️')
					} else if (Number(args[0]) === 0) {			
						antilink.splice(from, 1)
						fs.writeFileSync('./database/grupos/antilink.json', JSON.stringify(antilink))
						reply('O anti-link foi desativado com sucesso neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
					break
					
case 'report':
case 'bug':
if (!q) return reply('Ex: bug no menu..')
reply(`Obrigada pela colaboração, o bug foi reportado ao meu criador...
<♨️>bugs falsos nao serão respondidos`)
let templateMesssage = {
image: {url: './database/imagens/menu.gif',
quoted: contato},
caption: `♨️𝗨𝗺 𝗕𝘂𝗴♨️\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
md.sendMessage("558592529207@s.whatsapp.net",templateMesssage)
break

case 'novocmd':
if (!q) return reply('Ex: novocmd coloca antilink')
reply(`Obrigada pela colaboração, a sua idea foi reportada ao meu criador 😊`)
const qp = args.join(" ")
let templateMessage = {
image: {url: './database/imagens/menu.jpg',
quoted: contato},
caption: `♨️IDEIA DE CMD♨️\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
footer: 'Noelle_md'
}
md.sendMessage("558592549207@s.whatsapp.net",templateMessage)
break


//******comandos de imagens**********\\
    
case 'loli' :{
reply("aguarde um momento, eu vou reply no seu pv se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'vc e um(a) lolicon?🤔!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await md.sendMessage(sender, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'neko':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'neko!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await md.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'waifu':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'waifu!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await md.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'megumin':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/md')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'md!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await md.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break

case 'beijo':{
reply("aguarde um momento, se demorar demais e pq nao encontrei a foto...")
    waifuddd = await axios.get('https://waifu.pics/api/sfw/kiss')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'kiss!',
 //       buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await md.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
        return('error..')
        })
        }
break




// sticker/figurinhas \\


case 'sticker': case 's': case 'stickergif': case 'sgif': case 'f': case 'figu': {
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src) 
			} catch (err) { return reject(new Error(String(err)))}})}

module.exports = { TelegraPh }
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
async function videoToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
fs.writeFileSync(tmpFileIn, media)
await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
   "-loop",
   "0",
   "-ss",
   "00:00:00",
   "-t",
   "00:00:05",
   "-preset",
   "default",
   "-an",
   "-vsync",
   "0"
  ])
  .toFormat("webp")
  .save(tmpFileOut) })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff }
const replyfiguimg = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifImg(buff, options)
} else {
 buffer = await imageToWebp(buff)
}

await md.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
 const replyfiguvid = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path: /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64'): /^https?:\/\//.test(path) ? await (await getBuffer(path)): fs.existsSync(path) ? fs.readFileSync(path): Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
 buffer = await writeExifVid(buff, options)
} else {
 buffer = await videoToWebp(buff)
}
await md.sendMessage(jid, {
 sticker: {
url: buffer
 }, ...options
}, {
 quoted
})
return buffer
 }
async function imageToWebp (media) {
const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

 fs.writeFileSync(tmpFileIn, media)

 await new Promise((resolve, reject) => {
  ff(tmpFileIn)
  .on("error", reject)
  .on("end", () => resolve(true))
  .addOutputOptions([
   "-vcodec",
   "libwebp",
   "-vf",
   "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
  ])
  .toFormat("webp")
  .save(tmpFileOut)
 })
const buff = fs.readFileSync(tmpFileOut)
 fs.unlinkSync(tmpFileOut)
 fs.unlinkSync(tmpFileIn)
 return buff
}
async function writeExifImg (media, metadata) {
 let wMedia = await imageToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}
async function writeExifVid (media, metadata) {
 let wMedia = await videoToWebp(media)
 const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
 fs.writeFileSync(tmpFileIn, wMedia)
if (metadata.packname || metadata.author) {
  const img = new webp.Image()
  const json = {
   "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`,
   "sticker-pack-name": metadata.packname,
   "sticker-pack-publisher": metadata.author,
   "emojis": metadata.categories ? metadata.categories: [""]
  }
  const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
  const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
  const exif = Buffer.concat([exifAttr, jsonBuff])
  exif.writeUIntLE(jsonBuff.length, 14, 4)
  await img.load(tmpFileIn)
  fs.unlinkSync(tmpFileIn)
  img.exif = exif
  await img.save(tmpFileOut)
  return tmpFileOut
 }
}


const pacote = "Sandro-bot"
//==================\\

const criador = "Sandro-bot"
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
reply('Criando sua figurinha')
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage: info.message.imageMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await replyfiguimg(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
reply('criando figurinha')
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage: info.message.videoMessage
rane = getRandom('.'+ await getExtension(encmedia.mimetype))
imgbuff = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, imgbuff)
const media = rane
ran = getRandom('.'+media.split('.')[1])
const upload = await TelegraPh(media)
await replyfiguvid(from, util.format(upload), info, {
 packname: pacote, author: criador
})
 } else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração`)
}
 break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(`Enviando...`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
md.sendMessage(from, {image: buff}, {quoted: selo}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

case 'attp': case 'attp2':
try {
if(!q) return reply(`Exemplo: ${prefix+command} Sandro`);
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
md.sendMessage(from, {sticker: {url: `https://api.bronxyshost.com.br/api-bronxys/attp_edit?texto=${q}&fonte=${Fontes}&apikey=${SANDRO_API}`}}, {quoted: info}).catch(() => {
return reply("Erro..");
})
} catch (e) {
return reply("Erro..");
}
break;

case 'reiniciar':
if(!isCreator) return reply("*APENAS DONO*")
reply("Reiniciando o sistema, em segundos já estarei de volta senhor(a) as suas ordens!")
setTimeout(async() => {process.exit()}, 1200)
break

case 'meme':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const buffyy = await getBuffer(`http://br4.bronxyshost.com:4059/random/loli?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: buffyy}, {quoted: info});
break;

case 'yumeko':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const bufferImg = await getBuffer(`http://br4.bronxyshost.com:4059/random/yumeko?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: bufferImg}, {quoted: info});
break;

case 'waifu':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const bufferIg = await getBuffer(`http://br4.bronxyshost.com:4059/random/waifu?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: bufferIg}, {quoted: info});
break;

case 'waifu2':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const opa = await getBuffer(`http://br4.bronxyshost.com:4059/random/waifu2?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: opa}, {quoted: info});
break;

case 'cosplay':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const sla = await getBuffer(`http://br4.bronxyshost.com:4059/random/cosplay?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: sla}, {quoted: info});
break;

case 'hinata':
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const ab = await getBuffer(`http://br4.bronxyshost.com:4059/random/hinata?apikey=${SANDRO_MD}`);
md.sendMessage(from, {image: ab}, {quoted: info});
break;

case 'figualeatoria':
reply(`- Estou gerando sua figurinha, aguarde um pouco...`)
fg = await getBuffer(`http://br4.bronxyshost.com:4059/api/figu?apikey=${SANDRO_MD}`)
md.sendMessage(from, {sticker: fg})
break



case "imgpralink":
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, { filename: 'image.jpg' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break
            
          case 'videopralink':
          case 'gerarvideo':
            try {
              if (isQuotedVideo) {
                boij = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
                  : info.message.videoMessage;
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadVideoToTelegraph(videoBuffer) {
                  const form = new FormData();
                  form.append('file', videoBuffer, { filename: 'media' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "video");
                const imageUrl = await uploadVideoToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque o video')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╼⊳⊰ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
md.sendMessage(from, {text: teks}, {quoted: contato})
} catch {
reply('ERROR!!')
}
break

case 'repetir': 
{if(!q) return reply(`Texto?`)
md.sendMessage(from,
{text: q},
{quoted: contato})
}
break

case 'xvideos':
if (!c) return reply('Quer pesquisar oq??');
reply('Isso pode demorar um pouco')
dlk = await fetchJson(`https://api.brizaloka-api.tk/porn/xvideos?apikey=brizaloka&query=${q}`);
Op = dlk.dl_link
md.sendMessage(sender, { video: { url: Op }}, {quoted: contato});   
break

case 'hentai1':
if (!isGroup) return reply(resposta.grupo)
reply('*Estou enviando no seu privado*')
const bufferImg11 = await getBuffer("https://api.brizaloka-api.tk/random/hentai/boobs?apikey=brizaloka");
md.sendMessage(sender, {image: bufferImg11}, {quoted: contato});
break;

/////
case 'video' : 
{md.sendMessage(
from, 
{video: fs.readFileSync('./database/video/sandro.mp4')
},
{quoted : contato}
)
}
break

case 'play50':  {
                if (!text) return reply(`Asim que usa:\n\n${prefix + comando} Amar amei gosta gostei`)
                try {
                    let dataa = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
                    ytbrt = `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂     ♬
⸺͟͞ꪶ${pushname}      ♪  
  
➤ۣۜۜ͜͡📌 𝚃𝚒́𝚝𝚞𝚕𝚘: ${dataa.resultado[0].title}
➤ۣۜۜ͜͡🎯 Tempo⧽${dataa.resultado[0].timestamp}
➤ۣۜۜ͜͡🦊 Descrição⧽ ${dataa.resultado[0].description}

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Bom diaa🤙🏻
ılı.lıllılı.ıllı..ılı.lıllılı.ıllı\n\n━━━━━━━━━━━━━`
                    md.sendMessage(from, { image: { url: `${dataa.resultado[0].image}` }, caption: ytbrt }, { quoted: info })
                    sabrina.sendMessage(from, { audio: { url: `http://br4.bronxyshost.com:4059/youtube/mp3?url=${api.Link}&apikey=${SANDRO_MD}` }, mimetype: "audio/mpeg", fileName: `${dataa.resultado[0].title}.mp4` }, { quoted: info })
                } catch (err) {
                    reply(' 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚘𝚋𝚝𝚎𝚛 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜!')
                    console.log(err)
                }
            }
break

case 'playvid':
case 'playvideo':
try {
if(!q) return reply(`Exemplo: ${prefix+command} Amor hospitalar`);
await reply(`Enviando.. caso demore de mais nao consegui te enviar `)
const api = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
md.sendMessage(from, {video: {url: (`http://br4.bronxyshost.com:4059/youtube/mp4?url=${api.Link}&apikey=${SANDRO_MD}`)}, mimetype: "video/mp4"})
} catch (erro) {
console.log(erro)
}
break

case 'play':
    try {
        if (!q) return reply(`- Exemplo: ${prefix}play nome da música\nA música será baixada, basta escolher áudio ou vídeo. Se não baixar, pode ser que o YouTube tenha restringido.`);

        let data = await fetchJson(`https://api.bronxyshost.com.br/api-bronxys/pesquisa_ytb?nome=${encodeURIComponent(q)}&apikey=` + OrbitalCloud);

        if (!data || !data[0]) return reply("Nenhuma música encontrada. Tente outro nome.");

        if (IS_sistemGold) {
            if (QNTD_GOLDS < 3) return reply("Você não tem Golds suficientes para completar esta ação. Tente novamente após conseguir mais...");
            setTimeout(async () => {
                await ConsumirGold(3, sender);
            }, 1000);
        }

        let tempo = data[0].tempo || "";
        if (tempo.length >= 7) return reply("Desculpe, este vídeo ou áudio é muito grande. Peça outra música com duração menor que uma hora.");

        let mensagem = `
๖ۣ• 🎵 *Título:* ${data[0].titulo}
๖ۣ• ⏳ *Duração:* ${data[0].tempo}
๖ۣ• 📅 *Postado:* ${data[0].postado}
๖ۣ• 📝 *Descrição:* ${data[0].desc}

✅ 100% disponível!

🎶 Escolha uma opção:
- Para baixar o vídeo, use: *${prefix}play_video ${q.trim()}*
`;

        await conn.sendMessage(from, { image: { url: data[0].thumb }, caption: mensagem }, { quoted: info });

        await conn.sendMessage(from, { 
            audio: { url: `https://api.bronxyshost.com.br/api-bronxys/play?nome_url=${encodeURIComponent(q)}&apikey=` + API_KEY_ALEATORY }, 
            mimetype: "audio/mpeg", 
            fileName: data[0]?.titulo || "play.mp3" 
        }, { quoted: info }).catch(e => {
            console.error(e);
            return reply("Ocorreu um erro ao baixar o áudio.");
        });

    } catch (e) {
        console.error(e);
        return reply("Erro ao processar o pedido. Tente ser mais específico ao buscar a música.");
    }
    break;

case 'play2': 
if(!q) return reply(`${pushname} Cade o nome da musica?\n Exemplo: ${prefix}${command} Matue`)
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
try {
ytbr = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
ytbrt = `━「 PLAY AUDIO 」
  🥂∆𝐁𝐄𝐌✰𝐕𝐈𝐍𝐃𝐎∆🥂
     ♬     ♪ 
TITULO: ${ytbr.Title}
AUTHOR: ${ytbr.Author} 
SHARE: ${ytbr.Link}
CRIADOR: SR.𝑻𝒐𝒎𝒊𝒐𝒌𝒂 </>

 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%

Buum diaa💖
ılı.lıllılı.ıllı..ılı.lıllılı.`
md.sendMessage(from, {image: {url: `${ytbr.Thumb}`}, caption: ytbrt}, {quoted: info})
md.sendMessage(from, {audio: {url: `http://br4.bronxyshost.com:4059/youtube/mp3?url=${ytbr.Link}&apikey=${SANDRO_MD}` }, mimetype: "audio/mpeg"}, {quoted: info})
} catch (err) {
reply(`${err}`)
console.log(err)
} 
break

case 'playmp4':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(`Enviando.. caso demore de mais nao consegui te enviar `)
pau = await fetchJson(`http://br4.bronxyshost.com:4059/youtube/play?query=${q}&apikey=${SANDRO_MD}`)
md.sendMessage(from, {video: { url: (`http://br4.bronxyshost.com:4059/youtube/mp4?url=${pau.Link}&apikey=${SANDRO_MD}`)}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
break

case 'ytmp3':
if(!q) return reply(`Cadê o link do vídeo para eu baixar no formato de áudio?\n\nExemplo: *${prefix+command} https://www.youtube.com/watch?v=hmBAvAugQqA&t=160s*`)
reagir(from, "✅")
reply(`*Aguarde enviando* _SANDRO API_`)
md.sendMessage(from, {audio: {url: (`http://br4.bronxyshost.com:4059/youtube/mp3?url=${q}&apikey=${SANDRO_MD}`)}, mimetype: "audio/mpeg"}).catch(err => {
return reply(mess.error())
})
break


default:

if (isCmd) {
reply(`Esse comando nao foi encontrato pfv digite !menu`)
}

}

} catch (e) {
console.log(e)
}

})

}
startbot()
