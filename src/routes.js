import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<SignIn />}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;