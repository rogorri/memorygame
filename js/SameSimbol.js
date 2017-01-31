

var newgame = new SameSimbol();  //Initialitzed object newgame



function SameSimbol () {
  this.points = 0;
  this.screenNumber;
  this.checkNumber;
}

//variables from SameSimbol game

SameSimbol.prototype.getrandom = function () {
  return Math.floor(Math.random()*2);
};

// get a random number: 0 or 1

SameSimbol.prototype.start = function() {
    this.screenNumber = this.getrandom();
    this.checkNumber
    document.getElementById("ScreenNumberDiv").innerHTML = this.screenNumber;
  return this.screenNumber;
};

// start the game with a random number to show in the screen

SameSimbol.prototype.clickOk = function (){
          if (this.checkNumber === undefined){
            return "Tell us if the next number is the same than thisone";
          }
            else if (this.checkNumber === this.screenNumber) {
              this.points += 1;
          return "Very Good";
          }else{
          return "Not your best";}
  this.checkNumber = this.screenNumber;
    this.screenNumber = this.getrandom();
};











// SameSimbol.prototype.numbers = function (){
//     this.checkNumber = this.screenNumber;
//     this.screenNumber = this.getrandom();
//     return this.screenNumber;
// };
//
//
//
// SameSimbol.prototype.isright = function(){
//   if (checkNumber === screenNumber){
//     this.numbers();
//       return true;
//   } else  {
//     this.numbers();
//       return false;
// }
// };
//
//
// SameSimbol.prototype.clickOK = function (){
// if (checkNumber === 10){
//  return "Tell us if the next number is the same than thisone";
// }
//   else if (this.isright () === true) {
//   return "Very Good";
//   }
// return "Not your best";
//
// };






// SameSimbol.prototype.start = function() {
//   firstNumber = this.getrandom();
//   this.simbols.push(firstNumber);
//     return firstNumber;
// };
//
// SameSimbol.prototype.nextNumbers = function () {
//  secondNumber = this.getrandom();
//  this.simbols.push(secondNumber);
//     if (this.simbols.length > 2) {
//         this.simbols.pop();
//       }
//         };
//
// SameSimbol.prototype.isEqual = function (){
//   return (this.simbols[0] === this.simbols[1]);
// };
