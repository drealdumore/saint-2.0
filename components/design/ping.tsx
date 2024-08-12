export const SmallPing = () => (
  <div className="flex items-center gap-1 shrink-0 size-[1.1em]">
    <div className="relative size-[.9em]">
      <div className="absolute inset-0 animate-ping rounded-full bg-emerald-700/30"></div>
      <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-700/30"></div>
      <div className="absolute inset-[3px] rounded-full bg-emerald-700"></div>
    </div>
  </div>
);

export const BigPing = () => (
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-auto w-7 bg-emerald-700"></span>
  </span>
);
