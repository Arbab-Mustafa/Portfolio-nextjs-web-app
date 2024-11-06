import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Arbab Mustafa',
  tagline: '  Full Stack  developer',
  description:
    'Transform ideas into reality. My academic experience has provided me with a solid foundation in software principles, while also allowing me to dive into the latest advancements in Software Fields.',
  specialText: 'Available for Collaboration to build products',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
