'use client';
import LoadingScreen from '@/components/loading';
import StarsCanvas from '@/components/Stars';
import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay, e.g., 2 seconds (2000 ms)
    const timer = setTimeout(() => setIsLoading(false), 1600);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    // Render Loading component while isLoading is true
    return <LoadingScreen />;
  }

  return (
    <>
      <Layout>
        <Hero />
        <StarsCanvas />
        <About />

        <Skills />

        <Experience />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
