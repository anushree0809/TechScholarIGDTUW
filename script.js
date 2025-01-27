document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
  
      faqItem.classList.toggle('active');
  
      // Close other open FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem && item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
    });
  });

const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
//register..
const openRegisterPopup = document.getElementById('openRegisterPopup');
const registerPopup = document.getElementById('registerPopup');

function toggleRegisterPopup() {
  registerPopup.style.display =
    registerPopup.style.display === 'flex' ? 'none' : 'flex';
}

openRegisterPopup.addEventListener('click', toggleRegisterPopup);

window.addEventListener('click', (e) => {
  if (e.target === registerPopup) {
    toggleRegisterPopup();
  }
});
// Get elements

// Elements

const signupLink = document.querySelector('.signup a'); // "Sign up" link in Sign In modal
const signinLink = document.querySelector('.signin a'); // "Sign In" link in Sign Up popup

// Show Sign Up modal when "Sign up" is clicked
signupLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginModal.style.display = 'none'; // Hide Sign In modal
  registerPopup.style.display = 'flex'; // Show Sign Up modal
});

// Show Sign In modal when "Sign In" is clicked
signinLink.addEventListener('click', function (e) {
  e.preventDefault();
  registerPopup.style.display = 'none'; // Hide Sign Up modal
  loginModal.style.display = 'flex'; // Show Sign In modal
});

// Close Sign In modal (optional functionality)
document.getElementById('closeModal').addEventListener('click', function () {
  loginModal.style.display = 'none';
});





  