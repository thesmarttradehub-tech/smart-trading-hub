"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { contactInfo } from "@/lib/site-data";

type FormState = {
  name: string;
  mobile: string;
  email: string;
  topic: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  mobile: "",
  email: "",
  topic: "",
  consent: false,
};

const LEARN_OPTIONS = [
  "Market Basics",
  "Technical Analysis",
  "Price Action",
  "Risk Management",
  "Trading Psychology",
  "Fundamental Analysis",
  "Other",
];

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

function validate(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^[+\d\s\-()]{7,15}$/.test(data.mobile)) {
    errors.mobile = "Please enter a valid mobile number.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.topic) errors.topic = "Please select what you'd like to learn.";
  if (!data.consent) errors.consent = "Please agree to be contacted to continue.";
  return errors;
}

export function HeroLeadForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submitError, setSubmitError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    const fieldValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setForm((prev) => ({ ...prev, [name]: fieldValue }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitError("");
    setStatus("submitting");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Lead from Smart Traders Website",
          from_name: form.name,
          "Full Name": form.name,
          "Mobile Number": form.mobile,
          "Email Address": form.email,
          "What Would You Like to Learn": form.topic,
          "Consent to be Contacted": "Yes",
          botcheck: "",
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(INITIAL);
        setErrors({});
      } else {
        setStatus("idle");
        setSubmitError("Something went wrong. Please try again in a moment.");
      }
    } catch {
      setStatus("idle");
      setSubmitError("Something went wrong. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="hero-lead-form">
        <div className="hero-lead-form-glow" />
        <div className="hero-lead-form-success">
          <div className="success-icon" aria-hidden="true">
            ✓
          </div>
          <h2>Thank You!</h2>
          <p>Your enquiry has been received. Our team will contact you shortly.</p>
          <a
            href={contactInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="button primary hero-lead-form-submit"
          >
            <span>JOIN OUR COMMUNITY</span>
            <Send size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-lead-form">
      <div className="hero-lead-form-glow" />
      <h2>Start Your Learning Journey</h2>
      <p className="hero-lead-form-subtitle">
        Share your details and our team will guide you on the right learning path.
      </p>

      <form onSubmit={handleSubmit} noValidate aria-label="Start your learning journey">
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
          aria-hidden="true"
        />

        <div className="field-wrap">
          <label htmlFor="lead-name" className="field-label">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Rohit Sharma"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
          />
          {errors.name && (
            <span id="lead-name-error" className="field-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field-wrap">
          <label htmlFor="lead-mobile" className="field-label">
            Mobile Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-mobile"
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? "lead-mobile-error" : undefined}
          />
          {errors.mobile && (
            <span id="lead-mobile-error" className="field-error">
              {errors.mobile}
            </span>
          )}
        </div>

        <div className="field-wrap">
          <label htmlFor="lead-email" className="field-label">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. rohit@email.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
          />
          {errors.email && (
            <span id="lead-email-error" className="field-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field-wrap">
          <label htmlFor="lead-topic" className="field-label">
            What Would You Like to Learn? <span aria-hidden="true">*</span>
          </label>
          <select
            id="lead-topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? "lead-topic-error" : undefined}
          >
            <option value="" disabled>
              Select an option
            </option>
            {LEARN_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.topic && (
            <span id="lead-topic-error" className="field-error">
              {errors.topic}
            </span>
          )}
        </div>

        <div className="hero-lead-form-consent">
          <input
            id="lead-consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={handleChange}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "lead-consent-error" : undefined}
          />
          <label htmlFor="lead-consent">
            I agree to be contacted regarding educational programs and services.
          </label>
        </div>
        {errors.consent && (
          <span id="lead-consent-error" className="field-error">
            {errors.consent}
          </span>
        )}

        {submitError && <p className="form-submit-error">{submitError}</p>}

        <button
          type="submit"
          className="button primary hero-lead-form-submit"
          disabled={status === "submitting"}
        >
          <span>{status === "submitting" ? "Sending..." : "GET INFORMATION"}</span>
        </button>
      </form>
    </div>
  );
}
