import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  texts: string[];
  interval?: number;
  direction?: "up" | "down";
}

const CustomTextTransition = ({
  texts,
  interval = 5000,
  direction = "down",
}: Props) => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setKey((prev) => prev + 1);
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, texts.length]);

  const variants = {
    enter: {
      y: direction === "down" ? -20 : 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: direction === "down" ? 20 : -20,
      opacity: 0,
    },
  };

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={key}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="inline-block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default CustomTextTransition;
