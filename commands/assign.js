const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const util = require('../util/commandUtil.js');
const text = require('../util/text.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(text.assign_command_name)
		.setDescription(text.assign_description)
    .addStringOption((op) => op.setName(text.assign_param1_name)
      .setDescription(text.assign_param1_description)
      .setRequired(true))
    .addStringOption((op) => op.setName(text.assign_param2_name)
      .setDescription(text.assign_param2_description)
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const targets = interaction.options.getString(text.assign_param1_name).split(text.all_delimiter);
      const lanesStr = interaction.options.getString(text.assign_param2_name);
      const lanes = util.generateRoleList(text.assign_param2_all_keyword, lanesStr);
      // スラッシュコマンドのオプションを検証する
      const validateMessage = validateOptions(targets, lanes);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムに割り当てて返す
      const result = laneAssign(targets, lanes);
      await interaction.reply({ embeds: [generateAssignReplyMessage(targets, lanes, result)] });
    } catch(e) {
      console.log(text.all_reply_error, e);
    }
	},
};

function validateOptions(targets, lanes) {
  if (targets.length === 0 || lanes.length === 0) {
    return text.assign_error_empty_list;
  }
  if (targets.length !== lanes.length) {
    return text.assign_error_not_equal;
  }
  return '';
}

function laneAssign(targets, lanes) {
  const assigned = util.assign(targets, lanes);
  return assigned.map((row) => `${row.role}：${row.player}`);
}

function generateAssignReplyMessage(targets, lane, results) {
  return new EmbedBuilder()
    .setColor('Random')
    .setAuthor({ name: text.all_bot_name, iconURL: text.iconUrl, url: text.all_source_github_url })
    .addFields(
      { name: text.assign_param1_label, value: `${targets}`, inline: true },
      { name: text.assign_param2_label, value: `${lane}`, inline: true },
      { name: text.assign_result_label, value: '・' + results.join('\n・') }
    );
}