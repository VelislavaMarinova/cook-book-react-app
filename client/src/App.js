import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Main from './main/Main';
import Header from './header/Header';
import Signin from './signin/Signin';
import Signup from './signup/Signup';

import './App.css';
import { AuthProvider } from './store/auth-context';


const App = () => {
  return (
   <AuthProvider>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />}></Route>
        </Routes>
      </Main>
    </AuthProvider>

  )
};

export default App;
