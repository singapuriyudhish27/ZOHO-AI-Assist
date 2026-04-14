"use client";
import React, { useState } from "react";
import TMemberSidebar from "@/Components/TMember_Sidebar";

export default function MyTasks() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const initialTasks = [
        { id: "T-842", title: "Review CRM Lead: Acme Corp", app: "Desk", priority: "High", status: "Open", due: "Oct 24", strategy: "Analyze recent support tickets before responding to the CRM lead." },
        { id: "P-101", title: "Update API Documentation", app: "Projects", priority: "Medium", status: "In Progress", due: "Oct 25", strategy: "Verify the new endpoints against the sandbox environment first." },
        { id: "T-811", title: "Resolve Invoice Discrepancy", app: "Desk", priority: "High", status: "Open", due: "Today", strategy: "Cross-reference Zoho Books records with the client's email attachment." },
        { id: "P-105", title: "Q4 Performance Report", app: "Projects", priority: "Low", status: "In Progress", due: "Oct 30", strategy: "Aggregate token usage data from the admin dashboard." },
        { id: "T-790", title: "Client Security Audit", app: "Desk", priority: "Medium", status: "Resolved", due: "Oct 20", strategy: "Completed. All compliance markers met." }
    ];

    const [tasks, setTasks] = useState(initialTasks);
    const [activeStrategy, setActiveStrategy] = useState(null);

    const filteredTasks = tasks.filter(t => 
        (filter === "All" || t.app === filter) &&
        (t.title.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()))
    );

    const toggleStatus = (id) => {
        setTasks(tasks.map(t => {
            if (t.id === id) {
                const next = t.status === "Open" ? "In Progress" : t.status === "In Progress" ? "Resolved" : "Open";
                return { ...t, status: next };
            }
            return t;
        }));
    };

    return (
        <div className="app-container">
            <TMemberSidebar />
            
            <main className="main-content">
                
                {/* Unified Portfolio Header */}
                <div className="portfolio-header">
                    <div className="p-h-text">
                        <h1 className="p-h-title">Task Command Center</h1>
                        <p className="p-h-subtitle">Unified duties from Zoho Projects & Desk</p>
                    </div>
                    <div className="p-h-metrics">
                        <div className="p-metric">
                            <span className="p-m-val">12</span>
                            <span className="p-m-label">Active Duties</span>
                        </div>
                        <div className="p-metric highlight">
                            <span className="p-m-val">3</span>
                            <span className="p-m-label">Critical Alerts</span>
                        </div>
                        <div className="p-metric">
                            <span className="p-m-val">84%</span>
                            <span className="p-m-label">Efficiency</span>
                        </div>
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="toolkit-row">
                    <div className="filter-group">
                        <button onClick={() => setFilter("All")} className={`f-btn ${filter === "All" ? 'active' : ''}`}>All Duties</button>
                        <button onClick={() => setFilter("Projects")} className={`f-btn ${filter === "Projects" ? 'active' : ''}`}>Projects</button>
                        <button onClick={() => setFilter("Desk")} className={`f-btn ${filter === "Desk" ? 'active' : ''}`}>Support Desk</button>
                    </div>
                    <div className="search-wrap">
                        <span className="search-icon">🔍</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search by Task ID or Title..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>

                {/* Unified Task Ledger */}
                <div className="ledger-pane glass">
                    <table className="ledger-table">
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Duty Assignment</th>
                                <th>Origin</th>
                                <th>Priority</th>
                                <th>Status Pipeline</th>
                                <th>Due Date</th>
                                <th>AI Plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTasks.map(task => (
                                <tr key={task.id} className="ledger-row">
                                    <td className="t-id">{task.id}</td>
                                    <td className="t-duty">
                                        <div className="t-cell-wrap">
                                            <span className="t-name">{task.title}</span>
                                        </div>
                                    </td>
                                    <td className="t-origin">
                                        <span className={`origin-tag ${task.app.toLowerCase()}`}>{task.app}</span>
                                    </td>
                                    <td>
                                        <span className={`p-badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
                                    </td>
                                    <td>
                                        <button onClick={() => toggleStatus(task.id)} className={`s-pill ${task.status.replace(' ', '-').toLowerCase()}`}>
                                            {task.status}
                                        </button>
                                    </td>
                                    <td className="t-date">{task.due}</td>
                                    <td>
                                        <button 
                                            className="spark-btn" 
                                            onClick={() => setActiveStrategy(task.strategy)}
                                            title="View AI Strategy"
                                        >✨</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* AI Strategy Modal (Simple Overlay) */}
                {activeStrategy && (
                    <div className="strategy-overlay" onClick={() => setActiveStrategy(null)}>
                        <div className="strategy-card glass" onClick={e => e.stopPropagation()}>
                            <div className="s-c-header">
                                <span className="s-c-icon">✨</span>
                                <h3 className="s-c-title">AI Action Plan</h3>
                            </div>
                            <p className="s-c-body">{activeStrategy}</p>
                            <button className="s-c-close" onClick={() => setActiveStrategy(null)}>Got it</button>
                        </div>
                    </div>
                )}

            </main>

            <style jsx>{`
                /* Unified Theme Variables */
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: white;
                    --bg-pane: white;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --border-ghost: var(--border-light);
                    --shadow-main: 0 4px 15px rgba(0,0,0,0.02);
                    --bg-row-hover: #F1F5F9;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --bg-pane: #121214;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --border-ghost: rgba(255,255,255,0.04);
                    --shadow-main: 0 10px 40px rgba(0,0,0,0.3);
                    --bg-row-hover: rgba(255,255,255,0.03);
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
                .portfolio-header { display: flex; justify-content: space-between; align-items: flex-end; }
                .p-h-title { font-family: var(--font-cormorant), serif; font-size: 36px; font-weight: 600; color: var(--text-main); margin-bottom: 4px; }
                .p-h-subtitle { font-size: 15px; color: var(--text-sub); font-weight: 300; }
                
                .p-h-metrics { display: flex; gap: 40px; }
                .p-metric { display: flex; flex-direction: column; align-items: flex-end; }
                .p-m-val { font-size: 24px; font-weight: 700; color: var(--text-main); }
                .p-m-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: var(--text-sub); letter-spacing: 0.5px; }
                .p-metric.highlight .p-m-val { color: #EF4444; }

                /* Toolkit */
                .toolkit-row { display: flex; justify-content: space-between; align-items: center; }
                .filter-group { display: flex; gap: 8px; background: var(--bg-card); padding: 4px; border-radius: 12px; border: 1px solid var(--border-main); }
                .f-btn { padding: 8px 18px; border: none; background: transparent; color: var(--text-sub); font-size: 13px; font-weight: 700; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
                .f-btn.active { background: var(--gold); color: white; }

                .search-wrap { position: relative; width: 300px; }
                .search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 14px; opacity: 0.5; }
                .search-input { width: 100%; padding: 12px 16px 12px 44px; background: var(--bg-card); border: 1px solid var(--border-main); border-radius: 12px; font-size: 14px; color: var(--text-main); outline: none; }

                /* Ledger Table */
                .ledger-pane { background: var(--bg-card); border-radius: 16px; border: 1px solid var(--border-main); box-shadow: var(--shadow-main); overflow: hidden; }
                .ledger-table { width: 100%; border-collapse: collapse; text-align: left; }
                .ledger-table th { padding: 16px 24px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); font-weight: 700; border-bottom: 1px solid var(--border-main); }
                .ledger-table td { padding: 20px 24px; border-bottom: 1px solid var(--border-ghost); }
                .ledger-row:hover { background: var(--bg-row-hover); }

                .t-id { font-size: 13px; font-family: monospace; font-weight: 700; color: var(--gold); }
                .t-name { font-size: 15px; font-weight: 700; color: var(--text-main); }
                .origin-tag { font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; }
                .origin-tag.desk { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
                .origin-tag.projects { background: rgba(168, 85, 247, 0.1); color: #A855F7; }

                .p-badge { font-size: 9px; font-weight: 700; padding: 4px 10px; border-radius: 100px; text-transform: uppercase; }
                .p-badge.high { background: #FEF2F2; color: #EF4444; border: 1px solid #FEE2E2; }
                .p-badge.medium { background: #FFFBEB; color: #D97706; border: 1px solid #FEF3C7; }
                .p-badge.low { background: #ECFDF5; color: #059669; border: 1px solid #D1FAE5; }

                .s-pill { 
                    border: none; 
                    padding: 6px 12px; 
                    border-radius: 6px; 
                    font-size: 12px; 
                    font-weight: 700; 
                    cursor: pointer; 
                    width: 100px;
                    text-align: center;
                }
                .s-pill.open { background: #F1F5F9; color: #475569; }
                .s-pill.in-progress { background: #EFF6FF; color: #2563EB; }
                .s-pill.resolved { background: #F0FDF4; color: #16A34A; }

                .t-date { font-size: 13px; font-weight: 600; color: var(--text-sub); }
                .spark-btn { background: transparent; border: 1px solid var(--border-main); padding: 6px; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
                .spark-btn:hover { background: var(--gold); transform: scale(1.1); border-color: var(--gold); }

                /* Strategy Overlay */
                .strategy-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
                .strategy-card { width: 400px; background: var(--bg-card); padding: 32px; border-radius: 20px; border: 1px solid var(--border-main); box-shadow: var(--shadow-lg); text-align: center; }
                .s-c-header { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 20px; }
                .s-c-icon { font-size: 24px; }
                .s-c-title { font-family: var(--font-cormorant), serif; font-size: 24px; font-weight: 600; margin: 0; color: var(--text-main); }
                .s-c-body { font-size: 15px; line-height: 1.6; color: var(--text-sub); margin-bottom: 24px; font-weight: 400; }
                .s-c-close { background: var(--gold); color: white; border: none; padding: 12px 32px; border-radius: 10px; font-weight: 700; cursor: pointer; }

                .glass { backdrop-filter: blur(10px); }
            `}</style>
        </div>
    );
}
