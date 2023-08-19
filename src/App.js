import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Skillset from './Pages/Skillset';                                                                 
import Cadetlife from './Pages/Cadetlife';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import FTC from './Pages/FTC';
import Volunteering from './Pages/Volunteering';
import Achievements from './Pages/Achievements';






  function App() {
    return (
      <div className="App">

      <Router>
        
      <div style={{zIndex:1000}}>
      < Navbar/>
      </div>  
       

      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/home' element={<Home />} />
        <Route path = '/skillset' element={<Skillset />} /> 
        <Route path = '/cadetlife' element={<Cadetlife />} /> 
        {/* <Route path = '/Footer' element={<Footer />} /> */}
        <Route path = '/ftc' element={<FTC />} />
        <Route path = '/volunteering' element={<Volunteering />} />
        <Route path = '/achievements' element={<Achievements />} />
      </Routes>
      </Router>
        
      </div>
    );
  }

  export default App;
