"use client";

import { useActionState, useEffect, useId, useRef } from "react";

import { sendEnquiry, type ContactState } from "@/app/actions/contact";

type Option = { value: string; label: string };

const initialState: ContactState = { status: "idle" };

export function ContactForm({ services }: { services: Option[] }) {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const id = useId();

  // Pre-select the service from ?service=… (links from service pages) and start the spam timer.
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("service");
    if (fromUrl && selectRef.current && services.some((s) => s.value === fromUrl)) {
      selectRef.current.value = fromUrl;
    }
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, [services]);

  // Move focus to the result so keyboard and screen-reader users hear what happened.
  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
    if (state.status === "error") {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      (firstInvalid ?? summaryRef.current)?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-card border border-line bg-paper-2 p-8 outline-none"
      >
        <p className="font-display text-2xl text-ink">Message sent</p>
        <p className="mt-3 text-ink-2">{state.message}</p>
      </div>
    );
  }

  const err = state.fieldErrors ?? {};
  const v = state.values ?? {};
  const field = (name: keyof NonNullable<ContactState["fieldErrors"]>) => ({
    id: `${id}-${name}`,
    name,
    "aria-invalid": err[name] ? (true as const) : undefined,
    "aria-describedby": err[name] ? `${id}-${name}-error` : undefined,
  });

  return (
    <form ref={formRef} action={formAction} noValidate className="grid gap-5" aria-describedby={`${id}-required-note`}>
      <div ref={summaryRef} tabIndex={-1} aria-live="assertive" className="outline-none empty:hidden">
        {state.status === "error" && state.message ? (
          <p className="rounded-control border border-danger/40 bg-danger/5 px-4 py-3 text-sm text-danger">
            {state.message}
          </p>
        ) : null}
      </div>

      <p id={`${id}-required-note`} className="text-sm text-ink-2">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" required error={err.name} htmlFor={`${id}-name`} errorId={`${id}-name-error`}>
          <input {...field("name")} type="text" autoComplete="name" required defaultValue={v.name} className="input" />
        </Field>
        <Field label="Email" required error={err.email} htmlFor={`${id}-email`} errorId={`${id}-email-error`}>
          <input
            {...field("email")}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            defaultValue={v.email}
            className="input"
          />
        </Field>
        <Field label="Phone" error={err.phone} htmlFor={`${id}-phone`} errorId={`${id}-phone-error`}>
          <input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" defaultValue={v.phone} className="input" />
        </Field>
        <Field label="I'm interested in" htmlFor={`${id}-service`}>
          <select
            key={v.service ?? ""}
            ref={selectRef}
            id={`${id}-service`}
            name="service"
            defaultValue={v.service ?? ""}
            className="input"
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Best days and times to train" htmlFor={`${id}-time`} hint="For example: weekday mornings before 8am">
        <input id={`${id}-time`} name="preferredTime" type="text" defaultValue={v.preferredTime} className="input" />
      </Field>

      <Field label="Your goals, or anything I should know" error={err.message} htmlFor={`${id}-message`} errorId={`${id}-message-error`}>
        <textarea {...field("message")} rows={5} defaultValue={v.message} className="input min-h-36 resize-y" />
      </Field>

      {/* Spam traps: hidden from people, tempting for bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button type="submit" className="btn btn-primary" aria-disabled={pending} disabled={pending}>
          {pending ? "Sending…" : "Send enquiry"}
        </button>
        <p className="text-sm text-ink-2">Fion usually replies within one business day.</p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  errorId,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  errorId?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-brand-deep">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-ink-2"> (optional)</span>
        )}
      </label>
      {hint ? <p className="-mt-1 text-sm text-ink-2">{hint}</p> : null}
      {children}
      {error ? (
        <p id={errorId} className="text-sm font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
