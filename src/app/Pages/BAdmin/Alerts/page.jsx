"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Alerts() {
    const [filter, setFilter] = useState("All");

    const alertsFeed = [
        {
            id: 1,
            severity: "Critical",
            app: "Zoho Desk",
            icon: "🎧",
            time: "10 mins ago",
            title: "Abnormal Ticket Volume Detected",
            message: "Your support ticket volume is 40% higher today than your daily average. Significant spike in 'Login Issues'.",
            actions: [
                { label: "Run Analysis Report", icon: "📊", primary: true },
                { label: "Notify Support Team", icon: "💬", primary: false }
            ]
        },
        {
            id: 2,
            severity: "Critical",
            app: "Zoho Books",
            icon: "📚",
            time: "1 hour ago",
            title: "SLA Breach: Overdue Invoice",
            message: "Invoice #1024 for Acme Corp is now 30 days overdue ($12,450.00).",
            actions: [
                { label: "AI: Draft Reminder", icon: "✨", primary: true },
                { label: "View in Books", icon: "👁️", primary: false }
            ]
        },
        {
            id: 3,
            severity: "Warning",
            app: "Zoho CRM",
            icon: "🤝",
            time: "3 hours ago",
            title: "Stale Deals Detected",
            message: "John Doe has 5 active Deals in the pipeline that haven't been updated in 14 days.",
            actions: [
                { label: "Nudge Rep", icon: "✉️", primary: true },
                { label: "Ask AI for Summary", icon: "🤖", primary: false }
            ]
        },
        {
            id: 4,
            severity: "Warning",
            app: "Zoho Inventory",
            icon: "📦",
            time: "5 hours ago",
            title: "Low Inventory Alert",
            message: "SKU-992 (Server Racks) has dropped below the reorder threshold.",
            actions: [
                { label: "Generate PO Draft", icon: "📝", primary: true }
            ]
        },
        {
            id: 5,
            severity: "Informational",
            app: "Cross-App",
            icon: "✅",
            time: "8 hours ago",
            title: "Daily Summary Generated",
            message: "Your automated daily revenue and pipeline summary has been processed and emailed.",
            actions: [
                { label: "View Report", icon: "📈", primary: false }
            ]
        }
    ];

    const filteredAlerts = filter === "All" ? alertsFeed : alertsFeed.filter(a => a.severity === filter);

    const getSeverityBadgeClass = (severity) => {
        switch(severity) {
            case 'Critical': return 'badge-critical';
            case 'Warning': return 'badge-warning';
            case 'Informational': return 'badge-info';
            default: return '';
        }
    };

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="main-content">
                
                {/* Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Proactive Alerts & Anomalies</h1>
                        <p className="page-subtitle">AI-detected events requiring your attention across the Zoho ecosystem.</p>
                    </div>
                    <div className="header-meta">
                        <span className="unresolved-count">2 Critical</span>
                        <span className="scanned-text">Last scanned: Just now</span>
                    </div>
                </div>

                {/* Filters */}
                <div className="filters-row">
                    {["All", "Critical", "Warning", "Informational"].map(f => (
                        <button 
                            key={f} 
                            className={`filter-pill ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Alert Feed */}
                <div className="alert-feed-container">
                    {filteredAlerts.length === 0 ? (
                        <div className="empty-state">No alerts in this category.</div>
                    ) : (
                        <div className="alert-list">
                            {filteredAlerts.map(alert => (
                                <div key={alert.id} className={`alert-card ${getSeverityBadgeClass(alert.severity)}`}>
                                    <div className="alert-indicator"></div>
                                    
                                    <div className="alert-body">
                                        <div className="alert-header">
                                            <div className="alert-context">
                                                <span className="app-icon">{alert.icon}</span>
                                                <span className="app-name">{alert.app}</span>
                                                <span className="dot-separator">•</span>
                                                <span className="alert-time">{alert.time}</span>
                                            </div>
                                            <span className={`severity-badge ${getSeverityBadgeClass(alert.severity)}`}>
                                                {alert.severity}
                                            </span>
                                        </div>
                                        
                                        <div className="alert-content">
                                            <h3 className="alert-title">{alert.title}</h3>
                                            <p className="alert-message">{alert.message}</p>
                                        </div>

                                        <div className="alert-actions">
                                            {alert.actions.map((act, idx) => (
                                                <button 
                                                    key={idx} 
                                                    className={`action-btn ${act.primary ? 'primary' : 'secondary'}`}
                                                >
                                                    <span className="btn-icon">{act.icon}</span>
                                                    {act.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="alert-dismiss">
                                        <button className="dismiss-btn" title="Dismiss Alert">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --alert-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --alert-shadow: 0 10px 40px rgba(0,0,0,0.3);
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

                /* Header */
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

                .header-meta {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 4px;
                }

                .unresolved-count {
                    background: rgba(239, 68, 68, 0.1);
                    color: #EF4444;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 600;
                    display: inline-block;
                    border: 1px solid rgba(239, 68, 68, 0.2);
                }

                .scanned-text {
                    font-size: 12px;
                    color: var(--text-sub);
                }

                /* Filters */
                .filters-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .filter-pill {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .filter-pill:hover { border-color: var(--gold); }

                .filter-pill.active {
                    background: var(--text-main);
                    color: var(--bg-card);
                    border-color: var(--text-main);
                }

                /* Alert Feed */
                .alert-feed-container {
                    flex: 1;
                    max-width: 900px;
                }

                .alert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .alert-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    display: flex;
                    overflow: hidden;
                    box-shadow: var(--alert-shadow);
                    transition: all 0.3s;
                }
                
                .alert-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.1);
                }

                .alert-card.badge-critical { border-color: rgba(239, 68, 68, 0.3); }
                .alert-card.badge-warning { border-color: rgba(245, 158, 11, 0.3); }

                .alert-indicator {
                    width: 6px;
                    flex-shrink: 0;
                }

                .badge-critical .alert-indicator { background-color: #EF4444; }
                .badge-warning .alert-indicator { background-color: #F59E0B; }
                .badge-info .alert-indicator { background-color: #3B82F6; }

                .alert-body {
                    flex: 1;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .alert-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .alert-context {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--text-sub);
                    font-size: 13px;
                }

                .app-icon { font-size: 16px; }
                .app-name { font-weight: 500; color: var(--text-main); }
                .dot-separator { opacity: 0.5; }

                .severity-badge {
                    font-size: 11px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .severity-badge.badge-critical { background: rgba(239, 68, 68, 0.1); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); }
                .severity-badge.badge-warning { background: rgba(245, 158, 11, 0.1); color: #F59E0B; border: 1px solid rgba(245, 158, 11, 0.2); }
                .severity-badge.badge-info { background: rgba(59, 130, 246, 0.1); color: #3B82F6; border: 1px solid rgba(59, 130, 246, 0.2); }

                .alert-content {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .alert-title {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .alert-message {
                    margin: 0;
                    font-size: 15px;
                    color: var(--text-main);
                    opacity: 0.8;
                    line-height: 1.5;
                }

                .alert-actions {
                    display: flex;
                    gap: 12px;
                    margin-top: 8px;
                }

                .action-btn {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .action-btn.primary {
                    background: var(--gold);
                    color: #FFFFFF;
                    border: none;
                    box-shadow: 0 2px 8px rgba(184, 132, 42, 0.2);
                }

                .action-btn.primary:hover {
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.4);
                    transform: translateY(-1px);
                    filter: brightness(1.1);
                }

                .action-btn.secondary {
                    background: transparent;
                    color: var(--text-main);
                    border: 1px solid var(--border-main);
                }

                .action-btn.secondary:hover {
                    background: var(--bg-page);
                    border-color: var(--gold);
                }

                .alert-dismiss {
                    padding: 16px;
                }

                .dismiss-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-sub);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }

                .dismiss-btn:hover {
                    background: var(--bg-page);
                    color: var(--text-main);
                }

                .empty-state {
                    padding: 40px;
                    text-align: center;
                    color: var(--text-sub);
                    font-size: 15px;
                    background: var(--bg-card);
                    border: 1px dashed var(--border-main);
                    border-radius: 12px;
                }
            `}</style>
        </div>
    );
}
