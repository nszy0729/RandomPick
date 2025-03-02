const { SlashCommandBuilder } = require('discord.js');
const util = require('./commandUtil.js');
const _ = require('lodash');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('assign')
		.setDescription('対象のメンバーをランダムにレーンに割り当てます。')
    .addStringOption((op) => op.setName('targets')
      .setDescription('A group of target strings. Enter comma-separated strings.')
      .setRequired(true))
    .addStringOption((op) => op.setName('lanes')
      .setDescription('A group of lane strings. Enter comma-separated strings.')
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const targets = interaction.options.getString('targets').split(',');
      const lanes = interaction.options.getString('lanes').split(',');
      // スラッシュコマンドのオプションを検証する
      const validateMessage = util.validateAssignOptions(targets, lanes);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムに割り当てて返す
      const result = laneAssign(targets, lanes);
      await interaction.reply({ embeds: [util.generateAssignReplyEmbed(targets, lanes, result)] });
    } catch(e) {
      console.log('reply時にエラー', e);
    }
	},
};

function laneAssign(targets, lanes) {
  let result = [];
  let targetList = [...targets];
  for (let i = 0; i < lanes.length; i++) {
    // ランダムにレーンに割り当てる
    const index = _.random(0, targetList.length-1);
    result.push(`${lanes[i]}：${targetList[index]}`);
    targetList = targetList.filter((row, i) => i !== index);
  }
  return result;
}