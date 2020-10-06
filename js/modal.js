function openModal(id = 'videosModal') {
  // Get the modal
  const modal = document.getElementById(id);
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  };
}

function closeModal(id = 'videosModal') {
  const modal = document.getElementById(id);
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.body.style.height = 'auto';
}
