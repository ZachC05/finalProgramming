const audio = new Audio("Ding.mp3");
var number = 0;
var score = 0;

NewChar();


function CheckGuesser(){
    let input = document.getElementById('char').value;
    if(number == 0){
        if(input == "Firefly"){
            alert('You Guessed the Character correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 1){
        if(input == "Welt" || input == "Welt Yang"){
            alert('You Guessed the Character correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 2){
        if(input == "Sunday"){
            alert('You Guessed the Character correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
    else if(number == 3){
        if(input == "Aventurine"){
            alert('You Guessed the Character correctly!');
            audio.play();
            number++;
            score++;
            NewChar();
        }
        else{
            alert('INCORRECT!');
            number++;
            NewChar();
        }
    }
}

function NewChar(){
    const image = document.getElementById("characterGuesserImg");
    document.getElementById("scoreGuesser").textContent = score + "/4";
    if(number == 0){
        image.src = 'Firefly.jpg';
    }
    if(number == 1){
        image.src = 'Welt.jpg';
    }
    if(number == 2){
        image.src = 'Sunday.jpg';
    }
    if(number == 3){
        image.src = 'Aventurine.jpg';
    }
    if(number == 4){
        image.src = 'Aventurine.jpg';
        if(score == number){
            alert("You Won!!!")
        }
    }
}