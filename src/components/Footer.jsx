import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D0C2B] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Personal Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">Awwal Mudashir</h2>
          <p className="text-sm">Software Engineer</p>
          <p className="text-sm">Lagos, Nigeria</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
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

      {/* Bottom line */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Awwal Mudashir. All rights reserved.
      </div>
    </footer>
  );
}
