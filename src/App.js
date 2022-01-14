import React from 'react'

import { About, Article, Contact, Gallery, Home, Navbar, NGO, PHD } from './components';
import { Header, Blog, Footer } from './containers';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div> 
                <Home />
                <About />
                <Footer />                       
        </div>
    )
}

export default App
