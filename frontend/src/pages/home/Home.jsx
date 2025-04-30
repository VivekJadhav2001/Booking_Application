import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Header from '../../components/Header/Header.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import FeaturedCities from '../../components/FeaturedCities/FeaturedCities.jsx'
import { PropertyList } from '../../components/PropertyList/PropertyList.jsx'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import MailList from '../../components/MailList/MailList.jsx'

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Hero/>
            <div className="homeContainer mt-[50px] flex flex-col gap-[20px] max-w-6xl mx-auto ">
                <FeaturedCities/>
                <h1 className="homeTitle font-bold text-2xl">Browse By Property Type</h1>
                <PropertyList/>
                <h1 className="homeTitle font-bold text-2xl">Homes guests love</h1>
                <FeaturedProperties/>
            </div>
                <MailList/>
                <Footer/>
        </div>
    )
}

export default Home