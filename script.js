// Variable Declaration for DOM

const docBody = document.getElementById('body')
const buttonContainer = document.getElementsByClassName('buttons')
const button = document.getElementById('btn')
const feed = document.getElementById('feedback')
const showChance = document.getElementById('chance')

const urlParams = new URLSearchParams(window.location.search);
const difficultyLevel = urlParams.get('difficultyLevel');

console.log(difficultyLevel)

let level;
let defaultChances

switch (difficultyLevel) {
    case 'easy':
        level = 10
        defaultChances = 5
        break;
    case 'medium':
        level = 100
        defaultChances = 10
        break;
    case 'hard':
        level = 1000 
        defaultChances = 15
        break;
    default:
        break;
}

if(difficultyLevel == 'easy') {
    document.getElementById('difficultyLevel').innerHTML += '10'
} else if (difficultyLevel == 'medium') {
    document.getElementById('difficultyLevel').innerHTML += '100'
} else if (difficultyLevel == 'hard') {
    document.getElementById('difficultyLevel').innerHTML += '1000'
}



// Function to take username
function userName() {
    let user = prompt("Enter your name");

    if (user != null) {
        document.getElementById("username").innerHTML = "Hello " + user;
    }
}

// Send back to home.html
function goHome() {
    document.location.href = "index.html"
}

// Function to reset/reload page
function resetPage() {
    document.location.reload(true);
}

let randNumber = Math.floor(Math.random() * level) + 1;
let chance = defaultChances;
console.log('Random Number: ' + randNumber)


// function to check user number with random number
function check() {
    let userInput = document.getElementById('userInput').value;
    if (userInput != '') {
        if (userInput == randNumber) {
            // console.log("You gueesd it right" + randNumber)
            feed.innerHTML = "Congratulations! You guessed it correct"
            button.disabled = true;
            let won = confirm("You Won, Wanna play again?")
            if(won) {
                document.location.reload(true)
            }
        } else if (userInput > randNumber) {
            // console.log("number too high")
            feed.innerHTML = "Number too high"
        } else if (userInput < randNumber) {
            // console.log("number too low")
            feed.innerHTML = "Number too low"
        } else {
            console.log("something went wrong")
        }
        chance--;
    } else if (userInput == ''){
        console.log("empty")
        feed.innerHTML = "Please enter a number"
    }
    if (chance == 0) {
        // console.log("You ran out of chances")
        feed.innerHTML = "You ran out of chances"
        alert("Please restart the game!")
        document.location.reload(true);
    }
    console.log("Chance: ", chance)
    showChance.innerHTML = chance

}
console.log("Chance: ", chance)
showChance.innerHTML = chance





// Debug Function 
function debug(){
    console.log()
}
