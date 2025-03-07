// Bot内の各種テキストを管理する
module.exports = {
  // 汎用的なテキスト
  all_bot_name: 'Random Pick',
  all_source_github_url: 'https://github.com/nszy0729/RandomPick',
  all_icon_url: 'https://github.com/nszy0729/RandomPick/blob/master/image/BotIcon.png?raw=true',
  all_reply_error: 'Reply Error',
  all_command_notfound: '{0}というコマンドは存在しません。',
  all_command_error: 'コマンド実行時にエラーになりました。',
  // pickコマンドのテキスト
  pick_command_name: 'pick',
  pick_description: `${this.pick_param2_label}で指定した人数と対象の文字列をカンマ区切りで渡すとランダムで${this.pick_param2_label}人数分の文字列を返します。`,
  pick_param1_name: 'targets',
  pick_param1_label: 'ターゲット',
  pick_param1_description: '対象のメンバーの一覧。カンマ区切りで入力してください。例）user1,user2,user3,user4,user5',
  pick_param2_name: 'pickcount',
  pick_param2_label: 'ピックする人数',
  pick_param2_description: 'ピックする人数',
  pick_result_label: '結果',
  pick_error_param2_zero: `${this.pick_param2_name}が0になっています。`,
  pick_error_param_invalid: `${this.pick_param1_name}の数が${this.pick_param2_name}より小さいです。`,
  // assignコマンドのテキスト
  assign_command_name: 'assign',
  assign_command_label: 'Assign',
  assign_description: '対象のメンバーをランダムにレーンに割り当てます。メンバーとレーンの数が一致していれば5つ以上のレーンを指定可能です。',
  assign_param1_name: 'targets',
  assign_param1_label: 'メンバー',
  assign_param1_description: 'メンバーの一覧。カンマ区切りで入力してください。例）user1,user2,user3,user4,user5',
  assign_param2_name: 'lanes',
  assign_param2_label: 'レーン',
  assign_param2_description: '割り振るレーンの一覧。カンマ区切りで入力してください。 例）top,js,mid,bot,sup,休憩 もしくは allで全レーン指定可能',
  assign_param2_all_keyword: 'all',
  assign_result_label: '結果',
  assign_error_empty_list: `${this.assign_param1_name}または${this.assign_param2_name}が0になっています。`,
  assign_error_not_equal: `${this.assign_param1_name}と${this.assign_param2_name}の数は同じ数にしてください。`,
  // vcassignコマンドのテキスト
  vcassign_command_name: 'vcassign',
  vcassign_command_label: 'VCAssign',
  vcassign_description: '対象のVC参加者をランダムにレーンに割り当てます。メンバーとレーンの数が一致していれば5つ以上のレーンを指定可能です。',
  vcassign_param1_name: 'channel',
  vcassign_param1_label: 'チャンネル',
  vcassign_param1_description: '対象のボイスチャンネル。',
  vcassign_param2_name: 'lanes',
  vcassign_param2_label: 'レーン',
  vcassign_param2_description: '割り振るレーンの一覧。カンマ区切りで入力してください。 例）top,js,mid,bot,sup,休憩 もしくは allで全レーン指定可能',
  vcassign_param2_all_keyword: 'all',
  vcassign_member_label: 'VC参加者',
  vcassign_result_label: '結果',
  vcassign_error_not_vc: 'ボイスチャンネルを選択してください。',
  vcassign_error_empty_list: `${this.vcassign_param2_name}が0になっています。`,
  vcassign_error_not_equal: `${this.vcassign_member_label}と${this.vcassign_param2_name}の数は同じ数にしてください。`,
  // deploy時のテキスト
  deploy_done: 'コマンドが登録されました',
  deploy_error: 'コマンドの登録中にエラーが発生しました: ',
}