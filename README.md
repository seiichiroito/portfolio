# Seiichiro Portfolio

Next.js (App Router) 製のポートフォリオサイト。静的書き出しした `out/` を Cloudflare Workers の静的アセットとして配信し、ドメインは Cloudflare Registrar で管理しています。

- 構成: Next.js 16 (静的書き出し) + Cloudflare Workers + Cloudflare (DNS/Registrar)

## 技術スタック

- **Framework**: Next.js 16 (App Router, JavaScript)
- **Styling**: styled-components v6 (SWC コンパイラ + SSR registry) / Tailwind CSS (ユーティリティのみ)
- **Projects**: ローカル JSON (`src/data/projects.json`)
- **Blog**: ローカル MDX (`src/posts/`) を next-mdx-remote でレンダリング
- **Form**: Formspree

## 開発

```bash
npm install
npx playwright install chromium # 初回のみ、表示テスト用ブラウザーを用意
npm run dev                  # http://localhost:3000
npm run build                # out/ に静的サイトを出力
npm test                     # ビルドして画面のリンク・文言を検証
```

Windows PowerShell では `npm` を `npm.cmd`、`npx` を `npx.cmd` に読み替えてください。

`npm test` は画面のリンク・文言と、スマートフォンからデスクトップまでの表示を確認します。テスト用サーバーとブラウザーは終了時に自動で閉じます。

ローカル開発・ビルドに環境変数は不要です。

ナビでは、今開いているページのリンクに背景色が付きます。

## サイトの使い方

- ホームと Projects では、作品のタイトルか画像を押すと作品サイトを開きます。「View site」は作品サイト、「Source code」は GitHub を別のタブで開きます。「Built with:」の下は使用技術です。
- ホームの Latest Blog と Blog 一覧では、下線付きの記事名や画像から記事を開きます。作品を紹介する記事の末尾にある「Related project」は、その作品サイトへのリンクです。
- 練習用クローンの記事には「A clone made for practice.」と表示します。本家のサイトとは異なります。
- Contact から問い合わせできます。フォームは Formspree を使い、返信の目安は2〜3日です。SNS アイコンにはリンク先の名前が付き、マウスを置くと表示されます。

## 作品を足す

1. `public/images/projects/` に幅 1200px 以下の WebP 画像を置く（品質 80 程度）。
2. `src/data/projects.json` に既存の項目を参考に1件追加する。`id` は一意にし、`image.src` に `/images/projects/<ファイル名>.webp`、`image.width`・`image.height` に画像の実寸を指定する。
3. `featured: true` にするとトップページにも表示される。表示順は JSON の配列順（既存作品は作成日時の古い順）。

追加後は再ビルド・デプロイしてください。自作ツールを公開したときも同じ手順で掲載できます。

## デプロイ (Cloudflare Workers)

1. Cloudflare で Workers のデプロイと対象ゾーンのカスタムドメイン設定ができる API Token を発行し、Account ID を確認する。
2. GitHub リポジトリの **Settings → Secrets and variables → Actions → Repository secrets** に次を登録する（Environment secrets ではなくリポジトリ直下）。

   | Secret                  | 用途                 |
   | ----------------------- | -------------------- |
   | `CLOUDFLARE_API_TOKEN`  | Wrangler の認証      |
   | `CLOUDFLARE_ACCOUNT_ID` | デプロイ先アカウント |

3. `main` に push するか、**Actions → Deploy to Cloudflare Workers → Run workflow** を実行する。

Node.js 24 で `npm ci` → `npm run build` → `npx wrangler deploy` を実行します。Cloudflare の認証情報が空なら、OAuth ログイン待ちに入らずエラーメッセージを出して停止します。Worker スクリプトや OpenNext は使いません。

手元からは Node.js 24 を使い、`CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ACCOUNT_ID` をシェルの環境変数に設定して実行します。

```bash
npm run deploy
```

作品データはビルド時に確定します。更新後は Actions の手動実行または `npm run deploy` で再デプロイしてください。

## ドメイン設定 (seiichiroito.com / Cloudflare)

`wrangler.jsonc` の `routes` に両ホストを `custom_domain: true` で登録しています。デプロイ時に Workers のカスタムドメインが DNS レコードと証明書を作成するため、配信先 IP や CNAME を手で追加する必要はありません。

初回は Cloudflare の **DNS → Records** で `@` と `www` の旧配信先レコードを確認し、競合するレコードを削除してからデプロイしてください。詳しくは [Cloudflare のカスタムドメイン手順](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) を参照してください。

canonical URL は `https://www.seiichiroito.com` です。両ホストで同じ静的サイトを配信します。

## ツールを置く

- 同じアプリで作る: `src/app/<ツール名>/page.js` を追加すると、`https://www.seiichiroito.com/<ツール名>/` で公開されます。静的書き出しに対応したページにし、ブラウザで動く処理には Client Component を使います。
- 別に作った静的ツールを置く: ビルド済みの `index.html`・JS・CSS などを `public/<ツール名>/` に配置します。アセットの参照先（base パス）は `/<ツール名>/` に合わせ、同名の App Router ページと重複させないでください。

どちらも追加後に再ビルド・デプロイします。サーバー実行が必要な API や SSR はこの構成では使えません。
