var num1Fld = document.getElementById('num1Fld');
var num2Fld = document.getElementById('num2Fld');
var resultFld = document.getElementById('resultFld');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function () {
    if (!num1Fld.value || !num2Fld.value) {
        alert("Please enter values in the fields");
    } else {
        var num1 = parseFloat(num1Fld.value);
        var num2 = parseFloat(num2Fld.value);
        
        var answer = 100 * (num1 / num2);
        
        resultFld.innerText = "Result: " + answer.toPrecision(4) + "%";
        event.preventDefault();
    }
    
});