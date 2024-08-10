\* created a list of arrays of which characters are going to be in Hangman Game.

- created div classes called keyboard, key-row, key-tile of which are going to contain letters mocking the keyboard look a like. / my squad helped me and megan refrence also helped

- created an event listener to target each letter on the keyboard to make it click, used the for each method.(line 53)
- used target value and text content to get the tiles to show on the input (was a big blocker)
- in order to get more then one letter to pop up in the input element i had add a + into line 55
- created a updateMessage function inside the function i want the message element to display words .
- created updateDisplay function for the guessed characters to be able to be inside of the input, used the join method to be able to put the character inside the input.

* also created a checkGuess function inside of the function i set the guess to the lowercase version of the inputEl value , and then i looped through it and created a rightGuess variable to equal false

* at the end i called the updateDisplay function
* used split method , math.random method ,join method, used the length method , used .value method and the includes method
* created another function called handleTileClick to get the guess from the clicked tile aka key-tile

* towards the end I created a init function to initialize game
* used MDN for reference , my notes from class and the Squad and classmates to help me clean up a little.
