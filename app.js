function alertButton() {
    alert("Hello World!");
}
// Get current filename from URL
const currentPage = window.location.pathname.split("/").pop();

// Highlight matching nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});