// console.log("hello World")

function getValue(num){
    var input = document.getElementById("input");
    // console.log("input" , input)
    input.value += num;
}

function equalto(){
    var input = document.getElementById("input");
    var result = eval(input.value)
    input.value = result; 
}

function allClear(){
    var input = document.getElementById("input");
    input.value = ""
}

function singldlte(){
    var input = document.getElementById("input");
    var editvalue = input.value.slice(0 , -1);
    input.value = editvalue;
}