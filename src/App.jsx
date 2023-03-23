import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './custom.scss'
import './styles/Header.css';
import '../src/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/character/:id' element={<Character></Character>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
