import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../themeToggle";
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fly-up");
        }
      },
      { threshold: 0.1 },
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const [state, handleSubmit] = useForm("mldjdaaj");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (state.succeeded) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  };

  return (
    <section
      className={`w-full h-screen flex items-center justify-center ${theme === "dark" ? "bg-[#091218]" : "bg-[#ffffff]"}`}
    >
      <div
        ref={contentRef}
        className="opacity-0 transform translate-y-10 transition-opacity duration-1000"
      >
        <h2
          className={`text-4xl font-rubik font-bold ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}
        >
          Contact Section
        </h2>
        <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className={`block text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className={`block text-lg ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className={`px-4 py-2 rounded-md transform transition-transform duration-300 ${theme === "dark" ? "bg-[#f39436] text-white hover:bg-[#e0832f]" : "bg-[#b8d6df] text-[#000000] hover:bg-[#a0c4c9]"} hover:scale-95`}
          >
            Submit
          </button>
          </div>
          {submitted && <p className={`mt-4 text-lg text-center ${theme === "dark" ? "text-[#ffffff]" : "text-[#000000]"}`}>Thanks for contacting me!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;