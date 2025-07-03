document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.ham');
  const nav = document.querySelector('.nav');

  if (ham && nav) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
  }
});