var add = function(number1, number2) {
  return number1 + number2;
};

//var number1 = parseInt(prompt("Enter a number:"));
//var number2 = parseInt(prompt("Enter another number:"));

//alert(add(number1, number2));

var multiply = function(number1,number2){
  return number1 * number2;
}
//alert(multiply(number1, number2));

var subtract = function(number1, number2){
  return number1 - number2;

}
//alert(subtract(number1, number2));

var divide = function(number1, number2){
  return number1 / number2;
}
//alert(divide(number1, number2));

// Above is business end logic, below is user interface logic

$(document).ready(function() {
  $("button#addButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = add(number1, number2);
    $("#output").text(result);

  });

  $("button#subtractButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);

  });

  $("button#multiplyButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);

  });

  $("button#divideButton").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    var result = divide(number1, number2);
    $("#output").text(result);

  });

});
