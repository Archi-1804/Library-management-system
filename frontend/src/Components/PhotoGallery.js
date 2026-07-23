import React from 'react';
import './PhotoGallery.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function PhotoGallery() {
    const photos = [
        { url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80", title: "Central Reading Hall" },
        { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", title: "Classical Rare Books Archives" },
        { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80", title: "Study Pods & Digital Lab" },
        { url: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80", title: "Quiet Discussion Rooms" },
        { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", title: "Fiction & Literature Stacks" },
        { url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80", title: "Periodicals & Scientific Journals" }
    ];

    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <div className="section-header text-center">
                    <div>
                        <span className="badge-tag badge-primary mb-1">
                            <PhotoLibraryIcon style={{ fontSize: 14, marginRight: 4 }} /> Campus Life
                        </span>
                        <h2 className="section-title">Library Campus Gallery</h2>
                    </div>
                </div>

                <div className="gallery-grid">
                    {photos.map((item, idx) => (
                        <div key={idx} className="gallery-card">
                            <img src={item.url} alt={item.title} className="gallery-img" />
                            <div className="gallery-overlay">
                                <span className="gallery-caption">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="gallery-footer-action">
                    <button className="gallery-more-btn">
                        <span>Explore Full Campus Tour</span>
                        <ArrowForwardIosIcon style={{ fontSize: 14 }} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PhotoGallery;