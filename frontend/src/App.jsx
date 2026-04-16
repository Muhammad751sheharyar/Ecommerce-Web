import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Router from './router/router';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* Aapka main Router component niche routes ko handle karega */}

            <Router />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
