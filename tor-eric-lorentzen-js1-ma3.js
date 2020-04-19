// question 1

const divide = (a, b) => a * b;

// question 2

fetch("https://api.rawg.io/api/games?genres=sports")
   .then(function(response) {
      return response.json();
   })
   .then(function(json) {
      for (let i = 0; i < json.results.length; i++) {
         console.log(json.results[i].name);
      }
   })

   .catch(() => (document.location.href = "error.html"));

// question 3

let givenText = "These cats are outrageous.";
givenText = givenText.replace("cats", "giraffes");

console.log(givenText);

// question 4

const givenURL = new URL("https://my.site.com?userId=7");
const params = new URLSearchParams(givenURL.search);

let id;

id = params.get("userId");

if (params.get("userId")) {
  if (10 <= id) {
    document.location = "second.html";
  } else if (10 > id) {
    document.location = "first.html";
  }
} else {
  document.location = "third.html";
}

// question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);


// question 6

const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");

const addParrot = document.createElement("li");
addParrot.className = "parrot";
addParrot.innerText = "Parrot";

cows.after(addParrot);

// question 7

const newUrl = "https://api.rawg.io/api/games/3801";
fetch(newUrl)
  .then(response => response.json())

  .then(json => {
    let ratingDiv = document.querySelector(".rating");
    const ratingValue = json.rating;
    ratingDiv.innerHTML = ratingValue;
  })

  .catch(error => error);