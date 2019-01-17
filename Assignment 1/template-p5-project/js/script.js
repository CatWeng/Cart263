"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// preload()
//
// Description of preload
let avatar = {
  x:0,
  y:0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#cccc55'
}

let food = {
  x:100,
  y:100,
  size: 64,
  color: '#FFFFFF'
}

function preload() {

}

function setup() {
createCanvas(windowWidth, windowHeight);
food.x = random(windowWidth-food.size/2);
food.y = random(windowHeight-food.size/2);
//noCursor();
}

function draw() {
  if (!avatar.active) {
    return;
  }
  background(50, 90, 200);
  displayFood();
  displayAvatar();
  updateAvatar();
  collision();
}

function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

function updateAvatar() {
  avatar.x = mouseX,
  avatar.y = mouseY,
  avatar.size = constrain(avatar.size, 0, avatar.maxSize);
  avatar.size -= 0.5;
  if (avatar.size == 0){
    avatar.active = false;
  }
}

function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  moveFood();
  pop();
}

function moveFood() {
  food.x = food.x +3;
  food.y = food.y +3;
  if (food.x >= windowWidth) {
    food.x = 0;
  }
  if (food.y >= windowHeight) {
    food.y = 0;
  }

}

function collision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + 50,0,avatar.maxSize);
    food.x = random(0,width);
    food.y = random(0,height);
  }
}
