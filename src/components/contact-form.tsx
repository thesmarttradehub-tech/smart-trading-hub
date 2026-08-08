"use client";

import { useState } from "react";

import { contactInfo } from "@/lib/site-data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  enquiryType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  enquiryType: "",
  message: "",
};

const ENQUIRY_LABELS: Record<string, string> = {
  "account-opening": "Account Opening",
  "course-information": "Course Information",
  "platform-support": "Platform Support",
  "general-guidance": "General Guidance",
};

function buildWhatsAppUrl(data: FormState) {
  const lines = [
    "New enquiry from the website:",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Subject: ${data.subject}`,
    `Enquiry Type: ${ENQUIRY_LABELS[data.enquiryType] ?? data.enquiryType}`,
    `Message: ${data.message}`,
  ];
  return `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function validate(data: FormState): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d\s\-()]{7,15}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required.";
  if (!data.enquiryType) errors.enquiryType = "Please select an enquiry type.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters.";
  }
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
    setStatus("success");
    setForm(INITIAL);
    setErrors({});
  }

  if (status === "success") {
    return (
      <div className="contact-form success-state">
        <div className="success-icon" aria-hidden="true">✓</div>
        <h2>Almost Done!</h2>
        <p>We've opened WhatsApp with your enquiry pre-filled — just hit send there to reach our team. If it didn't open, check your browser's pop-up blocker.</p>
        <button
          type="button"
          className="button primary"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Send Us a Message</h2>
      <p>Fill out the form and our team will get back to you shortly.</p>

      <div className="form-grid">
        <div className="field-wrap">
          <label htmlFor="name" className="field-label">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Rohit Sharma"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
        </div>

        <div className="field-wrap">
          <label htmlFor="email" className="field-label">Email Address <span aria-hidden="true">*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. rohit@email.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
        </div>

        <div className="field-wrap">
          <label htmlFor="phone" className="field-label">Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            autoComplete="tel"
          />
          {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
        </div>

        <div className="field-wrap">
          <label htmlFor="subject" className="field-label">Subject <span aria-hidden="true">*</span></label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. Account Opening Help"
            aria-required="true"
            aria-describedby={errors.subject ? "subject-error" : undefined}
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <span id="subject-error" className="field-error">{errors.subject}</span>}
        </div>
      </div>

      <div className="field-wrap">
        <label htmlFor="enquiryType" className="field-label">Enquiry Type <span aria-hidden="true">*</span></label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={form.enquiryType}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.enquiryType ? "enquiry-error" : undefined}
          aria-invalid={!!errors.enquiryType}
        >
          <option value="" disabled>Select Enquiry Type</option>
          <option value="account-opening">Account Opening</option>
          <option value="course-information">Course Information</option>
          <option value="platform-support">Platform Support</option>
          <option value="general-guidance">General Guidance</option>
        </select>
        {errors.enquiryType && <span id="enquiry-error" className="field-error">{errors.enquiryType}</span>}
      </div>

      <div className="field-wrap">
        <label htmlFor="message" className="field-label">Your Message <span aria-hidden="true">*</span></label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us how we can help you..."
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
      </div>

      <button type="submit" className="button primary">
        Submit Enquiry
      </button>
    </form>
  );
}
