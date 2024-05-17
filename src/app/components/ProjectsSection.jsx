"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Saree Shop Website",
    description: "I have to build in fully responsive saree shopping website design and develop to using react.js and tailwind.css",
    image: "/images/projects/Ui.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sachindolase/The-Saree-Shop",
    previewUrl: "https://the-saree-shop.vercel.app/",
  },
  {
    id: 2,
    title: "TMDB-Movix App",
    description: "I have to build for Movix app in using React.js and Redux toolkit an also used to TMDB api. this app is it's clearly responsive for the any device.",
    image: "/images/projects/Movix.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sachindolase/TMDB-Movix-App",
    previewUrl: "https://tmdb-movix-app-liard.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "I have to build a responsive E-Commerce website for the Beauty glowing skin care products website design then will be create a styling web any devices to be run the web. There will be fully used in HTML, CSS and Javascript.",
    image: "/images/projects/Glowing.png",
    tag: ["All", "mobile", "Web"],
    gitUrl: "https://github.com/sachindolase/Glowing-Skin-Care-Product-Web",
    previewUrl: "https://glowing-skin-care-product-web.vercel.app/",
  },
  {
    id: 4,
    title: "Zomato Cart Application",
    description: "The Zomato Card Menu Search App is a web application built using React.js and Bootstrap, designed to provide users with a seamless and user-friendly experience when searching for restaurant menus on Zomato. This app aims to simplify the process of exploring menus, dishes, and prices, enhancing the overall dining decision-making process for users.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sachindolase/zomato-card-app",
    previewUrl: "https://zomato-card-app.vercel.app/",
  },
  {
    id: 5,
    title: "React Expense Tracker",
    description: "Track your expenses effortlessly with our intuitive Expense Tracker app built using React. Gain control over your finances by easily recording and categorizing your expenses, visualizing spending patterns through insightful charts, and setting budget goals to manage your money more effectively. With a clean and user-friendly interface, managing.",
    image: "/images/projects/Expence.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sachindolase/react-expense-tracker",
    previewUrl: "https://react-expense-tracker-plum.vercel.app/",
  },
  {
    id: 6,
    title: "Contact Management App",
    description: "Contact Management App built with ReactJS, TypeScript, and TailwindCSS, enhanced by React Router v6 and powered by React Query.",
    image: "/images/projects/6.png",
    tag: ["Web"],
    gitUrl: "https://github.com/sachindolase/contact-management-app",
    previewUrl: "https://contact-management-app-beryl.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
