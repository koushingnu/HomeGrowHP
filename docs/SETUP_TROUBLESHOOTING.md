# TailwindCSS セットアップのトラブルシューティング

## 発生した問題

1. PostCSSプラグインのエラー

```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin.
```

2. tailwind-mergeの依存関係エラー

```
Module not found: Can't resolve 'tailwind-merge'
```

## 解決方法

### 1. 正しいパッケージバージョンの設定

`package.json`に以下の依存関係を設定：

```json
{
  "dependencies": {
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.17",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### 2. TailwindCSSの設定

`tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // カスタムテーマ設定
    },
  },
  plugins: [],
};
```

### 3. PostCSSの設定

`postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 4. 最小限のglobals.css

`src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## トラブルシューティングの手順

1. 依存関係のクリーンアップ

```bash
rm -rf node_modules .next package-lock.json
```

2. 設定ファイルの再生成

```bash
npx tailwindcss init -p
```

3. 依存関係の再インストール

```bash
npm install
```

4. tailwind-mergeのインストール（コンポーネントでクラス名を結合する場合）

```bash
npm install tailwind-merge
```

## 注意点

1. **バージョンの互換性**

   - Next.js 14.1.0以降では、TailwindCSS v3.4.1以上を使用
   - PostCSS 8.4.35以上を推奨

2. **設定ファイルの形式**

   - `next.config.js`または`next.config.mjs`を使用（`.ts`拡張子は非対応）
   - PostCSSの設定は最小限に保つ

3. **コンポーネントでの使用**
   - `tailwind-merge`を使用する場合は、明示的にインストールが必要
   - クラス名の動的な結合には`twMerge`関数を使用

## ベストプラクティス

1. 依存関係の管理

   - 具体的なバージョン番号を指定
   - 互換性のあるバージョンの組み合わせを使用

2. 設定ファイル

   - 設定は必要最小限にする
   - カスタマイズは段階的に追加

3. コンポーネント設計
   - 再利用可能なユーティリティクラスを活用
   - スタイルの衝突を避けるため`tailwind-merge`を使用

## 参考リンク

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [TailwindCSS 公式ドキュメント](https://tailwindcss.com/docs)
- [tailwind-merge ドキュメント](https://github.com/dcastil/tailwind-merge)
