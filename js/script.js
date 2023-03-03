/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let html = "";
let quotes = [
  {
    quote:"Something something darkside",
    source:"The Dark Sith",
    citation: "Robot Chicken"

  },
  {
    quote:"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for",
    source:"Bob Marley",
    
  },
  {
    quote:"Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.",
    source:"Martin Luther King jr.",
    citation: "Strength to Love",
    year: 1963

  },
  {
    quote:"Whatever the mind can conceive and believe, it can achieve.",
    source:"Napoleon Hill",
    citation: "Think and Grow Rich"
  },
  {
    quote:"We live not for the destination, but for the journey",
    source:"Eddie Pinero",
    
  }
];
// for(let i in quotes){
//   console.log(quotes[i].quote);
// }



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  return Math.floor(Math.random()*quotes.length);
}



/***
 * `printQuote` function
***/
function printQuote(){
  let quote = getRandomQuote();
  html = `<div id="quote-box" class="quote-box">
  <p class="quote">${quotes[quote].quote}</p>
  <p class="source">${quotes[quote].source}<span class="citation">${quotes[quote].citation}</span><span class="year">${quotes[quote].year}</span></p>
</div>`;
document.querySelector('main').innerHTML = html;
  alert(quotes[quote].quote);
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);