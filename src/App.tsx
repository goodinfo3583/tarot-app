import './App.css';
import ReadingScreen from './components/ReadingScreen/ReadingScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>塔羅牌占卜</h1>
      </header>
      <main>
        <ReadingScreen />
      </main>
    </div>
  );
}


      {/* 👉 召喚螢火蟲特效 */}
      <Fireflies /> 

      {/* 下面是你原本的 Provider 和路由，不需要動它們 */}
      <ReadingProvider>
         {/* 原本的程式碼... */}
      </ReadingProvider>

    </div>
  );
}


export default App;

