// Bot内の各種テキストを管理する
// 汎用的なテキスト
const all_bot_name = 'Random Pick';
const all_source_github_url = 'https://github.com/nszy0729/RandomPick';
const all_icon_url = 'https://github.com/nszy0729/RandomPick/blob/master/image/BotIcon.png?raw=true';
const all_reply_error = 'Reply Error';
const all_command_notfound = '{0}というコマンドは存在しません。';
const all_command_error = 'コマンド実行時にエラーになりました。';
const all_startup_text = '{0}が起動しました。';
const all_delimiter = ',';
const all_top_label = 'top';
const all_jg_label = 'jg';
const all_mid_label = 'mid';
const all_bot_label = 'bot';
const all_sup_label = 'sup';
const all_all_role_list = `${all_top_label}${all_delimiter}${all_jg_label}${all_delimiter}${all_mid_label}${all_delimiter}${all_bot_label}${all_delimiter}${all_sup_label}`;
// pickコマンドのテキスト
const pick_command_name = 'pick';
const pick_param1_name = 'targets';
const pick_param1_label = 'ターゲット';
const pick_param1_description = `対象のメンバーの一覧。カンマ区切りで入力してください。例）user1${all_delimiter}user2${all_delimiter}user3${all_delimiter}user4${all_delimiter}user5`;
const pick_param2_name = 'pickcount';
const pick_param2_label = 'ピックする人数';
const pick_param2_description = 'ピックする人数';
const pick_result_label = '結果';
const pick_description = `${pick_param2_label}で指定した人数と対象の文字列をカンマ区切りで渡すとランダムで${pick_param2_label}人数分の文字列を返します。`;
const pick_error_param2_zero = `${pick_param2_name}が0になっています。`;
const pick_error_param_invalid = `${pick_param1_name}の数が${pick_param2_name}より小さいです。`;
// assignコマンドのテキスト
const assign_command_name = 'assign';
const assign_command_label = 'Assign';
const assign_param1_name = 'targets';
const assign_param1_label = 'メンバー';
const assign_param1_description = `メンバーの一覧。カンマ区切りで入力してください。例）user1${all_delimiter}user2${all_delimiter}user3${all_delimiter}user4${all_delimiter}user5`;
const assign_param2_name = 'role';
const assign_param2_label = 'ロール';
const assign_param2_all_keyword = 'all';
const assign_result_label = '結果';
const assign_description = `対象のメンバーをランダムに${assign_param2_label}に割り当てます。メンバーと${assign_param2_label}の数が一致していれば5つ以上の${assign_param2_label}を指定可能です。`;
const assign_param2_description = `割り振る${assign_param2_label}の一覧。カンマ区切りで入力してください。 例）${all_all_role_list}${all_delimiter}休憩 もしくは allで全${assign_param2_label}指定可能`;
const assign_error_empty_list = `${assign_param1_name}または${assign_param2_name}が0になっています。`;
const assign_error_not_equal = `${assign_param1_name}と${assign_param2_name}の数は同じ数にしてください。`;
// vcassignコマンドのテキスト
const vcassign_command_name = 'vcassign';
const vcassign_command_label = 'VCAssign';
const vcassign_param1_name = 'channel';
const vcassign_param1_label = 'チャンネル';
const vcassign_param1_description = '対象のボイスチャンネル。';
const vcassign_param2_name = 'role';
const vcassign_param2_label = 'ロール';
const vcassign_param2_all_keyword = 'all';
const vcassign_member_label = 'VC参加者';
const vcassign_result_label = '結果';
const vcassign_error_not_vc = 'ボイスチャンネルを選択してください。';
const vcassign_description = `対象のVC参加者をランダムに${vcassign_param2_label}に割り当てます。メンバーと${vcassign_param2_label}の数が一致していれば5つ以上の${vcassign_param2_label}を指定可能です。`;
const vcassign_param2_description = `割り振る${vcassign_param2_label}の一覧。カンマ区切りで入力してください。 例）${all_all_role_list}${all_delimiter}休憩 もしくは allで全${vcassign_param2_label}指定可能`;
const vcassign_error_empty_list = `${vcassign_param2_name}が0になっています。`;
const vcassign_error_not_equal = `${vcassign_member_label}と${vcassign_param2_name}の数は同じ数にしてください。`;
// deploy時のテキスト
const deploy_start = 'コマンドを登録します。';
const deploy_done = 'コマンドが登録されました';
const deploy_error = 'コマンドの登録中にエラーが発生しました: ';

module.exports = {
  all_bot_name,
  all_source_github_url,
  all_icon_url,
  all_reply_error,
  all_command_notfound,
  all_command_error,
  all_startup_text,
  all_delimiter,
  all_top_label,
  all_jg_label,
  all_mid_label,
  all_bot_label,
  all_sup_label,
  all_all_role_list,
  pick_command_name,
  pick_description,
  pick_param1_name,
  pick_param1_label,
  pick_param1_description,
  pick_param2_name,
  pick_param2_label,
  pick_param2_description,
  pick_result_label,
  pick_error_param2_zero,
  pick_error_param_invalid,
  assign_command_name,
  assign_command_label,
  assign_description,
  assign_param1_name,
  assign_param1_label,
  assign_param1_description,
  assign_param2_name,
  assign_param2_label,
  assign_param2_description,
  assign_param2_all_keyword,
  assign_result_label,
  assign_error_empty_list,
  assign_error_not_equal,
  vcassign_command_name,
  vcassign_command_label,
  vcassign_description,
  vcassign_param1_name,
  vcassign_param1_label,
  vcassign_param1_description,
  vcassign_param2_name,
  vcassign_param2_label,
  vcassign_param2_description,
  vcassign_param2_all_keyword,
  vcassign_member_label,
  vcassign_result_label,
  vcassign_error_not_vc,
  vcassign_error_empty_list,
  vcassign_error_not_equal,
  deploy_start,
  deploy_done,
  deploy_error,
}