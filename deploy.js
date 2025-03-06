const { REST, Routes } = require('discord.js');
const pickCommand = require('./commands/pick.js');
const vcassignCommand = require('./commands/vcassign.js');
const assignCommand = require('./commands/assign.js');
const { applicationId, guildId, token } = require('./config.js');
const text = require('./util/text.js');

// 登録コマンドを呼び出してリスト形式で登録
const commands = [pickCommand.data.toJSON(), assignCommand.data.toJSON(), vcassignCommand.data.toJSON()];

// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(token);

// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
          Routes.applicationGuildCommands(applicationId, guildId),
          { body: commands },
        );
        console.log(text.deploy_done);
    } catch (error) {
        console.error(text.deploy_error, error);
    }
})();