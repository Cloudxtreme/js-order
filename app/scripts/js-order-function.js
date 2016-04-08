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
    // This variable is used in the 'if' statement below.
    var addItem = document.getElementsByClassName('addUserMovie')[0];

    // On this click-event we run the function 'createFoodItem'
    // I run the function 'createFoodItem' here, but maybe I should make a 'check' function
    // to check if there was any value typed in the input field to store in the button?
    if (addItem) 
    {
      addItem.addEventListener('click', createFoodItem );
    }

    //                  ============= FUNCTIONS =============
    

    /** Create a new button with the value of the input field */
    function createFoodItem() 
    {
      var stars = document.getElementsByName('rating');
      var starNumber = new Array();

      for(var i=0; i < stars.length; i++) {
        if (stars[i].checked) {
          // console.log(stars[i].value);
          starNumber.push(stars[i].value);
        }
      }

      var buttonText = document.getElementsByClassName('userMovie')[0].value;
      var button = new buttonObj( buttonText , starNumber );
      var newButton = document.createElement('button');
        
      newButton.classList.add('food', 'mdl-button', 'mdl-js-button', 'mdl-button--raised');
      newButton.innerHTML = buttonText;
      newButtonContainer.appendChild(newButton);
      newButton.addEventListener('click', createClosure( button ) );
    };

    // When the button is clicked this functin will execute
    function createClosure( button )
    {  
      // var button = new ButtonObj
      var button = button;
      // if the created button is clicked this will be returned
      return function( e )
      {
        console.log( button.text );
        console.log( button.rating );
        // button.addDelete( this );
      }
    }
    // Here the buttonObj is created with the given values: text and rating
    function buttonObj( text , rating )
    {
      this.text = text;
      this.rating = rating;
        
     // this.delete = document.createElement('i');
     // this.delete.classList.add('material-icons', 'mdl-badge', 'mdl-badge--overlap');
     // this.delete.innerHTML = "3";
    }

   // buttonObj.prototype.addDelete = function( obj )
   // {
   //     obj.appendChild( this.delete );
   // }
})();