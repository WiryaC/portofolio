const toggle = document.getElementById('nav_toggle');
const dropdown = document.querySelector('.dropdown');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.dropdown a');

links.forEach(link => {
  link.addEventListener('click', () => {
    toggle.checked = false;
  });
});


const sTombol = document.querySelector('.tabs-skill')
    
    sTombol.addEventListener('click', (e) => {
      const tombol = e.target.closest('.tombol-tab');
      if(!tombol) return;
      
      document.querySelectorAll('.tombol-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.isi-tab').forEach(i => i.classList.remove('active'));
      
      tombol.classList.add('active');
      const idTujuan = tombol.dataset.target;
      document.getElementById(idTujuan).classList.add('active')
    });