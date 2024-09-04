// Question N0 01
var x = 10
document.write("Number OF A is ", x +"<br />");
++x;
document.write("Number OF A is ", x +"<br />");
x++
document.write("Number OF A is ", x +"<br />");
--x;
document.write("Number OF A is ", x +"<br />");
x--;
document.write("Number OF A is ", x +"<br />");

// Question N0 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("result = ", result + "<br />"); 

document.write("a = ", a + "<br />");
document.write("b = ", b + "<br />");

// Output explanation:
// At the start:
// Initial Values:
// a = 2
// b = 1
// Step 1: --a;
// --a means pre-decrement a, so a is decreased by 1 before it is used.
// Value of a after this operation: a = 1
// Step 2: --a - --b;
// --a is now 1, so no further change.
// --b means pre-decrement b, so b is decreased by 1 before it is used.
// Value of b after this operation: b = 0
// Expression --a - --b becomes: 1 - 0 = 1
// Step 3: --a - --b + ++b;
// --a is still 1.
// --b is 0.
// ++b means pre-increment b, so b is increased by 1 before it is used.
// Value of b after this operation: b = 1
// Expression --a - --b + ++b becomes: 1 - 0 + 1 = 2
// Step 4: --a - --b + ++b + b--;
// --a is still 1.
// --b is 0.
// ++b is 1.
// b-- means post-decrement b, so b is used as it is (which is 1) before being decremented.
// Value of b after this operation: b = 0
// Expression --a - --b + ++b + b-- becomes: 1 - 0 + 1 + 1 = 3
// Final Values:
// a = 1
// b = 0
// result = 3
// So, the final values of the variables after the execution of the script are:

// a = 1
// b = 0
// result = 3

// Question N0 03
var user = prompt("Enter Your Name")
alert("Hello " + " " + user + " " + " Wellcome")

// Question N0 04
var table_show = document.querySelector("#table_show")
var button = document.querySelector("#btn")
button.addEventListener("click", function(){
    ShowTables()
})

function ShowTables() {
    var number = document.querySelector("#num").value
    if(number === ""){
        number = 5
    }else{
        number = parseInt(number)
    }
    var table = ""
    
    for(var i = 1; i <= 10; i++){
        table += number + "x" + i + "=" + (number * i) + "<br />"
    }
    table_show.innerHTML = table
}


