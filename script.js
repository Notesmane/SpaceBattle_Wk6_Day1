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
// hull is the same as hit points. If hull reaches 0or less, the ship is destroyed
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
    getAccuracy () {
        return this.accuracy
    }
    getHull () {
        return this.hull
    }
    getFirePower () {
        return this.firepower
    }
    hullDown (num) {
        this.hull -= num
    }
};

let randomNumber = Math.random();

const humanShip = new SpaceShip(20, 5, .7); 
const alienShip = new SpaceShip( Math.floor(Math.random()*4)+8, Math.random()*2 + 2, Math.random()*0.2 + 0.6)


humanShip.hullDown(alienShip.firepower);
alienShip.hullDown(humanShip.firepower);


// let alienHorde = [alienShip, alienShip, alienShip, alienShip, alienShip, alienShip];

//^ ======================================= gets random number of alien ships
// gets a random number between 1 and 6 for the possible amount of alien ships
function getRandomNumber() { 
    const randomDecimal = Math.random();
    const scaledNumber = randomDecimal * 5 + 1;
    const roundedNumber = Math.round(scaledNumber);
    return roundedNumber;
  }
  const numAlienShips = getRandomNumber();
  console.log(`The number of Alien ships you will face is: ${numAlienShips}`);


//* Game intro
// 1. should explain the rules of the game in a series of strings
// 2. then it should prompt the player to enter his/her name
// 3. then it should prompt user to attack the alien ship, then goto Attack mechanism STEP1

alert("Welcome to 'Space Battle'!");
// alert("Where you will have to fight the alien horde to save Earth from the invading Aliens."); //// domination instead? invaders?
// alert("Your ship is well equipped and has a great crew! It also has a very strong forcefield and hull.");
// alert("You have some of the best marksmen in the galaxy so your firing accuracy is remarkable,");
// alert("And your torpedos are super strong compared to other species.");
// alert("The aliens ships are weaker, arent the best with their aim and have less effective torpedos.");
// alert("(Not sure how this is possible considering they traveled from accross the galaxy but...)");
alert("Attack the first ship if you dare, and start the SPACE BATTLE!");
promptFirstAttack();



//// let start = prompt('Do you want to attack the alien ship? (Type \'yes\' or \'no\')');
//// if (start === "yes") {
////     document.getElementById("attack");
//// };

function promptFirstAttack() {
    let answer = prompt("Do you want to attack the first alien ship? (Type yes or no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        // User wants to attack the alien ship
        console.log("\u001b[36m========== You're about to wage war... prepare for battle! ==========\u001b[0m");
        humansAttack();
        // Add your logic for the attack here
      } else if (answer === "no") {
        // User does not want to attack the alien ship
        console.log("You chose not to attack. COWARD! ");
        alert("The alien race has destroyed your ship and taken over the Earth.");
        gameOver();
        // Add your logic for not attacking here
      } else {
        // Invalid response
        console.log("\u001b[31mInvalid response. Please answer with 'yes' or 'no'.\u001b[0m");
        promptFirstAttack();
     }
}

function promptNextAttack() {
    let answer = prompt("Do you want to attack the next alien ship? (Type yes or no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        // User wants to attack the alien ship
        console.log("========== Prepare for battle! ==========");
        humansAttack();
        // Add your logic for the attack here
      } else if (answer === "no") {
        // User does not want to attack the alien ship
        console.log("Seriously?? You retreated? COWARD! ");
        alert("The alien Race has destroyed your ship and taken over the Earth.")
        gameOver();
        // Add your logic for not attacking here
      } else {
        // Invalid response
        console.log("\u001b[31mInvalid response. Please answer with 'yes' or 'no'.\u001b[0m");
        promptNextAttack();
     }
}

//// let start = prompt (readyToAttack(qestion));

//^ ======================================================================== This is the end of the Game Intro (I think lol)


// console.log(alienHorde[2]);

//* Attack mechanism: function, method or loop?
// // when humanShip fires there should be a string logged "You fired on the alien ship."

function fightCounter() {
    for (let counter = 1; counter <= numAlienShips; counter++) {
        if (counter === numAlienShips) {
            winner();
        }
        else {
        humansAttack();
        }
    }
}

    //^ ======================================= humans attack aliens
    function humansAttack() {
        setTimeout(() => { console.log("You fired on the alien ship.");}, 3000);
        if (randomNumber <= humanShip.accuracy) {
            alienShip.hullDown(humanShip.firepower)
            // console.log(alienShip.hull);
            setTimeout(() => { console.log("\u001b[32mGreat Job! You hit the alien ship!\u001b[0m");}, 6000); {
                if (alienShip.hull <= 0) {
                    setTimeout(() => { console.log("\u001b[32mKaboooooom... you destroyed the alien ship!\u001b[0m");}, 9000);
                    setTimeout(() => { promptNextAttack();}, 12000);
                    randomNumber = Math.random();
                }
                else { 
                    setTimeout(() => { console.log(`The aliens hull capacity is now at: ${alienShip.hull}`);}, 9000);
                    setTimeout(() => { aliensAttack();}, 9000);
                    randomNumber = Math.random();
                } 
                
                // console.log("Alien Hull Power is now:" humanShip.firepower - alienShip.hull);
            } 
        } else {
            setTimeout(() => { console.log("\u001b[33mSo close, but you missed the alien ship!\u001b[0m");}, 9000);
            setTimeout(() => { aliensAttack();}, 15000);
            randomNumber = Math.random();
        } 
        
    }
    
    //^ ======================================= aliens attack humans
    function aliensAttack() {
        setTimeout(() => { console.log("The alien ship fired on you.");}, 3000); 
        if (randomNumber <= alienShip.accuracy) {
            humanShip.hullDown(alienShip.firepower)
            setTimeout(() => { console.log("\u001b[33mOuchie... the alien ship hit you.\u001b[0m"); }, 6000); {
                if (humanShip.hull <= 0) {
                    console.log("\u001b[31mYou have been Destroyed!\u001b[0m");
                    gameOver();
                    randomNumber = Math.random();
                }
            }
            setTimeout(() => { console.log(`Your hull capacity is now at: ${humanShip.hull}`); }, 9000); 
            setTimeout(() => { humansAttack(); }, 9000); 
            randomNumber = Math.random();
        } else {
            setTimeout(() => { console.log("\u001b[32mGreat manuever, the alien ship missed you\u001b[0m!"); }, 6000); 
            setTimeout(() => { humansAttack(); }, 6000); 
            randomNumber = Math.random();
        }
    }
    
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
    
    //^ ======================================================================== This is the end of the Attack Mechanism

    
