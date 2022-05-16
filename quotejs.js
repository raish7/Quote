var quotes = [
	{
	quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
	source: "Dr. Seuss"
	},
	{
	quote: "This too, shall pass.",
	source: "Anonymous"
	},
	{
	quote: "Keep your eyes on the stars and your feet on the ground.",
	source: "Theodore Roosevelt"
	},
	{
	quote: "The only person you should try to be better than is the person you were yesterday.",
	source: "Anonymous"
	},
	{
	quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
	source: "Harvey Fierstein"
	},
	{
	quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
	source: "C.S. Lewis"
	},
    {
    quote: "When something is important enough, you do it even if the odds are not in your favour.",
    source:"Elon Musk"
    },
    {
    quote:"I'm not here to compete or to get compared. I'm here to rule.",
    source:"Shah Rukh Khan"
    },
    {
    quote:"Never quit. Keep hustling. Achieve everything you dreamt of.",
    source:"Anonymous"
    },
    {
    quote:"More fuck yeah, less fuck that",
    source:"Anonymous"
    },
    {
    quote:"Don't let the muggles get you down.",
    source:"Ron Weasley"
    },
    {
    quote:"The hardest choice requires the strongest will.",
    source:"Thanos"  
    },
    {
    quote:"Stay hungry. Stay foolish",
    source:"Steve Jobs"  
    }
]


let genVar = document.getElementById("gen-btn")
let pEl = document.getElementById("quote-text")

genVar.addEventListener("click",function()
{
   renderQuote()
})

function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

function generateRandomQuote()
{
    var randomNumber = Math.floor(Math.random() * quotes.length)
    var randomQuote = quotes[randomNumber]
    return randomQuote
} 

function renderQuote()
{
    var quotes = generateRandomQuote()
    var quoteString = `<h2><b>" ${quotes.quote.toLocaleUpperCase()} "</b></h2><br/>-${quotes.source}<br/>`

    pEl.innerHTML = quoteString

    document.body.style.backgroundColor = getRandomColor()
}