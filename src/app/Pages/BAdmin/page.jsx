"use client";

import React from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function BAdminPage() {
    return (
        <div className="app-container">
            <BAdminSidebar />
            <main className="main-content">
                <div className="dashboard-header">
                    <div className="ai-briefing">
                        <div className="briefing-title-row">
                            <svg className="ai-sparkle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                            <h1 className="dash-title">AI Daily Briefing</h1>
                        </div>
                        <p className="dash-subtitle">Yesterday brought strong momentum. Acme Corp closed 3 new enterprise deals, but 12 support tickets breached SLA times. Strong cash flow expected over the next 14 days.</p>
                        <div className="briefing-actions">
                            <span className="action-label">Priority Tasks:</span>
                            <button className="pill-btn">Review Stale Deals (3)</button>
                            <button className="pill-btn">Approve Leave Requests (2)</button>
                        </div>
                    </div>
                </div>

                <div className="kpi-grid">
                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Business Health</span>
                            <svg className="kpi-icon gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                        </div>
                        <div className="kpi-value text-gold">92<span className="kpi-max">/100</span></div>
                        <div className="kpi-meta">
                            <span className="trend positive">Excellent standing</span>
                        </div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Books: Revenue</span>
                            <svg className="kpi-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="kpi-value">&#x20B9;4.2L</div>
                        <div className="kpi-meta">
                            <span className="trend neutral">Outstanding: &#x20B9;1.1L</span>
                        </div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Desk: Support Health</span>
                            <svg className="kpi-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div className="kpi-value">24<span className="kpi-max"> open</span></div>
                        <div className="kpi-meta">
                            <span className="trend negative">2 SLA breached tickets</span>
                        </div>
                    </div>

                    <div className="kpi-card">
                        <div className="kpi-header">
                            <span className="kpi-label">Projects: Status</span>
                            <svg className="kpi-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div className="kpi-value">8<span className="kpi-max"> active</span></div>
                        <div className="kpi-meta">
                            <span className="trend negative">5 overdue tasks</span>
                        </div>
                    </div>
                </div>

                <div className="content-grid">
                    <div className="dashboard-panel">
                        <div className="panel-header">
                            <h2 className="panel-title">Sales Pipeline (Zoho CRM)</h2>
                            <button className="panel-link">Open CRM &rarr;</button>
                        </div>
                        <div className="pipeline-container">
                            <div className="pipeline-stage">
                                <span className="stage-name">Prospecting</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-slate" style={{ width: '100%' }}>
                                        <span className="stage-count">38</span>
                                    </div>
                                </div>
                                <span className="stage-total">38</span>
                            </div>
                            <div className="pipeline-stage">
                                <span className="stage-name">Qualified</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-purple" style={{ width: '73%' }}>
                                        <span className="stage-count">28</span>
                                    </div>
                                </div>
                                <span className="stage-total">28</span>
                            </div>
                            <div className="pipeline-stage">
                                <span className="stage-name">Proposal</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-blue" style={{ width: '55%' }}>
                                        <span className="stage-count">21</span>
                                    </div>
                                </div>
                                <span className="stage-total">21</span>
                            </div>
                            <div className="pipeline-stage">
                                <span className="stage-name">Negotiation</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-orange" style={{ width: '34%' }}>
                                        <span className="stage-count">13</span>
                                    </div>
                                </div>
                                <span className="stage-total">13</span>
                            </div>
                            <div className="pipeline-stage">
                                <span className="stage-name">Closed Won</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-green" style={{ width: '23%' }}>
                                        <span className="stage-count">9</span>
                                    </div>
                                </div>
                                <span className="stage-total">9</span>
                            </div>
                            <div className="pipeline-stage">
                                <span className="stage-name">Closed Lost</span>
                                <div className="stage-bar-track">
                                    <div className="stage-bar bg-red" style={{ width: '10%' }}>
                                        <span className="stage-count">4</span>
                                    </div>
                                </div>
                                <span className="stage-total">4</span>
                            </div>

                            <div className="pipeline-metrics">
                                <div className="metric-box">
                                    <span className="metric-label">WIN RATE</span>
                                    <span className="metric-value text-success">69%</span>
                                    <span className="metric-trend positive">&uarr; 4% this quarter</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-label">AVG DEAL SIZE</span>
                                    <span className="metric-value">&#x20B9;1.69L</span>
                                    <span className="metric-trend positive">&uarr; &#x20B9;12K</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-panel alert-panel">
                        <div className="panel-header">
                            <div className="title-with-badge">
                                <h2 className="panel-title">Proactive Alerts</h2>
                                <span className="alert-count-badge">3</span>
                            </div>
                            <button className="panel-link">Resolve All</button>
                        </div>
                        <div className="alert-list">
                            <div className="alert-card critical">
                                <div className="alert-icon-ring">
                                    <svg className="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="alert-content">
                                    <span className="alert-type">Books: Overdue Invoice</span>
                                    <p className="alert-desc">Invoice <strong>INV-4024</strong> for Stark Industries is 30 days overdue (&#x20B9;1.1L).</p>
                                    <button className="alert-action-btn">Send Reminder</button>
                                </div>
                            </div>
                            
                            <div className="alert-card warning">
                                <div className="alert-icon-ring">
                                    <svg className="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div className="alert-content">
                                    <span className="alert-type">CRM: Stale Deal Risk</span>
                                    <p className="alert-desc">Wayne Enterprises deal (&#x20B9;85K) has no activity in 14 days.</p>
                                    <button className="alert-action-btn">Nudge Rep</button>
                                </div>
                            </div>

                            <div className="alert-card anomaly">
                                <div className="alert-icon-ring">
                                    <svg className="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="alert-content">
                                    <span className="alert-type">Anomaly Detected</span>
                                    <p className="alert-desc">Revenue dropped 12% vs historical 30-day moving average.</p>
                                    <button className="alert-action-btn">View Analysis</button>
                                </div>
                            </div>
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
                    --panel-accent: var(--charcoal);
                    --ai-brief-bg: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 100%);
                    --kpi-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --panel-accent: var(--gold);
                    --ai-brief-bg: linear-gradient(to right, #1E1E22 0%, rgba(30,30,34,0.7) 100%);
                    --kpi-shadow: 0 10px 40px rgba(0,0,0,0.3);
                }

                .app-container {
                    display: flex;
                    min-height: 100vh;
                    background-color: var(--bg-page);
                    transition: background-color 0.3s;
                }

                .main-content {
                    flex: 1;
                    padding: 40px;
                    overflow-y: auto;
                    font-family: var(--font-outfit), sans-serif;
                    color: var(--text-main);
                }

                .dashboard-header {
                    margin-bottom: 32px;
                }
                
                .ai-briefing {
                    background: var(--ai-brief-bg);
                    border: 1px solid var(--gold);
                    border-left: 4px solid var(--gold);
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: 0 4px 20px rgba(184, 132, 42, 0.05);
                }

                .briefing-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 8px;
                }

                .ai-sparkle {
                    width: 24px;
                    height: 24px;
                    color: var(--gold);
                }

                .dash-title {
                    font-family: var(--font-cormorant), serif;
                    font-size: 28px;
                    font-weight: 600;
                    color: var(--text-main);
                    letter-spacing: -0.5px;
                    margin: 0;
                }

                .dash-subtitle {
                    font-size: 15px;
                    color: var(--text-sub);
                    line-height: 1.5;
                    margin-bottom: 16px;
                    margin-top: 0;
                }

                .briefing-actions {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .action-label {
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .pill-btn {
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pill-btn:hover {
                    background: var(--bg-card);
                    border-color: var(--gold);
                    color: var(--gold);
                }

                .kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                    margin-bottom: 32px;
                }

                .kpi-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: var(--kpi-shadow);
                    transition: all 0.3s;
                }

                .kpi-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                }

                .kpi-label {
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .kpi-icon {
                    width: 20px;
                    height: 20px;
                    color: var(--text-sub);
                }

                .kpi-value {
                    font-size: 28px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin-bottom: 8px;
                    font-family: var(--font-cormorant), serif;
                }

                .kpi-max {
                    font-size: 16px;
                    color: var(--text-sub);
                    font-weight: 400;
                }

                .text-gold { color: var(--gold) !important; }
                .kpi-icon.gold { color: var(--gold); }
                .trend.negative { color: #EF4444; }
                
                .kpi-meta {
                    font-size: 12px;
                }

                .trend.positive { color: #10B981; }
                .trend.neutral { color: var(--text-sub); }

                .content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 24px;
                }

                .dashboard-panel {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    box-shadow: var(--kpi-shadow);
                }

                .panel-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .panel-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .panel-link {
                    background: transparent;
                    border: none;
                    color: var(--gold);
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .panel-link:hover {
                    color: var(--gold-light);
                    text-decoration: underline;
                }

                .pipeline-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .pipeline-stage {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .stage-name {
                    width: 100px;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                    flex-shrink: 0;
                }

                .stage-bar-track {
                    flex: 1;
                    height: 32px;
                    background: var(--bg-page);
                    border-radius: 6px;
                    overflow: hidden;
                    position: relative;
                }

                .stage-bar {
                    height: 100%;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    padding: 0 12px;
                    min-width: 32px;
                }

                .stage-bar.bg-slate { background: #64748B; }
                .stage-bar.bg-purple { background: #8B5CF6; }
                .stage-bar.bg-blue { background: #3B82F6; }
                .stage-bar.bg-orange { background: #F59E0B; }
                .stage-bar.bg-green { background: #10B981; }
                .stage-bar.bg-red { background: #EF4444; }

                .stage-count {
                    color: white;
                    font-size: 13px;
                    font-weight: 600;
                }

                .stage-total {
                    width: 30px;
                    text-align: right;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                    flex-shrink: 0;
                }

                .pipeline-metrics {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-top: 16px;
                    padding-top: 24px;
                    border-top: 1px solid var(--border-main);
                }

                .metric-box {
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    border-radius: 10px;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .metric-label {
                    font-size: 11px;
                    font-weight: 600;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .metric-value {
                    font-size: 24px;
                    font-weight: 600;
                    color: var(--text-main);
                    font-family: inherit;
                }

                .metric-value.text-success {
                    color: #10B981;
                }

                .metric-trend {
                    font-size: 12px;
                    font-weight: 500;
                }
                
                .metric-trend.positive {
                    color: #10B981;
                }

                .alert-panel {
                    border-top: 4px solid var(--panel-accent);
                }

                .title-with-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .alert-count-badge {
                    background: #EF4444;
                    color: white;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 2px 8px;
                    border-radius: 12px;
                }

                .alert-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .alert-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid var(--border-main);
                }
                
                .alert-card:last-child {
                    padding-bottom: 0;
                    border-bottom: none;
                }

                .alert-icon-ring {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .alert-card.critical .alert-icon-ring { background: rgba(239, 68, 68, 0.1); color: #EF4444; }
                .alert-card.warning .alert-icon-ring { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
                .alert-card.anomaly .alert-icon-ring { background: rgba(99, 102, 241, 0.1); color: #6366F1; }

                .alert-icon { width: 18px; height: 18px; }

                .alert-content {
                    flex: 1;
                }

                .alert-type {
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    display: block;
                    margin-bottom: 4px;
                }

                .alert-card.critical .alert-type { color: #EF4444; }
                .alert-card.warning .alert-type { color: #F59E0B; }
                .alert-card.anomaly .alert-type { color: #6366F1; }

                .alert-desc {
                    font-size: 14px;
                    color: var(--text-main);
                    line-height: 1.4;
                    margin: 0 0 10px 0;
                }

                .alert-action-btn {
                    background: transparent;
                    border: 1px solid var(--border-main);
                    border-radius: 6px;
                    padding: 6px 12px;
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .alert-action-btn:hover {
                    background: var(--text-main);
                    color: var(--bg-card);
                    border-color: var(--text-main);
                }

                @media (max-width: 1024px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}