//* Game Over Mechanism
// if the human ship is destroyed, then a "game over" string needs to be logged
// 1. log gameOver
    
function gameOver() {
    console.log("Game Over!"); 
    setTimeout(() => { playAgain();}, 4000);
}

function winner() {
    console.log("HORRRAAAYY!!!! You have destroyed all of the invading ships, and saved Earth!")
    playAgain();
}

function playAgain() {
    let answer = prompt("Do you want to play agian? (Type yes or no)");
    answer = answer.toLowerCase();
    if (answer === "yes") {
        // User wants to attack the alien ship
        console.log("Prepare for battle!");
        humansAttack();
        // Add your logic for the attack here
    } else if (answer === "no") {
        // User does not want to attack the alien ship
        console.log("\u001b[32mOk.. Have a nice day!\u001b[0m");
        // Add your logic for not attacking here
    } else {
        // Invalid response
        console.log("\u001b[31Invalid response. Please answer with 'yes' or 'no'.\u001b[0");
    }
}
    
// 2. prompt user playAgain
// 3. if yes then goto gameIntro
// 4. if no then do nothing???


//^ ======================================================================== This is the end of the Game Over Mechanism

//* Human Ship attack
// human ship attacks alien ship

// there needs to be a hit or no hit outcome, 
// there needs to then be an alien hull subtraction based on whether it was hit or not
// then the loop is broken and it goes to the "Next Alien?" string
// if the human ship was not destroyed, then the alienShip gets to attack the humanship again
// then the firepower amount needs to be subtracted from the human hull
// then the loop starts over, until one of the ships is destroyed
// if the human player decides to fight another alien then the loop starts back over (iterating to a max of 6 total fights)

//* Next Battle mechanism: function, method or loop?
// for (let i = 0; i < alienShipNumber.length; i++) {
//     if ()
// }


// 1. access next alien ship
// 2. boolean: is next alienShip between alienship 1-6?
// 3. if yes, prompt user nextShip then goto STEP6
// 5. log humanCoward then break loop and goto GameOver STEP1
// 6. break loop then goto Attack mechanism STEP1 
// 7. if user says yes, then goto gameIntro
// 8. log aliensDefeated, break loop then goto GameOver STEP1
//// 5. if yes and user wants to fight another alien ship then goto STEP7
//^ ======================================================================== This is the end of the Next Battle Mechanism
    
    
    
//* Console logged strings
    // // when alienShip fires there should be a string logged "INCOMING!! The alien ship fired at you!"
// const alienFired = "INCOMING!! The alien ship fired at you!";
// console.log(alienFired);
// // if the alien ship was hit then there needs to be an "alien ship hit" string logged
// const alienShipHit = "Great Job! You hit the alien ship!";
// console.log(alienShipHit);
// // if the alien ship was not hit then there needs to be an "alien ship missed" string logged
// const alienShipMissed = "So close, but you missed the alien ship!";
// console.log(alienShipMissed);
// // then if the alien ship was destroyed, an "alien ship destroyed" string needs to be logged
// const alienShipDestroyed = "Kaboooooom... you destroyed the alien ship!";
// console.log(alienShipDestroyed);
// // if the human ship is hit, then a "you were hit" string needs to be logged
// const humanShipHit = "Ouchie... the alien ship hit you.";
// console.log(humanShipHit);
// // if the human ship is not hit, then a "the alien ship missed" string needs to be logged
// const humanShipMissed = "Great manuever, the alien ship missed you!";
// console.log(humanShipMissed);
// const humanCoward = "ON-SCREEN MESSAGE RECIEVED AND TRANSLATED: We always heard you Humans were COWARDS - no honor!"
// console.log(humanCoward);
// // if the alien ship is destroyed then it goes to the "Next Alien?" string
// const nextShip = "Do you want to battle the next alien ship?"
// console.log(nextShip);
// // if the human ship is destroyed a "your ship has been destroyed" string should log
// const humanShipDestroyed = "You have been Destroyed!";
// console.log(humanShipDestroyed);
// // if all of the aliens are defeated, log the string "AMAZING! You have defeated the alien hoard!"
// const aliensDefeated = "AMAZING! You have defeated the alien hoard!"
// console.log(aliensDefeated);
// // once the game is over then ask the user "Do you want to play Space Battle again?
// const playAgain = "Do you want to play 'Space Battle' again?"
// console.log(playAgain);
