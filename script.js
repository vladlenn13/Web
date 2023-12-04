document.getElementById('complexLink').addEventListener('click', function(e) {
  e.preventDefault();
  var complexSubmenu = document.querySelector('.complexSubmenu');
  if (complexSubmenu.style.display === 'none') {
    complexSubmenu.style.display = 'block';
  } else {
    complexSubmenu.style.display = 'none';
  }
});
