import React from "react";

function smoothScrollTo(targetId: string, duration: number) {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const start = window.pageYOffset;
  const distance = targetElement.offsetTop - start;
  const startTime = performance.now();

  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * (t - 1), 3) / 2;
  }

  function scrollAnimation(currentTime: number) {
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;
    const easedProgress = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * easedProgress);

    if (elapsedTime < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
}

export default smoothScrollTo;
