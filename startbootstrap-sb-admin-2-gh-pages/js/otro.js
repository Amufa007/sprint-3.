
//funcnion cuenta regresiva
document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown-timer");
  const countdownDuration = 5 * 60; // 5 minutos en segundos

  function startCountdown(duration) {
      let timer = duration;
      setInterval(function () {
          const minutes = Math.floor(timer / 60);
          const seconds = timer % 60;

          countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

          if (--timer < 0) {
              timer = duration; // Reinicia el contador cuando llega a 0
          }
      }, 1000);
  }
  (function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

  startCountdown(countdownDuration);
});