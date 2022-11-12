const card = document.querySelectorAll(".card img");

const comprobar = (e) => {
  switch (e.target.name) {
    case "html":
      cards("html");
      break;
    case "css":
      cards("css");
      break;
    case "javascript":
      cards("javascript");
      break;
    case "python":
      cards("python");
      break;
    case "php":
      cards("php");
      break;
    case "java":
      cards("java");
      break;
  }
};

const cards = (clase) => {
  const img = document.getElementById(`img-${clase}`);
  const parrafo = document.getElementById(`contenido-${clase}`);
  if (
    (img.classList.contains = `${clase}`) &&
    (parrafo.classList.contains = `contenido-${clase}`)
  ) {
    img.classList.toggle("img-activo");
    parrafo.classList.toggle("contenido-activo");
  } else {
    console.log("no la tiene");
  }
};

card.forEach((card) => {
  card.addEventListener("click", comprobar);
});
