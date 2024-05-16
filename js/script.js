// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: April 23 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

function myButtonClicked() {
  // input
  const userNumber = parseInt(document.getElementById("user-number").value)

  // process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("answer").innerHTML = "You have guesed the correct number!"
  }

  if (userNumber != randomNumber) {
    document.getElementById("answer").innerHTML = "You have not guesed the correst number!"
  }
}