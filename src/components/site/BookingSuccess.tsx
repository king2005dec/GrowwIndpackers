import { memo } from "react";
import { CheckCircle2, PartyPopper, Sparkles } from "lucide-react";
import { TruckRun } from "./TruckRun";

/**
 * Booking-confirmed celebration overlay: pure CSS keyframes, no per-frame JS.
 */
export const BookingSuccess = memo(function BookingSuccess({
  name,
  onClose,
}: {
  name: string;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Booking confirmed"
      className="fixed inset-0 z-[70] grid place-items-center bg-primary-deep/70 p-4 backdrop-blur-sm booking-fade"
    >
      <div className="booking-pop relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-7 text-center shadow-card">
        <div className="confetti" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`confetti-bit confetti-${i % 7}`} />
          ))}
        </div>

        <span className="tick-ring mx-auto grid size-16 place-items-center rounded-full bg-success/12 text-success">
          <CheckCircle2 className="tick-pop size-9" strokeWidth={2.2} />
        </span>

        <h3 className="mt-5 text-xl font-extrabold text-foreground">Booking confirmed!</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks {name || "there"} — your slot is reserved. A move manager will call you within
          10 minutes to confirm the survey.
        </p>

        <div className="mt-5 -mx-1">
          <TruckRun />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-secondary">
          <Sparkles className="size-4" /> First order gets 20% off
          <PartyPopper className="size-4" />
        </div>

        <button type="button" onClick={onClose} className="btn btn-primary btn-block mt-5">
          Done
        </button>
      </div>
    </div>
  );
});
