
function sum(){
    var op1 = parseInt(document.getElementById("operand1").value);
    var op2 = parseInt(document.getElementById("operand2").value);
    var sum = parseInt(op1 + op2);
    document.getElementById("output").value = op1 + " + " + op2 + " = " + sum ;

}
function mul(){
    var op1 = document.getElementById("operand1").value;
    var op2 = document.getElementById("operand2").value;
    var mul = op1 * op2;
    document.getElementById("output").value = op1 + " * "+ op2 +" = "+ mul;

}
function div(){
    var op1 = document.getElementById("operand1").value;
    var op2 = document.getElementById("operand2").value;
    var div = op1 / op2;
    document.getElementById("output").value = op1 + " / " + op2 + " = " + div;

}


function clearit(){
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "" ;
    document.getElementById("output").value = "";
}
