//fitur Dropdown
const toggle = document.getElementById('nav_toggle');
const dropdown = document.querySelector('.dropdown');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.dropdown a');

links.forEach(link => {
  link.addEventListener('click', () => {
    toggle.checked = false;
  });
});

//fitur Tabs
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

// fitur dark/light mode
const uMode = document.querySelector('#themeToggle');
const icon = document.querySelector('#icon');

icon.onanimationend = () => {icon.classList.remove('muter')};
uMode.addEventListener('click', () => {
  
  const bUbah = document.body.classList.toggle('light');
  const uImg = document.querySelector('.main-profile');
  
    if (bUbah === true) {
    icon.classList.remove('fa-sun')
    icon.classList.add('fa-moon')
    uImg.src = 'image/profile/silver_profile.jpg';
  }else {
    icon.classList.add('fa-sun')
    icon.classList.remove('fa-moon')
    uImg.src = 'image/profile/gold_profile.jpg';
  }
    icon.classList.add('muter')
});


