const { EmbedBuilder } = require('discord.js');
const _ = require('lodash');

const iconUrl = 'https://github.com/nszy0729/RandomPick/blob/master/image/BotIcon.png?raw=true';
module.exports = {
  validateOptions: function validateOptions(targets, pickCount) {
    if (pickCount === 0) {
      return 'pickCountが0になっています。';
    }
    if (targets.length < pickCount) {
      return 'targetsの数がpickcountより小さいです。';
    }
    return '';
  },
  pickItems: function pickItems(targets, pickCount) {
    let list = targets.concat();
    const picked = [];
    for (let i = pickCount; i > 0; i--) {
      const max = list.length - 1;
      const targetIndex = _.random(0, max);
      picked.push(list[targetIndex]);
      list = list.filter((t, i) => i !== targetIndex);
    }
    return picked;
  },
  generateReplyEmbed: function generateReplyMessage(targets, pickcount, picked) {
    return new EmbedBuilder()
      .setColor('Random')
      .setAuthor({ name: 'Random Pick', iconURL: iconUrl, url: 'https://github.com/nszy0729/RandomPick' })
      .addFields(
        { name: 'Targets', value: `${targets}`, inline: true },
        { name: 'Pick', value: `${pickcount}`, inline: true },
        { name: 'Result', value: '・' + picked.join('\n・') }
      );
  },
  generateReplyMessage: function generateReplyMessage(targets, pickcount, picked) {
    return `対象: ${targets}\n数: ${pickcount}\n\n選ばれたのは\n・${picked.join('\n・')}\nです。`;
  }
}