const toggle = document.getElementById('nav_toggle');
     const links = document.querySelectorAll('.dropdown a');
   
     links.forEach(link => {
       link.addEventListener('click', () => {
         toggle.checked = false; 
       });
     });