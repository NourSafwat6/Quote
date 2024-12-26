const quoteButton = document.getElementById('quote-button');
const quoteElement = document.getElementById('quote');


const quotes = [
  "Be yourself; everyone is already taken .",
  "So many books , so little time .",
  
];

let usedQuotes = [];

function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));

  usedQuotes.push(randomIndex);
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }

  quoteElement.textContent = quotes[randomIndex];
}

quoteButton.addEventListener('click', getRandomQuote);