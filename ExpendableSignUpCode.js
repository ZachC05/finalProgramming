function check(){
    //if invalid is ever ticked true, it will skip all and say that it is failed
    var invalid = false;
    
    //Getting the items
    var first = document.getElementById("fN").value
    var last = document.getElementById("lN").value
    var zip = document.getElementById("zC").value
    invalid = false
    alert("Invalid is " + invalid)
    //First Name Check
    if(first.length > 20){
        alert("First Name Invalid")
        invalid = true
        
    }
    
    //last Name Check
    if(last.length > 20){
        alert("Last Name Invalid")
        invalid = true;
        
    }
    alert(zip.length)
    //zip code check
    if(zip.length != 5){
        alert("Zip Code Invalid")
        invalid = true;
        
    }
    alert(zip.length)
    alert("Invalid is " + invalid)
    //if it is invalid, tell the player that it needs to be changed. Else: sumbit the form
    if(invalid == false){
        document.getElementById("confirm").innerHTML = "Form Succesfully Submitted, Welcome " + first + " " + last;
    }
    else{
        document.getElementById("confirm").innerHTML = "Invalid Information, please enter different information";
    }
  
    
}