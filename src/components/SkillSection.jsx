import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', logo: '/logos/html.png' },
      { name: 'CSS', logo: '/logos/css.png' },
      { name: 'Figma', logo: '/logos/figma.png' },
      { name: 'JavaScript', logo: '/logos/js.png' },
      { name: 'React', logo: '/logos/react.png' },
      { name: 'Next.js', logo: '/logos/nextjs.jpg' },
      { name: 'Tailwind CSS', logo: '/logos/tailwind.png' },
      { name: 'Flutter', logo: '/logos/flutter.png' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', logo: '/logos/node.png' },
      { name: 'Java', logo: '/logos/java.png' },
      { name: 'Spring Boot', logo: '/logos/sb.png' },
      { name: 'MySQL', logo: '/logos/Mysql.png' },
    ],
  },
  {
    category: 'Dev Tools',
    skills: [
      { name: 'Git', logo: '/logos/git.png' },
      { name: 'GitHub', logo: '/logos/github.png' },
      { name: 'Postman', logo: '/logos/postman.png' },
    ],
  },
  {
    category: 'AI / ML',
    skills: [
      { name: 'Python', logo: '/logos/python.png' },
      { name: 'NumPy', logo: '/logos/numpy.png' },
      { name: 'Pandas', logo: '/logos/pandas.png' },
      { name: 'Matplotlib', logo: '/logos/mpb.png' },
      { name: 'Scikit-learn', logo: '/logos/sklearn.png' },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#0A0A23] text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[#C3C3C3]">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 bg-[#1C1C3A] p-4 rounded-xl shadow-md hover:scale-105 transition-transform"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm text-white">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
