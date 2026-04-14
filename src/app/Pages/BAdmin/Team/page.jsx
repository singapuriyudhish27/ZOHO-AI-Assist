"use client";
import BAdminSidebar from "@/Components/BAdmin_Sidebar";

export default function Team() {
    const teamMembers = [
        {
            id: 1,
            name: "Alex Wong",
            email: "alex.wong@acmecorp.com",
            role: "Sales Representative",
            apps: ["CRM", "Desk"],
            status: "Active",
            avatar: "AW"
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            email: "sarah.j@acmecorp.com",
            role: "Support Lead",
            apps: ["Desk", "Projects", "Cliq"],
            status: "Active",
            avatar: "SJ"
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "m.chen@acmecorp.com",
            role: "Marketing Manager",
            apps: ["Campaigns", "Social"],
            status: "Active",
            avatar: "MC"
        },
        {
            id: 4,
            name: "David Smith",
            email: "david@acmecorp.com",
            role: "Finance Director",
            apps: ["Books"],
            status: "Pending",
            avatar: "DS"
        }
    ];

    return (
        <div className="app-container">
            <BAdminSidebar />
            <main className="main-content">
                
                {/* Header Sub-Component */}
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Team Management</h1>
                        <p className="page-subtitle">Manage your users, roles, and connected app permissions.</p>
                    </div>
                    <button className="primary-action-btn">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Invite Member
                    </button>
                </div>

                {/* Seat Management Banner */}
                <div className="seat-management-banner">
                    <div className="banner-content">
                        <div className="banner-icon">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="banner-text">
                            <strong>Professional Plan</strong> — 4 out of 10 team seats currently active.
                        </div>
                    </div>
                    <div className="banner-actions">
                        <div className="progress-bar-bg">
                            <div className="progress-bar-fill" style={{ width: '40%' }}></div>
                        </div>
                        <span className="progress-text">40% Used</span>
                        <button className="upgrade-link">Upgrade Plan</button>
                    </div>
                </div>

                {/* Team Table */}
                <div className="table-container">
                    <table className="team-table">
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Role</th>
                                <th>App Access</th>
                                <th>Status</th>
                                <th className="text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teamMembers.map(member => (
                                <tr key={member.id}>
                                    <td>
                                        <div className="member-cell">
                                            <div className="member-avatar">{member.avatar}</div>
                                            <div className="member-info">
                                                <span className="member-name">{member.name}</span>
                                                <span className="member-email">{member.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="role-text">{member.role}</span>
                                    </td>
                                    <td>
                                        <div className="apps-flex">
                                            {member.apps.map(app => (
                                                <span key={app} className="app-badge">{app}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge ${member.status.toLowerCase()}`}>
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="text-right actions-cell">
                                        {member.status === "Pending" ? (
                                            <button className="action-btn text-gold" title="Resend Invite">
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            </button>
                                        ) : (
                                            <button className="action-btn" title="Edit Permissions">
                                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                            </button>
                                        )}
                                        <button className="action-btn text-error" title="Remove Member">
                                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </main>

            <style jsx>{`
                .app-container {
                    --bg-page: #F8F9FA;
                    --bg-card: #FFFFFF;
                    --text-main: var(--charcoal);
                    --text-sub: var(--slate);
                    --border-main: var(--border);
                    --team-shadow: 0 4px 15px rgba(0,0,0,0.02);
                    --table-head: #FAFAFA;
                    --avatar-bg: linear-gradient(135deg, var(--charcoal), var(--charcoal-mid));
                }

                :global(.dark) .app-container {
                    --bg-page: #121214;
                    --bg-card: #1E1E22;
                    --text-main: #FFFFFF;
                    --text-sub: rgba(255,255,255,0.5);
                    --border-main: rgba(255,255,255,0.08);
                    --team-shadow: 0 10px 40px rgba(0,0,0,0.3);
                    --table-head: #252529;
                    --avatar-bg: linear-gradient(135deg, #2A2A2E, #1A1A1E);
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
                    transition: all 0.2s;
                }

                .primary-action-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 16px rgba(184, 132, 42, 0.4);
                    filter: brightness(1.1);
                }

                /* Banner */
                .seat-management-banner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: var(--bg-card);
                    border: 1px solid var(--border-main);
                    border-radius: 12px;
                    padding: 16px 24px;
                    box-shadow: var(--team-shadow);
                    transition: all 0.3s;
                }

                .banner-content {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .banner-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--bg-page);
                    color: var(--gold);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                
                .banner-text {
                    font-size: 15px;
                    color: var(--text-main);
                    opacity: 0.8;
                }

                .banner-text strong {
                    color: var(--text-main);
                }

                .banner-actions {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .progress-bar-bg {
                    width: 120px;
                    height: 6px;
                    background: var(--bg-page);
                    border-radius: 4px;
                    overflow: hidden;
                    border: 1px solid var(--border-main);
                }

                .progress-bar-fill {
                    height: 100%;
                    background: var(--gold);
                    border-radius: 4px;
                }

                .progress-text {
                    font-size: 13px;
                    font-weight: 500;
                    color: var(--text-sub);
                }

                .upgrade-link {
                    background: transparent;
                    border: none;
                    color: var(--gold);
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    text-decoration: underline;
                    padding: 0;
                }

                /* Table */
                .table-container {
                    background: var(--bg-card);
                    border-radius: 12px;
                    border: 1px solid var(--border-main);
                    box-shadow: var(--team-shadow);
                    overflow: hidden;
                    transition: all 0.3s;
                }

                .team-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                }

                .team-table th {
                    background: var(--table-head);
                    padding: 16px 24px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--text-sub);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 2px solid var(--border-main);
                }

                .team-table td {
                    padding: 16px 24px;
                    border-bottom: 1px solid var(--border-main);
                    vertical-align: middle;
                    color: var(--text-main);
                }

                .team-table tr:last-child td {
                    border-bottom: none;
                }
                
                .team-table tr:hover {
                    background: var(--bg-page);
                }

                .text-right {
                    text-align: right;
                }

                .member-cell {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .member-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--avatar-bg);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 1px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                }

                .member-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .member-name {
                    font-weight: 600;
                    color: var(--text-main);
                    font-size: 15px;
                }

                .member-email {
                    color: var(--text-sub);
                    font-size: 13px;
                }

                .role-text {
                    font-size: 14px;
                    color: var(--text-main);
                    font-weight: 500;
                    opacity: 0.9;
                }

                .apps-flex {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }

                .app-badge {
                    background: var(--bg-page);
                    border: 1px solid var(--border-main);
                    color: var(--text-main);
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 500;
                    opacity: 0.8;
                }

                .status-badge {
                    display: inline-block;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-size: 12px;
                    font-weight: 600;
                }

                .status-badge.active {
                    background: rgba(16, 185, 129, 0.1);
                    color: #10B981;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                }

                .status-badge.pending {
                    background: rgba(245, 158, 11, 0.1);
                    color: #F59E0B;
                    border: 1px solid rgba(245, 158, 11, 0.2);
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
                    padding: 8px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }

                .action-btn:hover {
                    background: var(--bg-page);
                    color: var(--text-main);
                }

                .action-btn.text-gold:hover { color: var(--gold); background: rgba(184, 132, 42, 0.1); }
                .action-btn.text-error:hover { color: #EF4444; background: rgba(239, 68, 68, 0.1); }
            `}</style>
        </div>
    );
}
