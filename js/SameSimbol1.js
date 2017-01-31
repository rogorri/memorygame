


var newgame = new SameSimbol();



var getrandom = function () {
  return Math.floor(Math.random()*2);
};

function SameSimbol () {
  this.points = 0;
}

//variables from SameSimbol game



// get a random number: 0 or 1

SameSimbol.prototype.start = function() {
    this.screenNumber = getRandom();
    this.checkNumber= getRandom();
    var jump = this.screenNumber;
    // I have the two numbers, now i have to structure how to show them
  document.getElementById("ScreenNumberDiv").innerHTML = this.checkNumber;
    var timeoutId = setTimeout(function () {
  document.getElementById("ScreenNumberDiv").innerHTML = this.screenNumber;
}, 1000);
};


// SameSimbol.prototype.checkAnswer = function () {
// if (this.checkNumber === this.screenNumber){
//     return true;
//   }
// else {
//   return false;}
// };
//
// SameSimbol.prototype.click = function () {
//
// }





// start the game with a random number to show in the screen

//   SameSimbol.prototype._clickOk = function (){
//           if (this.checkNumber === undefined){
//             return "Tell us if the next number is the same than thisone";
//           }
//             else if (this.checkNumber === this.screenNumber) {
//               this.points += 1;
//           return "Very Good";
//           }else{
//           return "Not your best";}
//   this.checkNumber = this.screenNumber;
//   this.screenNumber = this.getrandom();
// };
