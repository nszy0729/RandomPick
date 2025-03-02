const { SlashCommandBuilder } = require('discord.js');
const util = require('./commandUtil.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pick')
		.setDescription('Pick人数と対象の文字列をカンマ区切りで渡すとランダムでPick人数分の文字列を返します。')
    .addStringOption((op) => op.setName('targets')
      .setDescription('A group of target strings. Enter comma-separated strings.')
      .setRequired(true))
    .addIntegerOption((op) => op.setName('pickcount')
      .setDescription('Number of people to pick.')
      .setRequired(true)),
	execute: async function(interaction) {
    try {
      const targets = interaction.options.getString('targets').split(',');
      const pickCount = interaction.options.getInteger('pickcount');
      // スラッシュコマンドのオプションを検証する
      const validateMessage = util.validateOptions(targets, pickCount);
      if (validateMessage) {
        await interaction.reply(validateMessage);
        return;
      }
      // 対象をランダムにピックして返す
      const picked = util.pickItems(targets, pickCount);
      await interaction.reply({ embeds: [util.generateReplyEmbed(targets, pickCount, picked)] });
    } catch(e) {
      console.log('reply時にエラー', e);
    }
	},
};