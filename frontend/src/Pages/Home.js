import React from 'react';
import ImageSlider from '../Components/ImageSlider';
import WelcomeBox from '../Components/WelcomeBox';
import About from '../Components/About';
import Stats from '../Components/Stats';
import RecentAddedBooks from '../Components/RecentAddedBooks';
import PopularBooks from '../Components/PopularBooks';
import ReservedBooks from '../Components/ReservedBooks';
import News from '../Components/News';
import PhotoGallery from '../Components/PhotoGallery';
import Footer from '../Components/Footer';
import './Home.css';

function Home() {
    return (
        <div id="home" className="home-layout-wrapper">
            {/* 1. Hero Section */}
            <ImageSlider />

            {/* 2. Key Metrics Stats Ribbon */}
            <Stats />

            {/* 3. Main Dashboard Bento Layout */}
            <main className="home-main-content">
                {/* Primary Features Bento Grid */}
                <section className="home-section-block">
                    <WelcomeBox />
                </section>

                {/* Split Interactive Dashboard View */}
                <section className="home-split-grid">
                    <div className="split-left">
                        <RecentAddedBooks />
                    </div>
                    <div className="split-right">
                        <ReservedBooks />
                    </div>
                </section>

                {/* Popular Collections Section */}
                <section className="home-section-block">
                    <PopularBooks />
                </section>

                {/* Architecture & Feature Spotlight */}
                <section className="home-section-block">
                    <About />
                </section>

                {/* Community & Gallery Grid */}
                <section className="home-split-grid secondary-split">
                    <div className="split-left-wide">
                        <News />
                    </div>
                    <div className="split-right-narrow">
                        <PhotoGallery />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
