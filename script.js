document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer p');

  if (footerText) {
    footerText.textContent = `Empowering students to excel and lead. © ${year}`;
  }
});
