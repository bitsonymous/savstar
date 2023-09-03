import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Statistic from './components/Statistics';
import { About } from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <HeadlineCards/>
    <Statistic/>
    <About/>
    {/* <App /> */}
    <Footer/>
  </React.StrictMode>
);

