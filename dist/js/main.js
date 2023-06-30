document.addEventListener("DOMContentLoaded", function () {
  darkMode();
});

function darkMode() {
  const darkToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");
  const toggleIcon = document.querySelector(".toggle-icon");

  if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    darkToggle.checked = true;
    toggleIcon.classList.add("sliding");
  } else {
    darkToggle.checked = false;
    toggleIcon.classList.remove("sliding");
  }

  darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
      html.classList.add("dark");
      localStorage.theme = "dark";
      toggleIcon.classList.add("sliding");
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
      toggleIcon.classList.remove("sliding");
    }
  });
}

// Spin Logo while Scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("orange-logo");
  image.style.transform = "rotate(" + window.pageYOffset / 3 + "deg)";
}
