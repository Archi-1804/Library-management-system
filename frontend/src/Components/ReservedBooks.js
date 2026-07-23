import React from 'react';
import './ReservedBooks.css';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function ReservedBooks() {
    const activityStream = [
        { member: "Archi Shivhare", role: "Student Member", book: "Rich Dad Poor Dad", date: "2 mins ago", status: "Ready for Pickup" },
        { member: "Sashank V.", role: "Faculty", book: "The Subtle Art of Not Giving", date: "14 mins ago", status: "In Transit" },
        { member: "Tanishq Sharma", role: "Researcher", book: "Wings Of Fire", date: "1 hour ago", status: "Ready for Pickup" },
        { member: "Akhil Kumar", role: "Student Member", book: "The Secret", date: "2 hours ago", status: "Processing" },
        { member: "Surya K.", role: "Student Member", book: "Clean Code", date: "3 hours ago", status: "Hold Active" }
    ];

    return (
        <section className="activity-section" id="activity">
            <div className="activity-container">
                <div className="catalog-header text-center">
                    <div>
                        <span className="badge-pill badge-emerald mb-1">
                            <BookmarkIcon style={{ fontSize: 14, marginRight: 4 }} /> Live Stream
                        </span>
                        <h2 className="catalog-title">Active Circulation & Hold Monitor</h2>
                    </div>
                </div>

                <div className="activity-card bento-card">
                    <div className="table-responsive">
                        <table className="activity-table">
                            <thead>
                                <tr>
                                    <th>Member</th>
                                    <th>Reserved Title</th>
                                    <th>Timestamp</th>
                                    <th>Circulation Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activityStream.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="member-info-box">
                                                <div className="avatar-dot">{item.member.charAt(0)}</div>
                                                <div>
                                                    <span className="member-name">{item.member}</span>
                                                    <span className="member-role">{item.role}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="book-title-cell">{item.book}</td>
                                        <td className="time-cell">{item.date}</td>
                                        <td>
                                            <span className={`activity-status-pill ${item.status === 'Ready for Pickup' ? 'pill-ready' : item.status === 'Processing' ? 'pill-proc' : 'pill-active'}`}>
                                                <span className="status-dot"></span>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReservedBooks;


