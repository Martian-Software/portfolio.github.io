document.addEventListener('DOMContentLoaded', () => {
   
    const initialAngle = 180;
    const initialZoom = 150;

    document.body.style.backgroundImage =
        `linear-gradient(${initialAngle}deg, #2916F5, #B041FF, #F9B7FF)`;
    document.body.style.backgroundSize = `${initialZoom}% ${initialZoom}%`;
});
document.addEventListener('mousemove', function(e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const angle = Math.round(x * 360);

  
  const zoom = 100 + Math.round(y * 90); // 100% to 200%

  document.body.style.backgroundImage =
    `linear-gradient(${angle}deg, #2916F5, #B041FF, #F9B7FF)`;
  document.body.style.backgroundSize = `${zoom}% ${zoom}%`;
});
