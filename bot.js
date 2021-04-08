require('dotenv').config()
const sightengine = require('sightengine')('974266458','xaYgnbpz9A73cJ2gSaFs');

const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Bot is up!")
})

client.on("messageDelete", msg => {
    if (msg.member.user.id == 237922331463254017) {
        msg.channel.send(`${msg.member.user.username} stop being a dirty deleter.`)
    }
})

client.on("message", msg => {
    if (msg.member.user.id !== 826532765280895067) {
        let imageURL = msg.attachments.first().url
        sightengine.check(['nudity']).set_url(imageURL).then(function(result) {
            if(result.nudity.safe < 1) {
                msg.channel.send("PORN DETECTED!")
            }
        }).catch(function(err) {
            msg.channel.send(`Please send an admin this error ${err}.`)
        });
    }
})

client.login(process.env.BOT_TOKEN)