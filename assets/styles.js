function func1() {
  document.getElementById("btn1").style.backgroundColor = "red";
  document.getElementById("btn1").innerHTML = "RED";
}

function func2() {
  document.getElementById("btn2").style.backgroundColor = "orange";
  document.getElementById("btn2").innerHTML = "ORANGE";
}

function func3() {
  document.getElementById("btn3").style.backgroundColor = "yellow";
  document.getElementById("btn3").innerHTML = "YELLOW";
}

function func4() {
  document.getElementById("btn4").style.backgroundColor = "green";
  document.getElementById("btn4").innerHTML = "GREEN";
}

function func5() {
  document.getElementById("btn5").style.backgroundColor = "blue";
  document.getElementById("btn5").innerHTML = "BLUE";
}

function func6() {
  document.getElementById("btn6").style.backgroundColor = "indigo";
  document.getElementById("btn6").innerHTML = "INDIGO";
}

function func7() {
  document.getElementById("btn7").style.backgroundColor = "violet";
  document.getElementById("btn7").innerHTML = "VIOLET";
}

//                  Rainbow Heading.
//   (GOT THIS ON STACK OVERFLOW AND REALLY LIKED IT.)

window.addEventListener("load", function () {
  var elements = document.getElementsByClassName("rainbowText");
  for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
  }
});

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i) / text.length + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}
