//Código aprensentação slides
document.addEventListener('DOMContentLoaded', function() {
    var dev_themes = document.querySelector('.temas');
    var itens_software_test = document.querySelectorAll('.apresentacao');
    var prev_software_theme = document.querySelector('.bot_ante');
    var next_software_theme = document.querySelector('.bot_prox');
     
    prev_software_theme.addEventListener('click', function() {
      dev_themes.insertBefore(itens_software_test[itens_software_test.length - 1], itens_software_test[0]);
      itens_software_test = document.querySelectorAll('.apresentacao');
    });
    
    
    next_software_theme.addEventListener('click', function() {
      dev_themes.appendChild(itens_software_test[0]);
      itens_software_test = document.querySelectorAll('.apresentacao');
    });

  });