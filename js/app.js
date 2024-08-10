/*-------------------------------------------Constants-----------------------------*/
const characterNames = [
    "Homelander",
    "Soldier Boy",
    "Stormfront",
    "Frenchie",
    "Black Noir",
    "A-Train",
    "Billy Butcher",
    "Starlight",
    "Queen Mae",
    "Victoria Neuman",
    "The Deep",
    "Kimiko",
    "Hughie",
    "Ryan",
    "Sage",
    "Mothers Milk"
]




/*----------------------------Variables---------------------------*/

let wrongTile = [];
let maxWrong = 6;
let selectedCharacter =  characterNames[Math.floor(Math.random()* characterNames.length)];
let guessedCharacter = [];
let msg = ""



/* Cached Elements Refrences */

const newGameBtnEl = document.querySelector('#new-game-button')
const messageEl = document.querySelector('#message')
const tileEl = document.querySelectorAll(".key-tile")
let inputEl = document.querySelector("#input")
/*----------------------------------------------Functions--------------------------------*/

function updateMessage() {
messageEl.textContent= msg;
}
function updateDisplay() {
    inputEl.value = guessedCharacter.join('') // shows the guessed letters 
}


function checkGuess(){
    let guess = inputEl.value.toLowerCase(); // changes the guess to lowercase
inputEl.value = ''; // Clears the input after getting the guess
let rightGuess = false;
for (let i = 0;i < selectedCharacter.length; i++){
    if (selectedCharacter[i].toLowerCase() === guess) {
        guessedCharacter[i] = selectedCharacter[i]; // update guessed character 
        rightGuess = true 
    } // check if the guess matches any charachter in the selected character
    
}
// Handles incorect guesses
if (!rightGuess) {
    if (!wrongTile.includes(guess)) {
        wrongTile.push(guess);
        maxWrong--; // decreases the number of wrong attempts
    }
}
updateDisplay();



if (guessedCharacter.join('') === selectedCharacter){
    msg = `Congrats You Have Won! you have guessed the character ${selectedCharacter}!`;
     // shows win message
} else if (maxWrong <= 0){
msg = `Game Over! the character was ${selectedCharacter}!`; 
 // shows game over msg
} else if(rightGuess) {
    msg = "Great Job! keep it going!";
} else {
    msg = " Wrong Letter Try Again!";
    
}
updateMessage();
}
function handleTileClick(e) {
    const guess = e.target.textContent.toLowerCase();
    checkGuess(guess);
}

function init() {
    wrongTile = []; // clears the array of wrong guesses
    maxWrong = 6;
    selectedCharacter = characterNames[Math.floor(Math.random() * characterNames.length)];
    guessedCharacter = selectedCharacter.split('').map(character => {
        if (character === ' ') {
            return ' ';
        } else if (!/[a-zA-Z]/.test(character)) {
            return character;
        }else {
            return '_'
        }
    });
    msg = "New game started! Make Your First Guess Be Aware You Only Have 6 Guesses.";
    updateMessage();
    updateDisplay();
    console.log(selectedCharacter);
}





/* Event Listeners */

tileEl.forEach((tile) => {
    tile.addEventListener("click",(e) => {
const guess = e.target.textContent.toLowerCase();  // gets the letter from the clicked tile
inputEl.value = guess;
checkGuess(guess);
console.log(maxWrong)
})
})



newGameBtnEl.addEventListener("click",init);
init();

