"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

export default function InvitationRedirectPage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.token) {
      // Redirect to home page with the invitation token as a query parameter
      router.replace(`/?invite_token=${params.token}`);
    } else {
      router.replace("/");
    }
  }, [params.token, router]);

  return (
    <div className="redirecting-container">
      <div className="spinner"></div>
      <p>Redirecting to workspace...</p>
      <style jsx>{`
        .redirecting-container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0a0a0c;
          color: white;
          font-family: 'Outfit', sans-serif;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(184, 132, 42, 0.2);
          border-top-color: #b8842a;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
