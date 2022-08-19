
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Singup';
import Home from './Components/Home'
import { AuthContextProvider } from './Context/AuthContext.js'
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={ < Login /> } />
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/home" element={ <Home /> } />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
