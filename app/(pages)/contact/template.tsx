"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Motion from "@/lib/motion/y-motion";
import { Heading } from "@/components/design/heading";
import BreadCrumb from "@/components/design/breadCrumb";
import ContactForm from "./_components/contactForm";

const ContactTemplate = () => {
  const pathname = usePathname();

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
