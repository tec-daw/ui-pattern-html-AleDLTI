function revisarQuiz() {

  let count = 0

  var edadElement = document.getElementById("edad")
  var edad = edadElement.options[edadElement.selectedIndex].value

  var comidaElement = document.getElementById("comida")
  var comida = comidaElement.options[comidaElement.selectedIndex].value

  var lenguajeElement = document.getElementById("lenguaje")
  var lenguaje = lenguajeElement.options[lenguajeElement.selectedIndex].value

  if (edad === "Desarrollo de Aplicaiones Web") {
    count++
  }

  if (comida === "HTML,CSS") {
    count++
  }

  if (lenguaje === "HyperText Markup Language") {
    count++
  }

  if (count===3){
  alert("¡FELICIDADES! Tuviste: " + count + "/3 respuestas correctas.")
  }

  else {
    alert("Tuviste: " + count + "/3 respuestas correctas.")
  }
}


