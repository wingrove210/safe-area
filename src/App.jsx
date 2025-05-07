import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    if (tg) {
      tg.ready();
      tg.expand(); // 1. Раскрываем на весь экран
      tg.setHeaderColor('bg_color'); // 2. Важно именно 'bg_color'
      tg.setBackgroundColor('bg_color'); // 3. Синхронизируем с фоном
      tg.enableClosingConfirmation(); // 4. Опционально: подтверждение закрытия
    }
  }, []);

  return (
    <div className="app-root">
      <div className="content">
        <h1>Indi.Community</h1>
        <div className="bot-info">
          <p>My Telegram App</p>
          <p>@indi_communitybot</p>
        </div>
      </div>
    </div>
  );
}

export default App;