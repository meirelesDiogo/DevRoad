"use client";

import { signIn } from "next-auth/react";

/**
 * SocialButtons — DevRoad
 * -------------------------------------------------------------
 * Local: src/components/auth/social-buttons.jsx
 *
 * Autenticação social utilizando apenas o Google.
 */

export function SocialButtons() {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={handleLogin}
        style={{
          backgroundColor: "var(--surface)",
          borderColor: "var(--border)",
        }}
        className="flex h-[52px] w-full items-center justify-center gap-3 rounded-xl border py-3.5 text-[15px] font-semibold text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-[var(--muted-2)] hover:bg-[var(--surface-2)] active:translate-y-0"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.55-5.17 3.55-8.65z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.92l-3.88-3c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.92H1.3v3.09C3.26 21.3 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.31 14.31A7.2 7.2 0 015 12c0-.8.14-1.58.31-2.31V6.6H1.3A11.98 11.98 0 000 12c0 1.93.46 3.76 1.3 5.4l4.01-3.09z"
          />
          <path
            fill="#EA4335"
            d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.3 6.6l4.01 3.1c.94-2.83 3.58-4.93 6.69-4.93z"
          />
        </svg>

        Continuar com Google
      </button>
    </div>
  );
}

export default SocialButtons;