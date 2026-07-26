"use client";

import { Search } from "lucide-react";

export default function AnimatedGlowingSearchBar() {
  return (
    <div className="group relative hidden lg:block">
      {/* Glow */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#2E8BFF] via-[#7C5CFF] to-[#2E8BFF] opacity-30 blur-md transition-all duration-500 group-hover:opacity-70" />

      <div className="relative flex h-11 w-[270px] items-center rounded-xl border border-[#1E2430] bg-[#10141D]/95 backdrop-blur">
        <Search
          size={18}
          className="ml-4 text-[#8A93A6]"
        />

        <input
          type="text"
          placeholder="Pesquisar Linguagens..."
          className="h-full flex-1 bg-transparent px-3 text-sm text-white placeholder:text-[#8A93A6] focus:outline-none"
        />
      </div>
    </div>
  );
}