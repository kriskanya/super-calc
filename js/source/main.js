(function(){
  'use strict';


  $(document).ready(initialize);

  function initialize() {
    $('#title').click(title);
    $('.number').click(display);  //if you click on a class of 'number', then this function is done
    $('.clear').click(clearDisplay);  //clears the display
    $('.decimal').click(addDecimal);  //adds a decimal to the number
    $('.sign').click(toggleSign);  //toggles sign between + and -
    $('.push').click(push);    //pushes to the div
    $('.operator').click(operator);
  }

  function title() {
    var display = $('#calculator').css('display');

    if(display === 'none'){
      $('#calculator').fadeIn();
    } else{
      $('#calculator').fadeOut();
    }
  }

  function display() {
    var num = this.textContent;   //
    var calculatorInput = $('#display').text();  //this sets calculatorInput equal to the input in the text box with the class #display
    calculatorInput += num;        //concatenates the two strings

    if(calculatorInput.indexOf('.') === -1) {
      calculatorInput *= 1;                    //changes the calculatorInput to a number, so you can't have a bunch of leading 0s, e.g., '000000'
    }

    $('#display').text(calculatorInput);  //sets the text in the #display textbox to calculatorInput
  }

  function clearDisplay() {
    var type = this.textContent;

      if(type === 'C'){
        $('#display').text(0);
    } else {
        $('#queue').empty();
        $('#display').text(0);
    }
  }

  function addDecimal() {
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;  //checks to see if there is a decimal in the number entered

    if(noDecimal){
      $('#display').text(display + '.');
    }
  }

  function toggleSign() {
    var num = $('#display').text();
    //$('#display').text(display * -1);


    if(num.indexOf('-') === 0) {
      num = num.replace('-','');
    } else {
      num = '-' + num;
    }
    $('#display').text(num);
  }

  function push() {
    var display = $('#display').text();
    $('#display').text(0);    //clears display

    var $div = $('<div>');   //created a new div
    $div.text(display);
    $('#queue').prepend($div);
  }

  function operator() {
    var op = $(this).data('op');      //refers back to 'data-op' in the html
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
    var result;

    switch(op){
      case 'add':
        result = x + y;
        $('#display').text(result);
        break;
      case 'sub':
        result = x - y;
        $('#display').text(result);
        break;
      case 'mul':
        result = x * y;
        $('#display').text(result);
        break;
      case 'div':
        result = x / y;
        $('#display').text(result);
        break;
      case 'exp':
        result = Math.pow(x, y);
        $('#display').text(result);
        break;
      case 'root':
        result = Math.sqrt(x);
        $('#display').text(result);
        break;
      case 'fac':
        result = factorial(x);
        $('#display').text(result);
        break;
      case 'sum':
        result = sum();
        $('#display').text(result);
        break;
    }
    $('#display').text(result);
  }

  function factorial(input) {
    var sum = 1;

    for(var i=2; i <= input; i++) {
      sum*=i;
    }
    return sum;
  }

  function sum(){
    var total = 0;

    $('#queue > div').each(function(index, div){    //.each() allows you to go over each function
      var x = div.textContent * 1;
      total += x;
    });

    return total;
  }

})();
