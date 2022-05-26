const slider = document.getElementById('slide')
const docBody = document.getElementById('body')
const buttonContainer = document.getElementsByClassName('buttons')

const button = document.getElementById('btn')
const feed = document.getElementById('feedback')
const showChance = document.getElementById('chance')

function userName() {
    let user = prompt("Enter your name");

    if (user != null) {
        document.getElementById("username").innerHTML = "Hello " + user;
    }
}

function resetPage() {
    document.location.reload(true);
}



let randNumber = Math.floor(Math.random() * 100) + 1;
let chance = 10;
console.log(randNumber)



function check() {
    let userInput = document.getElementById('userInput').value;
    if (userInput != null) {
        if (userInput == randNumber) {
            // console.log("You gueesd it right" + randNumber)
            feed.innerHTML = "Congratulations! You guessed it correct"
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
    }
    if(chance == 0){
        // console.log("You ran out of chances")
        feed.innerHTML = "You ran out of chances"
        alert("Please restart the game!")
        document.location.reload(true);
    }
    console.log(chance)
    showChance.innerHTML = chance
    
}
console.log(chance)
showChance.innerHTML = chance


//DarkMode js


slider.addEventListener('click', () => {
    // console.log('button clicked')
    if(docBody.classList.contains('light')){
        docBody.classList.add('dark')
        docBody.classList.remove('light')
        buttonContainer
        
    } 
    else if(docBody.classList.contains('dark')){
        docBody.classList.add('light')
        docBody.classList.remove('dark')
    }
    
    
})





