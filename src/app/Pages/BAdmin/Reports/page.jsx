"use client";
import React from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Reports() {
    
    const templates = [
        { id: 1, name: "Monthly P&L Summary", apps: ["Books"], icon: "📈", desc: "Standard profit and loss generation." },
        { id: 2, name: "Sales Pipeline Health", apps: ["CRM"], icon: "🎯", desc: "Detailed breakdown of open deals by stage." },
        { id: 3, name: "Customer Health Score", apps: ["CRM", "Desk"], icon: "❤️", desc: "Cross-app analysis combining deals and support SLA." },
        { id: 4, name: "Team Workload", apps: ["Projects", "People"], icon: "👥", desc: "Resource allocation against active projects." }
    ];

    const activeReports = [
        {
            id: 101,
            name: "Q1 Cross-App Customer Analysis",
            type: "On-Demand (AI)",
            apps: ["CRM", "Books", "Desk"],
            date: "Today, 10:45 AM",
            hasLink: true
        },
        {
            id: 102,
            name: "Weekly Revenue Forecast",
            type: "Scheduled (Weekly)",
            apps: ["Books", "CRM"],
            date: "Next Run: Monday 9AM",
            hasLink: false
        },
        {
            id: 103,
            name: "January Support SLA Breaches",
            type: "Template",
            apps: ["Desk"],
            date: "Jan 31, 2026",
            hasLink: true
        },
        {
            id: 104,
            name: "Inventory Restock Estimates",
            type: "Custom Builder",
            apps: ["Inventory"],
            date: "Yesterday, 4:12 PM",
            hasLink: false
        }
    ];

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="main-content">
                
                {/* Header Sub-Component */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Reports & Analytics</h1>
                        <p className="page-subtitle">Generate, schedule, and export insights across your Zoho data.</p>
                    </div>
                    <div className="header-actions">
                        <button className="secondary-action-btn">
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                            Custom Builder
                        </button>
                        <button className="primary-action-btn">
                            <svg className="sparkle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                            </svg>
                            Generate via AI
                        </button>
                    </div>
                </div>

                {/* Usage Banner */}
                <div className="metrics-banner">
                    <div className="metric-item">
                        <span className="metric-val">14</span>
                        <span className="metric-lbl">Reports Generated this Month</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric-item">
                        <span className="metric-val">5</span>
                        <span className="metric-lbl">Active Scheduled Reports</span>
                    </div>
                    <div className="metric-divider"></div>
                    <div className="metric-item">
                        <span className="metric-val text-gold">4</span>
                        <span className="metric-lbl">Cross-App Integrations Syncing</span>
                    </div>
                </div>

                {/* Templates Section */}
                <div className="section-block">
                    <h2 className="section-heading">Template Library</h2>
                    <div className="template-grid">
                        {templates.map(tpl => (
                            <div key={tpl.id} className="template-card">
                                <div className="card-top">
                                    <span className="tpl-icon">{tpl.icon}</span>
                                    <button className="icon-btn" title="Use Template">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </button>
                                </div>
                                <h3 className="tpl-name">{tpl.name}</h3>
                                <p className="tpl-desc">{tpl.desc}</p>
                                <div className="tpl-apps">
                                    {tpl.apps.map(app => (
                                        <span key={app} className="app-badge">{app}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Active Reports Table */}
                <div className="section-block">
                    <div className="section-header-split">
                        <h2 className="section-heading">Generated & Scheduled Reports</h2>
                        <div className="table-search">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            <input type="text" placeholder="Search reports..." />
                        </div>
                    </div>

                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Report Name</th>
                                    <th>Type</th>
                                    <th>Data Sources</th>
                                    <th>Date Created / Scheduled</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeReports.map(report => (
                                    <tr key={report.id}>
                                        <td>
                                            <div className="report-name-cell">
                                                <svg className="report-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                                <span className="report-title">{report.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="type-badge">{report.type}</span>
                                        </td>
                                        <td>
                                            <div className="apps-flex">
                                                {report.apps.map(app => (
                                                    <span key={app} className="app-pill">{app}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td>
                                            <span className="date-text">{report.date}</span>
                                        </td>
                                        <td className="text-right actions-cell">
                                            {report.hasLink && (
                                                <button className="action-btn text-gold" title="Copy Secure Link">
                                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                                                </button>
                                            )}
                                            <button className="action-btn" title="Export PDF">
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11v6m0 0l-3-3m3 3l3-3"/></svg>
                                            </button>
                                            <button className="action-btn" title="Export CSV">
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                            </button>
                                            <button className="action-btn text-error" title="Delete">
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                    --reports-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --table-head: #FAFAFA;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --reports-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --table-head: #252529;
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
                    align-items: flex-start;
                }

                .header-actions {
                    display: flex;
                    gap: 12px;
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

                .primary-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--gold);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                    transition: all 0.2s;
                }

                .primary-action-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                .secondary-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--bg-card);
                    color: var(--text-main);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-action-btn:hover { background: var(--bg-page); border-color: var(--gold); }

                .sparkle-icon {
                    width: 18px;
                    height: 18px;
                }

                /* Metrics Banner */
                .metrics-banner {
                    display: flex;
                    align-items: center;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 20px 32px;
                    box-shadow: var(--reports-shadow);
                    transition: all 0.3s;
                }

                .metric-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    flex: 1;
                }

                .metric-val {
                    font-family: var(--font-cormorant), serif;
                    font-size: 28px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .text-gold { color: var(--gold); }

                .metric-lbl {
                    font-size: 13px;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .metric-divider {
                    width: 1px;
                    height: 40px;
                    background: var(--border-main);
                    margin: 0 32px;
                }

                /* Sections */
                .section-block {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .section-header-split {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .section-heading {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                /* Template Cards */
                .template-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                }

                .template-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    transition: all 0.3s;
                    cursor: pointer;
                    box-shadow: var(--reports-shadow);
                }

                .template-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(184, 132, 42, 0.1);
                    border-color: var(--gold);
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 4px;
                }

                .tpl-icon {
                    font-size: 28px;
                }

                .icon-btn {
                    background: var(--bg-page);
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-sub);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .template-card:hover .icon-btn {
                    background: var(--gold);
                    color: white;
                }

                .tpl-name {
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .tpl-desc {
                    font-size: 13px;
                    color: var(--text-sub);
                    line-height: 1.4;
                    margin: 0;
                    flex: 1;
                }

                .tpl-apps {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-top: 8px;
                }

                .app-badge {
                    font-size: 11px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    padding: 2px 8px;
                    border-radius: 10px;
                    color: var(--text-main);
                    opacity: 0.8;
                }

                /* Data Table Section */
                .table-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 20px;
                    padding: 6px 14px;
                    color: var(--text-sub);
                    transition: all 0.3s;
                }

                .table-search input {
                    background: transparent;
                    border: none;
                    outline: none;
                    font-family: inherit;
                    font-size: 13px;
                    width: 200px;
                    color: var(--text-main);
                }

                .table-container {
                    background: var(--bg-card);
                    border-radius: 12px;
                    border: 1px solid var(--border-main);
                    box-shadow: var(--reports-shadow);
                    overflow: hidden;
                    transition: all 0.3s;
                }

                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }

                .data-table th {
                    background: var(--table-head);
                    padding: 16px 24px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid var(--border-main);
                }

                .data-table td {
                    padding: 16px 24px;
                    border-bottom: 1px solid var(--border-main);
                    vertical-align: middle;
                    color: var(--text-main);
                }

                .data-table tr:last-child td { border-bottom: none; }
                .data-table tr:hover { background: var(--bg-page); }
                .text-right { text-align: right; }

                .report-name-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .report-icon {
                    width: 20px;
                    height: 20px;
                    color: var(--gold);
                }

                .report-title {
                    font-weight: 600;
                    color: var(--text-main);
                    font-size: 14px;
                }

                .type-badge {
                    font-size: 12px;
                    font-weight: 500;
                    color: #6366F1;
                    background: rgba(99, 102, 241, 0.1);
                    padding: 4px 10px;
                    border-radius: 12px;
                    border: 1px solid rgba(99, 102, 241, 0.2);
                }

                .apps-flex {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .app-pill {
                    font-size: 11px;
                    font-weight: 600;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    padding: 2px 8px;
                    border-radius: 10px;
                    color: var(--text-main);
                    opacity: 0.8;
                }

                .date-text {
                    font-size: 13px;
                    color: var(--text-sub);
                }

                .actions-cell {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 8px;
                    height: 100%;
                }

                .action-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-sub);
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .action-btn:hover { background: var(--bg-page); color: var(--text-main); }
                .action-btn.text-gold { color: var(--gold); }
                .action-btn.text-gold:hover { background: rgba(184, 132, 42, 0.1); }
                .action-btn.text-error:hover { color: #EF4444; background: rgba(239, 68, 68, 0.1); }
            `}</style>
        </div>
    );
}
