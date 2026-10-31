"use client";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button type="button" onClick={() => window.print()} className="pill no-print border-0 font-[inherit]">
      {label}
    </button>
  );
}
