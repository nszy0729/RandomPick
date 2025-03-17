const text = require('./text.js');

module.exports = {
  generateRoleList: function generateRoleList(allKeyword, role) {
    const result = role.toLowerCase().replaceAll(allKeyword.toLowerCase(), text.all_all_role_list);
    return result.split(text.all_delimiter);
  },
  // Fisher-Yatesシャッフル
  shuffle: function shuffleFisherYates(array) {
    const copy = array.concat();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
}