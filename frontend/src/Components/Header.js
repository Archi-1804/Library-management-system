import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Header() {
    const [menutoggle, setMenutoggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Toggle = () => setMenutoggle(!menutoggle);
    const closeMenu = () => setMenutoggle(false);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                {/* Brand Group */}
                <div className="brand-group">
                    <Link to="/" className="brand-logo" onClick={closeMenu}>
                        <div className="logo-icon-box">
                            <LocalLibraryIcon className="brand-icon" />
                        </div>
                        <span className="brand-title">
                            LIBRA<span className="brand-gradient">HUB</span>
                        </span>
                    </Link>
                </div>

                {/* Central Pill Command Palette */}
                <div className={`command-search-trigger ${searchFocused ? 'search-focused' : ''}`}>
                    <SearchIcon className="search-icon-subtle" />
                    <input 
                        className="command-input" 
                        type="text" 
                        placeholder="Search books, authors, ISBNs..."
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                    />
                    <div className="kbd-badge">
                        <kbd>⌘K</kbd>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="nav-group">
                    <ul className={menutoggle ? "nav-list active" : "nav-list"}>
                        <li className={`nav-item ${location.pathname === '/' ? 'active-nav' : ''}`} onClick={closeMenu}>
                            <Link to="/">
                                <span>Home</span>
                                {location.pathname === '/' && <span className="nav-active-dot" />}
                            </Link>
                        </li>
                        <li className={`nav-item ${location.pathname === '/books' ? 'active-nav' : ''}`} onClick={closeMenu}>
                            <Link to="/books">
                                <span>Catalog</span>
                                {location.pathname === '/books' && <span className="nav-active-dot" />}
                            </Link>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <a href="#features">Features</a>
                        </li>
                        <li className="nav-item" onClick={closeMenu}>
                            <a href="#activity">Activity</a>
                        </li>
                        <li className="nav-item mobile-cta" onClick={closeMenu}>
                            <Link to="/signin" className="nav-cta-btn">
                                <span>Sign In</span>
                                <ArrowForwardIcon style={{ fontSize: 15 }} />
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Right Action Group */}
                <div className="action-group">
                    <Link to="/signin" className="nav-secondary-btn">
                        <LockOpenIcon style={{ fontSize: 16 }} />
                        <span>Portal</span>
                    </Link>
                    <Link to="/signin" className="nav-cta-btn">
                        <span>Sign In</span>
                        <ArrowForwardIcon style={{ fontSize: 15 }} />
                    </Link>
                    <div className="mobile-toggle" onClick={Toggle} aria-label="Toggle Navigation">
                        {menutoggle ? <ClearIcon /> : <MenuIcon />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;


