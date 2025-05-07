import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    
    if (tg) {
      tg.ready();
      
      // Основная настройка
      tg.expand();
      console.log("Hello", tg.requestFullscreen.content_safe_area_changed())
      tg.requestFullscreen.content_safe_area_changed();
      tg.setHeaderColor('bg_color');
      tg.setBackgroundColor('bg_color');
      
      // Дополнительные гарантии для Android
      if (/Android/.test(navigator.userAgent)) {
        document.documentElement.style.minHeight = '100%';
        window.scrollTo(0, 0);
      }
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