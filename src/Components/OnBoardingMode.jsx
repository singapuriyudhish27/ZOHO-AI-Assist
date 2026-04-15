"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

const steps = [
  "Goals",
  "Integrations",
  "Team Setup",
  "Plan",
];

export default function OnboardingModal({ open, setOpen }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [invitedMembers, setInvitedMembers] = useState([]);
  const [connectedApps, setConnectedApps] = useState([]);
  const [isPlanConfirmed, setIsPlanConfirmed] = useState(false);

  const progress = ((step + 1) / steps.length) * 100;

  const next = () => {
    if (step === steps.length - 1) {
      if (!selectedPlan) {
        toast.warn("Please select a plan to proceed", { autoClose: 2000 });
        return;
      }

      if (!isPlanConfirmed) {
        setIsPlanConfirmed(true);
        const confirmMsg = selectedPlan === "Basic" 
          ? "Basic Plan selected. Click Finish to complete!" 
          : `${selectedPlan} Plan selected. Click Finish to proceed!`;
        
        if (selectedPlan === "Basic") {
          toast.info(confirmMsg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            style: { fontSize: '13px', minHeight: '48px', width: '320px' }
          });
        } else {
          toast.success(confirmMsg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            style: { fontSize: '13px', minHeight: '48px', width: '320px' }
          });
        }
        return;
      }

      const message = selectedPlan === "Basic" 
        ? "Onboarding completed successfully!" 
        : `Successfully subscribed to the ${selectedPlan} Plan!`;
        
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        style: { fontSize: '13px', minHeight: '48px', width: '320px' }
      });

      setOpen(false);
      router.push("/Pages/BAdmin");
      return;
    }
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      console.log("OnboardingModal is now OPEN");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!isMounted || !open) return null;

  return (
    <div className="modal-backdrop" onClick={() => setOpen(false)}>
      <ToastContainer position="bottom-right" />
      <div className="auth-card fade-up visible" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="close-modal" onClick={() => setOpen(false)} aria-label="Close modal">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Header */}
        <div className="header">
          <h2>Setup Your Workspace</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Body */}
        <div className="body">
          {step === 0 && (
            <GoalsStep
              selectedGoals={selectedGoals}
              setSelectedGoals={setSelectedGoals}
            />
          )}

          {step === 1 && (
            <IntegrationsStep 
              connectedApps={connectedApps} 
              setConnectedApps={setConnectedApps} 
            />
          )}
          {step === 2 && (
            <TeamStep 
              invitedMembers={invitedMembers} 
              setInvitedMembers={setInvitedMembers} 
              connectedApps={connectedApps}
            />
          )}

          {step === 3 && (
            <PlanStep
              selectedPlan={selectedPlan}
              setSelectedPlan={(val) => {
                setSelectedPlan(val);
                setIsPlanConfirmed(false);
              }}
              isPlanConfirmed={isPlanConfirmed}
            />
          )}
        </div>

        {/* Footer */}
        <div className="footer">
          <button className="btn-back" onClick={back} disabled={step === 0}>
            Back
          </button>

          <button className="btn-next" onClick={next}>
            {step === steps.length - 1 
              ? (isPlanConfirmed 
                  ? "Finish" 
                  : (selectedPlan === "Basic" 
                      ? "Go with Basic Plan" 
                      : (selectedPlan ? "Upgrade Plan" : "Finish"))) 
              : "Next"}
          </button>
        </div>
      </div>

      <style jsx>{`
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 12, 0.4);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 40px;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .auth-card {
            width: 100%;
            max-width: 800px;
            max-height: calc(100vh - 80px);
            background: #fff;
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            position: relative;
          }

          .fade-up {
            opacity: 0;
            transform: translateY(30px);
          }

          .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          :global(.dark) .auth-card {
            background: #1e1e22;
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: white;
          }

          .close-modal {
            position: absolute;
            top: 24px;
            right: 24px;
            background: transparent;
            border: none;
            color: #64748b;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
          }

          .close-modal:hover {
            background: rgba(0, 0, 0, 0.05);
            color: #1e293b;
          }

          .close-modal svg {
            width: 20px;
            height: 20px;
          }

          .header {
            margin-bottom: 20px;
            padding: 24px 24px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
          }

          h2 {
            margin: 0 0 16px 0;
            font-size: 32px;
            font-weight: 600;
            color: #1e293b;
            letter-spacing: -0.5px;
            font-family: var(--font-cormorant), serif;
          }

          :global(.dark) h2 {
            color: white;
          }

          .progress-bar {
            height: 8px;
            background: #f0f0f0;
            border-radius: 10px;
            overflow: hidden;
          }

          .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #b8842a, #d4a855);
            border-radius: 10px;
            transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .body {
            flex: 1;
            overflow-y: ${([0, 1, 3].includes(step)) || (step === 2 && invitedMembers.length <= 2) ? "hidden" : "auto"};
            min-height: 200px;
            background: #fff;
            padding: 20px 40px 40px;
          }

          .footer {
            padding: 24px 40px;
            margin-top: 5px;
            margin-bottom: 0;
            border-top: 1px solid rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fafafa;
          }

          .btn-back {
            padding: 12px 24px;
            border-radius: 12px;
            border: 1px solid #ddd;
            background: white;
            color: #444;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }

          .btn-back:hover:not(:disabled) {
            background: #f5f5f5;
            border-color: #ccc;
          }

          .btn-next {
            padding: 12px 32px;
            border-radius: 12px;
            border: none;
            background: #111;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .btn-next:hover:not(:disabled) {
            background: #333;
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          }

          button:disabled {
            opacity: 0.3;
            cursor: not-allowed;
          }

          .close-btn {
            position: absolute;
            top: 24px;
            right: 24px;
            background: none;
            border: none;
            font-size: 24px;
            color: #999;
            cursor: pointer;
            z-index: 10;
            transition: color 0.2s;
          }

          .close-btn:hover {
            color: #333;
          }

          /* Global styles for sub-components to ensure they pick up styles */
          :global(.grid) {
            display: grid;
            grid-template-columns: repeat(2, 200px);
            gap: 16px;
            margin: 20px auto 0;
            justify-content: center;
          }

          @media (max-width: 600px) {
            :global(.grid) {
              grid-template-columns: 1fr;
            }
          }

          :global(.card) {
            border: 1px solid #eee;
            padding: 16px;
            border-radius: 16px;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            min-height: 120px;
            justify-content: center;
            border: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
            position: relative;
          }

          :global(.card):hover {
            border-color: #b8842a;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          }

          :global(.card.active) {
            background: #111;
            color: white;
            border-color: #111;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          :global(.step-title) {
            font-size: 26px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 8px;
            font-family: var(--font-cormorant), serif;
            text-align: center;
          }

          :global(.step-subtitle) {
            font-size: 15px;
            color: #64748b;
            margin-bottom: 32px;
            text-align: center;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.5;
          }

          :global(.integration-item) {
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: 10px 50px;
             border-radius: 12px;
             background: #f9f9f9;
             margin-bottom: 10px;
             border: 1px solid #eee;
          }

          :global(.btn-connect) {
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            background: #fff;
            border: 1px solid #ddd;
            color: #111;
          }

          :global(.btn-connect.connected) {
            background: #22c55e !important;
            color: white !important;
            border-color: #22c55e !important;
            cursor: default;
          }

          :global(.Toastify__toast-container) {
            width: 320px !important;
            padding: 12px !important;
          }
          :global(.Toastify__toast) {
            border-radius: 12px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
            min-height: 48px !important;
          }
          :global(.hover-bg:hover) {
            background: #f1f5f9 !important;
            border-color: #cbd5e1 !important;
            color: #1e293b !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05) !important;
          }
          :global(.hover-bg-red:hover) {
            background: #fef2f2 !important;
            border-color: #fecaca !important;
            color: #dc2626 !important;
            box-shadow: 0 2px 4px rgba(239, 68, 68, 0.1) !important;
          }
        `}</style>
    </div>
  );
}

