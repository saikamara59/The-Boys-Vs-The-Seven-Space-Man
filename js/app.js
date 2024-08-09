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
let guessedCharacter = Array(selectedCharacter.length).fill('')




/* Cached Elements Refrences */

const newGameBtnEl = document.querySelector('#new-game-button')
const messageEl = document.querySelector('#message')
const tileEl = document.querySelectorAll(".key-tile")
let inputEl = document.querySelector("#input")
const hangmanImageEl = document.querySelector('hangman-image')
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
updateHangmanImage()

if (guessedCharacter.join('') === selectedCharacter){
    msg = `Congrats! you have guessed the character ${selectedCharacter}!`;
    updateMessage(msg); // shows win message
} else if (maxWrong <= 0){
msg = `Game Over! the character was ${selectedCharacter}!`; 
updateMessage(msg) // shows game over msg
} else if(rightGuess) {
    msg = "Great Job! keep it going!"
updateMessage(msg)
} else {
    msg = "Try Again!";
    updateMessage(msg)
}
}
function handleTileClick(e) {
    const guess = e.target.textContent.toLowerCase();
    inputEl.value = guess;
    checkGuess();
}

function init() {
    wrongTile = []; // clears the array of wrong guesses
    maxWrong = 6;
    selectedCharacter = characterNames[Math.floor(Math.random() * characterNames.length)];
    guessedCharacter = Array(selectedCharacter.length).fill('_');
    updateMessage("New game started! Make your first guess.");
    updateDisplay()
}





/* Event Listeners */

tileEl.forEach((tile) => {
    tile.addEventListener("click",(e)=>{
const guess = e.target.textContent.toLowerCase();
inputEl.value = guess;
checkGuess(guess);
})
})
// console.log(inputEl)

// function disableTiles(){
//     tileEl.forEach(tile => {
//         tile.removeEventListener("click",handleTileClick);
//     });
// }



newGameBtnEl.addEventListener("click",init);
init();