const text = require('./text.js');

const generateRoleList = (allKeyword, role) => {
  const result = role.toLowerCase().replaceAll(allKeyword.toLowerCase(), text.all_all_role_list);
  return result.split(text.all_delimiter);
};
  // Fisher-Yatesシャッフル
const shuffle = (array) => {
  const copy = array.concat();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const assign = (member, role) => {
  const shuffledMember = shuffle(member);
  const shuffledRole = shuffle(role);
  const assigned = shuffledRole.map((role, i) => {
    return {
      role,
      player: shuffledMember[i]
    }
  });
  const result = [];
  result.push(assigned.filter((row) => row.role === text.all_top_label)[0]);
  result.push(assigned.filter((row) => row.role === text.all_jg_label)[0]);
  result.push(assigned.filter((row) => row.role === text.all_mid_label)[0]);
  result.push(assigned.filter((row) => row.role === text.all_bot_label)[0]);
  result.push(assigned.filter((row) => row.role === text.all_sup_label)[0]);
  return result.concat(assigned.filter((row) => row.role !== text.all_top_label
    && row.role !== text.all_jg_label
    && row.role !== text.all_mid_label
    && row.role !== text.all_bot_label
    && row.role !== text.all_sup_label
    && row
  ));
};
module.exports = {
  generateRoleList,
  shuffle,
  assign,
}