var button = document.getElementById("doge");
var image = document.getElementById("bgimage");

button.addEventListener("load", functionLoad);
button.addEventListener("mouseover", functionMouseover);
button.addEventListener("mouseout", functionMouseout);
button.addEventListener("click", functionSwitchImage);

function functionSwitchImage() {
  image;
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
}

function functionLoad() {
  button.innerHTML = "Woof";
}

function functionMouseover() {
  button.innerHTML = "Woof woof!";
}

function functionMouseout() {
  button.innerHTML = "Woof!";
}
