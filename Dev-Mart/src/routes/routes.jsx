import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/home/home';

const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    }
])

export default publicRoutes;



