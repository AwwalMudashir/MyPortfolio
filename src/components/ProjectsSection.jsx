import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Diabetes Predictor App",
    description:
      "A web application designed for early diabetes risk assessment. Features include AI-powered prediction using medical and lifestyle data, interactive health dashboards, personalized recommendations, and secure role-based access for patients and healthcare professionals. Built with a scalable microservices architecture.",
    techStack: ["Python", "Scikit-learn", "Streamlit"],
    github: "https://github.com/AwwalMudashir/Diabetes_ML_Predictor",
    live: "https://my-diabetes-predictor.streamlit.app/",
    image: "/diabetes_pred.png",
  },
  {
    title: "Student Course Management System",
    description:
      "A web application developed for academic automation. Features include automated exam registration notifications, AI-powered question prediction, revision tools, and role-based access for students, teachers, and admins. Built with microservices architecture.",
    techStack: ["Next.js", "Tailwind CSS", "Spring Boot"],
    github: "",
    image: "/projects.png",
  },
  {
    title: "Cinema Republic Website",
    description:
      "A comprehensive cinema advertisement platform for a company Cinema Republic Ltd. offering movie listings, showtimes, ticket bookings for content and user management. Developed as a frontend application for a seamless user experience.",
    techStack: ["React (Vite)", "Tailwind CSS", "Spring Boot"],
    github: "",
    live: "https://www.cinemarepublicnaija.com/",
    image: "/cinema_republic.png",
  },
  // {
  //   title: "Yenny's Kitchen",
  //   description:
  //     "An online food ordering platform for Yenny's Kitchen, a local restaurant. Features include menu browsing, order placement, and real-time order tracking. Developed as a fullstack application to enhance customer experience.",
  //   techStack: ["Next.js", "Tailwind CSS", "Spring Boot"],
  //   github: "",
  //   image: "/projects.png",
  // },
  {
    title: "Employee Management System",
    description:
      "A robust employee CRUD system with email integration to notify on employee creation, deletion, or department changes. Developed as a monolithic application for internal HR use.",
    techStack: ["React (Vite)", "Tailwind CSS", "Spring Boot"],
    github: "https://github.com/AwwalMudashir/EmployeeManagementSystem",
    image: "/ems.png",
  },
  {
    title: "MERN Auth System",
    description:
      "A full-stack authentication system built to explore and demonstrate secure authentication methods, session handling, and email verification using Nodemailer.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/AwwalMudashir/MernAuthenticationSystem",
    image: "/mern.png",
  },
  {
    title: "Company Management System (Gapslight)",
    description:
      "A content and project management system for a construction company, offering backend control over website content and team management tools.",
    techStack: ["HTML", "CSS", "Node.js", "Express.js"],
    live: "https://gapslight.com",
    image: "/gapslight.png",
  },
  {
    title: "Book Store App",
    description:
      "A cross-platform mobile application for book commerce. Features include Google and email login, cart and wishlist functionalities, and a powerful admin dashboard for book and order management.",
    techStack: ["Flutter", "Spring Boot"],
    github: "https://github.com/AwwalMudashir/Book_Store_App",
    image: "/books.png",
  },
  {
    title: "Classic Snake Game",
    description:
      "A nostalgic recreation of the early 2000s snake game featuring dynamic grid movement and a high score tracker.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AwwalMudashir/snake-game",
    live: "https://snake-game-eight-hazel.vercel.app/",
    image: "/snake.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0e0e1c] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
