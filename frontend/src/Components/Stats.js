import React from 'react';
import './Stats.css';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function Stats() {
    const statData = [
        {
            icon: <LibraryBooksIcon className="stat-ribbon-icon" />,
            title: "Total Print & E-Volumes",
            count: "35,420+",
            badge: "Live Index"
        },
        {
            icon: <LocalLibraryIcon className="stat-ribbon-icon" />,
            title: "Active Scholars & Readers",
            count: "3,250+",
            badge: "Registered"
        },
        {
            icon: <BookmarkIcon className="stat-ribbon-icon" />,
            title: "Monthly Holds & Returns",
            count: "1,480+",
            badge: "Circulation"
        },
        {
            icon: <CloudDownloadIcon className="stat-ribbon-icon" />,
            title: "Digital Archiving Uptime",
            count: "99.9%",
            badge: "SLA Guaranteed"
        }
    ];

    return (
        <section className="stats-ribbon-section">
            <div className="stats-ribbon-container">
                <div className="stats-ribbon-grid">
                    {statData.map((item, index) => (
                        <div key={index} className="stat-ribbon-card bento-card">
                            <div className="stat-ribbon-top">
                                <div className="stat-icon-circle">{item.icon}</div>
                                <span className="stat-badge-mini">{item.badge}</span>
                            </div>
                            <h3 className="stat-ribbon-count">{item.count}</h3>
                            <p className="stat-ribbon-title">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;