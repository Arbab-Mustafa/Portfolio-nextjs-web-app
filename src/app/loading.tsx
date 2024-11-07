'use client';
import Flex from '@/components/base/Flex';
import { Logo } from '@/components/icons';

import { motion } from 'framer-motion';
import React from 'react';

const ANIMATION_DURATION = 1.5;
const LoadingScreen = () => {
  return (
    <Flex
      as={motion.div}
      direction="column"
      justify="center"
      align="center"
      css={{
        inset: 0,
        position: 'fixed',
        bg: '$backgroundPrimary',
        zIndex: '$6',
      }}
    >
      <motion.div
        initial={{ opacity: 0.3, filter: 'blur(15px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: ANIMATION_DURATION }}
        layoutId="logo"
      >
        <Logo style={{ transform: 'scale(1.8)' }} />
      </motion.div>
    </Flex>
  );
};

export default LoadingScreen;
