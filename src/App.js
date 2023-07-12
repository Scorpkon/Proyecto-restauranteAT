import logo from './logo.svg';
import './App.css';
import { Auth, Landing } from './components/Auth';
import { Home } from './components/Home';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoutes from './components/ProtectedRoute';
function App() {
  const [ing, setIng]=useState(false);

  function handleChangeIng(x){
    setIng(x); 
    console.log(ing)
  }

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Auth changeIng={handleChangeIng} />}/>
    <Route path="/home" element={<ProtectedRoutes ing={ing}><Home/></ProtectedRoutes>} />
    
    <Route path="/landing" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
