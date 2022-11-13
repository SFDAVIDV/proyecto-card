const card = document.querySelectorAll(".card img");

/*
  En esta funcion comprobamos el nombre de los elementos que necesitamos
  Para que se ejecute la funciom que esta declarada en la linea 35,
  Se necesita el nombre para que unicamente se efectuen los estilos para el elementos con
  dicho nombre, evitando asi que todos se efectuen a la vez 
*/
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

/*
  Esta función es para comprobar si el elemento tenga una clase determinada,
  si la tiene agregar una nueva clase para que se ejecute los estilos predeterminados
*/
const cards = (clase) => {
  const img = document.getElementById(`img-${clase}`);
  const parrafo = document.getElementById(`contenido-${clase}`);
  if (
    (img.classList.contains = `${clase}`) &&
    (parrafo.classList.contains = `contenido-${clase}`)
  ) {
    img.classList.toggle("img-activo");
    parrafo.classList.toggle("contenido-activo");
  }
};

card.forEach((card) => card.addEventListener("click", comprobar));
