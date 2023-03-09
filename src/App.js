import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PAGES
import Home from './page/Home';
import Characters from './page/Characters';
import Character from './page/Character';
import Locations from './page/Locations';
import Episodes from './page/Episodes';
import Search from './page/Search';

// TEMPLATE
import Header from './template/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character' element={<Characters />} />
          <Route path='/character/:id' element={<Character />} />
          <Route path='/location' element={<Locations />} />
          <Route path='/episode' element={<Episodes />} />
          <Route path='/search/:search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
