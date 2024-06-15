import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<SignIn />}/>
            <Route exact path='/signup' element={<SignUp />}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;