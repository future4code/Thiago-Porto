import { Card } from './components/Card';
import { Header } from './components/Header';
import { MatchList } from './components/MatchList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="matchList" element={<MatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
