const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const modal = document.getElementById("lessonModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const lessonDescriptions = {
  "Class 01": "Introduction: Garments CAD, Pattern, measurement, CAD workflow and the complete learning roadmap.",
  "Class 02": "Software Interface: workspace, menus, toolbars, basic navigation and important CAD tools.",
  "Class 03": "Basic Pattern Making: measurements, construction points, lines, curves and basic pattern development.",
  "Class 04": "Pattern Modification: style changes, dart manipulation, seam allowance and correction techniques.",
  "Class 05": "Grading & Nesting: size grading, size sets and basic marker/nesting concepts.",
  "Class 06": "Advanced CAD Workflow: production-ready pattern workflow and advanced practice roadmap."
};

document.querySelectorAll(".lesson-btn").forEach(button => {
  button.addEventListener("click", () => {
    const lesson = button.dataset.lesson;
    modalTitle.textContent = lesson;
    modalText.textContent = lessonDescriptions[lesson] || "Lesson content will be added here.";
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function hideModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
closeModal.addEventListener("click", hideModal);
modal.addEventListener("click", e => {
  if(e.target === modal) hideModal();
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "Demo form: message captured successfully. Backend/email connection will be added in a later class.";
  e.target.reset();
});
