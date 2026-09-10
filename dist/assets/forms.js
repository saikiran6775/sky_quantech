// Client-side validation and submission for the enquiry and profile forms.
// Submission is gated on a configured endpoint — see site/data/forms.config.mjs.
// Never report success unless the receiving service confirmed it.
(function () {
  'use strict';

  var CONFIG = window.SKY_FORMS || {};
  var ERROR_RING = ['ring-2', 'ring-error'];

  function messageFor(field) {
    var label = (field.labels && field.labels[0] ? field.labels[0].textContent : field.name) || 'This field';
    label = label.replace(/\*/g, '').replace(/\(optional\)/i, '').trim();
    if (field.validity.valueMissing) {
      if (field.type === 'file') return 'Attach your resume to continue.';
      if (field.tagName === 'SELECT') return 'Choose an option.';
      return 'Enter your ' + label.toLowerCase() + '.';
    }
    if (field.validity.typeMismatch && field.type === 'email') return 'Enter an email address, like you@company.com.';
    if (field.validity.typeMismatch && field.type === 'url') return 'Enter a full link, starting with https://';
    return 'Check this field.';
  }

  function showError(field, text) {
    var box = document.querySelector('[data-error-for="' + field.id + '"]');
    if (box) { box.textContent = text; box.hidden = false; }
    field.setAttribute('aria-invalid', 'true');
    ERROR_RING.forEach(function (c) { field.classList.add(c); });
  }

  function clearError(field) {
    var box = document.querySelector('[data-error-for="' + field.id + '"]');
    if (box) { box.hidden = true; box.textContent = ''; }
    field.removeAttribute('aria-invalid');
    ERROR_RING.forEach(function (c) { field.classList.remove(c); });
  }

  function validateFile(field) {
    var file = field.files && field.files[0];
    if (!file) return null;
    var ok = /\.(pdf|docx?)$/i.test(file.name);
    if (!ok) return 'Use a PDF, DOC or DOCX file.';
    var max = CONFIG.resumeMaxBytes;
    if (max && file.size > max) return 'That file is too large.';
    return null;
  }

  function setStatus(form, text, kind) {
    var el = form.querySelector('[data-form-status]');
    if (!el) return;
    el.textContent = text;
    el.classList.remove('hidden', 'bg-error-container', 'text-on-error-container', 'bg-surface-container', 'text-on-surface');
    if (kind === 'error') el.classList.add('bg-error-container', 'text-on-error-container');
    else el.classList.add('bg-surface-container', 'text-on-surface');
  }

  Array.prototype.forEach.call(document.querySelectorAll('form[data-form]'), function (form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));

    fields.forEach(function (field) {
      field.addEventListener('blur', function () {
        if (field.checkValidity() && !(field.type === 'file' && validateFile(field))) clearError(field);
      });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true' && field.checkValidity()) clearError(field);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstBad = null;
      fields.forEach(function (field) {
        clearError(field);
        var fileError = field.type === 'file' ? validateFile(field) : null;
        if (!field.checkValidity()) {
          showError(field, messageFor(field));
          firstBad = firstBad || field;
        } else if (fileError) {
          showError(field, fileError);
          firstBad = firstBad || field;
        }
      });

      if (firstBad) {
        setStatus(form, 'Check the highlighted fields and try again.', 'error');
        firstBad.focus();
        return;
      }

      if (!CONFIG.endpoint) {
        // No backend supplied. Say so rather than fake a success state.
        setStatus(form, CONFIG.unconfiguredMessage || 'This form is not connected yet.', 'error');
        return;
      }

      var button = form.querySelector('button[type="submit"]');
      var original = button ? button.textContent : '';
      if (button) { button.disabled = true; button.textContent = 'Sending…'; }
      setStatus(form, 'Sending your message…');

      fetch(CONFIG.endpoint, { 
        method: CONFIG.method || 'POST', 
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          form.reset();
          setStatus(form, form.dataset.form === 'profile'
            ? 'Profile sent. We will be in touch if there is a fit.'
            : 'Enquiry sent. We will get back to you.');
        })
        .catch(function () {
          setStatus(form, 'That did not send. Try again, or contact us directly.', 'error');
        })
        .finally(function () {
          if (button) { button.disabled = false; button.textContent = original; }
        });
    });
  });
})();
