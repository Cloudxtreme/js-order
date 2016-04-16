(function() {
  'use strict';

  console.log('Main Script Loaded...');
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
  // var newInfoContainer = document.getElementsByClassName('movieInfo')[0];
  // This variable is used in the 'if' statement below.
  var addItem = document.getElementsByClassName('addUserMovie')[0];
  $('.ladenTxt').hide();

  if (addItem) {
    addItem.addEventListener('click', checkInput);
  }

  //                  ============= FUNCTIONS =============

  /** This function runs to check if the input field has a value */
  function checkInput() {
    var val = document.getElementsByClassName('userMovie')[0].value;
    if (val.length == null || val.length == '') {
      // Creating a warning message.
      var newValidContainer = document.getElementsByClassName('validation')[0];
      newValidContainer.style.display = 'block';
      console.log('Warning message created!');
    } else {
      // User has input > delete child from error container
      createFoodItem();
    }
  }

  /** Create a new button with the value of the input field */
  function createFoodItem() {
    // User has input > hide the error container
    var newValidContainer = document.getElementsByClassName('validation')[0];
    newValidContainer.style.display = 'none';

    var stars = document.getElementsByName('rating');
    var starNumber = new Array();

    for (var i = 0; i < stars.length; i++) {
      if (stars[i].checked) {
        starNumber.push(stars[i].value);
      }
    }

    var buttonText = document.getElementsByClassName('userMovie')[0].value;
    var button = new ButtonObj(buttonText, starNumber);
    var newButton = document.createElement('button');

    newButton.classList.add('movie', 'mdl-button', 'mdl-js-button', 'mdl-button--raised');
    newButton.innerHTML = buttonText;
    newButtonContainer.appendChild(newButton);
    newButton.addEventListener('click', createClosure(button));

    console.log('New button created!');
  }

  // When the button is clicked this function will execute
  function createClosure(button) {
    // var button = button;
    // if the created button is clicked this will be returned
    return function() {
      console.log(button.text);
      console.log(button.rating);
      button.addDelete(this);

      $('.poster').css('background-image', 'none');
      $('.movieTitle').empty();
      $('.movieDescription').empty();

      var movieTitle = document.getElementsByClassName('movieTitle')[0];
      // movieTitle.innerHTML = button.text;
    
      console.log('API Script Loaded...');
      var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie',
        input,
        movieName,
        key = '?api_key=8101369e6c911a6378cf5b133889c557';

      $('.movieContainer').on('click', '.movie', function() {
        var input = button.text,
            movieName = encodeURI(input);

        $('.loading').show();
        $('.ladenTxt').show();
        $('.loading').html('<img src="images/294.gif">');

        $.ajax({
          url: url + mode + key + '&query=' + movieName,
          type: 'GET',
          dataType: 'jsonp',
          success: function(data) {
            // document.get

            setTimeout(function () {
              // loop door alle resultaten
              for (var i = 0; i < data.results.length; i++) {
                var s = data.results[i].original_title + ' heeft genre ids: ';
                // loop door alle genre_ids van de resultaten
                // for (var i2 = 0; i2 < data.results[i].genre_ids.length; i2++) {
                //   // voeg id toe aan een string
                //   s += data.results[i].genre_ids[i2] + ', ';
                // }

                $('.poster').css("background-image", "url(http://image.tmdb.org/t/p/w500/" + data.results[0].poster_path);
                $('.movieTitle').html(data.results[0].original_title);
                $('.movieDescription').html(data.results[0].overview);
                $('.movieContainer').css("background-image", "url(http://image.tmdb.org/t/p/w500/" + data.results[0].backdrop_path);

                // print string
                // console.log(s);
              }
                $('.loading').hide();
                $('.ladenTxt').hide();
            }, 2000);
          }
        });
      });
    };
  }

  // Here the buttonObj is created with the given parameters: text and rating
  function ButtonObj(text, rating) {
    this.text = text;
    this.rating = rating;
    this.delete = document.createElement('i');
    this.delete.classList.add('icon', 'material-icons', 'mdl-badge', 'mdl-badge--overlap');
    this.delete.innerHTML = 'clear';
  }

  ButtonObj.prototype.addDelete = function(obj) {
    obj.appendChild(this.delete);
  };

})();
