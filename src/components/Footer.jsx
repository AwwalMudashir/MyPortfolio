import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
  <footer className="bg-gradient-to-r from-black via-[#1a199b] to-black py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      
      <div>
        <h2 className="text-white text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I'm committed to building bold, modern, and accessible digital
          experiences. Turning ideas into high-performance applications.
        </p>
      </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

       <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <ul className="flex gap-6 text-xl">
            <li>
              <a
                href="https://github.com/AwwalMudashir"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="mailto:awwalmudashir@gmail.com"
                className="hover:text-white"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Awwal Mudashir. All rights reserved.
      </div>
  </footer>
  );
}
