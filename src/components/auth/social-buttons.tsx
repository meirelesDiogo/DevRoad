"use client";

import { signIn } from "next-auth/react";

export function SocialButtons() {
  return (
    <div>
      <button onClick={() => signIn("google")}>
        Continuar com Google
      </button>

      <button onClick={() => signIn("github")}>
        Continuar com GitHub
      </button>
    </div>
  );
}