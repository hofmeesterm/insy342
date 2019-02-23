//INSY 341 Assignment 1 JavaScript code

// QUESTION 1 & 2
// Help code source: https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits/7784642
function Separate5Digits(x){
    y = [];

while (x) {
    y.push(x % 10);
    x = Math.floor(x/10);}

    document.write(y.reverse().join('-'));
}


// QUESTION 3
function separateDigitsGeneric (x,seperator){
    y = [];

while (x) {
    y.push(x % 10);
    x = Math.floor(x/10);}

    document.write(y.reverse().join(seperator));
}   


// QUESTION 4
function makeBox(length,height){
    for (i=0 ; i < length ; i ++) {
        document.write("*") }
        for(j=0 ; j < height-2 ; j++ ){
          document.write("<br>")
        document.write("*"+"&nbsp;".repeat(length*1.5)+"*") }
      document.write("<br>")
      for (i=0; i < length ; i++){
        document.write("*") }
}


function makeBox1(length,height){
    for (i=0 ; i < length ; i ++) {
        document.write("*") }
        for(j=0 ; j < height-2 ; j++ ){
          document.write("<br>")
        document.write("*"+"*".padStart(length-1, "#")) }
      document.write("<br>")
      for (i=0; i < length ; i++){
        document.write("*") }
}


// QUESTION 5
function makeDiamond(length, char1, char2){
    document.write(char1+"<br>");
    for(i=0; i < length-2; i++){
        document.write(char1.repeat(2)+"<br>");
    }
    document.write(char1+"<br>");

}


// Question 6
function middle(word){
    wordLength = word.length;
    wordMiddle = word.charAt(wordLength/2);
    wordMiddle1 = word.charAt(wordLength/2-1)  
    if(wordLength % 2 != 0){
        document.write(wordMiddle);
    }
    else{
        document.write(wordMiddle1 + wordMiddle);
    }
    
}


//Question 7
function verify(){
    password = document.getElementById("pw").value;

    if(password.length < 8){
        alert("The password should be longer than 8 characters")
    }
    else if (password.match(/\d/g) == null){
        alert("Password must contain at least one number")
    }
    else if (password.match(/[A-Z]/g) == null){
        alert("Password must contain at least one uppercase letter")
    }
    else if (password.match(/[a-z]/g) == null){
        alert("Password must contain at least one lowercase letter")
    }
    else{
        alert("Secure password")
    }
}


// QUESTION 8
// NOTE: I left the second line inside my function commented out, but if you run it you will see that the initial array is not modified.
function removeNegatives (myArray){
    document.write(myArray.filter(function(myArray) {return myArray > -1}));
    //document.write("<br>" + myArray);
}