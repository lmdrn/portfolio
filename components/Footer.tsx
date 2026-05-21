export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/[0.06] px-8 md:px-16 py-6 flex items-center justify-between">
      <span className="text-[9px] tracking-[0.3em] uppercase text-white/55 font-mono">
        © {year} Lea Medrano
      </span>
      <span className="text-[9px] tracking-[0.3em] uppercase text-white/55 font-mono">
        Designed & Built by Lea Medrano
      </span>
    </footer>
  );
}
