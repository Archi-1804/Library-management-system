import React from 'react';
import './WelcomeBox.css';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

function WelcomeBox() {
    return (
        <section className="bento-section" id="features">
            <div className="bento-container">
                <div className="bento-header text-center">
                    <span className="badge-pill badge-indigo mb-2">Core Platform Engine</span>
                    <h2 className="bento-title">Engineered for modern academia.</h2>
                    <p className="bento-subtitle">
                        A unified digital library ecosystem designed for rapid search, seamless circulation, and digital archiving.
                    </p>
                </div>

                {/* 4-Box Bento Grid */}
                <div className="bento-grid">
                    {/* Bento Box 1: Vector Search */}
                    <div className="bento-card bento-wide">
                        <div className="bento-card-content">
                            <div className="bento-icon-box">
                                <SearchIcon className="bento-icon" />
                            </div>
                            <span className="bento-tag">Instant Search</span>
                            <h3 className="bento-card-title">Sub-50ms Catalog Indexing</h3>
                            <p className="bento-card-desc">
                                Search through titles, authors, subjects, and ISBNs in milliseconds with predictive autocompletion and filter pills.
                            </p>
                            <Link to="/books" className="bento-action-link">
                                <span>Browse Catalog</span>
                                <ArrowForwardIcon style={{ fontSize: 16 }} />
                            </Link>
                        </div>
                    </div>

                    {/* Bento Box 2: Smart Reservations */}
                    <div className="bento-card">
                        <div className="bento-card-content">
                            <div className="bento-icon-box">
                                <BookmarkIcon className="bento-icon" />
                            </div>
                            <span className="bento-tag">Smart Holds</span>
                            <h3 className="bento-card-title">Automated Reservation Queue</h3>
                            <p className="bento-card-desc">
                                Instant hold requests with automated status updates, return reminders, and pickup notifications.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 3: Digital E-Reader */}
                    <div className="bento-card">
                        <div className="bento-card-content">
                            <div className="bento-icon-box">
                                <CloudDownloadIcon className="bento-icon" />
                            </div>
                            <span className="bento-tag">24/7 E-Archives</span>
                            <h3 className="bento-card-title">Digital Publication Reader</h3>
                            <p className="bento-card-desc">
                                Read journals, scientific papers, and open educational resources directly from any device.
                            </p>
                        </div>
                    </div>

                    {/* Bento Box 4: Study Space Allocation */}
                    <div className="bento-card bento-wide">
                        <div className="bento-card-content">
                            <div className="bento-icon-box">
                                <MeetingRoomIcon className="bento-icon" />
                            </div>
                            <span className="bento-tag">Campus Facilities</span>
                            <h3 className="bento-card-title">Quiet Study Pod Allocation</h3>
                            <p className="bento-card-desc">
                                Reserve collaborative discussion rooms and individual quiet study pods with real-time availability calendar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WelcomeBox;


