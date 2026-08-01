import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"
      }
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] ${
          invert
            ? "bg-white/10 text-primary-foreground"
            : "bg-accent text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold sm:text-4xl ${
          invert ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-3 text-base leading-relaxed ${
            invert ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
