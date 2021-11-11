document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.temas');
    var items = document.querySelectorAll('.apresentacao');
    var prev = document.querySelector('.bot_ante');
    var next = document.querySelector('.bot_prox');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.apresentacao');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.apresentacao');
    });
  });