"use client";
import React, { useState, useEffect } from "react";
import TMemberSidebar from "@/Components/TMember_Sidebar";

export default function AIAssist() {
    const [messages, setMessages] = useState([
        { id: 1, role: "ai", content: "Hello Alex! I have analyzed the Acme Corp Lead from Zoho CRM. Their current deal value is $45,000 and they are in the 'Discovery' stage. How can I help you move this forward?", time: "10:42 AM" },
        { id: 2, role: "user", content: "What are the recent notes from the support team for this client?", time: "10:43 AM" },
        { id: 3, role: "ai", content: "Checking Zoho Desk... \n\nRecent Ticket #842: 'Requested update on API integration timeline.'\nRecent Ticket #811: 'Inquiry regarding multi-user permissions.'\n\nWould you like me to draft a follow-up email addressing these technical points?", time: "10:43 AM" }
    ]);
    const [input, setInput] = useState("");

    const activeContext = {
        name: "Acme Corp",
        source: "Zoho CRM",
        status: "Discovery",
        value: "$45,000",
        contact: "John Doe (CTO)",
        tags: ["High Value", "Tech Stack"]
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const newMsg = { id: Date.now(), role: "user", content: input, time: "Now" };
        setMessages([...messages, newMsg]);
        setInput("");
    };

    return (
        <div className="app-container">
            <TMemberSidebar />
            
            <main className="main-content chat-layout">
                
                {/* Chat History Pane */}
                <div className="chat-pane flex-1">
                    <div className="pane-header">
                        <div className="p-h-info">
                            <h1 className="pane-title">ZohoAI Intelligent Assistant</h1>
                            <p className="pane-subtitle">Cross-app context enabled (CRM, Books, Desk)</p>
                        </div>
                        <div className="p-h-actions">
                            <button className="icon-action-btn">🗑️ Clear Thread</button>
                        </div>
                    </div>

                    <div className="messages-area">
                        {messages.map(msg => (
                            <div key={msg.id} className={`message-row ${msg.role}`}>
                                <div className="msg-bubble">
                                    <div className="msg-content">{msg.content}</div>
                                    <div className="msg-time">{msg.time}</div>
                                </div>
                            </div>
                        ))}
                        <div className="typing-indicator ai">
                            <span></span><span></span><span></span>
                        </div>
                    </div>

                    <div className="input-governance">
                        {/* Integration Shortcuts */}
                        <div className="integration-shortcuts">
                            <button className="i-s-btn">Analyze CRM Lead</button>
                            <button className="i-s-btn">Query Desk Tickets</button>
                            <button className="i-s-btn">Draft Books Invoice</button>
                            <button className="i-s-btn">Project Pulse</button>
                        </div>
                        
                        {/* Command Bar */}
                        <div className="command-bar glass">
                            <button className="c-b-icon-btn">📎</button>
                            <textarea 
                                className="c-b-input" 
                                placeholder="Type a message or ask ZohoAI about a record..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                            />
                            <button className="c-b-icon-btn">🎤</button>
                            <button onClick={handleSend} className="c-b-send-btn">Send</button>
                        </div>
                    </div>
                </div>

            </main>

            <style jsx>{`
                /* Unified Theme Variables */
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: white;
                    --bg-pane: white;
                    --bg-msg-user: #18181B;
                    --bg-msg-ai: #F1F5F9;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --border-ghost: var(--border-light);
                    --shadow-main: 0 4px 15px rgba(0,0,0,0.02);
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --bg-pane: #121214;
                    --bg-msg-user: var(--gold);
                    --bg-msg-ai: rgba(255,255,255,0.05);
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

                .chat-layout {
                    display: flex;
                    flex: 1;
                    padding: 0;
                    gap: 0;
                }

                .chat-pane {
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-pane);
                    border-right: 1px solid var(--border-main);
                    height: 100%;
                }

                .flex-1 { flex: 1; }

                /* Pane Header */
                .pane-header { padding: 24px 40px; border-bottom: 1px solid var(--border-main); display: flex; justify-content: space-between; align-items: center; }
                .pane-title { font-family: var(--font-cormorant), serif; font-size: 24px; font-weight: 600; color: var(--text-main); margin: 0; }
                .pane-subtitle { font-size: 13px; color: var(--text-sub); margin-top: 4px; }
                .icon-action-btn { background: transparent; border: none; font-size: 12px; color: var(--text-sub); cursor: pointer; font-weight: 600; }

                /* Messages Area */
                .messages-area { 
                    flex: 1; 
                    padding: 40px; 
                    overflow-y: auto; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 32px; 
                }

                .message-row { display: flex; flex-direction: column; gap: 8px; max-width: 80%; }
                .message-row.user { align-self: flex-end; align-items: flex-end; }
                .message-row.ai { align-self: flex-start; align-items: flex-start; }

                .msg-bubble { 
                    padding: 16px 20px; 
                    border-radius: 16px; 
                    font-size: 15px; 
                    line-height: 1.6; 
                    position: relative;
                }
                .message-row.user .msg-bubble { background: var(--bg-msg-user); color: white; border-bottom-right-radius: 4px; }
                .message-row.ai .msg-bubble { background: var(--bg-msg-ai); color: var(--text-main); border-bottom-left-radius: 4px; border: 1px solid var(--border-ghost); }

                .msg-time { font-size: 10px; color: var(--text-sub); text-transform: uppercase; margin-top: 6px; letter-spacing: 0.5px; font-weight: 700; }

                /* Typing Indicator */
                .typing-indicator { display: flex; gap: 4px; padding: 12px 20px; background: var(--bg-msg-ai); border-radius: 12px; width: fit-content; opacity: 0.6; }
                .typing-indicator span { width: 6px; height: 6px; border-radius: 50%; background: var(--text-sub); animation: bounce 1.2s infinite; }
                .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
                .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }

                @keyframes bounce { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }

                /* Input Area */
                .input-governance { padding: 24px 40px 40px; background: var(--bg-pane); border-top: 1px solid var(--border-main); }
                .integration-shortcuts { display: flex; gap: 12px; margin-bottom: 16px; overflow-x: auto; padding-bottom: 8px; }
                .i-s-btn { 
                    white-space: nowrap; 
                    padding: 8px 16px; 
                    background: var(--bg-card); 
                    border: 1px solid var(--border-main); 
                    border-radius: 8px; 
                    font-size: 12px; 
                    font-weight: 700; 
                    color: var(--text-sub); 
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .i-s-btn:hover { border-color: var(--gold); color: var(--gold); }

                .command-bar { display: flex; align-items: flex-end; gap: 12px; padding: 12px 16px; background: var(--bg-card); border: 1px solid var(--border-main); border-radius: 16px; box-shadow: var(--shadow-main); }
                .c-b-input { flex: 1; min-height: 24px; max-height: 120px; border: none; background: transparent; color: var(--text-main); font-size: 15px; resize: none; padding: 8px 0; outline: none; }
                .c-b-icon-btn { background: transparent; border: none; padding: 8px; font-size: 18px; cursor: pointer; opacity: 0.6; transition: opacity 0.2s; }
                .c-b-icon-btn:hover { opacity: 1; }
                .c-b-send-btn { background: var(--gold); color: white; border: none; padding: 10px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; transition: transform 0.2s; }
                .c-b-send-btn:hover { transform: scale(1.05); }

                .mt-24 { margin-top: 24px; }
                .glass { backdrop-filter: blur(10px); }
            `}</style>
        </div>
    );
}
