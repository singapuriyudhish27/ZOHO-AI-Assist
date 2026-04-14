"use client";
import React, { useState } from "react";
import TMemberSidebar from "@/Components/TMember_Sidebar";

export default function Reports() {
    const [timeRange, setTimeRange] = useState("This Month");

    const kpis = [
        { label: "Tasks Resolved", value: "42", trend: "+8% vs last month", icon: "✅" },
        { label: "AI Interactions", value: "156", trend: "74% Zoho CRM", icon: "💬" },
        { label: "Token Efficiency", value: "x2.4", trend: "Above team avg", icon: "⚡" },
        { label: "Time Saved (Est)", value: "18.5h", trend: "Across 4 apps", icon: "⏳" }
    ];

    const integrations = [
        { name: "Zoho CRM", value: 45, color: "var(--gold)" },
        { name: "Zoho Desk", value: 25, color: "#3B82F6" },
        { name: "Zoho Projects", value: 20, color: "#A855F7" },
        { name: "Zoho Books", value: 10, color: "#10B981" }
    ];

    const weeklyActivity = [
        { day: "Mon", queries: 12, tasks: 4 },
        { day: "Tue", queries: 18, tasks: 6 },
        { day: "Wed", queries: 24, tasks: 8 },
        { day: "Thu", queries: 15, tasks: 3 },
        { day: "Fri", queries: 20, tasks: 5 },
        { day: "Sat", queries: 5, tasks: 1 },
        { day: "Sun", queries: 2, tasks: 0 }
    ];

    return (
        <div className="app-container">
            <TMemberSidebar />
            
            <main className="main-content">
                
                {/* Reports Header */}
                <div className="reports-header">
                    <div className="r-h-text">
                        <h1 className="r-h-title">Operational Reports</h1>
                        <p className="r-h-subtitle">Personal productivity and AI usage analysis</p>
                    </div>
                    <div className="r-h-actions">
                        <div className="time-select glass">
                            <span className="ts-label">Period:</span>
                            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} className="ts-input">
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>Last 90 Days</option>
                            </select>
                        </div>
                        <button className="export-btn">Export Report</button>
                    </div>
                </div>

                {/* KPI Overview */}
                <div className="kpi-grid">
                    {kpis.map(kpi => (
                        <div key={kpi.label} className="kpi-card glass">
                            <div className="k-c-head">
                                <span className="k-c-icon">{kpi.icon}</span>
                                <span className="k-c-trend">{kpi.trend}</span>
                            </div>
                            <div className="k-c-body">
                                <h3 className="k-c-val">{kpi.value}</h3>
                                <p className="k-c-label">{kpi.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Analytic Panels */}
                <div className="analytics-split">
                    
                    {/* Integration Distribution (AI Usage) */}
                    <div className="panel flex-1">
                        <div className="panel-header">
                            <h2 className="panel-title">Integration Usage</h2>
                        </div>
                        <div className="donut-wrap">
                            <div className="donut-chart">
                                <div className="donut-inner">
                                    <span className="d-i-val">156</span>
                                    <span className="d-i-label">Queries</span>
                                </div>
                            </div>
                            <div className="donut-legend">
                                {integrations.map(item => (
                                    <div key={item.name} className="legend-item">
                                        <span className="l-color" style={{ backgroundColor: item.color }}></span>
                                        <span className="l-name">{item.name}</span>
                                        <span className="l-val">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Activity Timeline */}
                    <div className="panel flex-2">
                        <div className="panel-header">
                            <h2 className="panel-title">Weekly Activity Pipeline</h2>
                        </div>
                        <div className="bar-chart-area">
                            {weeklyActivity.map(day => (
                                <div key={day.day} className="bar-col">
                                    <div className="bar-group">
                                        <div className="bar queries" style={{ height: `${day.queries * 4}px` }} title={`Queries: ${day.queries}`}></div>
                                        <div className="bar tasks" style={{ height: `${day.tasks * 10}px` }} title={`Tasks: ${day.tasks}`}></div>
                                    </div>
                                    <span className="bar-label">{day.day}</span>
                                </div>
                            ))}
                        </div>
                        <div className="chart-footer">
                            <div className="c-f-legend">
                                <span className="c-f-dot queries"></span> AI Interactions
                                <span className="c-f-dot tasks ml-16"></span> Tasks Resolved
                            </div>
                        </div>
                    </div>

                </div>

                {/* Efficiency Snapshot */}
                <div className="panel efficiency-footer">
                    <div className="e-f-content">
                        <div className="e-f-text">
                            <h3 className="e-f-title">AI Productivity Lift</h3>
                            <p className="e-f-body">Based on your cross-app query patterns, ZohoAI has automated approximately **18.5 hours** of manual data synthesis this month.</p>
                        </div>
                        <div className="e-f-meter">
                            <div className="meter-bg">
                                <div className="meter-fill" style={{ width: '84%' }}></div>
                            </div>
                            <span className="meter-label">Efficiency Score: 84/100</span>
                        </div>
                    </div>
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
                .reports-header { display: flex; justify-content: space-between; align-items: flex-end; }
                .r-h-title { font-family: var(--font-cormorant), serif; font-size: 36px; font-weight: 600; color: var(--text-main); margin-bottom: 4px; }
                .r-h-subtitle { font-size: 15px; color: var(--text-sub); font-weight: 300; }
                .r-h-actions { display: flex; gap: 16px; align-items: center; }

                .time-select { padding: 4px 16px; border-radius: 10px; border: 1px solid var(--border-main); display: flex; align-items: center; gap: 12px; background: var(--bg-card); }
                .ts-label { font-size: 11px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; }
                .ts-input { border: none; background: transparent; color: var(--text-main); font-size: 13px; font-weight: 700; outline: none; cursor: pointer; }
                .export-btn { background: var(--gold); color: white; border: none; padding: 10px 24px; border-radius: 10px; font-weight: 700; cursor: pointer; font-size: 13px; }

                /* KPI Grid */
                .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
                .kpi-card { padding: 24px; border-radius: 16px; background: var(--bg-card); border: 1px solid var(--border-main); box-shadow: var(--shadow-main); }
                .k-c-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
                .k-c-icon { font-size: 20px; }
                .k-c-trend { font-size: 10px; color: var(--gold); font-weight: 700; text-transform: uppercase; }
                .k-c-val { font-size: 32px; font-weight: 700; font-family: var(--font-cormorant); color: var(--text-main); margin: 0; }
                .k-c-label { font-size: 12px; color: var(--text-sub); text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px; font-weight: 600; }

                /* Analytic Panels */
                .analytics-split { display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px; }
                .panel { background: var(--bg-card); border-radius: 16px; padding: 32px; border: 1px solid var(--border-main); box-shadow: var(--shadow-main); }
                .panel-header { margin-bottom: 32px; }
                .panel-title { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-sub); letter-spacing: 1px; margin: 0; }
                .flex-1 { flex: 1; }
                .flex-2 { flex: 2; }

                /* Donut Work */
                .donut-wrap { display: flex; align-items: center; gap: 32px; }
                .donut-chart { 
                    width: 140px; height: 140px; 
                    border-radius: 50%; 
                    background: conic-gradient(var(--gold) 45%, #3B82F6 45% 70%, #A855F7 70% 90%, #10B981 90%);
                    display: flex; align-items: center; justify-content: center;
                    position: relative;
                }
                .donut-inner { width: 100px; height: 100px; background: var(--bg-card); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                .d-i-val { font-size: 24px; font-weight: 700; color: var(--text-main); }
                .d-i-label { font-size: 10px; color: var(--text-sub); text-transform: uppercase; }

                .donut-legend { display: flex; flex-direction: column; gap: 12px; }
                .legend-item { display: flex; align-items: center; gap: 10px; font-size: 12px; }
                .l-color { width: 8px; height: 8px; border-radius: 2px; }
                .l-name { font-weight: 600; color: var(--text-sub); flex: 1; }
                .l-val { font-weight: 700; color: var(--text-main); }

                /* Bar Chart */
                .bar-chart-area { height: 160px; display: flex; align-items: flex-end; justify-content: space-between; padding: 0 20px; border-bottom: 1px solid var(--border-ghost); margin-bottom: 16px; }
                .bar-col { display: flex; flex-direction: column; align-items: center; gap: 12px; flex: 1; }
                .bar-group { display: flex; align-items: flex-end; gap: 4px; }
                .bar { width: 12px; border-radius: 3px 3px 0 0; transition: transform 0.2s; cursor: pointer; }
                .bar:hover { transform: scaleY(1.1); }
                .bar.queries { background: var(--gold); }
                .bar.tasks { background: var(--text-sub); opacity: 0.3; }
                .bar-label { font-size: 11px; font-weight: 700; color: var(--text-sub); }

                .chart-footer { padding: 0 20px; }
                .c-f-legend { display: flex; align-items: center; font-size: 11px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; letter-spacing: 0.5px; }
                .c-f-dot { width: 8px; height: 8px; border-radius: 2px; margin-right: 8px; }
                .c-f-dot.queries { background: var(--gold); }
                .c-f-dot.tasks { background: var(--text-sub); opacity: 0.5; }
                .ml-16 { margin-left: 16px; }

                /* Efficiency Footer */
                .efficiency-footer { margin-top: 8px; }
                .e-f-content { display: flex; justify-content: space-between; align-items: center; }
                .e-f-text { max-width: 60%; }
                .e-f-title { font-family: var(--font-cormorant), serif; font-size: 24px; font-weight: 600; color: var(--text-main); margin-bottom: 8px; }
                .e-f-body { font-size: 14px; color: var(--text-sub); line-height: 1.6; }
                
                .e-f-meter { width: 300px; display: flex; flex-direction: column; gap: 10px; }
                .meter-bg { height: 8px; background: var(--border-ghost); border-radius: 4px; overflow: hidden; }
                .meter-fill { height: 100%; background: var(--gold); border-radius: 4px; }
                .meter-label { font-size: 12px; font-weight: 700; color: var(--gold); text-align: right; }

                .glass { backdrop-filter: blur(10px); }
            `}</style>
        </div>
    );
}
