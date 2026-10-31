import type { Rich } from "@/lib/dictionaries";

// Renders dictionary rich text: [text] parts get the given emphasis tag
export default function RichText({ parts, as: Em = "em" }: { parts: Rich; as?: "em" | "strong" }) {
  return (
    <>
      {parts.map((part, i) => (typeof part === "string" ? part : <Em key={i}>{part[0]}</Em>))}
    </>
  );
}
