import React from 'react';
import { FaRegCircleDot, FaRegClock } from "react-icons/fa6";
import { MdOutlineVerifiedUser, MdVerified } from "react-icons/md";
import EnvironmentalImpactChart from './EnvironmentalImpactChart';
import GaugeChart from 'react-gauge-chart';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="card">
                    <div className="card-header">
                        <h1>High-Strength Low-Alloy Steel Beam (HSLA-B)</h1>
                    </div>
                    <div className="card-header-row">
                        <p>DPP-STLB-HSLA-001-A</p>
                        <div className="verified-badge">
                            <MdVerified />
                            <p>Blockchain Verified</p>
                        </div>
                    </div>
                    <div className="product-image-container">
                        <img src="steel.jpeg" alt="Steel beam" />
                    </div>
                    <p className="card-description">
                        This Digital Product Passport(DPP) provides comprehensive, verifiable information about the steel's entire lifecycle, ensuring transparency and trust.
                    </p>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Steel Performance Index</h2>
                    </div>
                    <div className="gauge-container">
                        <GaugeChart 
                            id="steel-gauge" 
                            nrOfLevels={10} 
                            percent={0.82} 
                            textColor="#000" 
                            arcPadding={0.02} 
                            colors={["#FFD700", "#90ee90", "#32CD32"]} 
                            formatTextValue={() => "82%"}
                        />
                        <h2>Steel Quality Score</h2>
                        <p className="center-text">Calculated using AI on parameters such as tensile strength, corrosion resistance, carbon content and grain structure.</p>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Lifecycle Events</h2>
                    </div>
                    {[
                        { date: "11-12-2024", time: "09:30 AM UTC", text: "Manufacturing Completed: Final inspection and quality control.", verified: true },
                        { date: "11-12-2024", time: "11:45 AM UTC", text: "Left Manufacturing Facility: Dispatched for logistics partner.", verified: true },
                        { date: "11-12-2024", time: "03:00 PM UTC", text: "Arrived at Distribution Hub: Received by regional distribution center.", verified: true },
                        { date: "12-12-2024", time: "08:00 AM UTC", text: "With Supplier (Cut & Fabricated): Undergoing custom cutting and welding.", verified: true },
                        { date: "17-12-2024", time: "09:30 AM UTC", text: "Delivered to Construction Site: Received at project 'Bridge Alpha'.", verified: true },
                        { date: "21-12-2024", time: "07:00 AM UTC", text: "Installation Started: Integration into main structure. (Verification Pending)", verified: false },
                        { date: "17-12-2064", time: "12:00 PM UTC", text: "Estimated Operational Life: Projected end of primary service life.", verified: false }
                    ].map((event, index) => (
                        <div key={index} className="event-item">
                            <div className="event-meta">
                                <FaRegCircleDot className={event.verified ? "verified" : "pending"} />
                                <span>{event.date}</span>
                                <FaRegClock />
                                <span>{event.time}</span>
                                {event.verified && <MdOutlineVerifiedUser className="verified-icon" />}
                            </div>
                            <p><strong>{event.text}</strong></p>
                        </div>
                    ))}
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Environmental Impact</h2>
                    </div>
                    <EnvironmentalImpactChart />
                </div>
                
                <div className="card">
                    <div className="card-header">
                        <h2>Lifecycle Journey</h2>
                    </div>
                    <img src="lifecyclemap.png" alt="Lifecycle journey" className="lifecycle-image" />
                </div>
            </div>
            
            <div className="sidebar">
                <div className="card">
                    <div className="card-header1">
                        <h2>Product Overview</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Material Grade</p>
                            <p className="bold-text">ASTM A572 Grade 50</p>
                            <p>Manufacturing Date</p>
                            <p className="bold-text">11-12-2024</p>
                            <p>Purpose</p>
                            <p className="bold-text">Structural component for bridge construction</p>
                        </div>
                        <div>
                            <p>Dimensions</p>
                            <p className="bold-text">W 14x22, Length 40 ft</p>
                            <p>Origin</p>
                            <p className="bold-text">Germany(Thyssenkrupp Steel)</p>
                            <p>Harmonized System(HS) Code</p>
                            <p className="bold-text">7214.20</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header1">
                        <h2>Composition (Chemical Analysis)</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Iron(Fe)</p>
                            <p className="bold-text">98.1%</p>
                            <p>Manganese (Mn)</p>
                            <p className="bold-text">1.1%</p>
                            <p>Sulphur (S)</p>
                            <p className="bold-text">0.015%</p>
                            <p>Niobium (Nb)</p>
                            <p className="bold-text">0.03%</p>
                        </div>
                        <div>
                            <p>Carbon (C)</p>
                            <p className="bold-text">0.18%</p>
                            <p>Silicon (Si)</p>
                            <p className="bold-text">0.3%</p>
                            <p>Phosphorus (P)</p>
                            <p className="bold-text">0.02%</p>
                            <p>Vanadium (V)</p>
                            <p className="bold-text">0.01%</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header1">
                        <h2>Reusability & Recyclability</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Recyclability</p>
                            <p className="bold-text">100% (Infinitely Recyclable)</p>
                            <p>Reusability Potential</p>
                            <p className="bold-text">High, suitable for secondary structural applications</p>
                            <p>Circular Economy Metric</p>
                            <p className="bold-text">8.5/10</p>
                        </div>
                        <div>
                            <p>Recycled Content</p>
                            <p className="bold-text">75% Post-Consumer Scrap</p>
                            <p>End-of-Life Plan</p>
                            <p className="bold-text">Facilitated by certified recycling partners</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header1">
                        <h2>Certifications & Compliance</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>ISO 9001</p>
                            <p className="bold-text">Certified (Quality Management)</p>
                            <p>CE Marking</p>
                            <p className="bold-text">Compliance with EU standards</p>
                            <p>Responsible Steel</p>
                            <p className="bold-text">Pending Verification</p>
                        </div>
                        <div>
                            <p>ISO 14001</p>
                            <p className="bold-text">Certified (Environmental Management)</p>
                            <p>LEED Contribution</p>
                            <p className="bold-text">MRc2 (Construction Waste Management)</p>
                            <p>Conflict Minerals Policy</p>
                            <p className="bold-text">Compliant</p>
                        </div>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-header1">
                        <h2>Warranty & Support</h2>
                    </div>
                    <div className="two-column-grid">
                        <div>
                            <p>Structural Integrity</p>
                            <p className="bold-text">10 Years Limited Warranty</p>
                            <p>Corrosion Resistance(Coated)</p>
                            <p className="bold-text">5 Years Warranty</p>
                            <p>Manufacturing Defects</p>
                            <p className="bold-text">Covered under Standard Warranty</p>
                        </div>
                        <div>
                            <p>On-Site Inspection Support</p>
                            <p className="bold-text">Available on Request</p>
                            <p>Installation Guidance</p>
                            <p className="bold-text">Provided with Purchase</p>
                            <p>Extended Warranty Option</p>
                            <p className="bold-text">Upto 15 years(Optional)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;