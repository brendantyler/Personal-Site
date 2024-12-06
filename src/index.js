import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout/Layout';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import '../src/Styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index path="/Personal-Site" element={<HomePage />} />"
                    <Route path="/about" element={<h1>About</h1>} />"
                    <Route path="/projects" element={<h1>Projects</h1>} />"
                    <Route path="/contact" element={<h1>Contact</h1>} />"
                    <Route path="/resume" element={<h1>Resume</h1>} />"
                    <Route path="*" element={<h1>Not Found</h1>} />"
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
