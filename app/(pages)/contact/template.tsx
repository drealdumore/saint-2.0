"use client";

import Motion from "@/lib/motion/y-motion";
import { Heading } from "@/components/design/heading";
import ContactForm from "./_components/contactForm";

const ContactTemplate = () => {
  return (
    <Motion>
      <div className="flex flex-col gap-4">
        <Heading
          title="Let's Connect!"
          sub="Whether you're looking to collaborate on a project, need a solution
            to a challenging problem, or just want to talk tech, feel free to
            reach out. Together, we can turn ideas into reality."
        />

        <ContactForm />
      </div>
    </Motion>
  );
};

export default ContactTemplate;
