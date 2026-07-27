"use client";

import { signIn } from "next-auth/react";

/**
 * SocialButtons — DevRoad
 * -------------------------------------------------------------
 * Local: src/components/auth/social-buttons.tsx
 *
 * Agora conectado de verdade ao Auth.js (next-auth). Cada clique
 * chama signIn(provider), que redireciona pro fluxo OAuth daquele
 * provedor e, ao concluir, traz o usuário de volta pra callbackUrl.
 */

type Provider = {
  id: "google" | "github" | "discord" | "gitlab";
  label: string;
  icon: React.ReactNode;
};

const PROVIDERS: Provider[] = [
  {
    id: "google",
    label: "Continuar com Google",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.55-5.17 3.55-8.65z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.92l-3.88-3c-1.08.72-2.45 1.15-4.05 1.15-3.11 0-5.75-2.1-6.69-4.92H1.3v3.09C3.26 21.3 7.31 24 12 24z" />
        <path fill="#FBBC05" d="M5.31 14.31A7.2 7.2 0 015 12c0-.8.14-1.58.31-2.31V6.6H1.3A11.98 11.98 0 000 12c0 1.93.46 3.76 1.3 5.4l4.01-3.09z" />
        <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.3 6.6l4.01 3.1c.94-2.83 3.58-4.93 6.69-4.93z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "Continuar com GitHub",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text)">
        <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
      </svg>
    ),
  },
  {
    id: "gitlab",
    label: "Continuar com GitLab",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="#E24329" d="M12 22.5l3.75-11.55H8.25L12 22.5z" />
        <path fill="#FC6D26" d="M12 22.5L8.25 10.95H2.4L12 22.5z" />
        <path fill="#FCA326" d="M2.4 10.95L.68 16.35c-.16.5.01 1.04.43 1.35L12 22.5 2.4 10.95z" />
        <path fill="#E24329" d="M2.4 10.95h5.85L5.87 3.6c-.13-.4-.7-.4-.83 0L2.4 10.95z" />
        <path fill="#FC6D26" d="M12 22.5l3.75-11.55h5.85L12 22.5z" />
        <path fill="#FCA326" d="M21.6 10.95l1.72 5.4c.16.5-.01 1.04-.43 1.35L12 22.5l9.6-11.55z" />
        <path fill="#E24329" d="M21.6 10.95h-5.85l2.38-7.35c.13-.4.7-.4.83 0l2.64 7.35z" />
      </svg>
    ),
  },
  {
    id: "discord",
    label: "Continuar com Discord",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2">
        <path d="M20.3 5.3A18 18 0 0015.6 4l-.24.48a13 13 0 013.9 1.6 15 15 0 00-14.5 0 13 13 0 013.9-1.6L8.4 4a18 18 0 00-4.7 1.3C1.2 9.7.6 14 .8 18.2a18 18 0 005.5 2.8l1.1-1.8a11 11 0 01-1.8-.9l.4-.3a13 13 0 0011.9 0l.4.3a11 11 0 01-1.8.9l1.1 1.8a18 18 0 005.5-2.8c.3-4.9-.6-9.1-3.2-12.9zM8.6 15.6c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2zm6.8 0c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2z" />
      </svg>
    ),
  },
];

const PRIMARY_IDS: Provider["id"][] = ["google", "github"];

export function SocialButtons() {
  const handleLogin = (providerId: Provider["id"]) => {
    signIn(providerId, { callbackUrl: "/" });
  };

  const primaryProviders = PROVIDERS.filter((p) => PRIMARY_IDS.includes(p.id));
  const secondaryProviders = PROVIDERS.filter((p) => !PRIMARY_IDS.includes(p.id));

  return (
    <div className="flex flex-col gap-3">
      {/* provedores principais — botão largo com texto */}
      {primaryProviders.map((provider) => (
        <button
          key={provider.id}
          type="button"
          onClick={() => handleLogin(provider.id)}
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
          className="flex h-[52px] w-full items-center justify-center gap-3 rounded-xl border py-3.5 text-[15px] font-semibold text-[var(--text)] transition-all hover:-translate-y-0.5 hover:border-[var(--muted-2)] hover:bg-[var(--surface-2)] active:translate-y-0"
        >
          {provider.icon}
          {provider.label}
        </button>
      ))}

      {/* divisor "ou continue com" */}
      <div className="my-1 flex items-center gap-3">
        <span className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
        <span style={{ color: "var(--muted-2)" }} className="text-xs">
          ou continue com
        </span>
        <span className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
      </div>

      {/* provedores secundários — grade só com ícone */}
      <div className="grid grid-cols-2 gap-3">
        {secondaryProviders.map((provider) => (
          <button
            key={provider.id}
            type="button"
            onClick={() => handleLogin(provider.id)}
            aria-label={provider.label}
            title={provider.label}
            style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            className="flex h-[52px] w-full items-center justify-center rounded-xl border transition-all hover:-translate-y-0.5 hover:border-[var(--muted-2)] hover:bg-[var(--surface-2)] active:translate-y-0"
          >
            {provider.icon}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialButtons;