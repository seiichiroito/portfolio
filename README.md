# Seiichiro Portfolio

Next.js (App Router) 製のポートフォリオサイト。Vercel でホスティングし、ドメインは Cloudflare Registrar で管理しています。

- 旧構成: Gatsby v3 + Netlify
- 現構成: Next.js 14 + Vercel + Cloudflare (DNS/Registrar)

## 技術スタック

- **Framework**: Next.js 14 (App Router, JavaScript)
- **Styling**: styled-components v6 (SWC コンパイラ + SSR registry) / Tailwind CSS (ユーティリティのみ)
- **CMS**: Contentful (Projects)
- **Blog**: ローカル MDX (`src/posts/`) を next-mdx-remote でレンダリング
- **Form**: Formspree

## 開発

```bash
npm install
cp .env.example .env.local   # Contentful のキーを設定
npm run dev                  # http://localhost:3000
npm run build                # 本番ビルド
```

### 環境変数

| 変数 | 説明 |
| --- | --- |
| `CONTENTFUL_SPACE_ID` | Contentful の Space ID |
| `CONTENTFUL_API_KEY` | Contentful Content Delivery API のアクセストークン |

未設定でもビルドは通ります（Projects が空になるだけ）。

## デプロイ (Vercel)

1. [vercel.com](https://vercel.com) に GitHub アカウントでログイン
2. **Add New → Project** で `seiichiroito/portfolio` を Import
3. Framework は **Next.js** として自動検出される（設定変更不要）
4. **Environment Variables** に `CONTENTFUL_SPACE_ID` と `CONTENTFUL_API_KEY` を追加
5. **Deploy** を押す

以後は `main` ブランチへの push で自動デプロイされます。プロジェクトページは 1 時間ごとに再検証 (ISR) されるため、Contentful 更新後は最大 1 時間で反映されます。すぐ反映したい場合は Vercel で Redeploy してください。

## ドメイン設定 (seiichiroito.com / Cloudflare)

1. Vercel の **Project → Settings → Domains** で `seiichiroito.com` と `www.seiichiroito.com` を追加
   - `www.seiichiroito.com` を **Primary (Redirect 先)** に設定（サイトの canonical URL が `https://www.seiichiroito.com` のため）
2. Cloudflare の **DNS → Records** で Vercel が指示するレコードを追加:
   - `A` レコード: Name `@` → Vercel 表示の IP（例: `76.76.21.21`）
   - `CNAME` レコード: Name `www` → `cname.vercel-dns.com`
3. 両レコードとも **Proxy status を「DNS only」（グレー雲）** にする
   - Cloudflare のプロキシ（オレンジ雲）を有効にすると Vercel 側の SSL 発行・検証と競合します
4. Cloudflare の **SSL/TLS → Overview** で暗号化モードが **Full (Strict)** になっていることを確認（プロキシを使わない場合は影響しませんが安全のため）
5. Vercel 側で DNS 検証が通ると自動で Let's Encrypt 証明書が発行されます（数分〜1 時間程度）

## Netlify からの移行メモ

- Netlify 側の旧サイトは削除するか、デプロイを止めておく
- 旧ドメインの DNS 設定（Netlify DNS / 旧レジストラ）は不要
