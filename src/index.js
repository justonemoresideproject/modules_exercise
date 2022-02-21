import React from "react";
import foods from "./foods"
import {choice, remove} from "./helpers"

const randomFruit = choice[foods]

console.log(`I\'d like one ${randomFruit} please`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious! May I have another ${randomFruit}?`)

remove(foods, randomFruit)

console.log(`I\'m sorry, we\'re all out of ${randomFruit}. We have ${foods.length}`)