import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const FORMCONTENT = [
    {
      label: "What’s your name?",
      placeholder: "Samuel Isah*",
      name: "username",
      type: "text",
    },
    {
      label: "What’s your email?",
      placeholder: "samuelisah234@gmail.com*",
      name: "email",
      type: "email",
    },
    {
      label: "What’s the name of your organization?",
      placeholder: "Saint & Co.",
      name: "organization",
      type: "text",
    },
    {
      label: "What specific area or task do you need help with?",
      placeholder: "Next.js performance",
      name: "service",
      type: "text",
    },
    {
      label: "Your message",
      placeholder: "Hello Samuel, can you help me with..*",
      name: "message",
      type: "text",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.3 }}
    >
      <form className="px-2" onSubmit={handleSubmit}>
        {FORMCONTENT.map((field, index) => (
          <div key={index} className="w-full border-t-2 border-zinc-100">
            <div className="flex w-full gap-4 pt-8 pb-8">
              <h1 className="text-placeholder">
                {String(index + 1).padStart(2, "0")}
              </h1>
              <div className="w-full">
                <label className="flex flex-grow text-xl font-medium">
                  {field.label}
                </label>
                <input
                  required
                  className="peer w-full flex flex-grow appearance-none border-0 bg-transparent px-0 py-2.5 text-lg    focus:outline-none placeholder-placeholder"
                  placeholder={field.placeholder}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center">
          <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90">
            <span>Send It</span>
            <div className="relative ml-1 h-5 w-5 overflow-hidden">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 -translate-x-4"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
