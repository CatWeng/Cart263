/*****************

Kinder surprise
Catherine Weng

A simple game where you can crack open a kinder egg for a surprise.
Not necesarrily a good surprise, but a surprise.

******************/

"use strict";

let surprises = [
  "baby.png",
  "chucky.png",
  "doll.png",
  "jack.png",
  "knife.png",
  "lego.png",
  "minion.png",
  "piano.png",
  "push.png",
  "skull.png",
  "spider.png",
  "spiderman.png",
  "stack.png",
  "syringe.png",
  "toystory.png",
  "truck.png",
  "voodoo.png",
  "worm.png",
]
let created = false;
let numToys = 0;
let timerReset;

$(document).ready(setup);

function setup() {
  $('.startImage').on('click', generateSurprise);
  $('#buttonDiv').on('click', resetEgg);
}

if (annyang) {
  var commands = {
    // Saying "open the egg" shakes the egg, unwraps it and generates a toy
    'Open the egg': function(){
      generateSurprise();
    },
    // Saying "try again" generates a new toy and egg
    'Try again': function() {
      resetEgg();
    },
  };
    // Add our commands to annyang
    annyang.addCommands(commands);
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }

function generateSurprise() {
  // Shakes the egg for a more interesting visual effect
  $('.startImage').effect('shake');
  // Delay timer so the shake animation finishes before the image is swapped out
  // Displays the surprise toy after a time
  timerReset = setTimeout(function() {
    document.getElementById('id1').src = 'assets/images/openkinder.png';
    displayToy();
  }, 500);
  // Removes class so the egg no longer shakes when clicked
  $('#id1').removeClass('startImage');
  // Creates a restart button
  // If statement in place so only one button can exist
}

// Grab another image from the surprises array
function reloadImage() {
  let el = document.createElement('img');
  let toyElement = document.getElementById("randomGet");
  el.src = `assets/images/${getRandomElement()}`;
// Give the images a class for further manipulation
  el.setAttribute("class", "newImage");
  // Re-randomize image
  toyElement.appendChild(el);
  $('.newImage').draggable({
    stack: ".newImage"
    });
}

// Changes the image styling so it becomes visible on the page
function displayToy() {
  let toyElement = document.getElementById('randomGet');
  toyElement.style.display = "block";
  if (created == false) {
    createButton();
    reloadImage();
    created = true;
  }
}
// Creates a button after a time saying "TRY AGAIN" to reset the game
function createButton() {
  let buttonElement = document.getElementById("buttonDiv");

  setTimeout(function() {
    buttonElement.style.display = "block";
  }, 500);
  let btn = document.createElement("BUTTON");
  let text = document.createTextNode("Try again");
  btn.appendChild(text);
  // Appends element to an existing Div for easier styling
  buttonElement.appendChild(btn);
  // Give it an ID so it can be removed
  btn.setAttribute("id", "actualButton");
}

// Reset all the variables, created elements, styling, images, etc.
function resetEgg() {
  let buttonElement = document.getElementById("buttonDiv");
  $('#id1').addClass('startImage');
  document.getElementById('id1').src = 'assets/images/wrappedkinder.png';
  // Hide elements
  buttonElement.style.display = "none";
  created = false;
  // Remove created elements
  buttonElement.removeChild(actualButton);
  clearTimeout(timerReset);
}

// Gets a random entry from the list of possible surprise toys
function getRandomElement() {
  let element = surprises[Math.floor(Math.random() * surprises.length)];
  return element;
}
