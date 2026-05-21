"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="text-[10px] tracking-[0.3em] uppercase text-white border border-white/35 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
    >
      Print / PDF
    </button>
  );
}
