import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const initializeApp = () => {
      const tg = window.Telegram?.WebApp;
      
      if (tg) {
        tg.ready();
        tg.expand();
        tg.setHeaderColor('secondary_bg_color');
        tg.setBackgroundColor('secondary_bg_color');
        return true;
      }
      return false;
    };

    // Попытка инициализации при монтировании
    if (!initializeApp()) {
      // Перехват ошибки если SDK не загружен
      console.error('Telegram Web App SDK not found!');
    }
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Telegram App</h1>
      </header>
      
      <main className="content">
        <div className="card">
          <h2>Welcome!</h2>
          <p>Telegram Web App initialized: {window.Telegram ? 'Yes' : 'No'}</p>
        </div>
      </main>
    </div>
  );
}

export default App;