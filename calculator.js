// Array to hold entries
let entries = []
//variable to hold numbers or '.' pressed as string
let numString = ''
//variable to represent calculator screen 
let display = document.getElementById('display')
//console.log(display)
// boolen variable to record if a result is stored
let isOldResult = false
//function to listen for click events 
function listen() {
    document.addEventListener('click', getBtnVal)
}
// start listening for clicks
listen()
//function to find the value of the button clicked and run the appropriate function
function getBtnVal() {
    let btn = event.target.value
    console.log(btn)
    //determine action based on button clicked
     //check if last button pressed was a number or '.'
    if(!isNaN(btn) || btn === '.') {
       //if so, use addNum.
       addNum(btn) 
       console.log(numString)
    //if AC pressed, clear entries array & holding string, set total to 0 and set screen to display empty string   
    }else if(btn === 'AC') {
        aClear() 
    //if CE pressed, clear string and screen    
    } else if(btn === 'CE') {
        clear() 
    // run calculation    
    } else if(btn === '=') {
        calc() 
    } else {
        storeNum(btn)
    }
}

//function to store numbers in numString
function addNum(btn) {
    //avoid multiple .'s in our number string
    if(btn === '.' && numString.includes('.')) {
        return
    // don't add multiple zeroes to the start of numString
    } else if(numString.charAt(0) === '0' && numString.length.length === 1 && btn ==='0') {
        return
    } else {
        // check if there is an old result stored, if so, clear numString and set isOldResult to false
        if(isOldResult === true) {
            numString = ''
            isOldResult = false
        }
        //add btn to numString and display on screen
        numString += btn
        display.value = numString
    }
}
//function to clear entries, numstring and set screen value to 0
function aClear () {
    numString = ''
    entries = []
    display.value = '0'
}
//function to clear numString and set screen value to 0 
function clear () {
    numString = ''
    display.value = '0'
}
//function to store current numString in entries, seperated by opperators.
function storeNum (btn) {
    //check if numString is empty and entries is empty. If so, return. 
    //This is so we dont add operators to the start of our equation.
    if(numString === '' && entries.length === 0) {
        return
    //check if numString is empty, clear the last entry in entries if it is, and push the symbol clicked.    
    } else if (numString === '') { 
        entries.length = entries.length -1
        entries.push(btn)
    //otherwise push the numString followed by the symbol pressed to entries, and clear numString    
    } else {
        entries.push(numString)
        entries.push(btn)
        numString = ''
    }
}
//function to run calculations
function calc() {
    //first push current numString to entries
    entries.push(numString)
    console.log(entries)
    //set up a variables to hold the value of the current number we are looping over in entries
    //converted to an integer
    let currentNum = Number(entries[0])
    //console.log(currentNum)
    //loop through entries
    for (var i = 0; i < entries.length; i++) {
        // set up nextNum variable
        let nxtNum = Number(entries[i + 1])
        // set variable to hold entries and check if they are operators
        let operator = entries[i]
        // check if current value of operator is +, -, x, or ÷. Perform the relevent operation on
        //currentNum with nxtNum
        if(operator == '+') {
            currentNum += nxtNum
        } else if(operator === '-') {
            currentNum -= nxtNum
        } else if(operator === '*') {
            currentNum *= nxtNum
        } else if(operator === '/') {
            currentNum /= nxtNum
        }
    } //check if current number is negative. If it is, set it to an absolute number and append a minus sign.
    if (currentNum < 0) {
        currentNumber = Math.abs(currentNumNumber) + '-'
    }   //Display the post calculation currentNum on screen.
        display.value = currentNum   
        //Set numString to a JSON string of currentNum
        numString = JSON.stringify(currentNum)
        // set isOldResult to true
        isOldResult = true  
        // clear entries
        entries = []
}

console.log(display.value)









