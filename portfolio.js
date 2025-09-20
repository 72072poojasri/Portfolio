// Typing Animation Effect
const textArray = ["Pooja Sri", "Front-End Developer", "Web Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

function typeEffect() {
  const display = document.getElementById("animated-text");

  if (isDeleting) {
    currentText = textArray[index].substring(0, charIndex--);
  } else {
    currentText = textArray[index].substring(0, charIndex++);
  }

  display.textContent = currentText;

  if (!isDeleting && charIndex === textArray[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    setTimeout(typeEffect, typingSpeed);
  } else {
    setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
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

