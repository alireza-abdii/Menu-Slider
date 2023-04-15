const $ = document;

const toggle = $.querySelector("#toggle");
const close = $.querySelector("#close");
const open = $.querySelector("#open");
const modal = $.querySelector("#modal");

// Toggle navbar

toggle.addEventListener("click", () => $.body.classList.toggle("show-nav"));

// Show modal

open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal

close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal by outside click

window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
