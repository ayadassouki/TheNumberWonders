
var name= prompt("Enter your name:");
var mesg1 = document.getElementById("message1"); 
var mesg2 = document.getElementById("message2") ;
var mesg3 = document.getElementById("message3") ;
var mesg4 = document.getElementById("message4") ;
var answer = Math.floor(Math.random() * 100) + 1;
var number_of_attempts= parseInt(prompt("Enter at number of attempts you would like"));
var number_of_guesses= 0;

function game() {
    

    var user_guess = document.getElementById("guess").value;

    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    }

    else {
    
        number_of_guesses=number_of_guesses+1;
        if (user_guess < answer) {
            mesg1.innerHTML = "That's Too Low!"
            mesg2.innerHTML = "No. Of Guesses : " + number_of_guesses;
            mesg3.innerHTML= "No. Of Attempts: " + number_of_attempts;
            
        } else if (user_guess > answer) {
            mesg1.innerHTML = "That's Too High!"
            mesg2.innerHTML = "Number Of Guesses : " + number_of_guesses;
            mesg3.innerHTML= "No. Of Attempts: " + number_of_attempts;
            
        } 

    
    
}

 if (number_of_guesses >= number_of_attempts){
    alert("Nice Try. You did not guess the number correctly.");
    mesg4.innerHTML = "The Number was " +  answer + ". You did not guess it in " + " "+ number_of_guesses + " attempts. Restart to play again";
    document.getElementById("my_btn").setAttribute("disabled","true")
    return answer;

}
else if (user_guess == answer){
    alert("Congratulations!!!");
mesg4.innerHTML = "Congrats! The Number was " +  answer + ". You guessed it in " + " "+ number_of_guesses + " attempts. Restart to play again.";
document.getElementById("my_btn").setAttribute("disabled","true")
}
}
function restart(){
   location.reload()
}


