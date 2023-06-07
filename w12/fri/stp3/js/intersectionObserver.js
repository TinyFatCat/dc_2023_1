let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

let observerCallback = (observingTargets, observer) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      eachObservingTarget.target.classList.add("triggered");
    } else {
      eachObservingTarget.target.classList.remove("triggered");
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOption);

let elems = document.querySelectorAll(".animTrigger");

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
