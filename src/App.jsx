import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/Header.css';
import '../src/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Character from './components/Character';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="App">
      <Header />
      <Pagination />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/character/:id' element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
      <Pagination />
    </div>
  )
}

export default App
