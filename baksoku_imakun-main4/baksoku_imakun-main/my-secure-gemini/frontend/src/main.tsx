
/** @jsxImportSource react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 🛡️ 補正1: 型の安全性を極限まで高める（TypeScriptの型ガード）
const rootElement = document.getElementById('root');

if (rootElement instanceof HTMLElement) {
  // 🏛️ 正常系：執行の場が整っている場合
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // 🚨 異常系：ルートエレメントが不在、または型が不正な場合
  // ユーザーの画面に直接エラーを刻み込み、沈黙させる
  document.body.innerHTML = `
    <div style="background:#1a1a1a; color:red; height:100vh; display:flex; 
                flex-direction:column; justify-content:center; align-items:center; font-family:sans-serif;">
      <h1 style="font-size:3rem;">🏛️ 執行不能</h1>
      <p style="font-size:1.5rem;">致命的エラー：ルートエレメントが不在です。</p>
      <p>システムを安全に停止しました。</p>
    </div>
  `;
  throw new Error('🏛️ 致命的エラー：ルートエレメントが不在です。執行を中止します。');
}



// /** @jsxImportSource react */
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import App from './App.tsx'; 
// import App from './App'; // 👈 .tsx を削除

// const rootElement = document.getElementById('root');
// if (!rootElement) throw new Error('Failed to find the root element');

// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.tsx'
// // 修正前
// // import App from './App.tsx'

// // 修正後
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )