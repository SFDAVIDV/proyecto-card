const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.querySelector("#span").classList.toggle("dark-mode");
  document.body.classList.toggle("dark");
});
