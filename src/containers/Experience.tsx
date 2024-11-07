// Experience.tsx
'use client';

import { useSpring, animated } from '@react-spring/web';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    date: 'Jan 2020 - Present',
    title: 'Software Engineer',
    companyName: 'Tech Solutions',
    icon: '/path/to/icon.png', // Replace with the path to your icon image
    points: [
      'Developed and maintained web applications',
      'Collaborated with cross-functional teams to define project scope',
      'Improved application performance by 30%',
    ],
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ experience }) => {
  // Create a spring for smooth scrolling animation
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div style={animation}>
      <div
        style={{
          border: '1px solid #232631',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '16px',
          background: '#1d1836',
          color: '#fff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={experience.icon}
            alt={`${experience.companyName} icon`}
            style={{ width: '40px', height: '40px', marginRight: '8px' }}
          />
          <div>
            <h3 style={{ fontSize: '20px', margin: '0' }}>
              {experience.title}
            </h3>
            <p style={{ fontSize: '16px', color: '#bbb', margin: '0' }}>
              {experience.companyName}
            </p>
          </div>
        </div>
        <p style={{ fontSize: '14px', color: '#aaa' }}>{experience.date}</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          {experience.points.map((point, index) => (
            <li key={index} style={{ fontSize: '14px', color: '#ddd' }}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </animated.div>
  );
};

const Experience = () => (
  <div style={{ marginTop: '20px' }}>
    {experiences.map((experience, index) => (
      <ExperienceCard key={index} experience={experience} />
    ))}
  </div>
);

export default Experience;
