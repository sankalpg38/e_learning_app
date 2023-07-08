import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import User from './components/User';
import About from './pages/About';
import Courses from './pages/user/Courses';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user' element={<User/>}>
        <Route path='courses' element={<Courses/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
