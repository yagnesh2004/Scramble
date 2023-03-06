
let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]


let wordChange =document.querySelector(".container");
hintTEXT= document.querySelector(".hint span");
inputField= document.querySelector("input");

const checkWord= document.querySelector(".check-word");

const refreshGame= document.querySelector(".refresh-word");
const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordarray = randomObj.word.split("");
    

    for (let i=wordarray.length-1; i>0; i--){
        let j=Math.floor(Math.random()* (i+1));
        [wordarray[i],wordarray[j]
    ]=[wordarray[j],wordarray[i]];

      


        
    }
    
    

    hintTEXT.innerHTML = randomObj.hint;
  
    wordChange.querySelector(".word").innerHTML=wordarray.join("");



}
const checkFunction=() => {
    let userWord = inputField.value.toLocalLowerCase();
    alert(userWord);


}


initGame();
refreshGame.addEventListener("click",initGame);
checkWord.addEventListener("click",checkFunction);




