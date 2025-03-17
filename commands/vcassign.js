const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const util = require('../util/commandUtil.js');
const text = require('../util/text.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(text.vcassign_command_name)
		.setDescription(text.vcassign_description)
    .addChannelOption((op) => op.setName(text.vcassign_param1_name)
      .setDescription(text.vcassign_param1_description)
      .setRequired(true))
    .addStringOption((op) => op.setName(text.vcassign_param2_name)
      .setDescription(text.vcassign_param2_description)
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const channel = interaction.options.getChannel(text.vcassign_param1_name);
      const lanesStr = interaction.options.getString(text.vcassign_param2_name);
      const lanes = util.generateRoleList(text.vcassign_param2_all_keyword, lanesStr);
      // スラッシュコマンドのオプションを検証する
      const validateMessage = validateOptions(channel, lanes);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムに割り当てて返す
      const members = getMembers(channel);
      const result = laneAssign(members, lanes);
      await interaction.reply({ embeds: [generateAssignReplyMessage(members, lanes, result)] });
    } catch(e) {
      console.log(text.all_reply_error, e);
    }
	},
};
function validateOptions(channel, lanes) {
  if (!channel.isVoiceBased()) {
    return text.vcassign_error_not_vc;
  }
  if (lanes.length === 0) {
    return text.vcassign_error_empty_list;
  }
  const members = getMembers(channel);
  if (members.length !== lanes.length) {
    return text.vcassign_error_not_equal;
  }
  return '';
}
function getMembers(channel) {
  return channel.members.map((v, k) => v.nickname || v.user.globalName);
}


function laneAssign(members, lanes) {
  const shuffled = util.shuffle(members);
  return lanes.map((lane, i) => `${lane}：${shuffled[i]}`);
}

function generateAssignReplyMessage(members, lane, results) {
  return new EmbedBuilder()
    .setColor('Random')
    .setAuthor({ name: text.all_bot_name, iconURL: text.iconUrl, url: text.all_source_github_url })
    .addFields(
      { name: text.vcassign_member_label, value: `${members}`, inline: true },
      { name: text.vcassign_param2_label, value: `${lane}`, inline: true },
      { name: text.vcassign_result_label, value: '・' + results.join('\n・') }
    );
}