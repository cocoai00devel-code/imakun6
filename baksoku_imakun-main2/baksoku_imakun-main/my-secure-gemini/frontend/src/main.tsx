/** @jsxImportSource react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('🏛️ 致命的エラー：ルートエレメントが不在です。執行を中止します。');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
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