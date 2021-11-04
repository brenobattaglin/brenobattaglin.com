let easing = [0.175, 0.85, 0.42, 0.96];

const contentVariants = {
  exit: { y: 240, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.2, duration: 2, ease: easing }
  }
};

export default contentVariants;