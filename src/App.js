import React,{Component} from 'react';
import './App.css';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forget from './pages/Forget'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './pages/Header'
import ClaimAdjuster from './pages/ClaimAdjuster';
class App extends Component {
  render(){ 
    return(
     <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
           <Route path="/Signup" element={<Signup/>} />
            <Route path='/Forget' element={<Forget/>} />
            <Route path='/ClaimAdjuster' element={<ClaimAdjuster/>}/>
        </Routes>
      </Router>
    );
  } 
}
export default App;
