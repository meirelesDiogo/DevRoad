import type { CSSProperties, FC, ReactNode } from "react";

/**
 * Footer do DevRoad
 * -------------------------------------------------------------
 * Requer Tailwind CSS configurado no projeto.
 * Mesmas fontes do Header.tsx: Space Grotesk, Inter, JetBrains Mono.
 */

const COLORS = {
  bg: "#0A0D14",
  surface: "#10141D",
  border: "#1E2430",
  blue: "#2E8BFF",
  purple: "#7C5CFF",
  text: "#EDF0F5",
  muted: "#8A93A6",
  muted2: "#5C6478",
};

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Plataforma",
    links: [
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "Aulas", href: "/aulas" },
      { label: "Exercícios", href: "/exercicios" },
      { label: "Projetos práticos", href: "/projetos" },
      { label: "Meu perfil", href: "/perfil" },
    ],
  },
  {
    title: "Comunidade",
    links: [
      { label: "GitHub", href: "https://github.com/devroad", external: true },
      { label: "Discord", href: "https://discord.gg/devroad", external: true },
      { label: "Contribuir com o projeto", href: "/contribuir" },
      { label: "Reportar um bug", href: "/bugs" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Perguntas frequentes", href: "/faq" },
      { label: "Contato", href: "/contato" },
      { label: "Termos de uso", href: "/termos" },
    ],
  },
];

// linha tracejada estilo "estrada" — mesmo elemento de assinatura usado no Header
const roadRuleTop: CSSProperties = {
  height: 3,
  width: "100%",
  backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.blue} 0px, ${COLORS.blue} 14px, transparent 14px, transparent 22px, ${COLORS.purple} 22px, ${COLORS.purple} 36px, transparent 36px, transparent 44px)`,
  opacity: 0.9,
};

const roadRuleSubtle: CSSProperties = {
  height: 1,
  width: "100%",
  backgroundImage: `repeating-linear-gradient(90deg, ${COLORS.muted2} 0px, ${COLORS.muted2} 18px, transparent 18px, transparent 34px)`,
  opacity: 0.3,
};

const logoGradientId = "devroad-footer-logo-gradient";

const LogoMark: FC<{ size?: number }> = ({ size = 34 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={logoGradientId} x1="0" y1="0" x2="90" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor={COLORS.blue} />
        <stop offset="1" stopColor={COLORS.purple} />
      </linearGradient>
    </defs>
    <path
      d="M35 8 H55 C75 8 88 24 88 46 C88 68 75 84 55 84 H35 V60 L35 34 Z M35 34 V60 H52 C63 60 70 54 70 46 C70 38 63 34 52 34 H35 Z"
      fill={`url(#${logoGradientId})`}
    />
    <path d="M40 44 L32 50 L40 56" stroke={COLORS.surface} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M60 44 L68 50 L60 56" stroke={COLORS.surface} strokeWidth={4.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8 92 C20 74 30 68 40 60" stroke={COLORS.surface} strokeWidth={10} strokeLinecap="round" fill="none" />
    <path d="M8 92 C20 74 30 68 40 60" stroke={`url(#${logoGradientId})`} strokeWidth={6} strokeLinecap="round" fill="none" />
  </svg>
);
import type {
  CSSProperties,
  FC,
  ReactNode,
  AnchorHTMLAttributes,
} from "react";interface SocialIconProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  children: ReactNode;
}

const SocialIcon: FC<SocialIconProps> = ({
  label,
  children,
  ...props
}) => (
  <a
    {...props}
    aria-label={label}
    style={{
      color: COLORS.muted,
      borderColor: COLORS.border,
    }}
    className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:!text-[#EDF0F5] hover:!border-[#5C6478]"
  >
    {children}
  </a>
);

export interface FooterProps {
  /** ano exibido no copyright — por padrão usa o ano atual do sistema */
  year?: number;
}

const Footer: FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
  return (
    <footer style={{ backgroundColor: COLORS.surface, borderTop: `1px solid ${COLORS.border}` }}>
      <div style={roadRuleTop} aria-hidden />

      <div className="mx-auto max-w-[1180px] px-6 pt-14">
        <div className="grid grid-cols-1 gap-10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Coluna de marca */}
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.text }}
                className="whitespace-nowrap text-[19px] font-bold tracking-tight"
              >
                <span style={{ color: COLORS.blue }}>Dev</span>Road
              </span>
            </a>

            <p
              style={{ fontFamily: "'JetBrains Mono', monospace", color: COLORS.blue }}
              className="mt-2.5 mb-3.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
            >
              Aprenda · Pratique · Evolua
            </p>

            <p style={{ color: COLORS.muted }} className="mb-5 max-w-[320px] text-sm leading-relaxed">
              Roadmaps, aulas e projetos práticos para você sair do zero e chegar lá — sem pagar nada por isso.
              DevRoad é 100% gratuito e open source.
            </p>

            <span
              style={{ borderColor: COLORS.border, color: COLORS.muted }}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
            >
              <span
                style={{ background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.purple})` }}
                className="h-1.5 w-1.5 rounded-full"
              />
              Open source · MIT License
            </span>
          </div>

          {/* Colunas de links */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 style={{ color: COLORS.text }} className="mb-4 text-[13px] font-semibold">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      style={{ color: COLORS.muted }}
                      className="inline-flex items-center gap-1.5 text-sm transition-colors hover:!text-[#EDF0F5]"
                    >
                      {link.label}
                      {link.external && <span className="text-[11px] opacity-50">↗</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={roadRuleSubtle} aria-hidden />

        <div className="flex flex-wrap items-center justify-between gap-4 py-5">
          <p style={{ color: COLORS.muted2 }} className="text-[13px]">
            © {year} DevRoad. Feito por devs — código aberto para todo mundo.
          </p>
          <div className="flex gap-2">
            <SocialIcon href="https://github.com/MeirelesDiogo" label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .3a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .3z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://discord.gg/ju4wuck2CT" label="Discord" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.3 5.3A18 18 0 0015.6 4l-.24.48a13 13 0 013.9 1.6 15 15 0 00-14.5 0 13 13 0 013.9-1.6L8.4 4a18 18 0 00-4.7 1.3C1.2 9.7.6 14 .8 18.2a18 18 0 005.5 2.8l1.1-1.8a11 11 0 01-1.8-.9l.4-.3a13 13 0 0011.9 0l.4.3a11 11 0 01-1.8.9l1.1 1.8a18 18 0 005.5-2.8c.3-4.9-.6-9.1-3.2-12.9zM8.6 15.6c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2zm6.8 0c-1 0-1.9-1-1.9-2.2 0-1.2.8-2.2 1.9-2.2s1.9 1 1.9 2.2c0 1.2-.8 2.2-1.9 2.2z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };