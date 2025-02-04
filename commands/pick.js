const { SlashCommandBuilder } = require('discord.js');
const _ = require('lodash');

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
    const targets = interaction.options.getString('targets').split(',');
    const pickCount = interaction.options.getInteger('pickcount');
    // ターゲットとピック数が合っているか確認
    if (pickCount === 0) {
		  await interaction.reply('pickCountが0になっています。');
      return;
    }
    if (targets.length < pickCount) {
		  await interaction.reply('targetsの数がpickcountより小さいです。');
      return;
    }
    const picked = pickItems(targets, pickCount);
    let replyMessage = '選ばれたのは\n・' + picked.join('\n・') + '\nです。';
		await interaction.reply(replyMessage);
	},
};

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