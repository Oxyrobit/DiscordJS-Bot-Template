const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const random = list => list[Math.floor(Math.random() * list.length)];

const images = () => {
    const images = [
        "https://i.imgur.com/BGxoZex.jpeg",
        "https://i.imgur.com/ObQlkDg.jpeg",
        "https://i.imgur.com/x9fmYUf.jpeg",
        "https://i.imgur.com/g8WERNk.jpeg",
        "https://i.imgur.com/RhlF0q2.jpeg",
        "https://i.imgur.com/6GiY8Fm.jpeg",
        "https://i.imgur.com/YvnZRKG.jpeg",
        "https://i.imgur.com/cO0TErH.jpeg",
        "https://i.imgur.com/PUhq4h8.jpeg",
        "https://i.imgur.com/YBYnuGb.jpeg",
        "https://i.imgur.com/dG63WzG.jpeg",
        "https://i.imgur.com/keU2aA5.jpeg",
        "https://i.imgur.com/5Oi2TFM.jpeg",
        "https://i.imgur.com/ZS6IdVF.jpeg",
        "https://i.imgur.com/jhD2IIN.jpeg",
        "https://i.imgur.com/HbXL17J.jpeg",
        "https://i.imgur.com/rT0f4Qu.jpeg",
        "https://i.imgur.com/42JdmDT.jpeg",
        "https://i.imgur.com/gbdTyEf.jpeg",
        "https://i.imgur.com/iJCwZWH.jpeg",
        "https://i.imgur.com/7OOrBAI.jpeg",
        "https://i.imgur.com/PgRQGlH.jpeg",
        "https://i.imgur.com/3i50ENz.jpeg",
        "https://i.imgur.com/HY7gIkX.jpeg",
        "https://i.imgur.com/vdwL1PJ.jpeg",
        "https://i.imgur.com/cUqO5rT.jpeg",
        "https://i.imgur.com/q78cupW.jpeg",
        "https://i.imgur.com/z8lIwUp.jpeg",
        "https://i.imgur.com/kxLdAuq.jpeg",
        "https://i.imgur.com/0hXXbZT.jpeg",
        "https://i.imgur.com/iHFsFUe.jpeg",
        "https://i.imgur.com/i8PPEFB.jpeg",
        "https://i.imgur.com/3mQBkKz.jpeg",
        "https://i.imgur.com/23IXL7g.jpeg",
        "https://i.imgur.com/fYSVL70.jpeg",
        "https://i.imgur.com/l7q00le.jpeg",
        "https://i.imgur.com/XhSPwQE.jpeg",
        "https://i.imgur.com/57iX2Hc.jpeg",
        "https://i.imgur.com/Q1iLgkO.jpeg",
        "https://i.imgur.com/JSWH3bJ.jpeg",
    ]

    return random(images)
}

const messages = (author, member) => {
    const messages = [
        "Aww! You're so cute together!",
        "Don't suffocate them for *too* long!",
        "They really needed it.",
        "They feel better already!",
        "Thanks,<@"+ author.id +">!",
        "<@"+ member.id +">, say thank you!",
        "Mwah!",
        "You're welcome!",
        "Adorable!",
        "So sweet!",
        "Such a caring friend!",
        "Such wholesomeness!",
        "I want a hug too!",
        "Adorbs!",
        "That's so kind!",
        "That's so nice!",
        "<@"+ member.id +">, hug back!",
    ]

    return random(messages)
}

exports.command = {
    name: 'hug',
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Fais un hug à tes amis')
        .addUserOption(option =>
            option
                .setName("ami") //ne pas mettre de majuscule
                .setDescription("Qui recevra ton hug")
                .setRequired(true)),

    async execute(interaction) {
        const author = interaction.member
        const member = interaction.options.getMember("ami")
        const embed = new EmbedBuilder()
            .setColor(0xDE3B8F)
            .setImage(images())
            .setDescription(`**<@${author.id}> hugs <@${member.id}>**\n${messages(author, member)} <a:etoiles_qui_brillent:1139513354596122745>`) //pour mettre une emote il faut envoyer \emote avec le slash devant sur discord puis copier coller
        
        //interaction.reply({embeds: [embed]}).catch(console.error) => ne ping pas sur un embed, il faut que la mention soit hors embed
        interaction.reply({content: `<@${member.id}>`, embeds: [embed]}).catch(console.error)
    },
};