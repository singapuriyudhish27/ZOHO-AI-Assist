"use client";
import React from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function SAdminPage() {
    
    const platformMetrics = [
        { label: "Total MRR", value: "$124,500", trend: "+12.5%", icon: "💰" },
        { label: "Active Businesses", value: "1,240", trend: "+45 this week", icon: "🏢" },
        { label: "Total Team Seats", value: "8,650", trend: "avg 7/tenant", icon: "👥" },
        { label: "Active AI Sessions", value: "412", trend: "Live Now", icon: "⚡" }
    ];

    const planDistribution = [
        { name: "Starter", count: 450, color: "#94A3B8" },
        { name: "Professional", count: 520, color: "#B8842A" },
        { name: "Business", count: 210, color: "#1E293B" },
        { name: "Enterprise", count: 60, color: "#000000" }
    ];

    const recentEvents = [
        { id: 1, type: "Registration", business: "Acme Corp", plan: "Professional", time: "12 mins ago" },
        { id: 2, type: "Upgrade", business: "Global Tech", plan: "Enterprise", time: "45 mins ago" },
        { id: 3, type: "System Alert", business: "Platform-wide", plan: "N/A", message: "Zoho CRM API Spike Detected", time: "1 hour ago", critical: true },
        { id: 4, type: "Registration", business: "Starlight Inc", plan: "Starter", time: "2 hours ago" },
        { id: 5, type: "Billing", business: "Zenith Solutions", plan: "Business", message: "Payment Successful ($249.00)", time: "4 hours ago" }
    ];

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Platform Command Center</h1>
                        <p className="page-subtitle">Super Admin Overview — Monitoring the ZohoAI Assistant SaaS ecosystem.</p>
                    </div>
                    <div className="system-clock">
                        <span className="uptime-label">System Uptime:</span>
                        <span className="uptime-val text-green">99.98%</span>
                    </div>
                </div>

                {/* Executive Metrics Grid */}
                <div className="metrics-grid">
                    {platformMetrics.map(m => (
                        <div key={m.label} className="metric-card">
                            <div className="card-top">
                                <span className="m-icon">{m.icon}</span>
                                <span className="m-trend">{m.trend}</span>
                            </div>
                            <div className="m-info">
                                <h3 className="m-val">{m.value}</h3>
                                <p className="m-label">{m.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Middle Section: Health & Growth */}
                <div className="dashboard-grid-mid">
                    
                    {/* Technical Health Monitor */}
                    <div className="platform-card technical-health">
                        <h2 className="card-title">Technical Health Monitor</h2>
                        <div className="health-list">
                            <div className="health-item">
                                <span className="health-status status-green"></span>
                                <div className="health-info">
                                    <span className="h-name">Zoho API Bridge</span>
                                    <span className="h-meta">OAuth Service OK (Active)</span>
                                </div>
                            </div>
                            <div className="health-item">
                                <span className="health-status status-green"></span>
                                <div className="health-info">
                                    <span className="h-name">LLM Engine (Anthropic/OpenAI)</span>
                                    <span className="h-meta">Latency: 210ms (Stable)</span>
                                </div>
                            </div>
                            <div className="health-item">
                                <span className="health-status status-yellow"></span>
                                <div className="health-info">
                                    <span className="h-name">PostgreSQL Database</span>
                                    <span className="h-meta">Load: 68% (Elevated)</span>
                                </div>
                            </div>
                            <div className="health-item">
                                <span className="health-status status-green"></span>
                                <div className="health-info">
                                    <span className="h-name">Email Delivery (SendGrid)</span>
                                    <span className="h-meta">Queue: 0 pending</span>
                                </div>
                            </div>
                        </div>
                        <button className="secondary-action-btn mt-16">View Logs</button>
                    </div>

                    {/* Subscription Distribution */}
                    <div className="platform-card subscription-stats">
                        <h2 className="card-title">Plan Distribution</h2>
                        <div className="chart-mockup">
                            {/* Simple visual bar comparison for now */}
                            {planDistribution.map(plan => (
                                <div key={plan.name} className="plan-usage-row">
                                    <div className="plan-label-row">
                                        <span className="p-name">{plan.name}</span>
                                        <span className="p-count">{plan.count}</span>
                                    </div>
                                    <div className="p-bar-bg">
                                        <div className="p-bar-fill" style={{ width: `${(plan.count/600)*100}%`, background: plan.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Recent Platform Activity & Business Customers */}
                <div className="dashboard-grid-bottom">
                    
                    {/* Business Customers Table */}
                    <div className="platform-card customers-card">
                        <div className="card-header-flex">
                            <h2 className="card-title">Business Customers (Last 5)</h2>
                            <button onClick={() => window.location.href='/Pages/SAdmin/BCustomers'} className="text-link-btn">View All</button>
                        </div>
                        <div className="table-wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Business Name</th>
                                        <th>Plan</th>
                                        <th>Members</th>
                                        <th>Revenue</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Acme Corp</strong></td>
                                        <td><span className="p-badge pro">Professional</span></td>
                                        <td>12</td>
                                        <td>$99.00</td>
                                        <td><span className="s-badge active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Global Tech</strong></td>
                                        <td><span className="p-badge enterprise">Enterprise</span></td>
                                        <td>45</td>
                                        <td>$599.00</td>
                                        <td><span className="s-badge active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Starlight Inc</strong></td>
                                        <td><span className="p-badge starter">Starter</span></td>
                                        <td>3</td>
                                        <td>$49.00</td>
                                        <td><span className="s-badge active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Zenith Solutions</strong></td>
                                        <td><span className="p-badge business">Business</span></td>
                                        <td>22</td>
                                        <td>$249.00</td>
                                        <td><span className="s-badge active">Active</span></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cloud Nine</strong></td>
                                        <td><span className="p-badge pro">Professional</span></td>
                                        <td>8</td>
                                        <td>$99.00</td>
                                        <td><span className="s-badge active">Active</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Platform Activity */}
                    <div className="platform-card activity-feed">
                        <h2 className="card-title">Recent Platform Activity</h2>
                        <div className="event-list">
                            {recentEvents.map(ev => (
                                <div key={ev.id} className={`event-card ${ev.critical ? 'event-critical' : ''}`}>
                                    <div className="event-main">
                                        <span className="event-type">{ev.type}</span>
                                        <span className="dot-sep">•</span>
                                        <span className="event-business">{ev.business}</span>
                                        {ev.plan !== 'N/A' && (
                                            <span className="event-plan-badge">{ev.plan}</span>
                                        )}
                                    </div>
                                    {ev.message && <p className="event-message">{ev.message}</p>}
                                    <span className="event-time">{ev.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --platform-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --table-head: #FAFAFA;
                    --item-bg-hover: #F8F9FA;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --platform-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --table-head: #252529;
                    --item-bg-hover: #252529;
                }

                .app-container {
                    display: flex;
                    height: 100vh;
                    background-color: var(--bg-page);
                    overflow: hidden;
                    transition: background-color 0.3s;
                }

                .main-content {
                    flex: 1;
                    padding: 40px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .page-title {
                    font-family: var(--font-cormorant), serif;
                    font-size: 32px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin-bottom: 6px;
                    letter-spacing: -0.5px;
                }

                .page-subtitle {
                    font-size: 15px;
                    color: var(--text-sub);
                    font-weight: 300;
                }

                .uptime-label { font-size: 12px; color: var(--text-sub); text-transform: uppercase; margin-right: 8px; }
                .uptime-val { font-size: 15px; font-weight: 700; color: #10B981; }

                /* Metrics */
                .metrics-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                .metric-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    box-shadow: var(--platform-shadow);
                    transition: all 0.3s;
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .m-icon { font-size: 20px; }
                .m-trend { font-size: 11px; font-weight: 600; color: #10B981; background: rgba(16, 185, 129, 0.1); padding: 2px 8px; border-radius: 10px; }

                .m-val { font-size: 26px; font-weight: 700; margin: 0; color: var(--text-main); font-family: var(--font-cormorant); }
                .m-label { font-size: 13px; color: var(--text-sub); margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 0.5px; }

                /* Mid Grid */
                .dashboard-grid-mid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                /* Bottom Grid */
                .dashboard-grid-bottom {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 24px;
                }

                .platform-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 16px;
                    padding: 32px;
                    box-shadow: var(--platform-shadow);
                    transition: all 0.3s;
                }

                .card-header-flex {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .card-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0;
                    color: var(--text-main);
                }

                .text-link-btn {
                    background: transparent;
                    border: none;
                    color: var(--gold);
                    font-weight: 600;
                    cursor: pointer;
                    font-size: 13px;
                }

                /* Data Table */
                .table-wrapper { width: 100%; overflow-x: auto; }
                .data-table { width: 100%; border-collapse: collapse; text-align: left; }
                .data-table th { padding: 12px 16px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); border-bottom: 2px solid var(--border-main); font-weight: 700; background: var(--table-head); transition: background 0.3s; }
                .data-table td { padding: 16px; font-size: 14px; color: var(--text-main); border-bottom: 1px solid var(--border-main); }
                .data-table tr:hover { background: var(--item-bg-hover); }

                /* Badges */
                .p-badge { padding: 4px 10px; border-radius: 6px; font-size: 10px; font-weight: 700; text-transform: uppercase; border: 1px solid transparent; }
                .p-badge.starter { background: var(--bg-page); color: var(--text-sub); border-color: var(--border-main); }
                .p-badge.pro { background: rgba(184, 132, 42, 0.1); color: var(--gold); border-color: rgba(184, 132, 42, 0.2); }
                .p-badge.business { background: #1E293B; color: white; }
                :global(.dark) .p-badge.business { background: #334155; }
                .p-badge.enterprise { background: #000; color: #FFF; }
                :global(.dark) .p-badge.enterprise { background: #000; border-color: rgba(255,255,255,0.2); }

                .s-badge { padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 700; text-transform: uppercase; }
                .s-badge.active { background: rgba(16, 185, 129, 0.1); color: #10B981; border: 1px solid rgba(16, 185, 129, 0.2); }

                /* Health List */
                .health-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .health-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .health-status {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                }

                .status-green { background: #10B981; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); }
                .status-yellow { background: #F59E0B; box-shadow: 0 0 10px rgba(245, 158, 11, 0.4); }

                .health-info {
                    display: flex;
                    flex-direction: column;
                }

                .h-name { font-size: 14px; font-weight: 600; color: var(--text-main); }
                .h-meta { font-size: 11px; color: var(--text-sub); }

                .secondary-action-btn {
                    padding: 8px 16px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                    cursor: pointer;
                    margin-top: 24px;
                    transition: all 0.2s;
                }

                .secondary-action-btn:hover { border-color: var(--gold); }

                /* Plan Distribution */
                .chart-mockup {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .plan-usage-row { display: flex; flex-direction: column; gap: 8px; }
                .plan-label-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; color: var(--text-main); }
                .p-bar-bg { height: 8px; background: var(--bg-page); border-radius: 4px; overflow: hidden; border: 1px solid var(--border-main); }
                .p-bar-fill { height: 100%; border-radius: 4px; transition: width 1s ease; }

                /* Activity Feed */
                .event-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    margin-top: 24px;
                }

                .event-card {
                    padding: 16px 0;
                    border-bottom: 1px solid var(--border-main);
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    transition: background 0.2s;
                }

                .event-card:last-child { border-bottom: none; }

                .event-main {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 14px;
                }

                .event-type { font-weight: 700; color: var(--text-main); }
                .dot-sep { color: var(--border-main); }
                .event-business { color: var(--text-sub); }
                .event-plan-badge { font-size: 10px; background: var(--bg-page); color: var(--text-main); padding: 2px 8px; border-radius: 4px; font-weight: 700; text-transform: uppercase; border: 1px solid var(--border-main); opacity: 0.8; }

                .event-message { font-size: 13px; color: #EF4444; margin: 0; font-weight: 500; }
                .event-critical .event-type { color: #EF4444; }

                .event-time { font-size: 11px; color: var(--text-sub); }
            `}</style>
        </div>
    );
}
