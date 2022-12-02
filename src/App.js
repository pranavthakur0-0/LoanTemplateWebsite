
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About.jsx';
import Contact from  './component/Contactus.jsx';


function App() {
  return (
    <>
            <Router>
              <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
              </Routes>
            </Router>
    </>
  );
}

export default App;
