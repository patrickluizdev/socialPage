window.addEventListener('DOMContentLoaded', () => {

  VANTA.CLOUDS2({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 3.00,
    skyColor: 0x363c46,
    texturePath: "./src/img/noise.png"
  })

  setTimeout(() => {
    document.querySelector('main').style.opacity = '1';
    document.querySelector('main').style.filter = 'none';
  }, 1000);
});
