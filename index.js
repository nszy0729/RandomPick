const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.js');
const pickCommand = require('./commands/pick.js');
const vcpickCommand = require('./commands/vcpick.js');

// Botの初期化
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, c => {
	console.log(`${c.user.tag}が起動しました。`);
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
        if (interaction.commandName === vcpickCommand.data.name) {
            await vcpickCommand.execute(interaction);
            return;
        }
        // 存在しないコマンドに対するエラー
        await interaction.reply(`${interaction.commandName}というコマンドは存在しません。`);
        console.error(`${interaction.commandName}というコマンドは存在しません。`);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
        } else {
            await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
        }
    }
});

// インスタンスの起動
client.login(token);
