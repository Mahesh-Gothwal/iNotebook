import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Nabvar from './components/Nabvar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nabvar/>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
