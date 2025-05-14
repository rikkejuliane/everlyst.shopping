"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (form.fullName.trim().length < 3)
      newErrors.fullName = "Full Name must be at least 3 characters.";
    if (form.subject.trim().length < 3)
      newErrors.subject = "Subject must be at least 3 characters.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      newErrors.email = "Email is not valid.";
    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Message sent successfully!");
      setForm({ fullName: "", subject: "", email: "", message: "" });
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row flex-wrap-reverse justify-around p-6 gap-16 lg:gap-0">
      <div className="w-[370px]">
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col mb-3">
            <div className="flex flex-row items-end">
              <label className="w-[100px] font-(family-name:--font-afacad) text-darkbrown font-bold text-lg border-b-2 border-darkbrown">
                Full Name:
              </label>
              <input
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-darkbrown bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-base placeholder:font-[var(--font-afacad)] pl-2"
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <div className="flex flex-row items-end">
              <label className="w-[100px] font-(family-name:--font-afacad) text-darkbrown font-bold text-lg border-b-2 border-darkbrown">
                Subject:
              </label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-darkbrown bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-base placeholder:font-[var(--font-afacad)] pl-2"
              />
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm mb-2">{errors.subject}</p>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <div className="flex flex-row items-end">
              <label className="w-[100px] font-(family-name:--font-afacad) text-darkbrown font-bold text-lg border-b-2 border-darkbrown">
                Email:
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-darkbrown bg-transparent focus:outline-none focus:ring-0 placeholder:text-black placeholder:text-base placeholder:font-[var(--font-afacad)] pl-2"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <div className="flex flex-row items-end">
              <label className="w-[100px] font-(family-name:--font-afacad) text-darkbrown font-bold text-lg border-b-2 border-darkbrown">
                Message:
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full h-20 border-0 border-b-2 border-darkbrown bg-transparent focus:outline-none focus:ring-0 placeholder:text-darkbrown placeholder:text-base placeholder:font-[var(--font-afacad)] pl-2"
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mb-2">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-[100px] h-[30px] shrink-0 bg-darkbrown text-white text-center font-(family-name:--font-afacad) text-[20px] font-bold">
            Send
          </button>
        </form>
        <ToastContainer />
      </div>
      <div className="w-[370px] flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-5 font-(family-name:--font-theseasons)">
          Contact Us
        </h1>
        <p className="font-(family-name:--font-afacad) font-bold text-xl">
          Let’s get in touch
        </p>
        <p className="font-(family-name:--font-afacad) text-xl">
          Whether you have a question about a product, need support, or just
          want to say hi — we’re here to help. Fill out the form and we’ll get
          back to you as soon as we can.
        </p>
      </div>
    </div>
  );
}
