document.querySelectorAll('#request-form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    note.textContent = 'Request preview ready. This visual prototype does not send your details.';
  });
});
