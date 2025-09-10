// Hire Me Button
const hireBtn = document.getElementById("hireBtn");
if (hireBtn) {
  hireBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    e.target.reset();
  });
}


// Typewriter Effect
const skills = ["HTML", "CSS", "JavaScript", "Python", "C++"];
let skillIndex = 0;
let charIndex = 0;
const typeSpeed = 150;
const eraseSpeed = 100;
const delayBetweenSkills = 1500;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (!typewriterElement) return;
  if (charIndex < skills[skillIndex].length) {
    typewriterElement.textContent += skills[skillIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeSpeed);
  } else {
    setTimeout(erase, delayBetweenSkills);
  }
}

function erase() {
  if (!typewriterElement) return;
  if (charIndex > 0) {
    typewriterElement.textContent = skills[skillIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, eraseSpeed);
  } else {
    skillIndex = (skillIndex + 1) % skills.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
