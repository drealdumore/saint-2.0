type Experience = {
    title: string;
    company: string;
    description: string[];
    duration: string;
    durationAlt: string;
  };
  
  export const EXPERIENCE: Experience[] = [
    {
      title: "Front-end Developer",
      company: "NodePair",
      description: [
        "Enhancing the company's visual identity by refining the user interface and developing versatile, sustainable user experiences.",
      ],
      duration: "April 2024 - Ongoing",
      durationAlt: "04 / 2024 until Now",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance",
      description: [
        "Designed and implemented scalable web applications by integrating front-end interfaces with back-end services, ensuring seamless user experiences and robust functionality.",
        "Collaborated closely with cross-functional teams to optimize performance, improve security, and deploy new features, contributing to the overall growth and efficiency of the client’s digital presence.",
      ],
      duration: "April 2021 - Ongoing",
      durationAlt: "04 / 2021 until Now",
    },
  ];
  