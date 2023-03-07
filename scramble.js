
const words = [
    {
      word: "Baahubali",
      hint: "Kattappa ne Baahubali ko kyun maara?"
    },
    {
      word: "Arjun Reddy",
      hint: "What's wrong with me drinking?"
    },
    {
      word: "Rangasthalam",
      hint: "Jigelu Rani"
    },
    {
      word: "Ala Vaikunthapurramuloo",
      hint: "Butta Bomma"
    },
    {
      word: "Jersey",
      hint: "I am not a failure"
    },
    {
      word: "Maharshi",
      hint: "Rishi, mee intiki vaste.. munduku vastha!"
    },
    {
      word: "Sarkar",
      hint: "Oru viral puratchi!"
    },
    {
      word: "Geetha Govindam",
      hint: "What The F"
    },
    {
      word: "Sye Raa Narasimha Reddy",
      hint: "Uyyalawada Narasimha Reddy"
    },
    {
      word: "Dear Comrade",
      hint: "Fight For What You Love"
    },
    {
      word: "Fidaa",
      hint: "Hey Pillagaada"
    },
    {
      word: "Mahanati",
      hint: "Savitri garu mana intiki enter ayyaru"
    },
    {
      word: "Bharat Ane Nenu",
      hint: "I don't break promises"
    },
    {
      word: "Athadu",
      hint: "Parugulu Theeyi"
    },
    {
      word: "Nannaku Prematho",
      hint: "Follow The Leader"
    },
    {
      word: "Pokiri",
      hint: "Eenadu.. choodamani undi!"
    },
    {
      word: "Chatrapathi",
      hint: "Kalam Maarindi"
    },
    {
      word: "Khaidi No.150",
      hint: "Boss Is Back"
    },
    {
      word: "Gabbar Singh",
      hint: "Naku konchem tikkundi leda.. kani daniki konchem thikkundi"
    },
    {
      word: "Jalsa",
      hint: "Pawan Kalyan Babu!"
    },
    {
      word: "Magadheera",
      hint: "Mokkuthi Ammavaru"
    },
    {
      word: "Manam",
      hint: "Enti.. meeru em chestunnaru?"
    },
    {
      word: "I",
      hint: "Beauty.. And the Beast"
    },
    {
      word: "S/O Satyamurthy",
      hint: "Super Machi"
    },
    {
      word: "Gang Leader",
      hint: "Ra Ra.. Oh.. Andam Chudavante.. Andistha.."
    },
    {
      word: "Jaanu",
      hint: "Rekkalu vachcheney.. rendu rekkalu vachcheney"
    },
    {
      word: "Aarya",
      hint: "Aarya.. I love you"
    },
    {
      word: "Vikramarkudu",
      hint: "Naa Peru Vikramarkudu.. Meru enduku ra?"
    }
  
]

let correctWord,timer;
let wordChange =document.querySelector(".container");
hintTEXT= document.querySelector(".hint span");

inputField= document.querySelector("input");
timeText=document.querySelector(".timer b");
const checkWord= document.querySelector(".check-word");
const refreshGame= document.querySelector(".refresh-word");

const initTimer =() => {
    timer =setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            timeTEXT.innerHTML=maxTime;
        }
    },1000);    



}

const initGame = () => {
    initTimer(30);





    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordarray = randomObj.word.split("");
    

    for (let i=wordarray.length-1; i>0; i--){
        let j=Math.floor(Math.random()* (i+1));
        [wordarray[i],wordarray[j]
    ]=[wordarray[j],wordarray[i]];

        
    }
    

    hintTEXT.innerHTML = randomObj.hint;
    correctWord=randomObj.word.toLocaleLowerCase();
  
    wordChange.querySelector(".word").innerHTML=wordarray.join("");
}
const checkFunction=() => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) return alert("Please enter a word !!")
    if (userWord!=correctWord) return alert('Input not correct');
    alert("Congrats !! its right answer");
    
    


}


initGame();
refreshGame.addEventListener("click",initGame);
checkWord.addEventListener("click",checkFunction);




