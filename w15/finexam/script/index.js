const options = {
  root: null,
  rootMargin: "0px",
  threshold: [1.0],
};

const callback = (triggers, observer) => {
  triggers.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add("triggered");
    } else {
      trigger.target.classList.remove("triggered");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const animTriggers = document.querySelectorAll(".animTrigger");
animTriggers.forEach((animTrigger) => {
  observer.observe(animTrigger);
});
