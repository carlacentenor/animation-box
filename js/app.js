function keyListener(event) {
  if (event.keyCode == 37) {
          document.querySelector("#c6").style.backgroundColor="red";
          document.querySelector("#c3").style.backgroundColor="white";
          document.querySelector("#c11").style.backgroundColor="white";
          document.querySelector("#c8").style.backgroundColor="white";
      }
  if (event.keyCode == 38) {
              document.querySelector("#c3").style.backgroundColor="red";
              document.querySelector("#c6").style.backgroundColor="white";
              document.querySelector("#c11").style.backgroundColor="white";
              document.querySelector("#c8").style.backgroundColor="white";
      }
  if (event.keyCode == 39) {
              document.querySelector("#c8").style.backgroundColor="red";
              document.querySelector("#c3").style.backgroundColor="white";
              document.querySelector("#c11").style.backgroundColor="white";
              document.querySelector("#c6").style.backgroundColor="white";
          }
  if (event.keyCode == 40) {
                  document.querySelector("#c11").style.backgroundColor="red";
                  document.querySelector("#c3").style.backgroundColor="white";
                  document.querySelector("#c6").style.backgroundColor="white";
                  document.querySelector("#c8").style.backgroundColor="white";
              }
}

/*
if(event.keyCode ==37){
alert("izquierda");
  }
if(event.keyCode ==38){
alert("arriba");
}
if(event.keyCode ==39){
alert("derecha");
}
if(event.keyCode ==40){
  moveBox("abajo");
}
*/
