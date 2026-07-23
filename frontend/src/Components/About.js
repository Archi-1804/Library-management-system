import React from 'react';
import './About.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function About() {
    const highlights = [
        "Sub-50ms catalog indexing and filter search",
        "Automated hold reservation and return queue",
        "24/7 E-reader for scientific journals and research",
        "Quiet study pod allocation with live occupancy map"
    ];

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-card-bento bento-card">
                    <div className="about-grid-inner">
                        <div className="about-text-col">
                            <span className="badge-pill badge-emerald mb-2">Platform Overview</span>
                            <h2 className="about-title">
                                Built for research, speed, and <br />
                                <span className="text-gradient-indigo">uncompromising reliability.</span>
                            </h2>
                            <p className="about-desc">
                                LibraHub replaces legacy library software with a modern digital platform designed for high-capacity circulation, automated member management, and instant document retrieval.
                            </p>

                            <div className="about-list">
                                {highlights.map((item, idx) => (
                                    <div key={idx} className="about-list-item">
                                        <CheckCircleIcon className="list-check-icon" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-preview-col">
                            <div className="code-snippet-box">
                                <div className="snippet-header">
                                    <span className="snippet-dot dot-red"></span>
                                    <span className="snippet-dot dot-yellow"></span>
                                    <span className="snippet-dot dot-green"></span>
                                    <span className="snippet-title">circulation-config.json</span>
                                </div>
                                <pre className="snippet-code">
                                    <code>
{`{
  "system": "LibraHub Core Engine",
  "version": "2.4.0",
  "database": "MongoDB Atlas Cluster",
  "indexing": "Elastic Vector Index",
  "autoHoldLimit": 5,
  "defaultHoldDuration": "14 Days",
  "status": "OPERATIONAL_99.9"
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


