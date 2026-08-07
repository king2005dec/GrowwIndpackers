import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { CITY_OPTIONS, HOUSE_SIZES } from "@/lib/site-data";
import { sendBookingEmail } from "@/lib/booking.functions";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TruckRun } from "./TruckRun";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  from: z.string().min(2, "Select a pickup city"),
  to: z.string().min(2, "Select a destination city"),
  size: z.string().min(2, "Select your home size"),
  date: z.string().min(4, "Pick a moving date"),
  message: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { from: "Mumbai", to: "Pune", size: "2 BHK" },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await sendBookingEmail({ data: values });
      toast.success("Booking request received", {
        description: `Thanks ${values.name.split(" ")[0]} — a move manager will call you within 10 minutes.`,
      });
      setSent(true);
      reset();
    } catch {
      toast.error("Could not send your request", {
        description: "Please call or WhatsApp us on +91 98196 97667 and we'll book it for you.",
      });
    }
  };

  const field =
    "mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-ring";
  const err = "mt-1.5 block text-xs font-medium text-destructive";

  return (
    <section id="booking" className="bg-surface py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Book your move"
          title="Reserve your slot in 60 seconds"
          body="Share a few details and your dedicated move manager will call you back within 10 minutes."
        />

        <Reveal className="mt-12">
          <div className="mx-auto mb-6 max-w-3xl">
            <TruckRun />
          </div>


          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-card sm:p-9"
          >

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Full name *</span>
                <input className={field} placeholder="Ananya Sharma" {...register("name")} />
                {errors.name && <span className={err}>{errors.name.message}</span>}
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Phone number *</span>
                <input className={field} placeholder="9876543210" {...register("phone")} />
                {errors.phone && <span className={err}>{errors.phone.message}</span>}
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Email *</span>
                <input className={field} placeholder="you@email.com" {...register("email")} />
                {errors.email && <span className={err}>{errors.email.message}</span>}
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Move date *</span>
                <input type="date" className={field} {...register("date")} />
                {errors.date && <span className={err}>{errors.date.message}</span>}
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Moving from *</span>
                <select className={field} {...register("from")}>
                  {CITY_OPTIONS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-muted-foreground">Moving to *</span>
                <select className={field} {...register("to")}>
                  {CITY_OPTIONS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-muted-foreground">House size *</span>
                <select className={field} {...register("size")}>
                  {HOUSE_SIZES.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-muted-foreground">
                  Anything we should know?
                </span>
                <textarea
                  rows={4}
                  className={field}
                  placeholder="Piano on the 3rd floor, no service lift after 8pm…"
                  {...register("message")}
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block mt-7"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Reserving your slot…
                </>
              ) : (
                <>
                  <Send className="size-4" /> Request my booking
                </>
              )}
            </button>

            {sent && (
              <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-success">
                <CheckCircle2 className="size-4" /> Request logged — check your phone shortly.
              </p>
            )}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No advance payment needed to hold a slot. Free cancellation up to 24 hours before.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
