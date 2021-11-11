document.addEventListener('DOMContentLoaded', function() {
    var scrum_text = document.querySelector('.textos');
    var itens_method_scrum = document.querySelectorAll('.metodologia');;
    var prev_scrum_method = document.querySelector('.bot_scrum_ante');
    var next_scrum_method = document.querySelector('.bot_scrum_prox');
  
    prev_scrum_method.addEventListener('click', function(){
        scrum_text.insertBefore(itens_method_scrum[itens_method_scrum.length - 1], itens_method_scrum[0]);
        itens_method_scrum = document.querySelectorAll('.metodologia');
    });
  
    next_scrum_method.addEventListener('click', function(){
        scrum_text.appendChild(itens_method_scrum[0]);
        itens_method_scrum = document.querySelectorAll('.metodologia');
    });

    
  });