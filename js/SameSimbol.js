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
      this.counter +=10;
      document.getElementById("pointer").innerHTML = this.counter;

      $("#welldone").append("<img src='images/green-cloud.png'>");
      $("#welldone img").fadeOut(1000);
      console.log ("Lo has echo bien, ya tienes " + this.counter + " puntos");
    }
    else {
      this.counter -=10;
      document.getElementById("pointer").innerHTML = this.counter;

      $("#tryagain").append("<img src='images/red-cloud.png'>");
      $("#tryagain img").fadeOut(1000);
      console.log ("Fallaste, acumulas " + this.counter + " puntos");}
  }
  else {
    if (this.clickedID === "KO"){
    this.counter +=10;
    document.getElementById("pointer").innerHTML = this.counter;

    $("#welldone").append("<img src='images/green-cloud.png'>");
    $("#welldone img").fadeOut(1000);
    console.log ("Lo has echo bien, ya tienes " + this.counter + " puntos");}
    else {
      this.counter -=10;
      document.getElementById("pointer").innerHTML = this.counter;

      $("#tryagain").append("<img src='images/red-cloud.png'>");
      $("#tryagain img").fadeOut(1000);
      {console.log ("Fallaste, acumulas " + this.counter + " puntos");
    }
  }
}
};

SameSimbol.prototype.close = function () {
this.finalScore = this.counter;
document.getElementById("myNav").style.width = "100%";
document.getElementById("totalscore").innerHTML = this.finalScore;
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
    newgame.close();
  }
	seconds--;
}, 1000);





$( document ).ready(function() {
  $(".button").on("click", function (e) {
    newgame.clickedID = $(this).attr("id");
    newgame.evaluate();
    newgame.nextNumber();
  });

});
