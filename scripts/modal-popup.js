const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const overlay = document.getElementById('modalOverlay');

// Open modal
openBtn.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Close if clicked outside modal
window.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});
