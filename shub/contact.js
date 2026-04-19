document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Show confirmation message
  document.getElementById("formMsg").textContent = "✅ Your message has been sent. Redirecting...";

  // Optional: delay before redirect (so user sees message)
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5505/home.html"; // replace with your actual home page URL
  }, 1500); // 1.5 seconds delay
});
