(function(){
  'use strict';


  $(document).ready(initialize);

  function initialize() {
    $('#title').click(title);
    $('.number').click(number);  //if you click on a class of 'number', then this function is done
    $('.clear').click(clearDisplay);  //clears the display
    $('.decimal').click(addDecimal);  //adds a decimal to the number
    $('.sign').click(toggleSign);  //toggles sign between + and -
  }

  function title() {
    var display = $('#calculator').css('display');

    if(display === 'none'){
      $('#calculator').fadeIn();
    } else{
      $('#calculator').fadeOut();
    }
  }

  function number() {
    var num = this.textContent;   //
    var calculatorInput = $('#display').text();  //this sets calculatorInput equal to the input in the text box with the class #display
    if(calculatorInput.indexOf('0') === 0) {
      calculatorInput = '';
    } else {
      calculatorInput += num; //concatenated the 'display' and 'num' string together
    }

    $('#display').text(calculatorInput);  //makes the display into a string
  }

  function clearDisplay() {
    var type = this.textContent;

      if(type === 'C'){
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
    var display = $('#display').text();
    $('#display').text(display * -1);

  }

})();
