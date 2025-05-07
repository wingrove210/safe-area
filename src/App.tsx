import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Инициализация Telegram Web App
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      Telegram.WebApp.ready();
      Telegram.WebApp.expand();
      Telegram.WebApp.setHeaderColor('secondary_bg_color');
      Telegram.WebApp.setBackgroundColor('secondary_bg_color');
    }
  }, []);

  return (
    <div className="app-container">
      {/* Хедер с безопасным отступом сверху */}
      <header className="app-header">
        <h1>My Telegram App</h1>
      </header>

      {/* Основной контент с отступами */}
      <main className="content">
        <div className="card">
          <h2>Card Title</h2>
          <p>This is example content</p>
        </div>
        <div className="card">
          <h2>Another Card</h2>
          <p>More example text</p>
        </div>
      </main>

      {/* Футер с безопасным отступом снизу */}
      <footer className="app-footer">
        <button className="tg-button">Action</button>
      </footer>
    </div>
  );
}

export default App;