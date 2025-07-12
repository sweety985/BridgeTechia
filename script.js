function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Add button listeners for Apply buttons
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("applyStudent").addEventListener("click", function () {
    window.open("https://forms.gle/rzqF5yshH19yrKtv6");
  });

  document.getElementById("applyMentor").addEventListener("click", function () {
    window.open("https://forms.gle/bvWvanaZrEXtr7hP6");
  });
});
  

document.getElementById("memberButton").addEventListener("click", function () {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSfOMZ1IKhsyyERjbaGYC34UXbI2AGLQGaYQlkE35o8CxoHBBA/viewform?usp=dialog");
});

document.getElementById("signin-btn").addEventListener("click", function () {
    // Replace with your real Sign-In page URL
    window.location.href = "https://codepen.io/qsrvnsyf-the-selector/full/jEbEmJX";
  });

  
