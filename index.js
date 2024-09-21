const display = document.getElementById("display");

function appendToDisplay(key){
    display.value += key;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(err){
        display.value = "Error";
    }
}