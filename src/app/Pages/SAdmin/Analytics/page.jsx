"use client";
import React, { useState } from "react";
import SAdminSidebar from "@/Components/SAdmin_Sidebar";

export default function Analytics() {
    const [timeRange, setTimeRange] = useState("Last 30 Days");

    const financialMetrics = [
        { label: "MRR", value: "$124,500", trend: "+12.5%", sub: "Monthly Revenue" },
        { label: "ARR", value: "$1.49M", trend: "Projected", sub: "Annual Revenue" },
        { label: "ARPU", value: "$100.40", trend: "+2.1%", sub: "Avg per Business" },
        { label: "Net Growth", value: "$12,400", trend: "Active", sub: "New Revenue (30d)" }
    ];

    const conversionMetrics = [
        { label: "Trial to Paid", value: "32.4%", trend: "High", color: "#10B981" },
        { label: "MRR Churn", value: "1.2%", trend: "Low", color: "#EF4444" },
        { label: "LTV (Avg)", value: "$1,240", trend: "Stable", color: "#3B82F6" }
    ];

    const aiPerformance = [
        { provider: "Anthropic (Claude 3.5)", tokens: "8.4M", latency: "210ms", errors: "0.02%", health: "Status: OK" },
        { provider: "OpenAI (GPT-4o)", tokens: "12.1M", latency: "340ms", errors: "0.15%", health: "Status: OK" },
        { provider: "Google Gemini", tokens: "4.2M", latency: "180ms", errors: "0.05%", health: "Status: OK" }
    ];

    const appUsage = [
        { name: "Zoho CRM", usage: 85, color: "#B8842A" },
        { name: "Zoho Books", usage: 62, color: "#10B981" },
        { name: "Zoho Desk", usage: 48, color: "#3B82F6" },
        { name: "Zoho Projects", usage: 35, color: "#94A3B8" },
        { name: "Zoho People", usage: 22, color: "#1E293B" }
    ];

    return (
        <div className="app-container">
            <SAdminSidebar />
            
            <main className="main-content">
                
                {/* Page Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Platform Business Intelligence</h1>
                        <p className="page-subtitle">Aggregate ecosystem data, revenue performance, and system health.</p>
                    </div>
                    <div className="header-actions">
                        <select className="range-select" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last Quarter</option>
                            <option>Last Year</option>
                        </select>
                        <button className="export-master-btn">Generate Master Report</button>
                    </div>
                </div>

                {/* Executive Management Summary */}
                <div className="analytics-grid-top">
                    {financialMetrics.map(m => (
                        <div key={m.label} className="anal-card financial-card">
                            <span className="anal-label">{m.label}</span>
                            <h3 className="anal-val">{m.value}</h3>
                            <div className="anal-footer">
                                <span className="anal-trend">{m.trend}</span>
                                <span className="anal-sub">{m.sub}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Growth & Technical Performance Mid-Section */}
                <div className="analytics-grid-mid">
                    
                    {/* Growth Analytics */}
                    <div className="platform-card conversion-analytics">
                        <h2 className="card-title">Growth & Conversions</h2>
                        <div className="conversion-list">
                            {conversionMetrics.map(c => (
                                <div key={c.label} className="conv-item">
                                    <div className="conv-main">
                                        <span className="conv-label">{c.label}</span>
                                        <span className="conv-val" style={{ color: c.color }}>{c.value}</span>
                                    </div>
                                    <div className="progress-bg">
                                        <div className="progress-fill" style={{ width: c.value, background: c.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI Provider Infrastructure Performance */}
                    <div className="platform-card ai-performance-infra">
                        <h2 className="card-title">AI Infrastructure Performance</h2>
                        <div className="table-wrapper">
                            <table className="anal-table">
                                <thead>
                                    <tr>
                                        <th>Provider</th>
                                        <th>Tokens</th>
                                        <th>Latency</th>
                                        <th>Err. Rate</th>
                                        <th>Health</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {aiPerformance.map(p => (
                                        <tr key={p.provider}>
                                            <td className="bold">{p.provider}</td>
                                            <td>{p.tokens}</td>
                                            <td>{p.latency}</td>
                                            <td>{p.errors}</td>
                                            <td><span className="h-pill">{p.health}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                {/* Ecosystem Heatmap & Reports Bottom Section */}
                <div className="analytics-grid-bottom">
                    
                    {/* Zoho App Popularity Heatmap */}
                    <div className="platform-card ecosystem-heatmap">
                        <h2 className="card-title">Zoho Application Popularity</h2>
                        <div className="heatmap-list">
                            {appUsage.map(app => (
                                <div key={app.name} className="heatmap-row">
                                    <div className="h-labels">
                                        <span className="h-name">{app.name}</span>
                                        <span className="h-percent">{app.usage}% of users</span>
                                    </div>
                                    <div className="h-bar-bg">
                                        <div className="h-bar-fill" style={{ width: `${app.usage}%`, background: app.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Report Export Center */}
                    <div className="platform-card report-center">
                        <h2 className="card-title">Report Generation Center</h2>
                        <p className="card-desc">Download platform-level summaries for auditing and external reviews.</p>
                        <div className="report-list">
                            <button className="report-dl-btn">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Global Revenue Summary (PDF)</span>
                            </button>
                            <button className="report-dl-btn">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Token Consumption Audit (CSV)</span>
                            </button>
                            <button className="report-dl-btn disabled">
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Platform Health History (Scheduled)</span>
                            </button>
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
                    --input-bg: #FFFFFF;
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
                    --input-bg: #252529;
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
                    align-items: center;
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

                .header-actions {
                    display: flex;
                    gap: 12px;
                }

                .range-select {
                    padding: 8px 16px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                    outline: none;
                    transition: all 0.3s;
                }

                .export-master-btn {
                    padding: 8px 16px;
                    background: var(--gold);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 600;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                    transition: all 0.2s;
                }

                .export-master-btn:hover { 
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                /* Top financial grid */
                .analytics-grid-top {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }

                .anal-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    box-shadow: var(--platform-shadow);
                    transition: all 0.3s;
                }

                .anal-label { font-size: 12px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; letter-spacing: 0.5px; }
                .anal-val { font-size: 28px; font-weight: 700; margin: 0; font-family: var(--font-cormorant); color: var(--text-main); }

                .anal-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; }
                .anal-trend { font-size: 11px; font-weight: 700; color: #10B981; background: rgba(16, 185, 129, 0.1); padding: 2px 8px; border-radius: 10px; }
                .anal-sub { font-size: 11px; color: var(--text-sub); font-weight: 500; }

                /* Mid Grid */
                .analytics-grid-mid {
                    display: grid;
                    grid-template-columns: 1fr 2.5fr;
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

                .card-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0 0 24px 0;
                    color: var(--text-main);
                }

                /* Conversion List */
                .conversion-list { display: flex; flex-direction: column; gap: 20px; }
                .conv-item { display: flex; flex-direction: column; gap: 8px; }
                .conv-main { display: flex; justify-content: space-between; align-items: center; }
                .conv-label { font-size: 14px; font-weight: 600; color: var(--text-main); opacity: 0.8; }
                .conv-val { font-size: 18px; font-weight: 700; }

                .progress-bg { height: 6px; background: var(--bg-page); border-radius: 3px; overflow: hidden; border: 1px solid var(--border-main); }
                .progress-fill { height: 100%; border-radius: 3px; }

                /* Table Analytics */
                .table-wrapper { width: 100%; overflow-x: auto; }
                .anal-table { width: 100%; border-collapse: collapse; text-align: left; }
                .anal-table th { padding: 12px 14px; font-size: 11px; text-transform: uppercase; color: var(--text-sub); border-bottom: 2px solid var(--border-main); font-weight: 700; background: var(--table-head); }
                .anal-table td { padding: 16px 14px; font-size: 14px; color: var(--text-main); border-bottom: 1px solid var(--border-main); }
                .bold { font-weight: 700; }
                .h-pill { background: rgba(16, 185, 129, 0.1); color: #10B981; padding: 2px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.1); }

                /* Bottom Grid */
                .analytics-grid-bottom {
                    display: grid;
                    grid-template-columns: 2fr 1.5fr;
                    gap: 24px;
                }

                /* Heatmap */
                .heatmap-list { display: flex; flex-direction: column; gap: 16px; }
                .heatmap-row { display: flex; flex-direction: column; gap: 8px; }
                .h-labels { display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; }
                .h-name { color: var(--text-main); }
                .h-percent { color: var(--text-sub); }
                .h-bar-bg { height: 8px; background: var(--bg-page); border-radius: 4px; overflow: hidden; border: 1px solid var(--border-main); }
                .h-bar-fill { height: 100%; border-radius: 4px; }

                /* Reports center */
                .card-desc { font-size: 14px; color: var(--text-sub); margin-bottom: 24px; line-height: 1.5; }
                .report-list { display: flex; flex-direction: column; gap: 12px; }
                .report-dl-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 14px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .report-dl-btn:hover:not(.disabled) { background: var(--bg-card); border-color: var(--gold); transform: translateX(8px); }
                .report-dl-btn.disabled { opacity: 0.5; cursor: not-allowed; }
            `}</style>
        </div>
    );
}
