import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles/index.css';
import AppRouting from "./AppRouting.jsx"

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppRouting />
    </BrowserRouter>
);