import React from 'react';
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { isAuthenticated } from './services/auth';

const PrivateRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/"/>
}

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<SignIn />}/>
            <Route exact path='/signup' element={<SignUp />}/>
            <Route exact path='/app' element={<PrivateRoute> <h1>Welcome to LibraryZ</h1> </PrivateRoute>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;