// Array to hold entries
let entries = [];
//variable to hold numbers or '.' pressed as string
let numString = '';
//variable to represent calculator screen 
let screen = document.getElementsByClassName('screen')[0];
// boolen variable to record if a result is stored
let isOldResult = false

// start listening for clicks
onClick()
//function to listen for click events 
function onClick() {
    document.addEventListener(click, getBtnVal)
}

//function to find the value of the button clicked and run the appropriate function
function getBtnVal() {
    let btn = event.target.value;
    //determine action based on button clicked
     //check if last button pressed was a number or '.'
    if(!isNaN(btn) || btn == '.') {
       //if so, add to our, number holding, string variable.
       addNum(btn) //make this function
    //if AC pressed, clear entries array & holding string, set total to 0 and set screen to display empty string   
    }else if(btn === 'AC') {
        aclear() //make me 
    //if CE pressed, clear string and screen    
    } else if(btn === 'CE') {
        clear() //make me
    // run calculation    
    } else if(btn === '=') {
        calc() //make me
    } else {
        storeNum(btn)
    }
}

//function to store numbers in numString

//function to clear entries, numstring and set screen value to 0

//function to clear numString and set screen value to 0 

//function to store opperator button clicks in num array

//function to run calculations
//must  handle all operators
//contain a store for the current and next numbers in numArray 
//handle display of negative numbers
//change the screen value to the result of calculation
//set isOldResult to true
//clear numArray








