const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const util = require('../util/commandUtil.js');
const text = require('../util/text.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(text.vcmem_command_name)
		.setDescription(text.vcmem_description)
    .addChannelOption((op) => op.setName(text.vcmem_param1_name)
      .setDescription(text.vcmem_param1_description)
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const channel = interaction.options.getChannel(text.vcmem_param1_name);
      // スラッシュコマンドのオプションを検証する
      const validateMessage = validateOptions(channel);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムに割り当てて返す
      const members = getMembers(channel);
      await interaction.reply({ embeds: [generateReplyMessage(members)] });
    } catch(e) {
      console.log(text.all_reply_error, e);
    }
	},
};
function validateOptions(channel) {
  if (!channel.isVoiceBased()) {
    return text.vcmem_error_not_vc;
  }
  return '';
}
function getMembers(channel) {
  return channel.members.map((v, k) => v.nickname || v.user.globalName);
}

function generateReplyMessage(members) {
  return new EmbedBuilder()
    .setColor('Random')
    .setAuthor({ name: text.all_bot_name, iconURL: text.iconUrl, url: text.all_source_github_url })
    .addFields(
      { name: text.vcmem_member_label, value: `${members.join(text.all_delimiter)}`, inline: true },
    );
}