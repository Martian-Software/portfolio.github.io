document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const angle = Math.round(x * 360);

  // background size: from 100% to 200% based on Y
  const zoom = 100 + Math.round(y * 90); // 100% to 200%

  document.body.style.backgroundImage =
    `linear-gradient(${angle}deg, #2916F5, #B041FF, #F9B7FF)`;
  document.body.style.backgroundSize = `${zoom}% ${zoom}%`;
});
