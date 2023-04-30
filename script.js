var icon = document.getElementById("button"),
    buttonText = document.getElementById("button-text"),
    animationToCheck = document.getElementById("animation-to-check"),
    animationToGreen = document.getElementById("animation-to-green"),
    animationToStar = document.getElementById("animation-to-star"),
    animationToYellow = document.getElementById("animation-to-yellow");

button.addEventListener('click', function() {
  
  if (button.classList.contains("salvo")) {
    button.classList.remove("salvo");
    animationToStar.beginElement();
    animationToYellow.beginElement();
    buttonText.innerHTML = "Salvar";
  } else {
    button.classList.add("salvo");
    animationToCheck.beginElement();
    animationToGreen.beginElement();
    buttonText.innerHTML = "Salvo!";
  }
  
}, false);