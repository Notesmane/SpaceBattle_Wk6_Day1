
//! Problem Source: https://perscholas.instructure.com/courses/1513/pages/mini-project-slash-sba-save-the-universe?module_item_id=965412

//^ A game round would look like this:
// You attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc
// If you destroy the ship, you have the option to attack the next ship or to retreat
// If you retreat, the game is over, perhaps leaving the game open for further developments or options
// You win the game if you destroy all of the aliens
// You lose the game if you are destroyed

//^ Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target
// Your spaceship, the USS Assembly should have the following properties:
//* Human ship properties
// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:
//* Alien ship properties
// hull - between 3 and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// You could be battling six alien ships each with unique values.
//^ ======================================================================== This is the end of the given instructions

class SpaceShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

//* Alien random properties
const alienHull = Math.floor(Math.random()*3)+3;
// console.log(alienHull);
const alienPower = Math.random()*2 + 2;
// console.log(alienFire.toFixed(2));
const alienAccuracy = Math.random()*0.2 + 0.6;
// console.log(alienAccuracy.toFixed(2));


const humanShip = new SpaceShip(20, 5, .7);
console.log(humanShip);
const alienShip = new SpaceShip(alienHull, alienPower, alienAccuracy);
console.log(alienShip);


//* Game intro
// 1. should explain the rules of the game in a series of strings
// 2. then it should prompt the player to enter his/her name
// 3. then it should prompt user to attack the alien ship, then goto Attack mechanism STEP1

//* Attack mechanism: function, method or loop?
// 1. humanAttacks alienShip log humanFired
// 2. boolean: did humaShip hit alienShip, yes or no?
// 3. if yes, subtract humanFire from alienHull, log alienShipHit, goto STEP5
// 4. if no, log alienShipMissed goto STEP5
// 5. if alienHull is 0 or less then log alienShipDestroyed break loop and goto NextBattle STEP1
// 6. if alienHull is greater than 0 goto STEP7
// 7. alienAttacks humaShip
// 8. boolean: did alienShip hit humanShip, if no goto STEP1
// 7. if yes, subtract alienFire from humanHull
// 8. if humanHull is 0 or less break loop and log humanShipDestroyed 
// 9. if humanHull is greater than 0 goto STEP1
// 10. 

//* Next Battle mechanism: function, method or loop?
// 1. access next alien ship
// 2. boolean: is next alienShip between alienship 1-6?
// 3. if yes, prompt user nextShip if yes then goto STEP6
// 4. if no, then goto STEP7
// 5. log humanCoward then break loop and goto GameOver STEP1
// 6. break loop then goto Attack mechanism STEP1 
// 7. if user says yes, then goto gameIntro
// 8. log aliensDefeated, break loop then goto GameOver STEP1
//// 5. if yes and user wants to fight another alien ship then goto STEP7


//* Game Over Mechanism
// 1. log gameOver
// 2. prompt user playAgain
// 3. if yes then goto gameIntro
// 4. if no then do nothing???



//* Human Ship attack
// human ship attacks alien ship

// there needs to be a hit or no hit outcome, 
// there needs to then be an alien hull subtraction based on whether it was hit or not
// then the loop is broken and it goes to the "Next Alien?" string
// if the human ship was not destroyed, then the alienShip gets to attack the humanship again
// then the firepower amount needs to be subtracted from the human hull
// then the loop starts over, until one of the ships is destroyed
// if the human player decides to fight another alien then the loop starts back over (iterating to a max of 6 total fights)


//* Console logged strings
// when alienShip fires there should be a string logged "INCOMING!! The alien ship fired at you!"
const alienFired = "INCOMING!! The alien ship fired at you!";
console.log(alienFired);
// if the alien ship was hit then there needs to be an "alien ship hit" string logged
const alienShipHit = "Great Job! You hit the alien ship!";
console.log(alienShipHit);
// if the alien ship was not hit then there needs to be an "alien ship missed" string logged
const alienShipMissed = "So close, but you missed the alien ship!";
console.log(alienShipMissed);
// then if the alien ship was destroyed, an "alien ship destroyed" string needs to be logged
const alienShipDestroyed = "Kaboooooom... you destroyed the alien ship!";
console.log(alienShipDestroyed);
// when humanShip fires there should be a string logged "You fired on the alien ship."
const humanFired = "You fired on the alien ship.";
console.log(humanFired);
// if the human ship is hit, then a "you were hit" string needs to be logged
const humanShipHit = "Ouchie... the alien ship hit you.";
console.log(humanShipHit);
// if the human ship is not hit, then a "the alien ship missed" string needs to be logged
const humanShipMissed = "Great manuever, the alien ship missed you!";
console.log(humanShipMissed);
const humanCoward = "ON-SCREEN MESSAGE RECIEVED AND TRANSLATED: We always heard you Humans were COWARDS - no honor!"
console.log(humanCoward);
// if the alien ship is destroyed then it goes to the "Next Alien?" string
const nextShip = "Do you want to battle the next alien ship?"
console.log(nextShip);
// if the human ship is destroyed a "your ship has been destroyed" string should log
const humanShipDestroyed = "You have been Destroyed!";
console.log(humanShipDestroyed);
// if all of the aliens are defeated, log the string "AMAZING! You have defeated the alien hoard!"
const aliensDefeated = "AMAZING! You have defeated the alien hoard!"
console.log(aliensDefeated);
// if the human ship is destroyed, then a "game over" string needs to be logged
const gameOver = "Game Over!"
console.log(gameOver);
// once the game is over then ask the user "Do you want to play Space Battle again?
const playAgain = "Do you want to play 'Space Battle' again?"
console.log(playAgain);







//& below is button functionality grabbed from event-practice script page, it didnt have a style page
// const propBtn = document.getElementById('prop-btn');
// const methodBtn = document.querySelector('#method-btn');

// // registers a function to the onClick event
// propBtn.onclick = print;

// function print() {
//     console.log('Button was clicked!');
// }

// // the method approach that will register a function to the selected element
// // ('click' = event listener, print = function we want to call)
// methodBtn.addEventListener('click', print);

// methodBtn.addEventListener('mousedown', function() {
//     console.log('Mouse Down Event');
// });

// methodBtn.addEventListener('mousemove', function() {
//     console.log('Mouse is moving...');
// });

// methodBtn.addEventListener('mouseup', function() {
//     console.log('Mouse Up Event');
// });
















// const alienShip2 = new BattleShip(alienHull, alienFire, alienAccuracy);
// const alienShip3 = new BattleShip(alienHull, alienFire, alienAccuracy);
// const alienShip4 = new BattleShip(alienHull, alienFire, alienAccuracy);
// const alienShip5 = new BattleShip(alienHull, alienFire, alienAccuracy);
// const alienShip6 = new BattleShip(alienHull, alienFire, alienAccuracy);
// console.log(alienShip2);
// console.log(alienShip3);
// console.log(alienShip4);
// console.log(alienShip5);
// console.log(alienShip6);


// const alienHull = (
//     function getRandomArbitrary(3, 5) {
//         return Math.random() * (5 - 3) + 3;
//       }

// );


