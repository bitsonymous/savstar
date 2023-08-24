import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import HeadlineCards from './HeadlineCards'
import Food from './Food'
import Category from './Category'
import { About } from './About'
import { Footer } from './Footer'
import Statistic from './Statistics'

function Home() {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <HeadlineCards />
        <Statistic />
        <About />
        {/* <Food />
        <Category /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default Home;
