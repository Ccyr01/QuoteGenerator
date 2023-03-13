/******************************************
 * Christian C
 * 3/13/2023
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
    link: "https://www.youtube.com/watch?v=j201f8XxVxw"
    
  }
  
];
// for(let i in quotes){
//   console.log(quotes[i].quote);
// }



/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.body.style.backgroundColor = "#" + randomColor;
  return quotes[Math.floor(Math.random()*quotes.length)];
}



/***
 * `printQuote` function
 * calls getRandomQuote function then it 
 * changes what is being displayed on the 
 * html based on the quote that was returned
***/
function printQuote(){
  let quote = getRandomQuote();
  let qbox = document.querySelector('.quote-box');
  //basic quote and source printed out
  //then checks if citation, year, and link information
  //is provided. If it is then it is also displayed
  html = `
  <p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;
  if(quote.citation != null){
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if(quote.year != null){
    html +=`<span class="year">${quote.year}</span>`;
  }
  if(quote.link != null){
    html += `<a href=${quote.link}> Watch Video</a>`;
    
  }
  //end of paragraph is added after the correct information is added
  //based on what information is available for each quote
  html += '</p>';
  qbox.innerHTML = html;
  
}
//calls timerFunction and sets time intervals to 7 seconds
var timerId = setInterval(timerFunction, 7000);
var countLimit = 10;
//Timer function runs ten times 
function timerFunction(){
  console.log('inside test');
  printQuote();
  countLimit = countLimit - 1;
  console.log(countLimit);
  if(countLimit == 0){
    clearInterval(timerId);
  }
  
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
