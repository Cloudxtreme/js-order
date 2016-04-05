(function() {
  'use strict';
    // Variables
    var newButtonContainer = document.getElementsByClassName('chosenFood')[0];
    // The button that will trigger all the action
    var addItem = document.getElementsByClassName('addUserChoice')[0];

    var x = 2;
    var y = x;
    console.log( ++y );
    console.log( x );

    var arr = [1,2,3];
    var bar = arr;
    bar.push(4);
    console.log(arr);
    console.log(bar);

    // document.getElementsByClassName('addUserChoice')[0].addEventListener('click', createFoodItem);

    if (addItem) {
      // On the click-event we run the function 'createFoodItem'
      // I run the function 'createFoodItem' here, but maybe I should make a 'check' function
      // to check if there was any value typed in the input field to store in the button?
      addItem.addEventListener('click', createFoodItem );
    }

    // Functions
    /** Create a new button with the value of the input field */
    function createFoodItem() {
      var buttonText = document.getElementsByClassName('userChoice')[0].value;
      var button = new buttonObj( buttonText , 2.30 );

      var newButton = document.createElement('button');
      newButton.classList.add('food', 'mdl-button', 'mdl-js-button', 'mdl-button--raised');
      newButton.innerHTML = "click me!";
      newButtonContainer.appendChild(newButton);
      newButton.addEventListener('click', createClosure( button ) );

      // var delBtn = document.createElement('i');
      // delBtn.classList.add('material-icons', 'mdl-badge', 'mdl-badge--overlap', 'md-18');
      // delBtn.innerHTML = 'delete_forever';
      // newButton.appendChild(delBtn);
      // delBtn.setAttribute('data-badge', 'X');
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

    function buttonObj( text , price)
    {
      this.text = text;
      this.price = price;
      this.delete = document.createElement('p');
      this.delete.innerHTML = "X";
    }

    buttonObj.prototype.addDelete = function( obj )
    {
        obj.appendChild( this.delete );
    }

})();