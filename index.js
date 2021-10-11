const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile");

menu.addEventListener("click", () => {
  console.log("click");

  if (mobile.classList.contains("close")) {
    mobile.classList.remove("close");
  } else if (!mobile.classList.contains("close")) {
    mobile.classList.add("close");
  }
});
