let quotes = [
   "A vida é como andar de bicicleta. Para ter equilíbrio você tem que se manter em movimento.",
   "A alegria evita mil males e prolonga a vida.",
   "Enquanto a cor da pele for mais importante que o brilho dos olhos, haverá guerra.",
   "O amor é a força mais sutil do mundo.",
   "Aquilo que não me mata, só me fortalece.",
   "As mais lindas palavras de amor são ditas no silêncio de um olhar.",
   "Não existe um caminho para a felicidade. A felicidade é o caminho.",
   "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
   "Eduquem os meninos e não será preciso castigar os homens.",
   "Coragem é resistência ao medo, domínio do medo, e não ausência do medo."
]

let pickedNum = Math.floor(Math.random() * quotes.length);
let pickedQuote = quotes[pickedNum];

function renderQuote(){
   let pickedQuoteElement = document.getElementById("picked-quote")
   pickedQuoteElement.innerHTML = pickedQuote;
}

function splitQuote(quote){
   let separator = ' '
   let arrayOfStrings = quote.split(separator);
   return arrayOfStrings; 

}

renderQuote();
let givenQuoteArray = splitQuote(pickedQuote);
let givenQuoteArrayLength = givenQuoteArray.length;


// count time
let startTime, endTime;

let startBtn = document.getElementById("start-btn");
let userInput = document.getElementById("user-input");


function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  let timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  return seconds;
}

function getUserAnwser(){
   let userAnwser = userInput.value;
   return userAnwser;
}

userInput.onfocus = function(){
   start();
}

let correctWordsCounter = 0;
let typedWords = 0;
function compareQuotes(givenQuoteArray, userQuoteArray){
   for(let i=0;i<givenQuoteArrayLength;i++){
      if(givenQuoteArray[i]===userQuoteArray[i]){
         
         correctWordsCounter++;
      }
      typedWords++;
   }
}

function showResults(totalWords, correctWords, typedWords, time,){
   let correctWordsElement = document.getElementById("correct-words");
   correctWordsElement.innerHTML = "Você acertou " + correctWords + " de " + totalWords + " palavras";
   let timeResultElement = document.getElementById("time-result");
   timeResultElement.innerHTML = "Você digitou " + typedWords + "palavras em " + time + " segundos"

}



function checkKey(e) {
   var key = e.which || e.keyCode;
   if (key === 13){
      end();
      getUserAnwser();
      let userAnwser = getUserAnwser();
      let userAnwserArray = splitQuote(userAnwser);
      compareQuotes(givenQuoteArray, userAnwserArray);
      console.log(givenQuoteArray, userAnwserArray);
      let correctWords = correctWordsCounter;
      let time = end();
      showResults(givenQuoteArrayLength, correctWords, typedWords, time);
      
   }
}

document.addEventListener("keypress", checkKey);

