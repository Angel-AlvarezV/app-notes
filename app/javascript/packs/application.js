// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'materialize-css/dist/js/materialize'

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('turbolinks:load', function () {
  M.updateTextFields();

  let elems = document.querySelectorAll('.materialize-textarea')
  if (elems.length) {
    elems.forEach(elem => M.textareaAutoResize(elem))
  }

  // Inicializar los tooltips de Materialize
  let tooltipElems = document.querySelectorAll('.tooltipped');
  if (tooltipElems.length) {
    M.Tooltip.init(tooltipElems);
  }

  //Modo oscuro
  const toggleButton = document.getElementById('toggle-dark-mode');
  const body = document.body;
  // Verifica si el modo oscuro está habilitado en el almacenamiento local
  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode-active');
  }
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      toggleButton.classList.toggle('dark-mode-active');

      // Guardar la preferencia del usuario en el almacenamiento local
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
      } else {
        localStorage.setItem('dark-mode', 'false');
      }
    });
  }
})
