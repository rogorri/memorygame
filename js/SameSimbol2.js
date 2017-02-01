var screenNumber;
var checkNumber;
var points= 0;
var clickedID;

function getrandom () {
  var random = Math.floor(Math.random()*2);
  return random;
}


function start() {
  screenNumber = getrandom();
  checkNumber = getrandom();
  $(".main").attr('id','downcol'+(checkNumber));
  console.log(checkNumber);
  var timeoutId = setTimeout(function () {
  $(".main").attr('id','downcol'+(screenNumber));
  console.log(screenNumber);
}, 2000);
}

start();


function nextNumber () {
    checkNumber = screenNumber;
    screenNumber = getrandom();
  document.getElementById("ScreenNumberDiv").innerHTML = screenNumber;
}

function evaluate () {
  if (screenNumber === checkNumber){
    if (clickedID === "OK") {
      points ++;
      document.getElementById("pointer").innerHTML = points;
      console.log ("Lo has echo bien, ya tienes " + points + " puntos");
    }
    else {console.log ("Fallaste, acumulas " + points + " puntos");}
  }
  else {
    if (clickedID === "KO"){
    points ++;
    document.getElementById("pointer").innerHTML = points;
    console.log ("Lo has echo bien, ya tienes " + points + " puntos");}
    else {
      {console.log ("Fallaste, acumulas " + points + " puntos");
    }
  }
}
}

var seconds = 60;
var intervalId = setInterval(function() {
  if (seconds > 0) {
    console.log(seconds);
    document.getElementById("counter").innerHTML = seconds;
  } else {
    console.log("Pop!");
    document.getElementById("counter").innerHTML = "Se te acabo el tiempo";
  }

	seconds--;
}, 1000);


$( document ).ready(function() {
  $(".button").on("click",function () {
    console.log("Has hecho click");
    clickedID = this.id;
    console.log("su Id es " + clickedID);
    evaluate();
    nextNumber ();
  });

});
