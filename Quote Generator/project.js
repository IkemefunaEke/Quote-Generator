//my variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"I came, I saw, I conquered!"`,
    person: `Julius Caesar`
}, {
    quote: `"1 + 1 = 2."`,
    person: `Me`
}, {
    quote: `"To be or not to be, that is the question."`,
    person: `William Shakespeare`
}, {
    quote: `"I have a dream."`,
    person: `Martin Luther King Jr.`
}, {
    quote: `"The best way to find out what you want in life is to try a lot of things."`,
    person: `Oprah Winfrey`
}, {
    quote: `"You can have anything you want if you're willing to give up everything you have."`,
    person: `Oprah Winfrey`
},{
    quote: `"History is a set of lies agreed upon."`,
    person: `Napoleon Bonaparte`
},{
    quote: `"There are but two powers in the world, the sword and the mind. 
    In the long run the sword is always beaten by the mind."`,
    person: `Napoleon Bonaparte`
}, {
    quote:`"A winner is a dreamer who never gives up."`,
    person:`Nelson Mandela`
}, {
    quote:`"Education is the most powerful weapon which you can use to change the world."`,
    person:`Nelson Mandela`
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})