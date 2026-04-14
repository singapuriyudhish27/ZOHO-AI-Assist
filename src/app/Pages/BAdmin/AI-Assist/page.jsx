"use client";
import React, { useState } from "react";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function AIAssist() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="app-container">
            <BAdminSidebar />
            
            <main className="ai-layout">
                {/* Left Panel: History & Templates */}
                <aside className="chat-sidebar">
                    <div className="sidebar-section">
                        <h3 className="section-title">Saved Conversations</h3>
                        <div className="history-list">
                            <button className="history-item">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                                Q1 Revenue Analysis
                            </button>
                            <button className="history-item">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                                Support SLA Breaches
                            </button>
                            <button className="history-item">
                                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
                                Stale Deals Follow-up
                            </button>
                        </div>
                    </div>

                    <div className="sidebar-section margin-top">
                        <div className="section-header-split">
                            <h3 className="section-title">Prompt Templates</h3>
                            <button className="add-btn">+</button>
                        </div>
                        <div className="history-list">
                            <button className="template-item">
                                <span className="template-icon">✍️</span>
                                <div className="template-text">
                                    <span className="template-name">Draft Client Follow-up</span>
                                    <span className="template-desc">CRM Context</span>
                                </div>
                            </button>
                            <button className="template-item">
                                <span className="template-icon">📊</span>
                                <div className="template-text">
                                    <span className="template-name">Weekly Pipeline Summary</span>
                                    <span className="template-desc">Cross-app Data</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Chat Interface */}
                <div className="chat-main">
                    <div className="chat-header">
                        <div className="chat-title-group">
                            <svg className="ai-sparkle gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                            <h2>ZohoAI Assistant</h2>
                        </div>
                        <button className="secondary-btn">Clear Chat</button>
                    </div>

                    <div className="chat-feed">
                        {/* User Message */}
                        <div className="message-wrapper user-msg">
                            <div className="message-bubble">
                                Create a new lead for John Smith from ABC Corp and draft a welcome email for him.
                            </div>
                            <div className="message-avatar">SJ</div>
                        </div>

                        {/* AI Basic Text Message */}
                        <div className="message-wrapper ai-msg">
                            <div className="message-avatar gradient">Z</div>
                            <div className="message-content">
                                <div className="message-bubble">
                                    I have extracted the lead details for John Smith. Before I create this record in Zoho CRM and draft the email in Zoho Mail, please confirm the action below.
                                </div>
                                
                                {/* Action Confirmation Card */}
                                <div className="action-confirmation-card">
                                    <div className="action-header">
                                        <div className="action-title">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                            Pending Action
                                        </div>
                                        <span className="app-badge">Zoho CRM</span>
                                    </div>
                                    <div className="action-body">
                                        <div className="data-row">
                                            <span className="data-label">Action</span>
                                            <span className="data-value">Create Lead</span>
                                        </div>
                                        <div className="data-row">
                                            <span className="data-label">Name</span>
                                            <span className="data-value">John Smith</span>
                                        </div>
                                        <div className="data-row">
                                            <span className="data-label">Company</span>
                                            <span className="data-value">ABC Corp</span>
                                        </div>
                                    </div>
                                    <div className="action-footer">
                                        <button className="btn-cancel">Edit Details</button>
                                        <button className="btn-confirm">Confirm Action</button>
                                    </div>
                                </div>

                                {/* Suggested Follow-ups */}
                                <div className="suggested-chips">
                                    <span className="chip-label">Suggested:</span>
                                    <button className="followup-chip">Schedule a meeting via Zoho Bookings</button>
                                    <button className="followup-chip">Check if ABC Corp exists in Zoho Books</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chat Input Area */}
                    <div className="chat-input-container">
                        <div className="chat-input-wrapper">
                            <button className="input-icon-btn" title="Attach File">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"/></svg>
                            </button>
                            
                            <input 
                                type="text" 
                                className="chat-text-input" 
                                placeholder="Ask anything about your Zoho apps..." 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />

                            <button className="input-icon-btn" title="Voice Input">
                                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                            </button>

                            <button className={`send-btn ${inputValue ? 'active' : ''}`}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 0l-7 7m7-7l7 7"/></svg>
                            </button>
                        </div>
                        <div className="input-footer">
                            AI can make mistakes. Always review actions before confirming.
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
                    --chat-bg: #F8F9FA;
                    --msg-user: #FFFFFF;
                    --msg-ai: #FFFFFF;
                    --input-bg: #FFFFFF;
                    --sidebar-bg: #FFFFFF;
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --chat-bg: #121214;
                    --msg-user: #2A2A2E;
                    --msg-ai: #1E1E22;
                    --input-bg: #2A2A2E;
                    --sidebar-bg: #1E1E22;
                }

                .app-container {
                    display: flex;
                    height: 100vh;
                    background-color: var(--bg-page);
                    overflow: hidden;
                    transition: background-color 0.3s;
                }

                .ai-layout {
                    flex: 1;
                    display: flex;
                    overflow: hidden;
                }

                /* Sidebar */
                .chat-sidebar {
                    width: 280px;
                    background: var(--sidebar-bg);
                    border-right: 1px solid var(--border-main);
                    display: flex;
                    flex-direction: column;
                    padding: 24px;
                    overflow-y: auto;
                }

                .sidebar-section {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .margin-top {
                    margin-top: 32px;
                }

                .section-header-split {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .section-title {
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-sub);
                    font-weight: 600;
                    margin: 0;
                }

                .add-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-sub);
                    font-size: 16px;
                    cursor: pointer;
                }

                .add-btn:hover { color: var(--text-main); }

                .history-list {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .history-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 12px;
                    border-radius: 8px;
                    background: transparent;
                    border: none;
                    color: var(--text-main);
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.2s;
                }

                .history-item:hover {
                    background: var(--bg-page);
                }

                .history-item svg {
                    color: var(--text-sub);
                }

                .template-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px;
                    border-radius: 8px;
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    cursor: pointer;
                    text-align: left;
                    transition: border-color 0.2s;
                }

                .template-item:hover {
                    border-color: var(--gold);
                }

                .template-icon {
                    font-size: 16px;
                }

                .template-text {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .template-name {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .template-desc {
                    font-size: 11px;
                    color: var(--text-sub);
                }

                /* Main Chat */
                .chat-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background-color: var(--chat-bg);
                }

                .chat-header {
                    padding: 24px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid var(--border-main);
                }

                .chat-title-group {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .chat-title-group h2 {
                    font-family: var(--font-cormorant), serif;
                    font-size: 24px;
                    color: var(--text-main);
                    margin: 0;
                }

                .ai-sparkle.gold {
                    width: 20px;
                    height: 20px;
                    color: var(--gold);
                }

                .secondary-btn {
                    background: transparent;
                    border: 1px solid var(--border-main);
                    padding: 6px 14px;
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--text-sub);
                    cursor: pointer;
                }

                .secondary-btn:hover { background: var(--bg-card); color: var(--text-main); }

                /* Chat Feed */
                .chat-feed {
                    flex: 1;
                    padding: 40px;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .message-wrapper {
                    display: flex;
                    gap: 16px;
                    max-width: 85%;
                }

                .user-msg {
                    align-self: flex-end;
                    flex-direction: row;
                }

                .ai-msg {
                    align-self: flex-start;
                }

                .message-avatar {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: var(--charcoal);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                    font-weight: 600;
                    flex-shrink: 0;
                }

                .message-avatar.gradient {
                    background: linear-gradient(135deg, var(--gold), var(--gold-light));
                    font-family: var(--font-cormorant), serif;
                    font-size: 16px;
                }

                .message-content {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .message-bubble {
                    padding: 14px 18px;
                    border-radius: 12px;
                    font-size: 15px;
                    line-height: 1.5;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }

                .user-msg .message-bubble {
                    background: var(--msg-user);
                    color: var(--text-main);
                    border: 1px solid var(--border-main);
                    border-top-right-radius: 4px;
                }

                .ai-msg .message-bubble {
                    background: var(--msg-ai);
                    color: var(--text-main);
                    border: 1px solid var(--gold);
                    border-top-left-radius: 4px;
                    border-left: 4px solid var(--gold);
                }

                /* Action Card */
                .action-confirmation-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 10px;
                    overflow: hidden;
                    width: 380px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                }

                .action-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 16px;
                    background: var(--bg-page);
                    border-bottom: 1px solid var(--border-main);
                }

                .action-title {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-main);
                }

                .action-title svg { color: var(--gold); }

                .app-badge {
                    font-size: 11px;
                    font-weight: 600;
                    background: var(--bg-card);
                    padding: 2px 8px;
                    border-radius: 10px;
                    color: var(--text-main);
                    border: 1px solid var(--border-main);
                }

                .action-body {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .data-row {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }

                .data-label { color: var(--text-sub); width: 80px;}
                .data-value { color: var(--text-main); font-weight: 500; font-family: monospace; }

                .action-footer {
                    display: flex;
                    gap: 10px;
                    padding: 12px 16px;
                    border-top: 1px solid var(--border-main);
                }

                .btn-cancel {
                    flex: 1;
                    padding: 8px;
                    background: transparent;
                    border: 1px solid var(--border-main);
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-main);
                    cursor: pointer;
                }

                .btn-confirm {
                    flex: 1;
                    padding: 8px;
                    background: #10B981;
                    border: none;
                    border-radius: 6px;
                    font-size: 13px;
                    font-weight: 500;
                    color: white;
                    cursor: pointer;
                }

                /* Follow-ups */
                .suggested-chips {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 8px;
                }

                .chip-label {
                    font-size: 12px;
                    color: var(--text-sub);
                }

                .followup-chip {
                    background: transparent;
                    border: 1px solid var(--gold);
                    color: var(--text-main);
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .followup-chip:hover { background: var(--gold); color: white; }

                /* Input Area */
                .chat-input-container {
                    padding: 0 40px 40px;
                }

                .chat-input-wrapper {
                    display: flex;
                    align-items: center;
                    background: var(--input-bg);
                    border: 1px solid var(--border-main);
                    border-radius: 16px;
                    padding: 8px 16px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                    gap: 12px;
                }

                .input-icon-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-sub);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    padding: 8px;
                    border-radius: 8px;
                    transition: background 0.2s;
                }

                .input-icon-btn:hover { background: var(--bg-page); color: var(--text-main); }

                .chat-text-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    font-size: 15px;
                    color: var(--text-main);
                    background: transparent;
                    font-family: inherit;
                    padding: 8px 0;
                }

                .chat-text-input::placeholder { color: var(--text-sub); }

                .send-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: var(--bg-page);
                    border: none;
                    color: var(--text-sub);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .send-btn.active {
                    background: var(--gold);
                    color: white;
                    cursor: pointer;
                }

                .input-footer {
                    text-align: center;
                    font-size: 11px;
                    color: var(--text-sub);
                    margin-top: 12px;
                }
            `}</style>
        </div>
    );
}
