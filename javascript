// script.js
// Scope for this weekend build: no event handlers yet.
// We just reach into the page and set content using querySelector + textContent.

const yearEl = document.querySelector("#year");
yearEl.textContent = new Date().getFullYear();
// script.js — toggles password visibility on the eye icon buttons

const toggles = document.querySelectorAll(".field__toggle");

toggles.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const isHidden = input.type === "password";

    input.type = isHidden ? "text" : "password";
    button.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});