"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const variants = {
    hidden: { opacity: 0, x: -120 },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 40,
      },
    },
    exit: { opacity: 0, x: 120 },
  };

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedLayout;
