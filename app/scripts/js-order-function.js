(function() {
  'use strict';
    // Variables
    // This one adresses the HTML container by class 'chosenFood'
    var newButtonContainer = document.getElementsByClassName('chosenFood')[0];
    // This variable is used in the 'if' statement below.
    var addItem = document.getElementsByClassName('addUserChoice')[0];

    // On this click-event we run the function 'createFoodItem'
    // I run the function 'createFoodItem' here, but maybe I should make a 'check' function
    // to check if there was any value typed in the input field to store in the button?
    if (addItem) 
    {
      addItem.addEventListener('click', createFoodItem );
    }

    // Functions
    /** Create a new button with the value of the input field */
    function createFoodItem() 
    {
      var buttonText = document.getElementsByClassName('userChoice')[0].value;
      var button = new buttonObj( buttonText , 2.30 );

      var newButton = document.createElement('button');
      newButton.classList.add('food', 'mdl-button', 'mdl-js-button', 'mdl-button--raised');
      newButton.innerHTML = buttonText;
      newButtonContainer.appendChild(newButton);
      newButton.addEventListener('click', createClosure( button ) );
    };

    function createClosure( button )
    {
      var button = button;

      return function( e )
      {
        console.log( button.text );
        console.log( button.price );
        button.addDelete( this );
      }
    }

    function buttonObj( text , price )
    {
      this.text = text;
      this.price = price;
      this.delete = document.createElement('i');
      this.delete.classList.add('material-icons', 'md-8');
      this.delete.innerHTML = "clear";
    }

    buttonObj.prototype.addDelete = function( obj )
    {
        obj.appendChild( this.delete );
    }
})();


//Frank graave is een shemale