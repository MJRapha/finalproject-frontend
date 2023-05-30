//import React from 'react'
//import css from './Home.module.scss'
import UncontrolledCarousel from '../../components/carousel/UncontrolledCarousel'
import FeaturesBar from '../../components/features-bar/FeaturesBar'
import MultiCarousel from '../../components/multi-carousel/MultiCarousel'
import Footer from "../../components/footer/Footer"
import css from "./Home.module.scss"

const Home = () => {
    return (
        <>
            <UncontrolledCarousel />
            <FeaturesBar />
            <div className="w-99.8 p-4 d-flex flex-column align-items-left text-decoration-none">
                <h3 className={css.p}>Best Offer</h3>
            </div>
            <MultiCarousel />
            <Footer />
        </>
    )
}

export default Home