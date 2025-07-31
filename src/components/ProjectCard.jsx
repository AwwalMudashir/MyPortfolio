import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, github, image }) => {
  return (
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-[#3432c7]/20 border border-[#3432c7]/30 text-[#a6a6ff] px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-[#a6a6ff] transition"
          >
            <FaGithub className="text-lg" /> View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
