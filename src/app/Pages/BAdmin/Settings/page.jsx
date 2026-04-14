"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("governance");

    const auditLogs = [
        { id: 1, actor: "System AI", action: "Drafted Overdue Reminder for Invoice #1024", app: "Zoho Books", time: "Today, 10:45 AM" },
        { id: 2, actor: "Sarah Jenkins", action: "Disabled Financial Write Access", app: "Workspace Settings", time: "Today, 09:12 AM" },
        { id: 3, actor: "System AI", action: "Generated 'Sales Pipeline Health' Report", app: "Reports Module", time: "Yesterday, 4:30 PM" },
        { id: 4, actor: "System AI", action: "Scored 14 new leads generated from web form", app: "Zoho CRM", time: "Yesterday, 2:15 PM" },
        { id: 5, actor: "Sarah Jenkins", action: "Invited 'Alex Wong' to Workspace", app: "Team Management", time: "Oct 12, 11:00 AM" }
    ];

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="main-content">
                
                {/* Header Sub-Component */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Workspace Settings</h1>
                        <p className="page-subtitle">Configure AI permissions, audit logs, and general workspace details.</p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="tabs-container">
                    <button 
                        className={`tab-item ${activeTab === 'governance' ? 'active' : ''}`}
                        onClick={() => setActiveTab('governance')}
                    >
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        AI Governance
                    </button>
                    <button 
                        className={`tab-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        General Profile
                    </button>
                    <button 
                        className={`tab-item ${activeTab === 'audit' ? 'active' : ''}`}
                        onClick={() => setActiveTab('audit')}
                    >
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                        Audit Logs
                    </button>
                </div>

                {/* Tab Contents */}
                <div className="tab-content-area">
                    
                    {/* Tab 1: AI Governance */}
                    {activeTab === 'governance' && (
                        <div className="settings-section">
                            <div className="section-header">
                                <h2 className="section-title">AI Feature Control</h2>
                                <p className="section-desc">Govern what the AI Assistant is allowed to see and execute autonomously across your connected Zoho Apps.</p>
                            </div>

                            <div className="controls-list">
                                <div className="control-card">
                                    <div className="control-info">
                                        <h3 className="control-name">Proactive Alerts & Anomaly Detection</h3>
                                        <p className="control-desc">Allow AI to constantly scan background data and push anomaly alerts to your dashboard.</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                                <div className="control-card">
                                    <div className="control-info">
                                        <h3 className="control-name">Financial Write-Access (Zoho Books)</h3>
                                        <p className="control-desc text-error">Warning: If enabled, AI can generate and send live invoices without manual confirmation.</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" />
                                        <span className="slider error-slider"></span>
                                    </label>
                                </div>

                                <div className="control-card">
                                    <div className="control-info">
                                        <h3 className="control-name">Automated Email Drafting (Zoho Mail)</h3>
                                        <p className="control-desc">Allow AI to autonomously prepare email drafts for CRM leads or Desk tickets. (Emails remain as 'Draft' pending user review).</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" defaultChecked />
                                        <span className="slider"></span>
                                    </label>
                                </div>

                                <div className="control-card">
                                    <div className="control-info">
                                        <h3 className="control-name">Strict Data Anonymization Mode</h3>
                                        <p className="control-desc">Automatically redact Customer PII (Names, Phone Numbers, Emails) before text is sent to the LLM processor.</p>
                                    </div>
                                    <label className="toggle-switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="form-actions">
                                <button className="primary-btn">Save Configurations</button>
                            </div>
                        </div>
                    )}

                    {/* Tab 2: General Profile */}
                    {activeTab === 'profile' && (
                        <div className="settings-section">
                            <div className="section-header">
                                <h2 className="section-title">Workspace Configuration</h2>
                                <p className="section-desc">Manage your company's core profile attributes and basic AI behavior.</p>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Company / Workspace Name</label>
                                    <input type="text" className="form-input" defaultValue="Acme Corp" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Industry Sector</label>
                                    <select className="form-input">
                                        <option>Technology & Software</option>
                                        <option>Retail & E-commerce</option>
                                        <option>Financial Services</option>
                                        <option>Healthcare</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Default Timezone</label>
                                    <select className="form-input">
                                        <option>UTC-5 (Eastern Time)</option>
                                        <option>UTC-8 (Pacific Time)</option>
                                        <option>UTC+0 (London)</option>
                                        <option>UTC+5:30 (India Standard Time)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">AI Conversation Tone</label>
                                    <select className="form-input">
                                        <option>Professional & Concise (Recommended)</option>
                                        <option>Friendly & Casual</option>
                                        <option>Direct Data (No conversational padding)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">LLM Provider</label>
                                    <select className="form-input">
                                        <option>Anthropic (Claude 3.5 Sonnet)</option>
                                        <option>OpenAI (GPT-4o)</option>
                                        <option>Google Gemini (Pro 1.5)</option>
                                        <option>Mistral AI (Large 2)</option>
                                        <option>Alibaba (Qwen 2.5)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Model Context Logic</label>
                                    <select className="form-input">
                                        <option>Balanced (Fast & Smart)</option>
                                        <option>Creative (Deep Reasoning)</option>
                                        <option>Concise (Speed Optimized)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button className="primary-btn">Update Profile</button>
                            </div>
                        </div>
                    )}

                    {/* Tab 3: Audit Logs */}
                    {activeTab === 'audit' && (
                        <div className="settings-section">
                            <div className="section-header-split">
                                <div>
                                    <h2 className="section-title">Workspace Audit Logs</h2>
                                    <p className="section-desc">A complete history of actions executed automatically by the AI Assistant or Team Members.</p>
                                </div>
                                <button className="secondary-action-btn">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                    Export Logs
                                </button>
                            </div>

                            <div className="table-container">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Timestamp</th>
                                            <th>Actor</th>
                                            <th>Action Performed</th>
                                            <th>Application Area</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {auditLogs.map(log => (
                                            <tr key={log.id}>
                                                <td className="log-time">{log.time}</td>
                                                <td>
                                                    <span className={`actor-badge ${log.actor === 'System AI' ? 'ai' : 'human'}`}>
                                                        {log.actor === 'System AI' ? '🤖 ' : '👤 '}
                                                        {log.actor}
                                                    </span>
                                                </td>
                                                <td className="log-action">{log.action}</td>
                                                <td><span className="log-app">{log.app}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
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
                    --settings-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --tab-inactive: var(--slate);
                    --input-bg: #FFFFFF;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --settings-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --tab-inactive: rgba(255,255,255,0.4);
                    --input-bg: #252529;
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

                /* Tabs Nav */
                .tabs-container {
                    display: flex;
                    gap: 32px;
                    border-bottom: 1px solid var(--border-main);
                    margin-bottom: -8px; 
                    transition: border-color 0.3s;
                }

                .tab-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: transparent;
                    border: none;
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--tab-inactive);
                    padding: 0 0 16px 0;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s;
                }

                .tab-item:hover {
                    color: var(--text-main);
                }

                .tab-item.active {
                    color: var(--gold);
                }

                .tab-item.active::after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: var(--gold);
                    box-shadow: 0 -2px 10px rgba(184, 132, 42, 0.4);
                }

                /* Tab Content Global */
                .tab-content-area {
                    flex: 1;
                }

                .settings-section {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    max-width: 900px;
                }

                .section-header-split {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .section-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0 0 4px 0;
                }

                .section-desc {
                    font-size: 14px;
                    color: var(--text-sub);
                    margin: 0;
                }

                /* UI Buttons */
                .primary-btn {
                    background: var(--gold);
                    color: white;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    font-family: inherit;
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 12px rgba(184, 132, 42, 0.2);
                }

                .primary-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                .secondary-action-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    background: var(--bg-card);
                    color: var(--text-main);
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-family: inherit;
                    font-weight: 500;
                    font-size: 13px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary-action-btn:hover {
                    background: var(--bg-page);
                    border-color: var(--gold);
                }

                .form-actions {
                    margin-top: 16px;
                    padding-top: 24px;
                    border-top: 1px dashed var(--border-main);
                }

                /* Control Cards */
                .controls-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .control-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: var(--settings-shadow);
                    transition: all 0.3s;
                }

                .control-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    max-width: 80%;
                }

                .control-name {
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--text-main);
                    margin: 0;
                }

                .control-desc {
                    font-size: 13px;
                    color: var(--text-sub);
                    margin: 0;
                    line-height: 1.5;
                }

                .text-error {
                    color: #F59E0B; /* Warning gold/orange */
                }

                /* Config Toggles */
                .toggle-switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 24px;
                }

                .toggle-switch input { opacity: 0; width: 0; height: 0; }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background-color: var(--bg-page);
                    transition: .3s;
                    border-radius: 24px;
                    border: 1px solid var(--border-main);
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 16px;
                    width: 16px;
                    left: 3px;
                    bottom: 3px;
                    background-color: var(--text-sub);
                    transition: .3s;
                    border-radius: 50%;
                }

                input:checked + .slider { background-color: #10B981; border-color: #10B981; }
                input:checked + .error-slider { background-color: #EF4444; border-color: #EF4444; }
                
                input:checked + .slider:before { transform: translateX(20px); background-color: white; }

                /* Form Layout */
                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    padding: 32px;
                    border-radius: 12px;
                    box-shadow: var(--settings-shadow);
                    transition: all 0.3s;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .form-label {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .form-input {
                    padding: 10px 14px;
                    border: 1px solid var(--border-main);
                    border-radius: 8px;
                    font-family: inherit;
                    font-size: 14px;
                    color: var(--text-main);
                    outline: none;
                    background: var(--input-bg);
                    transition: all 0.2s;
                }

                .form-input:focus {
                    border-color: var(--gold);
                    box-shadow: 0 0 0 2px rgba(184, 132, 42, 0.1);
                }

                /* Audit Table */
                .table-container {
                    background: var(--bg-card);
                    border-radius: 12px;
                    border: 1px solid var(--border-main);
                    box-shadow: var(--settings-shadow);
                    overflow: hidden;
                    margin-top: 16px;
                    transition: all 0.3s;
                }

                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }

                .data-table th {
                    background: var(--bg-page);
                    padding: 16px 24px;
                    font-size: 12px;
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

                .log-time {
                    font-size: 13px;
                    color: var(--text-sub);
                    white-space: nowrap;
                }

                .actor-badge {
                    display: inline-block;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 12px;
                }

                .actor-badge.ai { 
                    background: rgba(184, 132, 42, 0.1); 
                    color: var(--gold); 
                    border: 1px solid rgba(184, 132, 42, 0.2); 
                }
                .actor-badge.human { 
                    background: var(--bg-page); 
                    color: var(--text-sub);
                    border: 1px solid var(--border-main);
                }

                .log-action {
                    font-size: 14px;
                    color: var(--text-main);
                    font-weight: 500;
                }

                .log-app {
                    font-size: 12px;
                    color: var(--text-sub);
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    padding: 4px 8px;
                    border-radius: 6px;
                }
            `}</style>
        </div>
    );
}
