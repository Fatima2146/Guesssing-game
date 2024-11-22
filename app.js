let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

checkButton.onclick = () => {
 const guess = Number(guessInput.value);

 if (guess<1 || guess>100) {
    result.textContent = 'Enter a number between 1 to 100';
    result.style.color= "red";
 }
 else if (guess === randomNumber){
    result.textContent = "Congrats!! you won..";
    result.style.color = "purple";
    checkButton.disabled = true;
    restart.style.display = "block";
 }
else{
    result.textContent = guess < randomNumber? "to low try again!!" : "to high try again";
    result.style.color = "blue";
}
}
restart.onclick = () => {
randomNumber = Math.floor(Math.random() * 100) +1;
result.textContent = "";
checkButton.disabled = false;
restart.style.display = "none";
guessInput.focus();
}
  