// ---------------- Steps ----------------

function GoalsStep({ selectedGoals, setSelectedGoals }) {
  const items = [
    { name: "Revenue", icon: "💰", desc: "Track sales and income growth" },
    { name: "Sales Pipeline", icon: "📈", desc: "Monitor deals and leads" },
    { name: "Support", icon: "🎧", desc: "Measure customer satisfaction" },
    { name: "Projects", icon: "📅", desc: "Keep track of deadlines" },
  ];

  const toggle = (item) => {
    if (selectedGoals.includes(item)) {
      setSelectedGoals(selectedGoals.filter((i) => i !== item));
    } else {
      setSelectedGoals([...selectedGoals, item]);
    }
  };

  return (
    <div>
      <h3 className="step-title">What do you want to track?</h3>
      <p className="step-subtitle">Select the primary goals for your Zoho ecosystem.</p>
      <div className="grid">
        {items.map((item) => (
          <div
            key={item.name}
            className={`card ${selectedGoals.includes(item.name) ? "active" : ""}`}
            onClick={() => toggle(item.name)}
          >
            <div style={{ fontSize: "28px", marginBottom: "4px" }}>{item.icon}</div>
            <div style={{ fontWeight: "600", fontSize: "14px" }}>{item.name}</div>
            <div style={{ fontSize: "11px", opacity: 0.8, lineHeight: "1.4" }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationsStep({ connectedApps, setConnectedApps }) {
  const apps = [
    { name: "Zoho CRM", icon: "🔴" },
    { name: "Zoho Books", icon: "🔵" },
    { name: "Zoho Desk", icon: "🟢" },
    { name: "Zoho Projects", icon: "🟡" }
  ];

  const handleConnect = (appName) => {
    if (connectedApps.includes(appName)) return;

    // Simulate connection delay
    toast.info(`Connecting to ${appName}...`, { autoClose: 1000, hideProgressBar: true });

    setTimeout(() => {
      setConnectedApps([...connectedApps, appName]);
      toast.success(`Successfully connected to ${appName}!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        style: { fontSize: '13px', minHeight: '48px', width: '320px' }
      });
    }, 1200);
  };

  return (
    <div>
      <h3 className="step-title">Connect Your Apps</h3>
      <p className="step-subtitle">Sync your data across the Zoho suite.</p>
      {apps.map((app) => (
        <div key={app.name} className="integration-item">
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span>{app.icon}</span>
            <span style={{ fontWeight: "600" }}>{app.name}</span>
          </div>
          <button 
            className={`btn-connect ${connectedApps.includes(app.name) ? "connected" : ""}`}
            onClick={() => handleConnect(app.name)}
          >
            {connectedApps.includes(app.name) ? "✓ Connected" : "Connect"}
          </button>
        </div>
      ))}
    </div>
  );
}

function TeamStep({ invitedMembers, setInvitedMembers, connectedApps }) {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [email, setEmail] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const availableRoles = connectedApps.length > 0 ? connectedApps : [];

  const toggleRole = (role) => {
    setSelectedRoles(prev => 
      prev.includes(role) ? prev.filter(r => r !== role) : [...prev, role]
    );
  };

  const handleInvite = (e) => {
    e.preventDefault();
    if (email) {
      if (editingIndex !== null) {
        // Handle Edit
        const updated = [...invitedMembers];
        updated[editingIndex] = { email, roles: selectedRoles };
        setInvitedMembers(updated);
        toast.success(`Updated access for ${email}`);
      } else {
        // Handle New Invite
        if (invitedMembers.some(m => m.email === email)) {
          toast.error("User already invited");
          return;
        }
        setInvitedMembers([...invitedMembers, { email, roles: selectedRoles }]);
        toast.success(`Invitation sent to ${email}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          style: { fontSize: '13px', minHeight: '48px', width: '320px' }
        });
      }
      
      resetForm();
    }
  };

  const resetForm = () => {
    setEmail("");
    setSelectedRoles([]);
    setEditingIndex(null);
    setShowInviteModal(false);
    setDropdownOpen(false);
  };

  const openEdit = (index) => {
    setEditingIndex(index);
    setEmail(invitedMembers[index].email);
    setSelectedRoles(invitedMembers[index].roles);
    setShowInviteModal(true);
  };

  const handleDelete = (index) => {
    const backup = invitedMembers[index].email;
    setInvitedMembers(invitedMembers.filter((_, i) => i !== index));
    toast.info(`Removed ${backup}`, { position: "bottom-right", autoClose: 2000 });
  };

  const hasMembers = invitedMembers.length > 0;

  return (
    <div style={{ textAlign: hasMembers ? "left" : "center", padding: "10px 0" }}>
      {hasMembers ? (
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "32px", 
          background: "#f8fafc", 
          padding: "16px 24px", 
          borderRadius: "16px", 
          border: "1px solid #e2e8f0" 
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontSize: "32px" }}>👥</div>
            <div>
              <h3 className="step-title" style={{ margin: 0, textAlign: "left", fontSize: "18px" }}>Setup your team</h3>
              <p className="step-subtitle" style={{ margin: 0, textAlign: "left", fontSize: "13px" }}>Invite your colleagues to collaborate.</p>
            </div>
          </div>
          <button 
            className="btn-gold" 
            style={{ 
              width: "auto", 
              padding: "10px 20px", 
              fontSize: "14px", 
              fontWeight: "600",
            }}
            onClick={() => {
              resetForm();
              setShowInviteModal(true);
            }}
          >
            Invite Members
          </button>
        </div>
      ) : (
        <>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>👥</div>
          <h3 className="step-title">Setup your team</h3>
          <p className="step-subtitle">Invite your colleagues to collaborate in the workspace.</p>
          
          <div style={{ marginBottom: "24px" }}>
            <button 
              className="btn-gold" 
              style={{ 
                width: "auto", 
                padding: "12px 40px", 
                fontSize: "15px", 
                fontWeight: "600",
                boxShadow: "0 10px 20px rgba(184, 132, 42, 0.2)"
              }}
              onClick={() => {
                resetForm();
                setShowInviteModal(true);
              }}
            >
              Invite Members
            </button>
          </div>
        </>
      )}

      {hasMembers && (
        <div style={{ marginTop: "0", textAlign: "left", maxWidth: "100%" }}>
          <h4 style={{ fontSize: "12px", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px", paddingLeft: "4px" }}>
            Pending Invitations
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {invitedMembers.map((member, index) => (
              <div 
                key={member.email} 
                style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  padding: "12px 16px", 
                  background: "#fff", 
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0"
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "#334155" }}>{member.email}</span>
                    <span style={{ fontSize: "11px", fontWeight: "500", color: "#64748b", background: "#f1f5f9", padding: "2px 8px", borderRadius: "100px" }}>
                      Sent
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {member.roles.length > 0 ? member.roles.map(role => (
                      <span key={role} style={{ 
                        fontSize: "10px", 
                        background: "#fff7ed", 
                        color: "#c2410c", 
                        padding: "1px 6px", 
                        borderRadius: "4px",
                        border: "1px solid #ffedd5"
                      }}>
                        {role}
                      </span>
                    )) : (
                      <span style={{ fontSize: "10px", color: "#94a3b8", fontStyle: "italic" }}>No ZOHO Apps assigned</span>
                    )}
                  </div>
                </div>
                
                <div style={{ display: "flex", gap: "8px" }}>
                  <button 
                    onClick={() => openEdit(index)}
                    style={{ background: "none", border: "1px solid #e2e8f0", cursor: "pointer", display: "flex", alignItems: "center", padding: "6px", color: "#64748b", borderRadius: "6px", transition: "all 0.2s" }}
                    className="hover-bg"
                    title="Edit"
                  >
                    <Pencil size={14} />
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    style={{ background: "none", border: "1px solid #fee2e2", cursor: "pointer", display: "flex", alignItems: "center", padding: "6px", color: "#ef4444", borderRadius: "6px", transition: "all 0.2s" }}
                    className="hover-bg-red"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showInviteModal && (
        <div className="sub-modal-backdrop" onClick={resetForm}>
          <div className="sub-modal" onClick={(e) => e.stopPropagation()}>
            <div className="sub-modal-header">
              <h4>{editingIndex !== null ? "Edit Invitation" : "Invite Colleague"}</h4>
              <button className="close-sub" onClick={resetForm}>&times;</button>
            </div>
            <form onSubmit={handleInvite}>
              <div className="form-group" style={{ textAlign: "left", marginBottom: "16px" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px", display: "block" }}>Email Address</label>
                <input 
                  type="email" 
                  placeholder="colleague@company.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ 
                    width: "100%", 
                    padding: "12px", 
                    borderRadius: "8px", 
                    border: "1px solid #ddd",
                    outline: "none"
                  }}
                />
              </div>

              {/* Apps Multi-select Checkbox Dropdown */}
              <div className="form-group" style={{ textAlign: "left", marginBottom: "24px", position: "relative" }}>
                <label style={{ fontSize: "13px", fontWeight: "600", marginBottom: "8px", display: "block" }}>Select App Access</label>
                <div 
                  className="role-dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    background: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    color: selectedRoles.length > 0 ? "#111" : "#94a3b8"
                  }}
                >
                  <span>
                    {selectedRoles.length > 0 
                      ? selectedRoles.join(", ") 
                      : "Choose ZOHO Apps..."}
                  </span>
                  <svg 
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {dropdownOpen && (
                  <div style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    marginTop: "4px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    zIndex: 100,
                    padding: "8px"
                  }}>
                    {availableRoles.length > 0 ? (
                      availableRoles.map(role => (
                        <div 
                          key={role}
                          onClick={() => toggleRole(role)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "8px 12px",
                            cursor: "pointer",
                            borderRadius: "6px",
                            background: selectedRoles.includes(role) ? "#fff7ed" : "transparent",
                            transition: "all 0.1s"
                          }}
                          className="role-item-hover"
                        >
                          <input 
                            type="checkbox" 
                            checked={selectedRoles.includes(role)}
                            readOnly
                            style={{ cursor: "pointer" }}
                          />
                          <span style={{ 
                            fontSize: "14px", 
                            fontWeight: selectedRoles.includes(role) ? "600" : "400",
                            color: selectedRoles.includes(role) ? "#c2410c" : "#334155"
                          }}>
                            {role}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: "16px", textAlign: "center", color: "#64748b", fontSize: "13px", lineHeight: "1.5" }}>
                        No apps connected yet. <br/> 
                        <span style={{ fontSize: "11px", opacity: 0.8 }}>Go back to "Integrations" to connect apps.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button type="submit" className="btn-gold" style={{ width: "100%", padding: "12px" }}>
                {editingIndex !== null ? "Update Member" : "Send Invitation"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .sub-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
        }
        .sub-modal {
          background: #fff;
          padding: 24px;
          border-radius: 16px;
          width: 90%;
          max-width: 420px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          animation: slideUp 0.3s ease-out;
        }
        .sub-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .sub-modal-header h4 {
          margin: 0;
          font-family: var(--font-cormorant), serif;
          font-size: 20px;
          font-weight: 600;
        }
        .close-sub {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #999;
        }
        .role-item-hover:hover {
          background: #f8fafc !important;
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function PlanStep({ selectedPlan, setSelectedPlan, isPlanConfirmed }) {
  const plans = [
    { name: "Basic", price: "₹1,999", color: "#666" },
    { name: "Pro", price: "₹5,999", color: "#b8842a" },
    { name: "Pro+", price: "₹11,999", color: "#b8842a" },
    { name: "Extreme", price: "Custom", color: "#b8842a" }
  ];

  return (
    <div>
      <h3 className="step-title">Select your plan</h3>
      <p className="step-subtitle">Choose the right fit for your business scale.</p>
      <div className="grid">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`card ${selectedPlan === plan.name ? "active" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
            style={selectedPlan === plan.name ? { 
              borderColor: plan.color, 
              background: plan.color,
              color: "#fff"
            } : {}}
          >
            {isPlanConfirmed && selectedPlan === plan.name && (
              <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                <CheckCircle size={20} color="#22c55e" />
              </div>
            )}
            <div style={{ fontWeight: "700", fontSize: "18px" }}>{plan.name}</div>
            <div style={{ fontSize: "20px", margin: "8px 0" }}>{plan.price}</div>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>Per month / Workspace</div>
          </div>
        ))}
      </div>
    </div>
  );
}
