/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

"use strict";
let $spans;
let secrets = 0;
let found = false;

$(document).ready(setup);
function setup () {
  $spans = $('span');
  setInterval(update,500);
  $('.redacted').on('click',spanClicked);
  $('.secret').on('mouseover', displaySecret);
}

function update() {
//  console.log("Update!");
  $('.redacted').each(updateSpan);
}

function updateSpan() {
//  console.log("Updating span!");
   let r = Math.random();
   if (r < 0.1) {
   $(this).removeClass('redacted');
   $(this).addClass('revealed');
}
}

function spanClicked () {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

function displaySecret(){
  $(this).addClass('found');
  secrets +=1;
  // console.log("secrets");
  $(this).off('mouseover');
  $('#secretNumber').text(secrets);

}
