"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Automations() {
    const [filter, setFilter] = useState("All");

    const automations = [
        {
            id: 1,
            title: "Lead Scoring & Welcome Sequence",
            type: "Trigger-based",
            isActive: true,
            description: "When a new lead is added, AI scores the lead, sends a personalised welcome email, and creates a follow-up task.",
            flow: [
                { app: "CRM", type: "trigger", icon: "🤝" },
                { app: "AI", type: "processing", icon: "✨" },
                { app: "Mail", type: "action", icon: "📧" },
                { app: "Projects", type: "action", icon: "📋" }
            ],
            runCount: 1248,
            lastRun: "5 mins ago"
        },
        {
            id: 2,
            title: "Weekly Executives Summary",
            type: "Schedule-based",
            isActive: true,
            description: "Every Monday at 9am, generate a weekly revenue and pipeline summary, then send it to Business Admin.",
            flow: [
                { app: "Time", type: "trigger", icon: "⏰" },
                { app: "Books", type: "data", icon: "📚" },
                { app: "AI", type: "processing", icon: "✨" },
                { app: "Cliq", type: "action", icon: "💬" }
            ],
            runCount: 52,
            lastRun: "Last Monday"
        },
        {
            id: 3,
            title: "Overdue Invoice Reminder",
            type: "AI-triggered",
            isActive: true,
            description: "When an invoice becomes 30 days overdue, AI drafts a polite payment reminder and sends it to the customer.",
            flow: [
                { app: "Books", type: "trigger", icon: "📚" },
                { app: "AI", type: "processing", icon: "✨" },
                { app: "Books", type: "action", icon: "💸" }
            ],
            runCount: 312,
            lastRun: "1 hour ago"
        },
        {
            id: 4,
            title: "SLA Breach Ticket Escalation",
            type: "Trigger-based",
            isActive: false,
            description: "When a support ticket is open for >48h with no response, escalate to a senior agent and notify.",
            flow: [
                { app: "Desk", type: "trigger", icon: "🎧" },
                { app: "Desk", type: "action", icon: "⚠️" },
                { app: "Cliq", type: "action", icon: "💬" }
            ],
            runCount: 89,
            lastRun: "2 days ago"
        },
        {
            id: 5,
            title: "Low Inventory Restock",
            type: "Trigger-based",
            isActive: true,
            description: "When product inventory drops below reorder level, create a PO draft and notify procurement.",
            flow: [
                { app: "Inventory", type: "trigger", icon: "📦" },
                { app: "Inventory", type: "action", icon: "📝" },
                { app: "Mail", type: "action", icon: "📧" }
            ],
            runCount: 14,
            lastRun: "3 weeks ago"
        }
    ];

    const filteredAutomations = filter === "All" ? automations : automations.filter(a => a.type === filter);

    return (
        <div className="app-container">
            <BAdminSidebar />
            <main className="main-content">
                
                {/* Header */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">AI Workflow Automations</h1>
                        <p className="page-subtitle">Create and manage intelligent workflows across your Zoho ecosystem.</p>
                    </div>
                    <button className="primary-action-btn">
                        <svg className="sparkle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                        Create Automation
                    </button>
                </div>

                {/* Filters */}
                <div className="filters-row">
                    {["All", "Trigger-based", "Schedule-based", "AI-triggered", "Manual"].map(f => (
                        <button 
                            key={f} 
                            className={`filter-pill ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Automations Grid */}
                <div className="automation-grid">
                    {filteredAutomations.map(auto => (
                        <div key={auto.id} className={`automation-card ${!auto.isActive ? 'paused' : ''}`}>
                            <div className="card-header">
                                <div className="card-title-group">
                                    <h3 className="auto-title">{auto.title}</h3>
                                    <span className="auto-type-badge">{auto.type}</span>
                                </div>
                                <label className="toggle-switch">
                                    <input type="checkbox" defaultChecked={auto.isActive} />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            {/* Logic Path Visualizer */}
                            <div className="logic-visualizer">
                                {auto.flow.map((node, idx) => (
                                    <React.Fragment key={idx}>
                                        <div className={`logic-node ${node.type}`}>
                                            <span className="node-icon">{node.icon}</span>
                                            <span className="node-app">{node.app}</span>
                                        </div>
                                        {idx < auto.flow.length - 1 && (
                                            <div className="logic-arrow">
                                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <p className="auto-description">{auto.description}</p>

                            <div className="card-footer border-top">
                                <div className="auto-stats">
                                    <span className="stat-item">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                        {auto.runCount.toLocaleString()} runs
                                    </span>
                                    <span className="stat-item">
                                        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        {auto.lastRun}
                                    </span>
                                </div>
                                <div className="auto-actions">
                                    <button className="icon-btn text-charcoal" title="Run Manually">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    </button>
                                    <button className="icon-btn text-charcoal" title="Settings">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --auto-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --auto-shadow: 0 10px 40px rgba(0,0,0,0.3);
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
                    transition: transform 0.2s, box-shadow 0.2s;
                }

                .primary-action-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.3);
                    filter: brightness(1.1);
                }

                .sparkle-icon {
                    width: 18px;
                    height: 18px;
                }

                /* Filters */
                .filters-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex-wrap: wrap;
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

                .filter-pill:hover {
                    border-color: var(--gold);
                    color: var(--gold);
                }

                .filter-pill.active {
                    background: var(--text-main);
                    color: var(--bg-card);
                    border-color: var(--text-main);
                }

                /* Grid Layout */
                .automation-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
                    gap: 24px;
                }

                .automation-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: var(--auto-shadow);
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    transition: all 0.3s;
                }

                .automation-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(0,0,0,0.1);
                    border-color: var(--gold);
                }

                .automation-card.paused {
                    opacity: 0.6;
                    background: var(--bg-page);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .card-title-group {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }

                .auto-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .auto-type-badge {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-sub);
                    background: var(--bg-page);
                    padding: 2px 8px;
                    border-radius: 10px;
                    width: fit-content;
                    border: 1px solid var(--border-main);
                }

                /* Logic Visualizer */
                .logic-visualizer {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--bg-page);
                    padding: 12px 16px;
                    border-radius: 8px;
                    border: 1px dashed var(--border-main);
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                }

                .logic-visualizer::-webkit-scrollbar {
                    display: none;
                }

                .logic-node {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    min-width: 50px;
                }

                .node-icon {
                    width: 32px;
                    height: 32px;
                    background: var(--bg-card);
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                    border: 1px solid var(--border-main);
                }

                .logic-node.processing .node-icon {
                    background: var(--text-main);
                    border-color: var(--text-main);
                    color: var(--bg-card);
                }

                .node-app {
                    font-size: 11px;
                    font-weight: 500;
                    color: var(--text-sub);
                }

                .logic-arrow {
                    color: var(--text-sub);
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .auto-description {
                    font-size: 14px;
                    color: var(--text-main);
                    opacity: 0.8;
                    line-height: 1.5;
                    margin: 0;
                    flex: 1;
                }

                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 16px;
                    border-top: 1px solid var(--border-main);
                }

                .auto-stats {
                    display: flex;
                    gap: 16px;
                }

                .stat-item {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 12px;
                    color: var(--text-sub);
                }

                .auto-actions {
                    display: flex;
                    gap: 8px;
                }

                .icon-btn {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .icon-btn:hover {
                    background: var(--bg-page);
                }

                .icon-btn.text-charcoal {
                    color: var(--text-main);
                    opacity: 0.7;
                }

                .icon-btn.text-charcoal:hover {
                    opacity: 1;
                    color: var(--gold);
                }

                /* Toggle Switch */
                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 22px;
                }

                .toggle-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: var(--bg-page);
                    transition: .3s;
                    border-radius: 22px;
                    border: 1px solid var(--border-main);
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 14px;
                    width: 14px;
                    left: 3px;
                    bottom: 3px;
                    background-color: var(--text-sub);
                    transition: .3s;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                input:checked + .slider {
                    background-color: #10B981;
                    border-color: #10B981;
                }

                input:checked + .slider:before {
                    transform: translateX(18px);
                    background-color: white;
                }
                
                @media (max-width: 1400px) {
                    .automation-grid {
                        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    }
                }
            `}</style>
        </div>
    );
}
