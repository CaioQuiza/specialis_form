//Código aprensentação slides
document.addEventListener('DOMContentLoaded', function() {
    var dev_themes = document.querySelector('.temas');
    var scrum_text = document.querySelector('.textos');
    var itens_software_test = document.querySelectorAll('.apresentacao');
    var itens_method_scrum = document.querySelectorAll('.metodologia');
    var prev_software_theme = document.querySelector('.bot_ante');
    var prev_scrum_method = document.querySelector('.bot_scrum_ante');
    var next_software_theme = document.querySelector('.bot_prox');
    var next_scrum_method = document.querySelector('.bot_scrum_prox');
  
    prev_software_theme.addEventListener('click', function() {
      dev_themes.insertBefore(itens_software_test[itens_software_test.length - 1], itens_software_test[0]);
      itens_software_test = document.querySelectorAll('.apresentacao');
    });

    prev_scrum_method.addEventListener('click', function() {
        scrum_text.insertBefore(itens_method_scrum[itens_method_scrum.length - 1], itens_method_scrum[0]);
        itens_method_scrum = document.querySelectorAll('.metodologia');
      });
  
    next_software_theme.addEventListener('click', function() {
      dev_themes.appendChild(itens_software_test[0]);
      itens_software_test = document.querySelectorAll('.apresentacao');
    });

    next_scrum_method.addEventListener('click', function() {
      scrum_text.appendChild(itens_method_scrum[0]);
      itens_method_scrum = document.querySelectorAll('.metodologia');
    });


  });