
function chakNumber (num) {
    if  (num > 0) {        
        alert("Positive number.");   
    } else if(num < 0){
        alert("Negative number.");
    } else {
        alert("zero.");
    }

}

function getinput() {
    let input = prompt("Enter a number:");
    let number = parseInt(input);
    if (isNaN(number)) {
        alert("Please enter a valid number.");
    } else {
        chakNumber (number);
    }
}