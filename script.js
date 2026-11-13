const toggle = document.getElementById('nav_toggle');
const dropdown = document.querySelector('.dropdown');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.dropdown a');

links.forEach(link => {
  link.addEventListener('click', () => {
    toggle.checked = false;
  });
});
