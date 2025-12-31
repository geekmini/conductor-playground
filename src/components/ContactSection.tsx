"use client";

import { useState, FormEvent } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="px-6 py-24" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          {/* Background decoration */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-violet/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="contact-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
              >
                Let&apos;s create
                <br />
                <span className="gradient-text">something</span>
                <br />
                extraordinary
              </h2>
              <p className="text-white/75 text-lg max-w-md font-body">
                Ready to transform your digital presence? Let&apos;s discuss your
                project and bring your vision to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    autoComplete="name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-colors font-body"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    autoComplete="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-colors font-body"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/20 transition-colors resize-none font-body"
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed relative"
              >
                {submitStatus === "loading" && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </span>
                )}
                <span className={submitStatus === "loading" ? "invisible" : ""}>
                  {submitStatus === "success"
                    ? "Message Sent!"
                    : submitStatus === "error"
                    ? "Try Again"
                    : "Send Message"}
                </span>
              </button>
              {submitStatus === "success" && (
                <p className="text-center text-cyan text-sm font-body" role="status">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-center text-red-400 text-sm font-body" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
