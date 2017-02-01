function SameSimbol () {
  this.screenNumber = null;
  this.checkNumber = null;
  this.counter= 0;
  this.clickedID = null;
  this.finalScore= null;
}


SameSimbol.prototype._getRandom = function () {
  return Math.floor(Math.random()*2);
};


SameSimbol.prototype.start = function (){
  this.screenNumber = this._getRandom();
  this.checkNumber = this._getRandom();
  var interior = this.screenNumber;
  var interior1 = this.checkNumber;
      $("#ScreenNumberDiv").append("<img src='images/ficha"+this.checkNumber+".png'  id='card'>");
      console.log(this.checkNumber);
      var timeoutId = setTimeout(function () {
      $("#card").remove();
      $("#ScreenNumberDiv").append("<img src='images/ficha"+interior+".png'  id='card'>");
        console.log(interior);
      }, 2000);
  };




SameSimbol.prototype.nextNumber = function () {
  this.checkNumber = this.screenNumber;
  this.screenNumber = this._getRandom();
  $("#card").remove();
  $("#ScreenNumberDiv").append("<img src='images/ficha"+this.screenNumber+".png'  id='card'>");
};

SameSimbol.prototype.evaluate = function () {
  if (this.screenNumber === this.checkNumber){
    if (this.clickedID === "OK") {
      this.counter ++;
      document.getElementById("pointer").innerHTML = this.counter;
      console.log ("Lo has echo bien, ya tienes " + this.counter + " puntos");
    }
    else {console.log ("Fallaste, acumulas " + this.counter + " puntos");}
  }
  else {
    if (this.clickedID === "KO"){
    this.counter ++;
    document.getElementById("pointer").innerHTML = this.counter;
    console.log ("Lo has echo bien, ya tienes " + this.counter + " puntos");}
    else {
      {console.log ("Fallaste, acumulas " + this.counter + " puntos");
    }
  }
}
};

SameSimbol.prototype.final = function () {
this.finalScore = this.counter;

 };


var newgame =new SameSimbol();
newgame.start();

var seconds = 60;
var intervalId = setInterval(function() {
  if (seconds > 0) {
    document.getElementById("counter").innerHTML = seconds;
  } else {
    document.getElementById("counter").innerHTML = "Se te acabo el tiempo";
    clearInterval(intervalId);
    newgame.final();
  }
	seconds--;
}, 1000);







$( document ).ready(function() {
  $(".button").on("click", function (e) {

    console.log("Has hecho click");
    console.log($(this).attr("id"));
    newgame.clickedID = $(this).attr("id");
    console.log("su Id es " + newgame.clickedID);
    newgame.evaluate();
    newgame.nextNumber();
  });

});
