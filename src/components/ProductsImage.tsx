'use client';

import { motion } from 'framer-motion';

export const ProductsImage = () => {
  return (
    <motion.img
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      exit={{ opacity: 0, x: 20 }}
      src="/chair.jpg"
      alt="Nice chair"
      className="h-full w-full object-cover"
    />
  );
};
