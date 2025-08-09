// Los datos se ven asi
//
// [
//   {
//     "author": "Albert Einstein",
//     "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
//     "tags": ["universe", "stupidity"]
//   },
//   ...
// ]

const boton = document.querySelector("#randomBtn");

fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json")
  .then(response => response.json())
  .then(data => {
    const quotes = data;

    function displayRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote-text").textContent = quotes[randomIndex].quote;
      document.getElementById("quote__author").textContent = quotes[randomIndex].author;
      document.getElementById("quote__tag__1").textContent = quotes[randomIndex].tags[0];
      document.getElementById("quote__tag__2").textContent = quotes[randomIndex].tags[1];
    }

    displayRandomQuote();

    document.getElementById("randomBtn").addEventListener("click", displayRandomQuote);
  })
  .catch(error => {
    console.error("Error fetching quotes:", error);
  });

// Event listener for the share button
document.getElementById("shareBtn").addEventListener("click", () => {
  // Function to copy quote to clipboard
  const quoteText = document.getElementById("quote-text").textContent;
  // Copy it to clipboard
  navigator.clipboard.writeText(quoteText);
});
