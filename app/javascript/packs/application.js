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

const translations = {
  es: {
    january: "Enero",
    february: "Febrero",
    march: "Marzo",
    april: "Abril",
    may: "Mayo",
    june: "Junio",
    july: "Julio",
    august: "Agosto",
    september: "Septiembre",
    october: "Octubre",
    november: "Noviembre",
    december: "Diciembre",
  },
  en: {
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
  }
};

function translateMonth(month, language) {
  // Traduce el nombre del mes en función del idioma seleccionado
  const translatedMonth = translations[language][month.toLowerCase()];
  return translatedMonth || month; // Si no se encuentra el mes, devuelve el nombre original
}

function updateMonthTranslations(language) {
  // Selecciona todos los elementos que contienen el nombre del mes
  document.querySelectorAll('.month').forEach((monthElement) => {
    const monthKey = monthElement.dataset.month; // Obtiene el mes desde el atributo data-month
    const translatedMonth = translateMonth(monthKey, language); // Traduce el mes
    monthElement.textContent = translatedMonth; // Actualiza el texto en la página
  });
}

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
  const languageButton = document.getElementById('btn-language');
  const body = document.body;
  // Verifica si el modo oscuro está habilitado en el almacenamiento local
  if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.classList.add('dark-mode-active');
    languageButton.classList.add('dark-mode-active');
  }
  if (toggleButton) {
    toggleButton.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      toggleButton.classList.toggle('dark-mode-active');
      languageButton.classList.toggle('dark-mode-active');

      // Guardar la preferencia del usuario en el almacenamiento local
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'true');
      } else {
        localStorage.setItem('dark-mode', 'false');
      }
    });
  }

  const languageLabel = document.getElementById('language-label');
  let currentLanguage = localStorage.getItem('language') || 'es';
  const pageTitle = document.getElementById('page-title');
  const newNoteBtn = document.getElementById('new-note-btn');
  const titleField = document.getElementById('txt-search');
  const editField = document.getElementById('btn-edit');
  const deleteField = document.getElementById('btn-delete');
  const txt_title = document.getElementById('txt_title');
  const titleLabel = document.getElementById('lbl_title');
  const bodyLabel = document.getElementById('lbl_body');
  const errorProhibited = document.getElementById('error-prohibited');
  const errorHeading = document.getElementById('error-heading');
  const noticeElement = document.getElementById('notice');
  const errorElement = document.getElementById('error_explanation');
  const selectOrder = document.getElementById('filters_order');
  const filterLabel = document.getElementById('txt_filter');

  // Función para cambiar el idioma
  function setLanguage(language) {
    // Cambiar el texto en la página
    if (languageLabel) {
      languageLabel.textContent = (language === 'es') ? 'Español' : 'English';
    }
    if (pageTitle) {
      pageTitle.textContent = (language === 'es') ? 'Mi colección de notas' : 'My note collection';
    }
    if (newNoteBtn) {
      newNoteBtn.setAttribute('data-tooltip', (language === 'es') ? 'Nueva Nota' : 'New Note');
      newNoteBtn.setAttribute('title', (language === 'es') ? 'Nueva Nota' : 'New Note');
    }
    if (titleField) {
      titleField.setAttribute('placeholder', (language === 'es') ? 'Buscar' : 'Search');
    }
    if (editField) {
      editField.setAttribute('title', (language === 'es') ? 'Editar' : 'Edit');
    }
    if (deleteField) {
      deleteField.setAttribute('title', (language === 'es') ? 'Borrar' : 'Delete');
      deleteField.setAttribute('data-confirm', (language === 'es') ? 'Esta seguro?' : 'Are you sure?');
    }
    if (txt_title) {
      txt_title.setAttribute('title', (language === 'es') ? 'Título' : 'Title');
    }
    if (titleLabel) {
      titleLabel.textContent = (language === 'es') ? 'Título' : 'Title';
    }
    if (bodyLabel) {
      bodyLabel.textContent = (language === 'es') ? 'Cuerpo' : 'Body';
    }
    if (noticeElement) {
      const messages = {
        "Note was successfully created.": {
          es: "Nota fue creada exitosamente.",
          en: "Note was successfully created."
        },
        "Note was successfully updated.": {
          es: "Nota fue actualizada exitosamente.",
          en: "Note was successfully updated."
        },
        "Note was successfully destroyed.": {
          es: "Nota fue eliminada exitosamente.",
          en: "Note was successfully destroyed."
        }
      };

      const messageKey = Object.keys(messages).find(key => noticeElement.textContent.includes(key));
    if (messageKey) {
      noticeElement.textContent = messages[messageKey][currentLanguage];
      }
    }
    if (filterLabel) {
      filterLabel.textContent = (language === 'es') ? 'Filtro:' : 'Filter:';
    }
    
    document.addEventListener('click', function (event) {
      if (noticeElement && !noticeElement.contains(event.target)) {
        noticeElement.style.display = 'none';
      }
    });

    if (errorHeading && errorProhibited) {
      const errorCount = errorHeading.getAttribute('data-error-count');  // Obtener el número de errores
  
      // Traducir el texto del encabezado con plural según el número de errores
      if (language === 'es') {
        errorHeading.textContent = `${errorCount} ${errorCount > 1 ? 'errores' : 'error'} prohibieron que se guardara esta nota:`;
      } else {
        errorHeading.textContent = `${errorCount} ${errorCount > 1 ? 'errors' : 'error'} prohibited this note from being saved:`;
      }
  
      // Traducir el texto de 'prohibited this note from being saved'
      errorProhibited.textContent = (language === 'es')
        ? 'prohibieron que se guardara esta nota:'
        : 'prohibited this note from being saved:';
    }

    
    if (selectOrder) {
      // Cargar la preferencia guardada al cargar la página
      const savedOrder = localStorage.getItem('filters_order');
      if (savedOrder) {
        selectOrder.value = savedOrder;
      }
  
      // Guardar la preferencia en localStorage cuando se cambia la selección
      selectOrder.addEventListener('change', function() {
        localStorage.setItem('filters_order', this.value);
        this.form.submit();  // Enviar el formulario para aplicar el filtro
      });
    }
    
    updateFilterOptions(language);
    translateErrors(language);

    // Guarda la preferencia en localStorage
    localStorage.setItem('language', language);
    updateMonthTranslations(language);
  }
  
  const errorMessages = {
    "Title can't be blank": {
      es: "El título no puede estar en blanco",
      en: "Title can't be blank"
    },
    "Body can't be blank": {
      es: "El cuerpo no puede estar en blanco",
      en: "Body can't be blank"
    },
    "A note with this title already exists.": {
      es: "Ya existe una nota con este título.",
      en: "A note with this title already exists."
    },
  };

  // Función para traducir mensajes de error
  function translateErrors(language) {
  if (errorElement) {
    const errorItems = errorElement.querySelectorAll('li');

  errorItems.forEach(item => {
    const errorKey = Object.keys(errorMessages).find(key => item.textContent.includes(key));
    if (errorKey) {
      item.textContent = `• ${errorMessages[errorKey][language]}`;
      }
    });
  }
 }

 const translations = {
  es: {
    filterOptions: {
      newest_to_oldest: 'Más reciente a más antiguo',
      oldest_to_newest: 'Más antiguo a más reciente',
      alphabetical_az: 'Alfabético A-Z',
      alphabetical_za: 'Alfabético Z-A'
    }
  },
  en: {
    filterOptions: {
      newest_to_oldest: 'Newest to Oldest',
      oldest_to_newest: 'Oldest to Newest',
      alphabetical_az: 'Alphabetical A-Z',
      alphabetical_za: 'Alphabetical Z-A'
    }
  }
};
//Función para actualizar filtros
function updateFilterOptions(language) {
  const selectOrder = document.getElementById('filters_order');
  if (selectOrder) {
    // Limpia todas las opciones actuales
    selectOrder.innerHTML = '';

    // Añade las opciones traducidas
    const options = translations[language].filterOptions;
    Object.keys(options).forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = options[value];
      selectOrder.appendChild(option);
    });

    // Restaurar el valor seleccionado previamente
    const savedOrder = localStorage.getItem('filters_order');
    if (savedOrder) {
      selectOrder.value = savedOrder;
    }
  }
}

  // Inicializa el idioma según la preferencia almacenada
  setLanguage(currentLanguage);

  // Cambiar el idioma cuando se hace clic en el botón
  if (languageButton) {
    languageButton.addEventListener('click', function () {
      currentLanguage = (currentLanguage === 'es') ? 'en' : 'es';
      setLanguage(currentLanguage);
    });
  }
})
