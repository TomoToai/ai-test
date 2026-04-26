const revealItems = document.querySelectorAll(
  ".hero-copy, .hero-card, .about-card, .panel, .project-card, .contact-card, .metric-pill, .stack-card"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => observer.observe(item));

const nodes = document.querySelectorAll(".system-node");

nodes.forEach((node, index) => {
  const duration = 2400 + index * 500;

  node.animate(
    [
      {
        transform: "scale(1)",
        opacity: 0.24,
      },
      {
        transform: "scale(1.25)",
        opacity: 0.5,
      },
      {
        transform: "scale(1)",
        opacity: 0.24,
      },
    ],
    {
      duration,
      iterations: Infinity,
      easing: "ease-in-out",
      delay: index * 220,
    }
  );
});
