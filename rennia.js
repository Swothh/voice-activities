/*=========================================================*/

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fetch = require('node-fetch');
const fs = require('fs');

/*=========================================================*/

client.on('ready', () => {
    client.user.setActivity(config.prefix + "oluştur | Poker Night, Betrayal.io, YouTube Together, Fishington.io", {
        type: "LISTENING"
    });
});

/*=========================================================*/

client.on('message', message => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(' ')[0].slice(config.prefix.length).toLowerCase();
    let args = message.content.split(' ').slice(1);

    if (command == 'oluştur' || command == 'olustur' || command == 'create') {
        try {
            if (!args[0]) {
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak için aşağıdaki komutlardan birini yazınız**;**\n*Ses kanalı etiketlemek için* ***#!kanal_adı*** *formatını kullanınız!*')
                        .addField('**__Poker Night__**', '```' + config.prefix + 'oluştur 1 #!kanal-adi```')
                        .addField('**__Betrayal.io__**', '```' + config.prefix + 'oluştur 2 #!kanal-adi```')
                        .addField('**__YouTube Together__**', '```' + config.prefix + 'oluştur 3 #!kanal-adi```')
                        .addField('**__Fishington.io__**', '```' + config.prefix + 'oluştur 4 #!kanal-adi```')
                );
            } else if (args[0] == '1') {
                let channel = message.mentions.channels.first();

                if (!channel || channel.type != 'voice') return message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak istediğin ses kanalını etiketlemelisin**!**')
                );

                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()).then(invite => {
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setTitle(":white_check_mark: | Parti oluşturuldu!")
                            .setDescription(`**${channel.name}** kanalındaki **Poker Night** partisine katılmak için [tıklayın!](https://discord.gg/${invite.code})`)
                            .setFooter(`Parti "${message.author.username}" tarafından oluşturuldu!`)
                            .setColor('GREEN')
                    );
                });
            } else if (args[0] == '2') {
                let channel = message.mentions.channels.first();

                if (!channel || channel.type != 'voice') return message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak istediğin ses kanalını etiketlemelisin**!**')
                );

                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()).then(invite => {
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setTitle(":white_check_mark: | Parti oluşturuldu!")
                            .setDescription(`**${channel.name}** kanalındaki **Betrayal.io** partisine katılmak için [tıklayın!](https://discord.gg/${invite.code})`)
                            .setFooter(`Parti "${message.author.username}" tarafından oluşturuldu!`)
                            .setColor('GREEN')
                    );
                });
            } else if (args[0] == '3') {
                let channel = message.mentions.channels.first();

                if (!channel || channel.type != 'voice') return message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak istediğin ses kanalını etiketlemelisin**!**')
                );

                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()).then(invite => {
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setTitle(":white_check_mark: | Parti oluşturuldu!")
                            .setDescription(`**${channel.name}** kanalındaki **YouTube Together** partisine katılmak için [tıklayın!](https://discord.gg/${invite.code})`)
                            .setFooter(`Parti "${message.author.username}" tarafından oluşturuldu!`)
                            .setColor('GREEN')
                    );
                });
            } else if (args[0] == '4') {
                let channel = message.mentions.channels.first();

                if (!channel || channel.type != 'voice') return message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak istediğin ses kanalını etiketlemelisin**!**')
                );

                fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                }).then(res => res.json()).then(invite => {
                    message.channel.send(
                        new Discord.MessageEmbed()
                            .setTitle(":white_check_mark: | Parti oluşturuldu!")
                            .setDescription(`**${channel.name}** kanalındaki **Fishington.io** partisine katılmak için [tıklayın!](https://discord.gg/${invite.code})`)
                            .setFooter(`Parti "${message.author.username}" tarafından oluşturuldu!`)
                            .setColor('GREEN')
                    );
                });
            } else {
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setColor('GREEN')
                        .setDescription(':x: **|** Parti oluşturmak için aşağıdaki komutlardan birini yazınız**;**\n*Ses kanalı etiketlemek için* ***#!kanal_adı*** *formatını kullanınız!*')
                        .addField('**__Poker Night__**', '```' + config.prefix + 'oluştur 1 #!kanal-adi```')
                        .addField('**__Betrayal.io__**', '```' + config.prefix + 'oluştur 2 #!kanal-adi```')
                        .addField('**__YouTube Together__**', '```' + config.prefix + 'oluştur 3 #!kanal-adi```')
                        .addField('**__Fishington.io__**', '```' + config.prefix + 'oluştur 4 #!kanal-adi```')
                );
            };
        } catch(hata) {
            message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setDescription(':x: **|** Sistemsel bir hata oluştu**!**')
            ).then(() => {
                console.log(hata);
            });
        };
    } else {
        message.channel.send(
            new Discord.MessageEmbed()
                .setColor('GREEN')
                .setDescription(':x: **|** Parti oluşturmak için `' + config.prefix + 'oluştur` komutunu kullanın**!**')
        );
    };
});

/*=========================================================*/

client.login(config.token).catch(() => {
    console.log('Rennia: Token is not valid!');
}).then(() => {
    console.log('Rennia: Bot is ready!');
});

/*=========================================================*/