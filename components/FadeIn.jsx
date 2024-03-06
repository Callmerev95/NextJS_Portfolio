const FadeIn = (direction, duration) => ({
  hidden: {
    opacity: 0,
    ...(direction === "up" || direction === "down"
      ? { y: direction === "up" ? 50 : -50 }
      : { y: 0 }),
    ...(direction === "left" || direction === "right"
      ? { x: direction === "left" ? 50 : -50 }
      : { x: 0 }),
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      ease: "easeInOut",
    },
  },
});

export default FadeIn;
