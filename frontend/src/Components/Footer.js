import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-top-grid">
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-brand">
                            <div className="footer-logo-icon">
                                <LocalLibraryIcon style={{ fontSize: 24, color: '#FFFFFF' }} />
                            </div>
                            <span className="footer-brand-text">LIBRA<span className="brand-accent">HUB</span></span>
                        </Link>
                        <p className="footer-about-text">
                            Empowering students, educators, and lifelong learners with instant access to academic resources, digital holds, and rich literary catalogs.
                        </p>
                        <div className="footer-socials">
                            <a href="#home" aria-label="Twitter" className="social-link"><TwitterIcon /></a>
                            <a href="#home" aria-label="LinkedIn" className="social-link"><LinkedInIcon /></a>
                            <a href="#home" aria-label="Telegram" className="social-link"><TelegramIcon /></a>
                            <a href="#home" aria-label="Instagram" className="social-link"><InstagramIcon /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Quick Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home Overview</Link></li>
                            <li><Link to="/books">Books Catalog</Link></li>
                            <li><Link to="/signin">Member Login</Link></li>
                            <li><a href="#about">About Our Library</a></li>
                            <li><a href="#news">News & Events</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Library Services</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Digital Book Holds</a></li>
                            <li><a href="#home">Study Room Booking</a></li>
                            <li><a href="#home">E-Resource Portal</a></li>
                            <li><a href="#home">Borrowing Guidelines</a></li>
                            <li><a href="#home">Research Assistance</a></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4 className="footer-col-title">Contact & Help Desk</h4>
                        <div className="contact-info-list">
                            <div className="contact-item">
                                <LocationOnIcon className="contact-icon" />
                                <span>Government Campus, Visakhapatnam - 530041, AP, India</span>
                            </div>
                            <div className="contact-item">
                                <MailOutlineIcon className="contact-icon" />
                                <span>support@librahub.edu</span>
                            </div>
                            <div className="contact-item">
                                <PhoneIcon className="contact-icon" />
                                <span>+91 91234 56789</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <p className="copyright-text">
                        &copy; 2026 LibraHub LMS. All rights reserved. Designed with <span className="heart">❤️</span> for modern education.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;