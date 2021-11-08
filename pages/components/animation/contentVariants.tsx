const contentVariants = {
  hidden: {
    y: 240,
    opacity: 0
  },
  exit: {
    x: -240,
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 3
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
    }
  },
};

export default contentVariants;