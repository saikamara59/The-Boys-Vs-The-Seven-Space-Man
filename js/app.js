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


/*----------------------------------------------Functions--------------------------------*/

function updateMessage() {
messageEl.textContent= msg;
}
function updateDisplay() {
    inputEl.value = guessedCharacter.join('')
}





/* Cached Elements Refrences */

const newGameBtnEl = document.querySelector('#new-game-button')
const messageEl = document.querySelector('#message')
const tileEl = document.querySelectorAll(".key-tile")
let inputEl = document.querySelector("#input")

/* Event Listeners */

tileEl.forEach((tile) => {
    tile.addEventListener("click",(e)=>{
console.log(e.target.textContent);
inputEl.value += e.target.textContent;
console.log(inputEl)
})
})
console.log(inputEl)
// inputEl.forEach((input)=>{
//     input.addEventListener("click",tileEl)
// })

