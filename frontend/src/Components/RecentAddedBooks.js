import React from 'react';
import './RecentAddedBooks.css';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function RecentAddedBooks() {
    const recentBooks = [
        {
            id: 1,
            title: "Wings of Fire",
            author: "A.P.J. Abdul Kalam",
            category: "Autobiography",
            rating: "4.9",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
            status: "Available"
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self-Help",
            rating: "4.8",
            cover: "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg",
            status: "Available"
        },
        {
            id: 3,
            title: "Good to Great",
            author: "Jim Collins",
            category: "Business",
            rating: "4.7",
            cover: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
            status: "On Hold"
        },
        {
            id: 4,
            title: "The Subtle Art of Not Giving",
            author: "Mark Manson",
            category: "Philosophy",
            rating: "4.6",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg",
            status: "Available"
        }
    ];

    return (
        <section className="catalog-section">
            <div className="catalog-container">
                <div className="catalog-header">
                    <div>
                        <span className="badge-pill badge-indigo mb-1">Recent Index</span>
                        <h2 className="catalog-title">Freshly Uploaded Catalog Items</h2>
                    </div>
                    <Link to="/books" className="catalog-see-all">
                        <span>View Complete Index</span>
                        <ArrowForwardIcon style={{ fontSize: 16 }} />
                    </Link>
                </div>

                <div className="catalog-grid">
                    {recentBooks.map((book) => (
                        <div key={book.id} className="catalog-card bento-card">
                            <div className="catalog-cover-box">
                                <img src={book.cover} alt={book.title} className="catalog-img" />
                                <span className={`status-pill ${book.status === 'Available' ? 'status-green' : 'status-amber'}`}>
                                    <span className="status-dot"></span>
                                    {book.status}
                                </span>
                            </div>
                            <div className="catalog-details">
                                <span className="catalog-cat">{book.category}</span>
                                <h3 className="catalog-name">{book.title}</h3>
                                <p className="catalog-author">By {book.author}</p>
                                <div className="catalog-footer">
                                    <div className="catalog-rating">
                                        <StarIcon className="star-icon" />
                                        <span>{book.rating}</span>
                                    </div>
                                    <Link to="/signin" className="catalog-btn">Reserve</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentAddedBooks;