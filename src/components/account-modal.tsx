"use client";

import { useState, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { contactInfo } from "@/lib/site-data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = { name: "", phone: "", email: "", city: "" };

function validate(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

function buildWhatsAppUrl(data: FormState) {
  const lines = [
    "New Trading Account Application:",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email || "-"}`,
    `City: ${data.city || "-"}`,
  ];
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function OpenAccountButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeAndReset() {
    setOpen(false);
    setSubmitted(false);
    setForm(INITIAL);
    setErrors({});
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>

      {open &&
        createPortal(
          <div className="account-modal-overlay" onClick={closeAndReset}>
            <div
              className="account-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="account-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="account-modal-close"
                aria-label="Close"
                onClick={closeAndReset}
              >
                <X size={18} aria-hidden="true" />
              </button>

              {submitted ? (
                <div className="account-modal-success">
                  <div className="success-icon" aria-hidden="true">
                    ✓
                  </div>
                  <h2>Almost Done!</h2>
                  <p>
                    We&apos;ve opened WhatsApp with your details pre-filled —
                    just hit send there and our team will reach out to help
                    you open your account.
                  </p>
                  <button type="button" className="button primary" onClick={closeAndReset}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 id="account-modal-title">Open Your Trading Account</h2>
                  <p className="account-modal-subtitle">
                    Share your details and our team will reach out on
                    WhatsApp to help you get started.
                  </p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="field-wrap">
                      <label htmlFor="oa-name" className="field-label">
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="oa-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rohit Sharma"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "oa-name-error" : undefined}
                      />
                      {errors.name && (
                        <span id="oa-name-error" className="field-error">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="oa-phone" className="field-label">
                        Phone Number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="oa-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "oa-phone-error" : undefined}
                      />
                      {errors.phone && (
                        <span id="oa-phone-error" className="field-error">
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="oa-email" className="field-label">
                        Email Address
                      </label>
                      <input
                        id="oa-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. rohit@email.com"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "oa-email-error" : undefined}
                      />
                      {errors.email && (
                        <span id="oa-email-error" className="field-error">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="oa-city" className="field-label">
                        City
                      </label>
                      <input
                        id="oa-city"
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="e.g. Chennai"
                        autoComplete="address-level2"
                      />
                    </div>

                    <button type="submit" className="button primary account-modal-submit">
                      <span>Continue on WhatsApp</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
