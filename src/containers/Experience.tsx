'use client';

import { experienceSection } from '../lib/content/experience';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section id="experience" className="max-w-3xl py-32 mx-auto">
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <div className="mt-8 space-y-8">
        {experienceSection.experiences.map((experience, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {experience.company}
              </a>
            </h3>
            <p className="text-lg text-gray-600">{experience.role}</p>
            <p className="mt-2 text-sm text-gray-500">
              {experience.started} - {experience.upto}
            </p>
            <ul className="mt-4 space-y-2">
              {experience.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-sm text-gray-700">
                  • {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
