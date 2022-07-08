const containerVariant = {
  hover: {
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const coverVariant = {
  hover: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export { containerVariant, coverVariant };
