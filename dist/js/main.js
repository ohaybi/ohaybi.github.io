// Spin Logo while Scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let logo = document.getElementById("orange-logo");
  logo.style.transform = "rotate(" + window.pageYOffset / 3 + "deg)";
}

// Custom Cursor
const cursor = document.querySelector(".custom-cursor");

const editCursor = (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

window.addEventListener("mousemove", editCursor);

// Support Popup
const openBtn = document.getElementById("support-link");
const closeBtn = document.getElementById("close-popup");
const supportPopup = document.getElementById("support-popup");

openBtn.addEventListener("click", () => {
  supportPopup.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  supportPopup.classList.remove("open");
});
