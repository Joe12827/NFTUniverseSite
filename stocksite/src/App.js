import './App.css';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

function App() {
  return (
    <div className="App">
      <header className="StockTracker">
        <TopBar/>
        <BottomBar/>
      </header>
    </div>
  );
}

export default App;
  