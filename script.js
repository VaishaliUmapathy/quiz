const questions=[
    {
        question:"Which one of the following is an example of an internet search engine?",
        answers:[
            {text:"LINUX",correct:"false"},
            {text:"Google",correct:"true"},
            {text:"MS Word",correct:"false"},
            {text:"Windows",correct:"false"},
        ]
    },
    {
        question:"Which of the following is not an HTML tag?",
        answers:[
            {text:"< select >",correct:"false"},
            {text:"< input >",correct:"false"},
            {text:"< textarea >",correct:"false"},
            {text:"< list >",correct:"true"},
        ]
    },
    {
        question:"Which among these is not a Web browser?",
        answers:[
            {text:"www",correct:"true"},
            {text:"Chrome",correct:"false"},
            {text:"Opera",correct:"false"},
            {text:"NetSurf",correct:"false"},
        ]
    },
    {
        question:"What does W3C stand for?",
        answers:[
            {text:"World Wide Web Consortium",correct:"true"},
            {text:"World Wide Website Consortium",correct:"false"},
            {text:"World Wide Website Community",correct:"false"},
            {text:"World Wide Web Community",correct:"false"},
        ]
    },
    {
        question:"XML stands for",
        answers:[
            {text:"Extensible Mask Language",correct:"false"},
            {text:"Extensible Markup Language",correct:"true"},
            {text:"Extended Markup Language",correct:"false"},
            {text:"Extension Markup Language",correct:"false"},
        ]
    },
    {
        question:"Which of the following is a container?",
        answers:[
            {text:"SELECT",correct:"false"},
            {text:"BODY",correct:"false"},
            {text:"INPUT",correct:"false"},
            {text:"Both (a) and (b)",correct:"true"},
        ]
    },
    {
        question:"The tag used to create a hypertext relationship between current document and another URL is",
        answers:[
            {text:"ISINDEX",correct:"false"},
            {text:"A",correct:"false"},
            {text:"LINK",correct:"true"},
            {text:"None of these",correct:"false"},
        ]
    },
    {
        question:"How can you open a link in a new browser window?",
        answers:[
            {text:"a href = “url”.new",correct:"false"},
            {text:"a href = “url” target =”open”",correct:"false"},
            {text:"a href = “url” target= “_blank”",correct:"true"},
            {text:" a href = “url” target = “new”",correct:"false"},
        ]
    },
    {
        question:"Which of the following is a Valid Name?",
        answers:[
            {text:"<123 person>",correct:"false"},
            {text:"Both (a) and (b)",correct:"false"},
            {text:"&INPUT>",correct:"false"},
            {text:"<_person>",correct:"true"},
        ]
    },
    {
        question:"Which method of the Component class is used to set the position and size of a component in JSP?",
        answers:[
            {text:"setSize()",correct:"false"},
            {text:"setBounds()",correct:"true"},
            {text:"setPosition()>",correct:"false"},
            {text:"setPositionSize()",correct:"false"},
        ]
    },

];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=`${questionNo}. ${currentQuestion.question}`;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextButton.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.classList.add("next-button");
    nextButton.style.display =  "block";
    
}

function  handleNextButton(){
    currentQuestionIndex++;
    if( currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();

    }
    else{
        startQuiz();
    }
});

startQuiz();