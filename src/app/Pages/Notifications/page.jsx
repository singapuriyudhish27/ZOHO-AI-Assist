"use client";
import React, { useState } from "react";
import TMemberSidebar from "@/Components/TMember_Sidebar";

export default function Notifications() {
    const [filter, setFilter] = useState("All");

    const initialNotifications = [
        { id: 1, app: "CRM", title: "Lead Assigned: Acme Corp", time: "10 mins ago", desc: "A high-value lead from New York has been assigned to your operational queue.", priority: "High", read: false },
        { id: 2, app: "Desk", title: "Urgent Ticket: API Sync Error", time: "1 hour ago", desc: "Client #842 reports critical failure in the automated Zoho Books sync.", priority: "High", read: false },
        { id: 3, app: "Projects", title: "Task Deadline: Q4 Review", time: "3 hours ago", desc: "The documentation review for internal API v2 is due by end of day.", priority: "Medium", read: true },
        { id: 4, app: "System", title: "Maintenance: Data Sync", time: "Yesterday", desc: "Scheduled platform maintenance will occur at 2:00 AM UTC.", priority: "Low", read: true },
        { id: 5, app: "Books", title: "Payment Received: Invoice #1021", time: "Yesterday", desc: "Acme Corp has cleared their outstanding balance via Stripe.", priority: "Medium", read: true }
    ];

    const [alerts, setAlerts] = useState(initialNotifications);

    const filteredAlerts = alerts.filter(a => filter === "All" || a.app === filter);

    const markRead = (id) => {
        setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a));
    };

    return (
        <div className="app-container">
            <TMemberSidebar />
            
            <main className="main-content">
                
                {/* Notification Header */}
                <div className="radar-header">
                    <div className="r-h-text">
                        <h1 className="r-h-title">Operational Radar</h1>
                        <p className="r-h-subtitle">Unified alerts across the Zoho ecosystem</p>
                    </div>
                    <div className="r-h-actions">
                        <button className="secondary-action-btn" onClick={() => setAlerts(alerts.map(a => ({...a, read: true})))}>Mark all Read</button>
                    </div>
                </div>

                {/* Filter Rail */}
                <div className="filter-rail glass">
                    <button onClick={() => setFilter("All")} className={`f-chip ${filter === "All" ? 'active' : ''}`}>All Alerts</button>
                    <button onClick={() => setFilter("CRM")} className={`f-chip ${filter === "CRM" ? 'active' : ''}`}>
                        <span className="dot crm"></span> Zoho CRM
                    </button>
                    <button onClick={() => setFilter("Desk")} className={`f-chip ${filter === "Desk" ? 'active' : ''}`}>
                        <span className="dot desk"></span> Zoho Desk
                    </button>
                    <button onClick={() => setFilter("Projects")} className={`f-chip ${filter === "Projects" ? 'active' : ''}`}>
                        <span className="dot projects"></span> Zoho Projects
                    </button>
                    <button onClick={() => setFilter("Books")} className={`f-chip ${filter === "Books" ? 'active' : ''}`}>
                        <span className="dot books"></span> Zoho Books
                    </button>
                </div>

                {/* Command Alert Feed */}
                <div className="alert-stream">
                    {filteredAlerts.map(alert => (
                        <div key={alert.id} className={`alert-card glass ${alert.read ? 'read' : 'unread'} ${alert.priority === 'High' ? 'urgent' : ''}`}>
                            <div className="a-c-indicator"></div>
                            <div className="a-c-body">
                                <div className="a-c-head">
                                    <span className={`a-c-origin ${alert.app.toLowerCase()}`}>{alert.app}</span>
                                    <span className="a-c-time">{alert.time}</span>
                                </div>
                                <div className="a-c-content">
                                    <h3 className="a-c-title">{alert.title}</h3>
                                    <p className="a-c-desc">{alert.desc}</p>
                                </div>
                                <div className="a-c-footer">
                                    <div className="a-c-actions">
                                        <button className="primary-action-btn sm">View Record</button>
                                        <button className="ai-spark-btn sm">✨ Analyze Context</button>
                                    </div>
                                    {!alert.read && (
                                        <button className="mark-read-btn" onClick={() => markRead(alert.id)}>Mark Read</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            <style jsx>{`
                /* Unified Theme Variables */
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: white;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --border-ghost: var(--border-light);
                    --shadow-main: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --border-ghost: rgba(255,255,255,0.04);
                    --shadow-main: 0 10px 40px rgba(0,0,0,0.3);
                }

                .app-container {
                    display: flex;
                    height: 100vh;
                    background-color: var(--bg-page);
                    overflow: hidden;
                    font-family: var(--font-outfit), sans-serif;
                    transition: background-color 0.3s;
                }

                .main-content {
                    flex: 1;
                    padding: 40px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    color: var(--text-main);
                }

                /* Header */
                .radar-header { display: flex; justify-content: space-between; align-items: flex-end; }
                .r-h-title { font-family: var(--font-cormorant), serif; font-size: 36px; font-weight: 600; color: var(--text-main); margin-bottom: 4px; }
                .r-h-subtitle { font-size: 15px; color: var(--text-sub); font-weight: 300; }
                .secondary-action-btn { background: transparent; border: 1.5px solid var(--border-main); color: var(--text-sub); padding: 8px 16px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 12px; transition: all 0.2s; }
                .secondary-action-btn:hover { border-color: var(--gold); color: var(--gold); }

                /* Filter Rail */
                .filter-rail { display: flex; gap: 8px; padding: 6px; background: var(--bg-card); border: 1px solid var(--border-main); border-radius: 14px; align-self: flex-start; }
                .f-chip { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: transparent; border: none; border-radius: 10px; font-size: 13px; font-weight: 700; color: var(--text-sub); cursor: pointer; transition: all 0.2s; }
                .f-chip.active { background: var(--gold); color: white; }
                .f-chip.active .dot { background: white; }

                .dot { width: 6px; height: 6px; border-radius: 50%; }
                .dot.crm { background: var(--gold); }
                .dot.desk { background: #3B82F6; }
                .dot.projects { background: #A855F7; }
                .dot.books { background: #10B981; }

                /* Alert Stream */
                .alert-stream { display: flex; flex-direction: column; gap: 16px; max-width: 800px; }
                .alert-card { display: flex; background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-main); box-shadow: var(--shadow-main); overflow: hidden; transition: all 0.3s; position: relative; }
                .alert-card.read { opacity: 0.7; }
                .alert-card.read:hover { opacity: 1; }
                .alert-card.unread { border-left-width: 0; }

                .a-c-indicator { width: 4px; background: transparent; flex-shrink: 0; }
                .alert-card.unread .a-c-indicator { background: var(--gold); }
                .alert-card.urgent .a-c-indicator { background: #EF4444; animation: pulse-red 2s infinite; }

                @keyframes pulse-red { 0% { opacity: 1; } 50% { opacity: 0.3; } 100% { opacity: 1; } }

                .a-c-body { flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
                .a-c-head { display: flex; justify-content: space-between; align-items: center; }
                .a-c-origin { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
                .a-c-origin.crm { color: var(--gold); }
                .a-c-origin.desk { color: #3B82F6; }
                .a-c-origin.projects { color: #A855F7; }
                .a-c-time { font-size: 11px; color: var(--text-sub); font-weight: 500; }

                .a-c-title { font-size: 16px; font-weight: 700; color: var(--text-main); margin: 0; }
                .a-c-desc { font-size: 14px; color: var(--text-sub); line-height: 1.5; margin: 0; }

                .a-c-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
                .a-c-actions { display: flex; gap: 12px; }
                .primary-action-btn { background: var(--gold); color: white; border: none; padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 12px; cursor: pointer; }
                .ai-spark-btn { background: rgba(184, 132, 42, 0.1); color: var(--gold); border: 1px solid rgba(184, 132, 42, 0.2); padding: 8px 16px; border-radius: 8px; font-weight: 700; font-size: 12px; cursor: pointer; }
                .ai-spark-btn:hover { background: var(--gold); color: white; }

                .mark-read-btn { background: transparent; border: none; color: var(--gold); font-size: 12px; font-weight: 700; cursor: pointer; }

                .glass { backdrop-filter: blur(10px); }
            `}</style>
        </div>
    );
}
