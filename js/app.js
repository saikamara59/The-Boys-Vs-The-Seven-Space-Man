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

/*----------------------------------------------Functions--------------------------------*/

function updateMessage() {
messageEl.textContent= msg;
}
function updateDisplay() {
    inputEl.value = guessedCharacter.join('')
}

function checkGuess(){
    let guess = inputEl.value 
inputEl.value = ''
let rightGuess = false
for (let i = 0;i < selectedCharacter.length; i++){
    if (selectedCharacter[i] === guess) {
        guessedCharacter[i] = guess; 
        rightGuess = true 
    
    }
    
}

if (!rightGuess) {
    if (!wrongTile.includes(guess)) {
        wrongTile.push(guess);
        maxWrong--;
    }
}
updateDisplay();

if (guessedCharacter.join('') === selectedCharacter){
    msg = ("Congrats! you have guessed the character" + selectedCharacter + "!");
    updateMessage()
} else if (maxWrong <= 0){
msg = "Game Over"
updateMessage()
} else if(rightGuess) {
    msg = "Great Job! keep going!"
updateMessage()
} else {
    msg = "Try Again Sorry!"
    updateMessage()
}
}
function handleTileClick(e) {
    console.log(e.target.textContent);
    inputEl.value = e.target.textContent;
    checkGuess();
}

function init(){
    wrongTile = []
    maxWrong = 6;
    selectedCharacter = characterNames[Math.floor(Math.random()* characterNames.length)];
    guessedCharacter = Array(selectedCharacter.length).fill('');
    updateMessage("New game started! Make your first guess.");
    updateDisplay()
}





/* Event Listeners */

tileEl.forEach((tile) => {
    tile.addEventListener("click",(e)=>{
console.log(e.target.textContent);
inputEl.value += e.target.textContent;
console.log(inputEl)
})
})
console.log(inputEl)

function disableTiles(){
    tileEl.forEach(tile => {
        tile.removeEventListener("click",handleTileClick);
    });
}



newGameBtnEl.addEventListener("click", init);

init();