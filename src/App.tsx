import React from 'react';
import './App.css';
import ReadingScreen from './components/ReadingScreen/ReadingScreen';
// 👉 引入螢火蟲特效
import Fireflies from './components/Fireflies/fireflies'; 

function App() {
  return (
    <div className="App">
      {/* 👉 召喚螢火蟲特效 (放在背景層) */}
      <Fireflies /> 

      {/* 👉 確保內容在螢火蟲之上 */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <header className="App-header" style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ color: '#FFD700', textShadow: '0 0 10px rgba(255,215,0,0.5)' }}>命運酒館</h1>
        </header>
        
        <main>
          <ReadingScreen />
        </main>
      </div>
    </div>
  );
}

export default App;
