const questions = [
    {
        question: "what is and african meal ?",
        answers: ["Donner", "Achu", "kayam", "spines"]
    },
    {
        question: " Most sexy woman ? ",
        answers: ["Beyounce", "Ben ", "Lucy", "Joy"]
    },
    {
        question: " How much is my tv ?",
        answers: ["100 euros ", "200 euros", "20 euros ", "10 euros "]
    },
    {
        question: " whats the name of my first girl friend ? ",
        answers: [" Ann", " Eqios", "Beryl", " Ogo"]
    },
    {
        question: "who develop facebook ?",
        answers: ["Mark zukenberg", "etoo", "messi", "ricky"]
    },
    {
        question: " whats the name of my mama ? ",
        answers: ["justine ", "kate ", "mama", "joy"]
    },
    {
        question: "How old is Neymar ?",
        answers: ["1", "30", "29", "9"]
    },
    {
        question: "Is  and African country ?",
        answers: ["Cameroon", "Germany", "Spain", "France "]
    },
    {
        question: "who develop Instagram ?",
        answers: ["Mark zukenberg", "etoo", "messi", "ricky"]
    },
    {
        question: "Best fotballer in ther world ? ",
        answers: ["ronaldo", "etoo", "messi", "ricky"]
    }
]


const rightAns = [
    0, 2, 3, 2, 3, 2, 1, 2, 3, 2
]

let userAns=[]



let questionLength = questions.length;
let questionNumber = 0;
let totalScore= 0;
let answersLength= 3;
let initialQuestionText = questions[questionNumber].question;
let html = "";
let questionAnswers = document.querySelector(".answers");
let questionText = document.getElementById("question__text");
let nextButton = document.querySelector(".nextButton");
let resetBtn = document.querySelector(".reset-btn");
let selectedAnwser = document.querySelector(".answers");
let score = document.querySelector(".score");
let btn = document.getElementsByClassName("btn");
let seleted = true;

function displayAnswers() {
    for (i = 0; i <= answersLength ; i++) {
        questionAnswers.innerHTML = html += `
                 <button class="btn">${questions[questionNumber].answers[i]}</button>
               `
    }
}


const InitializeApp=()=>{

    questionAnswers.innerHTML = "";
    html = "";
    questionNumber = 0
    questionText.innerHTML = initialQuestionText;
    score.innerHTML = 0;
    displayAnswers()
    seleted = false;
}


document.addEventListener("DOMContentLoaded",()=>{
    InitializeApp()
 })




nextButton.addEventListener("click", function () {

    Array.from(btn, (button,index) => {
        if (button.classList.contains("selected-answer")){
            // console.log(index, button)
            userAns.push(index);
            console.log(userAns);
        }
    });

try {
    if (questionNumber == questionLength-1){
        questionNumber=-1 ;
        for (let i = 0; i <=rightAns.length;i++){
            if (rightAns[i] == userAns[i]){
                  totalScore+=1 ;               
            }
        }
        console.log(totalScore);
        alert(`you have ${totalScore} correct of ${rightAns.length || userAns.length}`);
        totalScore=0;
        userAns.length=0
    }
    if (seleted){
        questionNumber++;

        score.innerHTML = totalScore;
        questionText.innerHTML = questions[questionNumber].question;
        questionAnswers.innerHTML = "";
        html = ""
        displayAnswers();
        seleted = false;
    }


    // userAns.push(e.target.innerHTML)

} catch (error) {
 console.log(error)

}

});

const restApp=()=>{
    InitializeApp();
    
}

resetBtn.addEventListener("click", restApp);

selectedAnwser.addEventListener("click",function(e){
    
    if (e.target.className =="answers") return ;
    Array.from(btn, button => {
        button.classList.remove("selected-answer");
    });
    e.target.classList.toggle("selected-answer");
    seleted = true;
    console.log(seleted);
})



