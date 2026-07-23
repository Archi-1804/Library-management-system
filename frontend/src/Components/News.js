import React from 'react';
import './News.css';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ExtensionIcon from '@material-ui/icons/Extension';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function News() {
    const competitions = [
        { title: "National Essay Writing Contest 2026", date: "Aug 15, 2026", desc: "Submit your original essay on 'AI and the Future of Libraries' to win cash prizes and publications." },
        { title: "Annual Book Review Championship", date: "Sep 02, 2026", desc: "Present a 3-minute critique of any scientific or literary classic. Open to all students." },
        { title: "Creative Storytelling Workshop", date: "Sep 18, 2026", desc: "Interactive session with renowned author & playwright on character creation." }
    ];

    const quizzes = [
        { title: "Weekly World Literature Quiz", date: "Every Friday", desc: "Test your knowledge on classic world literature and win free library coffee passes." },
        { title: "Science & Tech Trivia Challenge", date: "Aug 10, 2026", desc: "Online quiz covering computing history, physics milestones, and space exploration." },
        { title: "Speed Reading & Retention Test", date: "Aug 25, 2026", desc: "Evaluate your reading speed and comprehension using our automated portal." }
    ];

    return (
        <section className="news-section" id="news">
            <div className="news-container">
                <div className="section-header text-center">
                    <div>
                        <span className="badge-tag badge-accent mb-1">Stay Informed</span>
                        <h2 className="section-title">Events & News Updates</h2>
                    </div>
                </div>

                <div className="news-grid">
                    <div className="news-column glass-panel">
                        <div className="column-title-wrap">
                            <EmojiEventsIcon className="column-icon trophy-icon" />
                            <h3 className="column-title">Competitions & Contests</h3>
                        </div>
                        <div className="news-list">
                            {competitions.map((item, idx) => (
                                <div key={idx} className="news-card">
                                    <div className="news-date">
                                        <CalendarTodayIcon style={{ fontSize: 14 }} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h4 className="news-card-title">{item.title}</h4>
                                    <p className="news-card-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="news-column glass-panel">
                        <div className="column-title-wrap">
                            <ExtensionIcon className="column-icon quiz-icon" />
                            <h3 className="column-title">Interactive Quizzes</h3>
                        </div>
                        <div className="news-list">
                            {quizzes.map((item, idx) => (
                                <div key={idx} className="news-card">
                                    <div className="news-date">
                                        <CalendarTodayIcon style={{ fontSize: 14 }} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h4 className="news-card-title">{item.title}</h4>
                                    <p className="news-card-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;

