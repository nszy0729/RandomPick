const { REST, Routes } = require('discord.js');
const pickCommand = require('./commands/pick.js');
const vcpickCommand = require('./commands/vcpick.js');
const { applicationId, guildId, token } = require('./config.js');

// 登録コマンドを呼び出してリスト形式で登録
//const commands = [pickCommand.data.toJSON(), vcpickCommand.data.toJSON()];
const commands = [pickCommand.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(token);

// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
          Routes.applicationGuildCommands(applicationId, guildId),
          { body: commands },
        );
        console.log('コマンドが登録されました');
    } catch (error) {
        console.error('コマンドの登録中にエラーが発生しました:', error);
    }
})();