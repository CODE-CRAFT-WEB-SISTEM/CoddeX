function observerEvent() {
  const targets = document.querySelectorAll("[data-animate]");

  const animateOnScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  targets.forEach(target => animateOnScroll.observe(target));
}

export default observerEvent;