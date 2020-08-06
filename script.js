const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById("loader")

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

async function getQuote(){
    loading()
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://joke-api-strict-cors.appspot.com/random_joke';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        quoteText.innerText = data.setup;
        authorText.innerText = data.punchline;

        complete();

    } catch (error) {
        console.log("Whoops, no joke", error);
    }

}
    function tweetJoke(){
        const setup = quoteText.innerText;
        const punchline = authorText.innerText;  
        const twitterUrl = `https://twitter.com/intent/tweet?text=${setup} - ${punchline}`;
        window.open(twitterUrl, "_blank")
        }

        newQuoteBtn.addEventListener("click", getQuote)
        twitterBtn.addEventListener("click", tweetJoke)


getQuote()
