# TED Speech Finder (Static HTML)

日本語または英語を選び、10個の質問に回答すると、各言語50件の人気スピーチ候補からおすすめ上位5件を表示する静的Webアプリです。

## 使い方

1. `index.html` をブラウザで開く
2. 言語を選んで「質問を始める」を押す
3. 10問に回答するとおすすめが表示される
4. 各おすすめの「スピーチページを見る / Open speech page」からTEDページへ移動できる

## 構成

- `index.html`: 画面構成（OGPタグ・Twitterカード・favicon設定を含む）
- `styles.css`: スタイル
- `app.js`: 質問ロジック、スコアリング、50件データ生成、スピーチリンク
- `assets/icon.svg`: アプリアイコン
- `assets/ogp-image.svg`: OGP用画像


## メタデータ補足

- `index.html` に canonical URL / `og:url` / `twitter:image:alt` を設定済みです。
