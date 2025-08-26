import React from 'react';
import { FaRegCircleDot, FaRegClock } from "react-icons/fa6";
import { MdOutlineVerifiedUser, MdVerified } from "react-icons/md";
import EnvironmentalImpactChart from './EnvironmentalImpactChart';
import GaugeChart from 'react-gauge-chart';
import './Dashboard.css';
import SteelCompositionPieChart from './SteelCompositionPieChart';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="card">
                    <div className="card-header">
                        <h1>High-Strength Low-Alloy Steel (HSLA-S)</h1>
                    </div>
                    
                    <div className="card-header-row">
                        <p>DPP-STL-HSLA-001-A</p>
                        <div className="verified-badge">
                            <MdVerified />
                            <p>Blockchain Verified</p>
                        </div>
                    </div>
                    <div className="product-image-container">
                        <img src="https://myqrcode.com/wp-content/uploads/2024/04/QR-Codes-on-Stainless-Steel_Main-Illustration_11zon.jpg" alt="Steel beam" />
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
                    <img src="https://tracecircle.com/wp-content/uploads/2025/08/mapp-dashboard.jpg" alt="Lifecycle journey" className="lifecycle-image" />
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
                        <h2>Chemical Composition</h2>
                    </div>
                    <SteelCompositionPieChart></SteelCompositionPieChart>
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
                
                
                
                
            </div>
        </div>
    );
}

export default Dashboard;