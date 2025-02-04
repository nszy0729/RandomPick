const { SlashCommandBuilder } = require('discord.js');
const util = require('./commandUtil.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('vcpick')
		.setDescription('Pick人数と対象のボイスチャネルを渡すとランダムでPick人数分の文字列を返します。')
    .addChannelOption((op) => op.setName('channel')
      .setDescription('Target voice channel.')
      .setRequired(true))
    .addIntegerOption((op) => op.setName('pickcount')
      .setDescription('Number of people to pick.')
      .setRequired(true)),
	execute: async function(interaction) {
    const channel = interaction.options.getChannel('channel');
    const pickCount = interaction.options.getInteger('pickcount');
    if (!channel.isVoiceBased()) {
      await interaction.reply('ボイスチャンネルを選択してください。');
    }
    console.log('>>', channel.members);
	},
};