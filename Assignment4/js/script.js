/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

"use strict";

let $fly;
let $mouth;
let $spider;
let buzzSound = new Audio("assets/sounds/buzz.mp3");
let crunchSound = new Audio("assets/sounds/crunch.wav");
let rejectSound = new Audio("assets/sounds/no.mp3");


$(document).ready(setup);

function setup() {

  $mouth = $('#mouth');
  $fly = $('#fly');
  $spider = $('#spider');

  $fly.draggable();
  $spider.draggable();
  $mouth.droppable({
    drop: onDrop,
    accept: "#fly"
  });

  buzzSound.loop = true;
  $fly.on('mousedown',function () {
  buzzSound.play();
  });
  $fly.on('mouseup',function () {
    buzzSound.pause();
  });

  $spider.draggable({
    start: function() {
      rejectSound.play();
          },
    revert: true });

}

function onDrop(event,ui) {
  let mouthTimer;
  console.log("Dropped!");
  ui.draggable.remove();
  crunchSound.play();
  mouthTimer = setInterval(chew,250);
  setTimeout(function () {
    clearInterval(mouthTimer);
  }, 1000)
}

function chew() {
  if ($mouth.attr('src') === 'assets/images/mouth-open.png') {
    $mouth.attr('src','assets/images/mouth-closed.png');
  }
  else {
    $mouth.attr('src','assets/images/mouth-open.png');
  }
}
