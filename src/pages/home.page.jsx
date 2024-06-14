import React from 'react'
import {MyNavbar} from '../components/navbar'
import CenterHero from '../components/center_hero'
import Hero from '../components/hero'
import { MyFooter } from '../components/myfooter'

export const HomePage = () => {
    return (
        <>
            <MyNavbar />
            <CenterHero />
            {/* <Hero /> */}
            <Hero />
            <MyFooter />
        </>
    )
}
