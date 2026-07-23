import React from "react";
import "./PopularBooks.css";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function PopularBooks() {
  const popularBooks = [
    {
      id: 1,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "History",
      rating: "4.9",
      cover: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
      status: "Top Rated"
    },
    {
      id: 2,
      title: "Clean Code: Refactoring & Architecture",
      author: "Robert C. Martin",
      category: "Computer Science",
      rating: "4.8",
      cover: "https://images-na.ssl-images-amazon.com/images/I/41xShLch03L._SX376_BO1,204,203,200_.jpg",
      status: "Most Borrowed"
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      rating: "4.9",
      cover: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
      status: "Available"
    },
    {
      id: 4,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      category: "Psychology",
      rating: "4.7",
      cover: "https://images-na.ssl-images-amazon.com/images/I/61f1YfTkTDL.jpg",
      status: "Available"
    }
  ];

  return (
    <section className="catalog-section">
      <div className="catalog-container">
        <div className="catalog-header">
          <div>
            <span className="badge-pill badge-indigo mb-1">
              <WhatshotIcon style={{ fontSize: 14, marginRight: 4 }} /> Reader Favorites
            </span>
            <h2 className="catalog-title">Most Popular Publications</h2>
          </div>
        </div>

        <div className="catalog-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="catalog-card bento-card">
              <div className="catalog-cover-box">
                <img src={book.cover} alt={book.title} className="catalog-img" />
                <span className="status-pill status-amber">
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
                  <Link to="/signin" className="catalog-btn">Hold</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularBooks;


