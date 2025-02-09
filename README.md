# Random Pick
Random Pickは配列からランダムでターゲットを選択してくれるDiscord Botです。

## 使い方
* /pick targets pickcount
    targetsの中からランダムでpickcountの数だけ選択し返す。
    - targets: 必須。選択対象の配列。カンマ区切りの文字列で入力する。
    - pickcount: 必須。targetsから何件選択するかを決める。

## 導入方法
~~現状はローカルでサーバーを起動するに留めてあります。~~
現在はRender.com上で動作しているためローカルでの起動は不要です。

### 登録の手順
不要となった手順。もしローカルで起動したい場合は下記の手順で。
1. 下記のリンクから導入先のサーバーにBotを追加する。
    https://discord.com/api/oauth2/authorize?client_id=1336239566817857536&permissions=0&scope=bot%20applications.commands
2. config.jsを作成する。
    - token: Botのトークン。
    - applicationId: BotのアプリケーションID。
    - guildId: 導入先のサーバーID。開発者モードにして右クリ > 「サーバーIDをコピー」で取得可能。
3. npm run depstart でコマンド登録 + サーバー起動。

## 参考
https://www.geeklibrary.jp/counter-attack/discord-js-bot/#3discordjs%25e3%2581%25ae%25e3%2582%25a4%25e3%2583%25b3%25e3%2582%25b9%25e3%2583%2588%25e3%2583%25bc%25e3%2583%25ab
