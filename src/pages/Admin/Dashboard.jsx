import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-row">
                <div className="main-section">
                    <h1>Dashboard</h1>
                    <div className="stats-section">
                        <div className="stat-box1">
                            <div className="percentage-circle">
                                <div className="inner-circle"></div>
                                <span>70%</span>
                            </div>
                            <div className="icon">📊</div>
                            <div className="text1">
                                <h3>Sales</h3>
                            </div>
                            <div className="count">
                                <h4>$200,000</h4>
                            </div>
                            <div className="details">
                                <h5>Last 24 Hours</h5>
                            </div>
                        </div>
                        <div className="stat-box2">
                            <div className="percentage-circle2">
                                <div className="inner-circle2"></div>
                                <span>80%</span>
                            </div>
                            <div className="icon">💰</div>
                            <div className="text1">
                                <h3>Revenue</h3>
                            </div>
                            <div className="count">
                                <h4>$200,000</h4>
                            </div>
                            <div className="details">
                                <h5>Last 24 Hours</h5>
                            </div>
                        </div>
                        <div className="stat-box3">
                            <div className="percentage-circle3">
                                <div className="inner-circle3"></div>
                                <span>60%</span>
                            </div>
                            <div className="icon">💸</div>
                            <div className="text1">
                                <h3>Expenses</h3>
                            </div>
                            <div className="count">
                                <h4>$200,000</h4>
                            </div>
                            <div className="details">
                                <h5>Last 24 Hours</h5>
                            </div>
                        </div>
                    </div>

                    <div className="orders-box">
                        <h2>Recent Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Tracking ID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Additional Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Milk Tea</td>
                                    <td>123456</td>
                                    <td>2024-09-28</td>
                                    <td><span className="status-approved">Approved</span></td>
                                    <td><span className="text-details">Details</span></td>
                                </tr>
                                <tr>
                                    <td>Coffee</td>
                                    <td>654321</td>
                                    <td>2024-09-29</td>
                                    <td><span className="status-pending">Pending</span></td>
                                    <td><span className="text-details">Details</span></td>
                                </tr>
                                <tr>
                                    <td>Milk Tea</td>
                                    <td>123456</td>
                                    <td>2024-09-28</td>
                                    <td><span className="status-approved">Approved</span></td>
                                    <td><span className="text-details">Details</span></td>
                                </tr>
                                <tr>
                                    <td>Coffee</td>
                                    <td>654321</td>
                                    <td>2024-09-29</td>
                                    <td><span className="status-delivered">Delivered</span></td>
                                    <td><span className="text-details">Details</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="side-section">
                    <div className="updates-box">
                        <h2>Recent Updates</h2>
                        <ul>
                            <li>
                                <img src="path/to/imageA.jpg" alt="User A" className="update-image" />
                                <span>User A updated profile</span>
                                <span>1 min ago</span>
                            </li>
                            <li>
                                <img src="path/to/imageB.jpg" alt="User B" className="update-image" />
                                <span>User B updated payment method</span>
                                <span>1 min ago</span>
                            </li>
                            <li>
                                <img src="path/to/imageC.jpg" alt="User C" className="update-image" />
                                <span>User C updated shipping address</span>
                                <span>1 min ago</span>
                            </li>
                        </ul>
                    </div>

                    <div className="review-chart">
                        <h2>Custom Review</h2>
                        <div className="chart-placeholder">Chart goes here</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
