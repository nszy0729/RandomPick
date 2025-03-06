# Random Pick
Random Pickは配列からランダムでターゲットを選択してくれるDiscord Botです。

## 使い方
* /pick targets pickcount
    targetsの中からランダムでpickcountの数だけ選択し返す。
    - targets: 必須。選択対象の配列。カンマ区切りの文字列で入力する。
    - pickcount: 必須。targetsから何件選択するかを決める。
* /assign targets lanes
    対象のメンバーをランダムにレーンに割り当てる。メンバーとレーンの数が一致していれば5つ以上のレーンを指定可能。
    - targets: 必須。メンバーの一覧。カンマ区切りで入力する。
    - lanes: 必須。割り振るレーンの一覧。カンマ区切りで入力する。
* /vcassign channel lanes
    対象のVC参加者をランダムにレーンに割り当てる。メンバーとレーンの数が一致していれば5つ以上のレーンを指定可能。
    - channel: 必須。対象のボイスチャンネル。
    - lanes: 必須。割り振るレーンの一覧。カンマ区切りで入力する。

## 導入方法
現状はローカルでサーバーを起動するに留めてあります。  
~~現在はRender.com上で動作しているためローカルでの起動は不要です。~~  
Render.comは放置していると勝手に寝るのでやめた。

### 登録の手順
ローカルで起動したい場合は下記の手順で。
1. 下記リンクからBotを作成する。
    https://discord.com/developers/applications
2. 作成したBotに下記の権限を付与する。（サイドメニュー「Bot」から付与可能。）
    - Presence Intent
    - Server Members Intent
3. サーバーにBotを追加する。
    https://discord.com/api/oauth2/authorize?client_id={BotのアプリケーションID}&permissions=0&scope=bot%20applications.commands
4. ローカルでGitリポジトリをクローンし、npm iなどでライブラリをダウンロードする。
5. config.jsを作成する。
    - token: Botのトークン。
    - applicationId: BotのアプリケーションID。
    - guildId: 導入先のサーバーID。開発者モードにして右クリ > 「サーバーIDをコピー」で取得可能。
5. npm run depstart でコマンド登録 + サーバー起動。

## 参考
https://www.geeklibrary.jp/counter-attack/discord-js-bot/#3discordjs%25e3%2581%25ae%25e3%2582%25a4%25e3%2583%25b3%25e3%2582%25b9%25e3%2583%2588%25e3%2583%25bc%25e3%2583%25ab
