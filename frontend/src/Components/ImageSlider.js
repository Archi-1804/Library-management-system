import React from 'react';
import './ImageSlider.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ImageSlider() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                {/* Main Hero Headline */}
                <h1 className="hero-main-title">
                    Knowledge, curated for <br className="desktop-break" />
                    <span className="text-gradient-indigo">modern intellects.</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle">
                    Streamline book reservations, monitor real-time circulation analytics, and explore over 35,000+ digital and print publications in a unified workstation.
                </p>

                {/* CTA Action Buttons */}
                <div className="hero-cta-group">
                    <Link to="/books" className="btn-primary-indigo">
                        <span>Explore Catalog</span>
                        <ArrowForwardIcon style={{ fontSize: 18 }} />
                    </Link>
                    <Link to="/signin" className="btn-secondary-border">
                        <span>Member Portal</span>
                    </Link>
                </div>

                {/* Interactive Product Mockup Dashboard */}
                <div className="hero-mockup-wrapper">
                    <div className="mockup-window bento-card">
                        {/* Mockup Header Bar */}
                        <div className="mockup-header">
                            <div className="window-dots">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                            </div>
                            <div className="mockup-address-bar">
                                <span className="address-text">librahub.internal/catalog/search</span>
                            </div>
                            <div className="status-live-indicator">
                                <CheckCircleIcon style={{ fontSize: 14, color: '#10B981', marginRight: 4 }} />
                                <span>Operational</span>
                            </div>
                        </div>

                        {/* Mockup Body Content */}
                        <div className="mockup-body">
                            <div className="mockup-search-row">
                                <div className="mockup-search-box">
                                    <SearchIcon className="mockup-search-icon" />
                                    <span className="mockup-query">"Artificial Intelligence & Machine Learning"</span>
                                    <span className="mockup-count-tag">142 Results</span>
                                </div>
                                <button className="mockup-filter-btn">
                                    <BookmarkIcon style={{ fontSize: 14 }} />
                                    <span>Hold Queue</span>
                                </button>
                            </div>

                            {/* Mockup Book Cards Ribbon */}
                            <div className="mockup-cards-ribbon">
                                <div className="mini-book-card">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/41xShLch03L._SX376_BO1,204,203,200_.jpg" alt="Clean Code" className="mini-cover" />
                                    <div className="mini-info">
                                        <span className="mini-tag">Available</span>
                                        <h4 className="mini-title">Clean Code</h4>
                                        <p className="mini-author">Robert C. Martin</p>
                                    </div>
                                </div>

                                <div className="mini-book-card">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg" alt="Sapiens" className="mini-cover" />
                                    <div className="mini-info">
                                        <span className="mini-tag tag-accent">Reserved</span>
                                        <h4 className="mini-title">Sapiens: A Brief History</h4>
                                        <p className="mini-author">Yuval Noah Harari</p>
                                    </div>
                                </div>

                                <div className="mini-book-card">
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg" alt="Atomic Habits" className="mini-cover" />
                                    <div className="mini-info">
                                        <span className="mini-tag">Available</span>
                                        <h4 className="mini-title">Atomic Habits</h4>
                                        <p className="mini-author">James Clear</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImageSlider;


