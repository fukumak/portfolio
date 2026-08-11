# Portfolio — Fukumoto

[![CI](https://github.com/fukumak/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/fukumak/portfolio/actions/workflows/ci.yml)

**インフラ・セキュリティ × AI開発 × 業務改善** をテーマにした個人ポートフォリオサイトです。
Next.js (App Router) + TypeScript + Tailwind CSS で構築し、経歴・スキル・制作物を1ページにまとめています。

| | |
|---|---|
| 公開サイト | https://portfolio-black-six-14.vercel.app/ |
| 技術スタック | Next.js 16 / React 19 / TypeScript 5 / Tailwind CSS v4 |
| ソース | このリポジトリ |

---

## 作った理由

現職ではインフラ・セキュリティ運用と社内業務の改善を担当しています。
成果の大半は社内システムの中にあり、そのままでは外に出せません。

「何を課題だと捉え、どう作って、何が改善されたのか」を自分の言葉と実物で示せる場所が必要だと考え、
公開できるアウトプットをこのサイトに集約しました。

---

## 技術選定

| 領域 | 採用 | 理由 |
|---|---|---|
| フレームワーク | Next.js 16 (App Router) | 既定がサーバーコンポーネントで、ほぼ静的なページを軽いJSで配信できる。Vercelへのデプロイまで一貫して扱える |
| 言語 | TypeScript | 各セクションの掲載データを型付きの定数として持たせ、項目の追加・変更時に崩れを防ぐため |
| スタイル | Tailwind CSS v4 | `@tailwindcss/postcss` 経由。v4 では設定を CSS 側（`@theme`）に寄せられるため、設定ファイルを増やさず色とフォントを一元管理できる |
| Lint | ESLint 9 (Flat Config) | `eslint-config-next` を Flat Config で読み込み |

---

## ディレクトリ構成

```
.github/workflows/
  ci.yml         push / PR ごとに lint と build を実行
app/
  layout.tsx            ルートレイアウト / メタデータ / フォント読み込み
  page.tsx              各セクションを縦に並べるだけの単一ページ
  globals.css           テーマカラー・共通アニメーション（@theme で定義）
  opengraph-image.tsx   OGP画像をビルド時に生成
components/
  Navbar.tsx        追従ナビ・モバイルメニュー（唯一の Client Component）
  Hero.tsx          ファーストビュー
  About.tsx         3つの強み
  Skills.tsx        スキルをカテゴリ別に表示
  Projects.tsx      制作物一覧（GitHub / デモ / 資料へのリンク）
  WorkHistory.tsx   経歴と業務改善の実績
  Certifications.tsx 保有資格
  Contact.tsx       プロフィール・外部リンク
public/            画像・公開資料（PDF）
```

---

## 設計上の判断

**1ページ構成にした**
採用担当の方が最短で全体を把握できることを優先し、ルーティングを分けずアンカーリンクで移動する構成にしました。ページ遷移がない分、読み飛ばしも戻りも容易です。

**データとビューを分離した**
各コンポーネントは先頭に掲載内容を型付きの定数配列（`projects` / `achievements` / `certs` など）として置き、JSX はそれを `map` するだけにしています。
実績や資格が増えたときにレイアウトを触らずに済み、更新のコストを下げる狙いです。実際、初期公開後の更新はほぼ配列への追記だけで完結しています。

**Client Component を最小限にした**
状態を持つのはスクロール追従とハンバーガーメニューを扱う `Navbar` のみで、`"use client"` はこの1ファイルだけです。
残りはサーバーコンポーネントのままにして、ブラウザに送るJSを増やさないようにしています。

**色をCSS変数に集約した**
ベースカラーを `globals.css` の `:root` と `@theme` で定義し、アクセントカラー（`#d97706` 系）で統一しました。
配色は途中でダークテーマからライトなクリーム系に全面変更しています（`fc42d3a`）。この切り替えを1コミットで完了できたのは、色の定義箇所をまとめていたためです。

---

## 品質面で気をつけたこと

**コントラスト比を実測して調整した**
薄いグレー（`#292524/40` = 2.35:1）やアクセント色（`#d97706` = 3.01:1）を文字色に使っていた箇所が WCAG 2.1 AA の基準（通常の文字で 4.5:1）を下回っていたため、全ての文字色を実測のうえ調整しました。
現在は本文・リンク・キャプションのすべてが 4.5:1 以上、見出しは大きな文字の基準 3:1 以上を満たしています。

**動きを減らす設定を尊重する**
OS側で「視差効果を減らす」を有効にしている場合、スムーススクロール・フェードイン・スクロールヒントのアニメーションを無効化します（`prefers-reduced-motion`）。

**キーボードとスクリーンリーダーへの対応**
モバイルメニューの開閉ボタンに `aria-expanded` / `aria-controls` と状態に応じたラベルを設定し、Escキーでも閉じられるようにしています。`<html lang="ja">` を指定し、読み上げ言語が正しく判定されるようにしました。

**CIで壊れた状態を検知する**
push と Pull Request のたびに GitHub Actions で `npm ci` → `lint` → `build` を実行しています。ローカルでの確認漏れがそのまま公開されることを防ぐためです。

**リンク共有時の見え方を用意した**
`app/opengraph-image.tsx` で OGP 画像をビルド時に生成しています。メールやチャットにURLを貼ったときに、白紙のプレビューにならないようにするためです。

---

## AI（Claude Code）の使い方について

このサイトは Claude Code と共同で開発しました。伏せずに書いておきます。

- **自分が決めたこと**：サイトの軸とターゲット、セクションの構成と順序、掲載する実績とその表現、配色の方向性、どこまで作り込んで公開に踏み切るかの判断
- **AIに任せたこと**：Tailwind のクラス組み立て、レスポンシブ調整の初期案、定型的なコンポーネントの雛形
- **進め方**：1コミット1目的を守り、生成された実装は必ず自分で確認して、意図と違うものは差し戻しています。修正コミット（`18d0db2` モバイル表示の余白二重、`9b3758b` PC表示の右余白）はその過程で見つけて直したものです

道具として使いこなすことと、丸投げすることは違うと考えています。現職でも同じ姿勢で自動化ツールの改修にあたっています。

---

## ローカルでの実行

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # 本番ビルド
npm run lint    # ESLint
```

---

## その他のアウトプット

| 制作物 | 概要 | リンク |
|---|---|---|
| 機器管理システム（AssetFlow） | Excelで分散していた機器台帳をWebアプリに集約。ステータス更新と変更ログの自動記録に対応（開発中） | [Repo](https://github.com/fukumak/device-history) / [Demo](https://fukumak.github.io/device-history/) |
| マニュアル作成ツール | ブロックを組み合わせて手順書を作るWebアプリ。D&D並べ替え・インライン編集・プレビュー対応（開発中） | [Demo](https://manual-tool-murex.vercel.app/) |
| ポモドーロタイマー | 集中の維持を目的に自作。円形プログレス・自動モード切替・セッション履歴を実装 | [Repo](https://github.com/fukumak/pomodoro-timer) / [Demo](https://fukumak.github.io/pomodoro-timer) |

GitHub: [@fukumak](https://github.com/fukumak)
