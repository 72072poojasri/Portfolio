const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  formMsg.textContent = "Sending...";
  formMsg.className = "";

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    formMsg.textContent = "✅ Thanks! Your message has been sent.";
    formMsg.className = "success";
    form.reset();
  } else {
    formMsg.textContent = "❌ Oops! Something went wrong.";
    formMsg.className = "error";
  }
});
