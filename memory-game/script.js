const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clickArray = [];
let clickCounter = 0;
let blackCounter = 0;
let totalClicks = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
    let divParent = event.target.parentElement;
    let divIndex = Array.prototype.indexOf.call(divParent.children, event.target);
    let divColor = event.target.classList[0];
    console.log(divColor);
    let BG = event.target.style.backgroundColor;
    let allDivs = document.querySelectorAll('div');
    let h3 = document.querySelector('h3');
    let h4 = document.querySelector('h4');

  // let containColor = function(div) {
  //   for (let i = 0; i < div.length; i++) {
  //     let bgColor = div[i].style.backgroundColor;
  //     if (bgColor === divColor) {
  //       COLORS.splice(i, 1);
  //     }
  //   }
  // }

  //logging which DIV was clicked into an array of objects
  if (!clickArray[divIndex]) {
    // let clickObject = {};
    //   clickObject[divIndex] = divColor;
      clickArray.push(divColor);
      // console.log(clickArray);
      // console.log(clickArray[0]);
      // console.log(clickArray[1]);
      
    if (BG === divColor) {
        clickCounter++;
        event.target.style.backgroundColor = 'white';
    } else {
        clickCounter++;
        event.target.style.backgroundColor = divColor;
    }

    if (clickArray[0] === clickArray[1]) {
      // let getDivs = document.getElementsByClassName(divColor);
      // console.log('true');
      // console.log(clickArray);
      // let stringify1 = JSON.stringify(clickArray[0]);
      // let stringify2 = JSON.stringify(clickArray[1]);
      // console.log(stringify1);
      // console.log(JSON.stringify(clickArray));
      let getDiv = document.querySelectorAll('div');

      for (let i of getDiv) {
        let findClass = i.getAttribute('class');
        if (findClass === divColor) {
          i.style.transition = 'background-color 2s ease-out';
          i.style.backgroundColor = 'black';
          blackCounter++;
          let score = blackCounter / 2;
          h3.innerText = `SCORE: ${score} / 5`;
          console.log(blackCounter);
          if (blackCounter >= 10) {
            return alert('Game Over - YOU WON!');
          }
        }
        // let isBlack = i.style.backgroundColor;
        // console.log(isBlack);
        // if (isBlack === 'black') {
        //   blackCounter++;
        //   console.log(blackCounter);
        // }
        // if (blackCounter = 10) {
        //   console.log(blackCounter);
        //   return alert('Game Over - YOU WON!');
        // }
      }
    }

    // if (clickCounter >= 2) {
    //   containColor(divParent);
    //   clickArray = [];
    //   return console.log('true');
    // }

    totalClicks++;
    h4.innerText = `Total Clicks: ${totalClicks}`;

    if (clickArray.length >= 2) {
      clickArray = [];
    }
      
    // if (clickArray.length = 2) {
    //   let stringArray = JSON.stringify(clickArray);

    // }
}

  // if (clickArray.find((obj) => obj.divIndex === objColor)) {
  //   console.log('found match');
  // }

  // let checkArray = function(array, obj){
  //   let result = '';
  //   for (let i = 0; i < array.length; i++) {
  //     if (obj.hasOwnProperty(i)) {
  //       result += `${objName}.${i} = ${obj[i]}\n`;
  //     }
  //   }
  //   console.log(result);
  // }

  // if {clickArray[0]}

  //   // if (clickArray.find((obj) => obj[divIndex] === divColor)) {
  //   for (let color of clickArray[divIndex]) {
  //     if (color = divColor) {
  //     divParent[divIndex].classList.add('matched');
  //     }
  //   }
  //   if (clickArray.length >= 2) {
  //     clickArray = 0;
  //   }
  // }

  //if 2 cards match they stay face-up
  // if ()

  //resets the DIV's when 2 are selected
  if (clickCounter >= 2) {
  setTimeout(function() {
    for (let dBG of allDivs) {
      if (dBG.style.backgroundColor !== 'black') {
        dBG.style.backgroundColor = 'white';
      }
    }
    clickCounter = 0;
    }, 500);
  }
}


// when the DOM loads
document.addEventListener("DOMContentLoaded", createDivsForColors(shuffledColors));