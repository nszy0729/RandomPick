const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const pickCommand = require('./commands/pick.js');

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

    // スラッシュコマンドに対する処理
    if (interaction.commandName === pickCommand.data.name) {
        try {
            await pickCommand.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    } else {
        console.error(`${interaction.commandName}というコマンドは存在しません。`);
    }
});

// インスタンスの起動
client.login(token);
