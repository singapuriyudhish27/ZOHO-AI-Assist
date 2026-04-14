"use client";
import React, { useState } from "react";
import TMemberSidebar from "@/Components/TMember_Sidebar";

export default function TMemberPage() {
    const [quickPrompt, setQuickPrompt] = useState("");

    const personalMetrics = [
        { label: "AI Interactions", value: "84", trend: "+12% this week", icon: "💬" },
        { label: "Assigned Tasks", value: "12", trend: "3 High Priority", icon: "📋" },
        { label: "Tokens Used", value: "142k", trend: "71% of quota", icon: "⚡" },
        { label: "Unread Alerts", value: "5", trend: "Zoho CRM/Desk", icon: "🔔" }
    ];

    const assignedTasks = [
        { id: 1, title: "Review CRM Lead #842", project: "Sales Funnel", priority: "High", due: "Today" },
        { id: 2, title: "Draft Response for Zoho Desk Ticket #122", project: "Support Ops", priority: "Medium", due: "Tomorrow" },
        { id: 3, title: "Update Projects Documentation", project: "Internal", priority: "Low", due: "Oct 28" }
    ];

    const recentSessions = [
        { id: 1, title: "Lead Analysis: Acme Corp", time: "2 hours ago", app: "Zoho CRM" },
        { id: 2, title: "Invoice Automation Logic", time: "5 hours ago", app: "Zoho Books" },
        { id: 3, title: "Team Performance Report", time: "Yesterday", app: "Platform" }
    ];

    return (
        <div className="app-container">
            <TMemberSidebar />
            
            <main className="main-content">
                
                {/* Personalized Welcome */}
                <div className="welcome-header">
                    <div className="welcome-text">
                        <h1 className="greeting-title">Good morning, Alex</h1>
                        <p className="greeting-sub">Operational Dashboard — Here's your focus for Thursday, Oct 24.</p>
                    </div>
                    <div className="system-time">
                        <span className="time-val">10:42 AM</span>
                        <span className="date-val">October 24, 2025</span>
                    </div>
                </div>

                {/* Quick Assist Command Bar */}
                <div className="quick-assist-box">
                    <div className="qa-input-wrapper">
                        <span className="qa-ai-icon">✨</span>
                        <input 
                            type="text" 
                            className="qa-input" 
                            placeholder="How can I help you today, Alex? Type a command or ask a question..."
                            value={quickPrompt}
                            onChange={(e) => setQuickPrompt(e.target.value)}
                        />
                        <button className="qa-send-btn">Ask AI</button>
                    </div>
                </div>

                {/* Personal Metrics Grid */}
                <div className="metrics-grid">
                    {personalMetrics.map(m => (
                        <div key={m.label} className="metric-card glass">
                            <div className="m-head">
                                <span className="m-icon">{m.icon}</span>
                                <span className="m-trend">{m.trend}</span>
                            </div>
                            <div className="m-body">
                                <h3 className="m-val">{m.value}</h3>
                                <p className="m-label">{m.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Task & Continuity Split */}
                <div className="dashboard-grid">
                    
                    {/* Assigned Tasks Feed */}
                    <div className="panel tasks-feed">
                        <div className="panel-header">
                            <h2 className="panel-title">Your Assigned Tasks</h2>
                            <button className="panel-link">View Projects</button>
                        </div>
                        <div className="task-list">
                            {assignedTasks.map(task => (
                                <div key={task.id} className="task-row">
                                    <div className="task-info">
                                        <span className="t-title">{task.title}</span>
                                        <span className="t-project">{task.project}</span>
                                    </div>
                                    <div className="task-meta">
                                        <span className={`p-badge ${task.priority.toLowerCase()}`}>{task.priority}</span>
                                        <span className="t-due">{task.due}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent AI Sessions */}
                    <div className="panel sessions-feed">
                        <div className="panel-header">
                            <h2 className="panel-title">Recent Continuity</h2>
                            <button className="panel-link">View All</button>
                        </div>
                        <div className="session-list">
                            {recentSessions.map(session => (
                                <div key={session.id} className="session-row">
                                    <div className="s-info">
                                        <span className="s-title">{session.title}</span>
                                        <div className="s-meta">
                                            <span className="s-app">{session.app}</span>
                                            <span className="dot">•</span>
                                            <span className="s-time">{session.time}</span>
                                        </div>
                                    </div>
                                    <button className="s-resume-btn">Resume</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Usage Meter Footer */}
                <div className="usage-governance">
                    <div className="usage-info">
                        <span className="u-label">Monthly Token Contribution</span>
                        <div className="u-meter-bg">
                            <div className="u-meter-fill" style={{ width: '71%' }}></div>
                        </div>
                        <span className="u-percent">142,500 / 200,000 Tokens (Fair Usage)</span>
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
                    --bg-row: #F8F9FA;
                    --bg-row-hover: #F1F5F9;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --border-ghost: rgba(255,255,255,0.04);
                    --shadow-main: 0 10px 40px rgba(0,0,0,0.3);
                    --bg-row: rgba(255,255,255,0.02);
                    --bg-row-hover: rgba(255,255,255,0.05);
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
                .welcome-header { display: flex; justify-content: space-between; align-items: flex-end; }
                .greeting-title { font-family: var(--font-cormorant), serif; font-size: 36px; font-weight: 600; color: var(--text-main); margin-bottom: 4px; }
                .greeting-sub { font-size: 15px; color: var(--text-sub); font-weight: 300; }
                .system-time { text-align: right; }
                .time-val { font-size: 24px; font-weight: 700; display: block; color: var(--gold); }
                .date-val { font-size: 12px; color: var(--text-sub); text-transform: uppercase; letter-spacing: 1px; }

                /* Quick Assist */
                .quick-assist-box {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    padding: 4px;
                    border-radius: 14px;
                    box-shadow: var(--shadow-main);
                }
                .qa-input-wrapper { display: flex; align-items: center; gap: 16px; padding: 12px 20px; }
                .qa-ai-icon { font-size: 20px; }
                .qa-input { background: transparent; border: none; flex: 1; font-size: 16px; color: var(--text-main); outline: none; }
                .qa-input::placeholder { color: var(--text-sub); }
                .qa-send-btn { 
                    background: var(--gold); 
                    color: white; 
                    border: none; 
                    padding: 8px 18px; 
                    border-radius: 8px; 
                    font-weight: 700; 
                    font-size: 13px; 
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                .qa-send-btn:hover { transform: scale(1.05); background: var(--gold-light); }

                /* Metrics */
                .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
                .metric-card { 
                    padding: 24px; 
                    border-radius: 16px; 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-main); 
                    box-shadow: var(--shadow-main);
                    transition: all 0.3s;
                }
                .m-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
                .m-icon { font-size: 20px; }
                .m-trend { font-size: 10px; color: var(--gold); font-weight: 700; text-transform: uppercase; }
                .m-val { font-size: 32px; font-weight: 700; margin: 0; font-family: var(--font-cormorant); color: var(--text-main); }
                .m-label { font-size: 12px; color: var(--text-sub); text-transform: uppercase; margin-top: 4px; letter-spacing: 0.5px; font-weight: 600; }

                /* Grid Panel */
                .dashboard-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; }
                .panel { background: var(--bg-card); border-radius: 16px; padding: 32px; border: 1px solid var(--border-main); box-shadow: var(--shadow-main); transition: all 0.3s; }
                .panel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
                .panel-title { font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-sub); letter-spacing: 1px; margin: 0; }
                .panel-link { background: transparent; border: none; color: var(--gold); font-size: 13px; font-weight: 600; cursor: pointer; }

                /* Tasks */
                .task-list { display: flex; flex-direction: column; gap: 8px; }
                .task-row { 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 16px; 
                    background: var(--bg-row); 
                    border-radius: 10px; 
                    transition: background 0.2s;
                    border: 1px solid var(--border-ghost);
                }
                .task-row:hover { background: var(--bg-row-hover); }
                .t-title { font-size: 15px; font-weight: 700; color: var(--text-main); display: block; margin-bottom: 4px; }
                .t-project { font-size: 11px; color: var(--text-sub); text-transform: uppercase; font-weight: 700; }
                .task-meta { display: flex; align-items: center; gap: 16px; }
                .p-badge { font-size: 9px; font-weight: 700; padding: 4px 10px; border-radius: 12px; text-transform: uppercase; }
                .p-badge.high { background: rgba(239, 68, 68, 0.1); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.2); }
                .p-badge.medium { background: rgba(245, 158, 11, 0.1); color: #D97706; border: 1px solid rgba(245, 158, 11, 0.2); }
                .p-badge.low { background: rgba(16, 185, 129, 0.1); color: #059669; border: 1px solid rgba(16, 185, 129, 0.2); }
                .t-due { font-size: 12px; color: var(--text-sub); font-weight: 500; }

                /* Sessions */
                .session-list { display: flex; flex-direction: column; gap: 12px; }
                .session-row { 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 12px 16px; 
                    border-radius: 10px; 
                    border: 1px solid var(--border-ghost); 
                    background: var(--bg-row);
                }
                .s-title { font-size: 14px; font-weight: 700; color: var(--text-main); display: block; margin-bottom: 2px; }
                .s-meta { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--text-sub); }
                .dot { color: var(--gold); }
                .s-resume-btn { background: var(--bg-card); border: 1px solid var(--border-main); color: var(--text-main); font-size: 11px; padding: 4px 12px; border-radius: 6px; cursor: pointer; font-weight: 600; }
                .s-resume-btn:hover { background: var(--gold); color: white; border-color: var(--gold); }

                /* Usage Meter */
                .usage-governance { 
                    padding: 24px; 
                    background: var(--bg-card); 
                    border-radius: 16px; 
                    border-top: 1px solid var(--border-main); 
                    box-shadow: var(--shadow-main);
                }
                .usage-info { display: flex; flex-direction: column; gap: 8px; max-width: 400px; }
                .u-label { font-size: 11px; font-weight: 700; color: var(--text-sub); text-transform: uppercase; }
                .u-meter-bg { height: 6px; background: var(--border-ghost); border-radius: 3px; overflow: hidden; }
                .u-meter-fill { height: 100%; background: var(--gold); border-radius: 3px; }
                .u-percent { font-size: 13px; font-weight: 700; color: var(--gold); }
            `}</style>
        </div>
    );
}
