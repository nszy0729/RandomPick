const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.js');
const pickCommand = require('./commands/pick.js');
const assignCommand = require('./commands/assign.js');
const vcassignCommand = require('./commands/vcassign.js');
const text = require('./util/text.js');

// Botの初期化
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
]});
client.once(Events.ClientReady, c => {
    console.log(text.all_startup_text.replace('{0}', c.user.tag));
});

// スラッシュコマンドの設定
client.on(Events.InteractionCreate, async interaction => {

    // スラッシュ以外のコマンドの場合は対象外なので処理しない
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判定
    if (!interaction.isChatInputCommand()) return;

    try {
        // スラッシュコマンドに対する処理
        if (interaction.commandName === pickCommand.data.name) {
            await pickCommand.execute(interaction);
            return;
        }
        if (interaction.commandName === vcassignCommand.data.name) {
            await vcassignCommand.execute(interaction);
            return;
        }
        if (interaction.commandName === assignCommand.data.name) {
            await assignCommand.execute(interaction);
            return;
        }
        // 存在しないコマンドに対するエラー
        const message = text.all_command_notfound.replace('{0}', interaction.commandName);
        await interaction.reply(message);
        console.error(message);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: text.all_command_error, ephemeral: true });
        } else {
            await interaction.reply({ content: text.all_command_error, ephemeral: true });
        }
    }
});

// インスタンスの起動
client.login(token);
