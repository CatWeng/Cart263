/*****************

This is a Cooking Blog
Catherine Weng

This project is a generative parody of cooking blogs.
The kind of blog where you're just looking for a recipe,
but instead, you get their life story, their dog's life story,
their favourite candle scents, their opinion on fall outerwear,
their experience in learning to ride a bike and their last 3 vacations.
******************/

"use strict";
let $text = $('.text');
let recipeText;

let markov;

$(document).ready(function() {

  // Load data file for random words
  $.getJSON('data/data.json', gotData)

  speak();

  setTimeout(loadMore, 500);

});

$(document).on('click', '#button', function() {
  var parent = this.parentNode;
  console.log(parent.getElementsByClassName("dots"));
  var dots = parent.getElementsByClassName("dots")[0];

  var btnText = parent.getElementsByTagName("button")[0];
  var moreText = parent.getElementsByClassName("moreText")[0];

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
  });

function speak() {
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };
// Attach this function to all mouseenter events for 'text' classes
  $('.text').mouseenter(function() {
     // Cancel anything else that may currently be speaking
    responsiveVoice.cancel();
    // Speak the text contents of all nodes within the current tag
    responsiveVoice.speak($(this).text());
  });
}

function gotData(data) {
  // Get a random ____ from the array in the JSON
  let food = getRandomElement(data.foods);
  console.log(food);

  // Code from https://www.sitepoint.com/load-flickr-photos-using-jsonapi/
  // Grabs a photo from flickr with the proper tag
  // And appends it to the new post image
  let flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + food + "%2C%20food";
  $.ajax({
    url: flickerAPI,
    dataType: "jsonp", // jsonp
    jsonpCallback: 'jsonFlickrFeed', // add this property
    success: function (result, status, xhr) {
      console.log(result.items);

      // blessed Pippin
      $('.flickrImg:empty').each(function() {
        $(this).append($("<img>").attr("src", result.items[Math.floor(Math.random() * result.items.length)].media.m));
      });

      $('.blogImg:empty').each(function() {
        $(this).append($("<img>").attr("src", result.items[Math.floor(Math.random() * result.items.length)].media.m));
      });

      // $.each(result.items, function (i, item) {
        // .appendTo(".flickrImg:empty");

        // $("<img>").attr("src", item.media.m).appendTo(".blogImg:empty");
      //  console.log(flickerAPI);
        // if (i === 0) {
        //   return false;
        // }
      // });

        $.ajax({
            url: 'data/recipes.txt',
            dataType: 'text',
            success: function (data) {
              // When loaded, we store the data (a string containing the book)
              // in the appropriate variable
              recipeText = data;

              // CODE FROM Frankenstein and Prejudice Example
              // Create a Markov chain generator
              markov = new RiMarkov(4);
              // Load the content of the recipes into the Markov generator
              markov.loadText(recipeText);
              // Generate a paragraph of text
              generateParagraph();
            }
          })
    }
  });
}

function loadMore(){
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
     createCard();
    }
 });
}


// CODE FROM Frankenstein and Prejudice example
// Clears the current texts and generates a new one in its place
function generateParagraph() {
  // Generate ten sentences for our paragraph
  // (Output is an array)
  let sentenceArray = markov.generateSentences(10);
  // Turn the array into a single string by joining with spaces
  let sentenceText = sentenceArray.join(' ');
  // Put the new text onto the page
  $(".moreText:empty").append(sentenceText + "<br><br>");
}

// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Expand code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function createCard(){
  let leftColumn = document.getElementById("leftcolumn");

  let div = document.createElement("div");
  let imgDiv = document.createElement("div");
  let para = document.createElement("p");
  let paraDots = document.createElement("span");
  let para2 = document.createElement("p");
  let h2 = document.createElement("h2");
  let h5 = document.createElement("h5");
  let button = document.createElement("button");

  let node = document.createTextNode("Filler text");

  div.classList.add("card");
  imgDiv.classList.add("blogImg");
  h2.classList.add("text");
  h5.classList.add("text");
    h5.setAttribute("id", "date");
  para.classList.add("text");
  paraDots.classList.add("text","dots");
  para2.classList.add("text", "moreText");
    para2.setAttribute("id", "more");
  button.classList.add("text");
    button.setAttribute("id", "button");

    h2.innerHTML="This is a Title";
  div.appendChild(h2);
    h5.innerHTML="Date";
  div.appendChild(h5);
  div.appendChild(imgDiv);
      para.innerHTML="This is a recipe";
  div.appendChild(para);
  paraDots.innerHTML="...";
  para.appendChild(paraDots);
      // para2.innerHTML="This is more text <br>";
  div.appendChild(para2);
    button.innerHTML="Read more";
  div.appendChild(button);

    leftColumn.appendChild(div);
    $('#more').css("display", "none");

    speak();

    setTimeout(function(){
      $.getJSON('data/data.json', gotData);
  }, 50);
}
