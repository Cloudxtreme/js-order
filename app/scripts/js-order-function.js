(function() {
  'use strict';

    // Leerdoelen:
    // - Ik ben bekend met de basis JavaScript syntax.
    // - Ik ben bekend met Javascript functions and arrays.
    // - Ik ben bekend met Javascript Objects en prototype.
    // - Ik ben bekend met Javascript DOM manipulatie.
    // - Ik ben bekend met Javascript Events.
    // - Ik ben bekend met Javascript Closures.
    // - Ik ben bekend met HTTP en JavaScript XMLhttpRequest.
    // - Ik ben bekend met Node.js (optioneel).


    //                 ============= VARIABLES =============
    

    // This one adresses the HTML container by class 'chosenFood'
    var newButtonContainer = document.getElementsByClassName('chosenMovie')[0];
    var newValidationContainer = document.getElementsByClassName('validation')[0];
    // This variable is used in the 'if' statement below.
    var addItem = document.getElementsByClassName('addUserMovie')[0];

    // On this click-event we run the function 'createFoodItem'
    // I run the function 'createFoodItem' here, but maybe I should make a 'check' function
    // to check if there was any value typed in the input field to store in the button?
    if (addItem){
      addItem.addEventListener( 'click', checkInput );
    }


    //                  ============= FUNCTIONS =============


    /** This function runs to check if the input field has a value */
    function checkInput()
    {
      var val = document.getElementsByClassName("userMovie")[0].value;
        if(val.length == null || val.length == "") {
            //Creating a warning message. 
            var validationText = document.createElement('p');
                validationText.classList.add('validTxt');
                // User has NO input > show error container
                var newValidationContainer = document.getElementsByClassName('validation')[0];
                newValidationContainer.style.display = "block";
                newValidationContainer.appendChild(validationText);
                validationText.innerHTML = 'U heeft geen film ingevoerd...';
        } 
        else if (!!validationText) {
            // var validationText = document.getElementsByClassName('validTxt')[0];
            // validationText.parentNode.removeChild('p');
        
            // User has NO input > show error container
            var newValidationContainer = document.getElementsByClassName('validation')[0];
            newValidationContainer.style.display = "block";
            // reseting the input field
            }
        else{
            // User has input > delete child from error container
            createFoodItem();
        }
    };

    /** Create a new button with the value of the input field */
    function createFoodItem() 
    {
      // User has input > hide the error container
      var newValidationContainer = document.getElementsByClassName('validation')[0];
      newValidationContainer.style.display = "none";

      var stars = document.getElementsByName('rating');
      var starNumber = new Array();

      for(var i=0; i < stars.length; i++) {
        if (stars[i].checked) {
          // console.log(stars[i].value);
          starNumber.push(stars[i].value);
          console.log("checked");   
        }
      }

      var buttonText = document.getElementsByClassName('userMovie')[0].value;
      var button = new buttonObj( buttonText , starNumber );
      var newButton = document.createElement('button');
        
      newButton.classList.add('movie', 'mdl-button', 'mdl-js-button', 'mdl-button--raised');
      newButton.innerHTML = buttonText;
      newButtonContainer.appendChild(newButton);
      newButton.addEventListener('click', createClosure( button ) );
    };

    // When the button is clicked this functin will execute
    function createClosure( button )
    {  
      var button = button;
      // if the created button is clicked this will be returned
      return function( e )
      {
        console.log( button.text );
        console.log( button.rating );
        button.addDelete( this );
      }
    }
    
    // Here the buttonObj is created with the given parameters: text and rating
    function buttonObj( text , rating )
    {
      this.text = text;
      this.rating = rating;
        
      this.delete = document.createElement('i');
      this.delete.classList.add('icon', 'material-icons', 'mdl-badge', 'mdl-badge--overlap');
      this.delete.innerHTML = 'clear';
    }

    buttonObj.prototype.addDelete = function( obj )
    {
       obj.appendChild( this.delete );
    }
})();