"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function NewIntegrationModal({ isOpen, onClose }) {
    const [step, setStep] = useState(1);
    const [authType, setAuthType] = useState("api_key");
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        baseUrl: "",
        apiKey: "",
        clientId: "",
        clientSecret: "",
        username: "",
        password: ""
    });

    useEffect(() => {
        setIsMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setStep(1); // Reset to step 1 when opening
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isMounted || !isOpen) return null;

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const modalContent = (
        <div className="wiz-modal-backdrop" onClick={onClose}>
            <div className="wiz-modal-container" onClick={e => e.stopPropagation()}>
                <div className="wiz-modal-card wiz-fade-up">
                    <button className="wiz-close-btn" onClick={onClose}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="wiz-modal-header">
                        <div className="wiz-step-indicator">Step {step} of 3</div>
                        <h2 className="wiz-modal-title">Configure Integration</h2>
                        <div className="wiz-progress-bar">
                            <div className="wiz-progress-fill" style={{ width: `${(step / 3) * 100}%` }}></div>
                        </div>
                    </div>

                    <div className="wiz-modal-body">
                        {step === 1 && (
                            <div className="wiz-step wiz-fade-in">
                                <div className="wiz-input-group">
                                    <label>Application Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. My Custom CRM" 
                                        value={formData.name}
                                        onChange={e => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="wiz-input-group">
                                    <label>Application Category</label>
                                    <select className="wiz-custom-select">
                                        <option>CRM & Sales</option>
                                        <option>ERP & Accounting</option>
                                        <option>Marketing</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="wiz-step wiz-fade-in">
                                <div className="wiz-input-group">
                                    <label>Authentication Method</label>
                                    <div className="wiz-auth-toggle-grid">
                                        {["api_key", "oauth2", "basic"].map((type) => (
                                            <button 
                                                key={type}
                                                className={`wiz-auth-type-btn ${authType === type ? 'active' : ''}`}
                                                onClick={() => setAuthType(type)}
                                            >
                                                {type.replace('_', ' ').toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {authType === "api_key" && (
                                    <div className="wiz-input-group wiz-slide-down">
                                        <label>API Key / Token</label>
                                        <input type="password" placeholder="Paste your secret token here" />
                                    </div>
                                )}

                                {authType === "oauth2" && (
                                    <div className="wiz-oauth-fields wiz-slide-down">
                                        <div className="wiz-input-group">
                                            <label>Client ID</label>
                                            <input type="text" placeholder="OAuth Client Identifier" />
                                        </div>
                                        <div className="wiz-input-group">
                                            <label>Client Secret</label>
                                            <input type="password" placeholder="OAuth secret key" />
                                        </div>
                                    </div>
                                )}

                                {authType === "basic" && (
                                    <div className="wiz-basic-fields wiz-slide-down">
                                        <div className="wiz-input-group">
                                            <label>Username</label>
                                            <input type="text" placeholder="Account username" />
                                        </div>
                                        <div className="wiz-input-group">
                                            <label>Password</label>
                                            <input type="password" placeholder="Account password" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {step === 3 && (
                            <div className="wiz-step wiz-fade-in">
                                <div className="wiz-input-group">
                                    <label>Base API URL</label>
                                    <input type="text" placeholder="https://api.myapp.com/v1" />
                                </div>
                                <div className="wiz-test-connection">
                                    <button className="wiz-test-btn">
                                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                                        Test Connection
                                    </button>
                                    <p className="wiz-test-hint">We'll attempt to reach the server to verify credentials.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="wiz-modal-footer">
                        {step > 1 && (
                            <button className="wiz-btn-back" onClick={handleBack}>Back</button>
                        )}
                        <div style={{ flex: 1 }}></div>
                        {step < 3 ? (
                            <button className="wiz-btn-next" onClick={handleNext}>Continue</button>
                        ) : (
                            <button className="wiz-btn-finish" onClick={() => {
                                console.log("Finalizing Integration...");
                                onClose();
                            }}>Complete Integration</button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .wiz-modal-backdrop {
                    position: fixed;
                    top: 0; left: 0; width: 100vw; height: 100vh;
                    background: rgba(10, 10, 12, 0.6);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 99999;
                    padding: 20px;
                    animation: wizFadeIn 0.3s ease-out forwards;
                }

                @keyframes wizFadeIn { from { opacity: 0; } to { opacity: 1; } }

                .wiz-modal-container { width: 100%; max-width: 500px; }

                .wiz-modal-card {
                    background: white;
                    border-radius: 24px;
                    padding: 40px;
                    position: relative;
                    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
                }

                .dark .wiz-modal-card {
                    background: #1e1e22;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .wiz-fade-up { animation: wizSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                @keyframes wizSlideUp { 
                    from { transform: translateY(30px); opacity: 0; } 
                    to { transform: translateY(0); opacity: 1; } 
                }

                .wiz-close-btn {
                    position: absolute;
                    top: 24px; right: 24px;
                    background: transparent; border: none;
                    color: #6B7280; cursor: pointer;
                    padding: 8px; border-radius: 50%;
                }
                .wiz-close-btn:hover { background: rgba(0,0,0,0.05); color: #1a1a2e; }
                .dark .wiz-close-btn:hover { background: rgba(255,255,255,0.05); color: white; }

                .wiz-modal-header { margin-bottom: 32px; }
                .wiz-step-indicator { 
                    font-size: 11px; font-weight: 700; color: #B8842A; 
                    text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;
                }
                .wiz-modal-title { 
                    font-size: 24px; font-weight: 600; color: #1a1a2e;
                    margin-bottom: 16px;
                }
                .dark .wiz-modal-title { color: white; }

                .wiz-progress-bar { 
                    width: 100%; height: 4px; background: #EEE; border-radius: 2px;
                    overflow: hidden;
                }
                .dark .wiz-progress-bar { background: rgba(255,255,255,0.05); }
                .wiz-progress-fill { height: 100%; background: #B8842A; transition: width 0.4s ease; }

                .wiz-input-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
                label { font-size: 13px; font-weight: 500; color: #6B7280; }
                .dark label { color: rgba(255, 255, 255, 0.5); }
                
                input, select {
                    padding: 12px 16px;
                    border-radius: 10px;
                    border: 1px solid #DDD;
                    background: #F8F9FA;
                    font-size: 14px;
                    transition: all 0.2s;
                }
                .dark input, .dark select {
                    background: rgba(255,255,255,0.03);
                    border-color: rgba(255,255,255,0.1);
                    color: white;
                }
                .dark select option {
                    background: #1e1e22;
                    color: white;
                }

                input:focus { outline: none; border-color: #B8842A; background: white; }
                .dark input:focus { background: rgba(255,255,255,0.05); }

                .wiz-auth-toggle-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 8px;
                    background: #F0F0F0;
                    padding: 4px;
                    border-radius: 10px;
                }
                .dark .wiz-auth-toggle-grid { background: rgba(255,255,255,0.05); }

                .wiz-auth-type-btn {
                    padding: 8px; border: none; border-radius: 7px;
                    font-size: 10px; font-weight: 700; cursor: pointer;
                    transition: all 0.2s; color: #6B7280; background: transparent;
                }
                .wiz-auth-type-btn.active { background: white; color: #B8842A; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
                .dark .wiz-auth-type-btn.active { background: rgba(255,255,255,0.1); color: #B8842A; }

                .wiz-test-connection {
                    margin-top: 10px;
                    padding: 24px;
                    background: rgba(184, 132, 42, 0.03);
                    border: 1px dashed #B8842A;
                    border-radius: 16px;
                    text-align: center;
                }

                .wiz-test-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 24px;
                    background: #B8842A;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .wiz-test-btn:hover { transform: translateY(-1px); filter: brightness(1.1); }

                .wiz-test-hint { font-size: 11px; color: #6B7280; margin-top: 12px; }

                .wiz-modal-footer {
                    margin-top: 40px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .wiz-btn-back {
                    background: transparent; border: 1px solid #DDD;
                    padding: 10px 20px; border-radius: 10px;
                    font-size: 14px; font-weight: 500; color: #6B7280;
                    cursor: pointer;
                }
                .dark .wiz-btn-back { border-color: rgba(255,255,255,0.1); }

                .wiz-btn-next, .wiz-btn-finish {
                    background: #1a1a2e;
                    color: white;
                    padding: 10px 32px;
                    border-radius: 10px;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                }
                .dark .wiz-btn-next, .dark .wiz-btn-finish { background: white; color: black; }

                .wiz-fade-in { animation: wizFadeIn 0.3s ease-out forwards; }
                .wiz-slide-down { animation: wizSlideDown 0.3s ease-out forwards; }
                @keyframes wizSlideDown { 
                    from { transform: translateY(-10px); opacity: 0; } 
                    to { transform: translateY(0); opacity: 1; } 
                }
            `}</style>
        </div>
    );

    return createPortal(modalContent, document.body);
}
