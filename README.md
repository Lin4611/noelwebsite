@'
# Noel Website (React + Vite)

## 專案功能摘要
- **用途**: 一個以 React 與 Vite 建置的個人作品 / 作品集展示網站範例，包含首頁、作品集、服務、部落格列表與文章內容頁。
- **特性**: 多頁面路由、作品卡片與 modal 詳細視窗、共用元件（Header、Footer、SectionTitle、ArticlePopup）、響應式導覽與圖像資源管理。
- **技術棧**: React, Vite, React Router（hash routing）、專案內 CSS（`src/styles`）。

## 專案架構
- 根目錄:
  - `index.html`：應用入口 HTML。
  - `vite.config.js`：Vite 設定。
  - `package.json`：npm 指令與相依套件。
- `public/`：靜態資源（若有）。
- `src/`：
  - `App.jsx`、`main.jsx`、`assets/`、`components/`、`pages/`、`router/`、`styles/` 等。

## 主要模組說明
- `src/main.jsx`：應用啟動與 Router 初始化。
- `src/router/WebRouter.jsx`：路由表（/, /portfolio, /services, /blog, /blog/:id）。
- `src/components/Header.jsx`：導覽。
- `src/components/Footer.jsx`：頁尾。
- `src/pages/PortfolioPage.jsx`：作品清單與 `ArticlePopup`。
- `src/components/ArticlePopup.jsx`：作品詳情 modal。
- `src/components/SectionTitle.jsx`：區段標題元件。
- `src/styles/`：樣式與共用變數。

## 安裝方式
```powershell
npm install
npm run dev
