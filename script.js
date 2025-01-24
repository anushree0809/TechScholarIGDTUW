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

  var modal = document.getElementById("loginModal");
  var btn = document.getElementById("loginBtn");
  var closeBtn = document.getElementsByClassName("close-btn")[0];
  
  // When the user clicks on the "Login" link, open the modal
  btn.onclick = function(event) {
      event.preventDefault(); // Prevent the default link behavior
      modal.style.display = "block"; // Show the modal
  }
  
  // When the user clicks anywhere outside the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none"; // Hide the modal if clicked outside
      }
  }

  // Get the modal and buttons for Register
var registerModal = document.getElementById("registerModal");
var registerBtn = document.getElementById("registerBtn");
var registerCloseBtn = registerModal.querySelector(".register-close-btn");

// When the user clicks on the "Register" link, open the modal
registerBtn.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    registerModal.style.display = "block"; // Show the modal
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none"; // Hide the modal
    }
}
// Optional: Switching between login and register modals
document.getElementById("switchToLogin").onclick = function(event) {
    event.preventDefault();
    registerModal.style.display = "none"; // Hide register modal
    document.getElementById("loginModal").style.display = "block"; // Show login modal
}

  