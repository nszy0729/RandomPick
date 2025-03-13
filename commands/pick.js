const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const util = require('../util/commandUtil.js');
const text = require('../util/text.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName(text.pick_command_name)
		.setDescription(text.pick_description)
    .addStringOption((op) => op.setName(text.pick_param1_name)
      .setDescription(text.pick_param1_description)
      .setRequired(true))
    .addIntegerOption((op) => op.setName(text.pick_param2_name)
      .setDescription(text.pick_param2_description)
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const targets = interaction.options.getString(text.pick_param1_name).split(text.all_delimiter);
      const pickCount = interaction.options.getInteger(text.pick_param2_name);
      // スラッシュコマンドのオプションを検証する
      const validateMessage = validateOptions(targets, pickCount);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムにピックして返す
      const picked = pickItems(targets, pickCount);
      await interaction.reply({ embeds: [generateReplyMessage(targets, pickCount, picked)] });
    } catch(e) {
      console.log(text.all_reply_error, e);
    }
	},
};

function validateOptions(targets, pickCount) {
  if (pickCount === 0) {
    return text.pick_error_param2_zero;
  }
  if (targets.length < pickCount) {
    return text.pick_error_param_invalid;
  }
  return '';
}

function pickItems(targets, pickCount) {
  let list = targets.concat();
  const picked = [];
  for (let i = pickCount; i > 0; i--) {
    const max = list.length - 1;
    const targetIndex = _.random(0, max);
    picked.push(list[targetIndex]);
    list = list.filter((t, i) => i !== targetIndex);
  }
  return picked;
}
function pickItems(targets, pickCount) {
  const shuffled = util.shuffle(targets);
  return shuffled.slice(0, pickCount);
}

function generateReplyMessage(targets, pickcount, picked) {
  return new EmbedBuilder()
    .setColor('Random')
    .setAuthor({ name: text.all_bot_name, iconURL: text.iconUrl, url: text.all_source_github_url })
    .addFields(
      { name: text.pick_param1_label, value: `${targets}`, inline: true },
      { name: text.pick_param2_label, value: `${pickcount}`, inline: true },
      { name: text.pick_result_label, value: '・' + picked.join('\n・') }
    );
}