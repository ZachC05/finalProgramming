
var hints = 3;

document.getElementById('guess-button').addEventListener('click', CheckGame())



function check(){
    let input = document.getElementById('guess-input').value;

    
    
    if(input == 'defenestration'){
        alert('You Guessed the password correctly!')
    }
    else{
        
        alert('Try Again!')
        if(hints == 3){
            document.getElementById('Hint').textContent = "A word you wonder why it exists. " + hints + ' left';
            
        }
        else if(hints == 2){
            document.getElementById('Hint').textContent = "Papyrus from Undertale did this when you were haning out with Undyne " + hints + ' left';
            
        } else if(hints == 1){
            document.getElementById('Hint').textContent = "The act of throwing someone out of a window " + hints + ' left';
            
        }
        else{
            document.getElementById('Hint').textContent = "Reminder to type in all lowercases";
        }
        hints--;
        
    }
}