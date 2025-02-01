document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const icon = button.querySelector('.faq-icon');

      faqItem.classList.toggle('active');

      // Toggle between "+" and "-" symbol
      if (faqItem.classList.contains('active')) {
          icon.textContent = '−'; // Minus symbol
      } else {
          icon.textContent = '+'; // Plus symbol
      }

      // Close other open FAQ items and reset their icon
      document.querySelectorAll('.faq-item').forEach(item => {
          if (item !== faqItem && item.classList.contains('active')) {
              item.classList.remove('active');
              item.querySelector('.faq-icon').textContent = '+';
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

//code for theme change
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check for saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️"; // Sun icon for light mode
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeIcon.textContent = "☀️"; // Sun icon for light mode
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.textContent = "🌙"; // Moon icon for dark mode
    }
});






  