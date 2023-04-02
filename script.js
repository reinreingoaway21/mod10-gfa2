function Addition(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}   
function Subtraction(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}   

function Multiplication(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}   

function Division(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}   

function Modulus(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 % num2;
    document.getElementById("result").innerHTML = "The remainder/modulus of " + num1 + " and " + num2 + " is " + result + ".";
}   