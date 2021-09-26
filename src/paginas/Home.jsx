import React from 'react'
import Banner from '../componentes/Banner'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import Produtos from '../componentes/Produtos'
import Slider from '../componentes/Slider'
import {BrowserRouter as Router} from 'react-router-dom'

const Home = () => {
    return (
        <Router>
            <Header/>
            <Slider/>
            <Banner/>
            <Produtos/>
            <Footer/>
        </Router>
    )
}

export default Home
