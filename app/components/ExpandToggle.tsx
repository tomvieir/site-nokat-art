"use client";

type ExpandToggleProps = {
  expanded: boolean;
  onToggle: () => void;
  remainingCount: number;
  expandLabel?: string;
  collapseLabel?: string;
  itemLabel?: string;
};

export default function ExpandToggle({
  expanded,
  onToggle,
  remainingCount,
  expandLabel = "View More",
  collapseLabel = "View Less",
  itemLabel = "frames",
}: ExpandToggleProps) {
  const primaryLabel = expanded ? collapseLabel : expandLabel;
  const secondaryLabel = expanded
    ? "Return to the shorter selection"
    : `Reveal ${remainingCount} additional ${itemLabel}`;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex flex-col items-center gap-3 text-center transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="flex items-center gap-4 sm:gap-5">
        <span className="h-px w-10 bg-white/[0.12] transition-all duration-300 group-hover:w-14 group-hover:bg-accent/40" />
        <span className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.18)] transition-colors duration-300 group-hover:border-accent/35 group-hover:bg-white/[0.04]">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.34em] text-foreground">
            {primaryLabel}
          </span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`h-4 w-4 text-accent transition-transform duration-300 ${
              expanded ? "rotate-180" : "translate-y-px"
            }`.trim()}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
        <span className="h-px w-10 bg-white/[0.12] transition-all duration-300 group-hover:w-14 group-hover:bg-accent/40" />
      </span>

      <span className="max-w-[22rem] text-sm leading-6 text-white/[0.62] transition-colors duration-300 group-hover:text-white/[0.78]">
        {secondaryLabel}
      </span>
    </button>
  );
}
