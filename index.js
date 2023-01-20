const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: ["Central Style Sheets",
              "Cascading Style Sheets",
              "Cascading Simple Sheets", 
              "Cars SUVs Sailboats"],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: ["Hypertext Markup Language", 
              "Hypertext Markdown Language", 
              "Hyperloop Machine Language", 
              "Helicopters Terminals Motorboats Lamborginis"],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  }
]

//Find elements
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

//Variables
let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

//Clean HTML page and render current question
function clearPage(){
    headerContainer.innerHTML = " ";
    listContainer.innerHTML = " ";
};

function showQuestion(){
    //Question
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace("%title%", questions[questionIndex]["question"]);
    headerContainer.innerHTML = title;

    //Answers
    let answerNumber = 1;
    for (answerText of questions[questionIndex]["answers"]){
        const questionTemplate = 
        `<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
         </li>`;
        const answerHTML = questionTemplate
                            .replace("%answer%", answerText)
                            .replace("%number%", answerNumber);
        
        listContainer.innerHTML += answerHTML;
        answerNumber++;
    }
};

//Answer button
function checkAnswer(){
    const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
    
    //if any answer was selected
    if (!checkedRadio){
        submitBtn.blur();
        return
    };

    //Find checked answer number
    const userAnswer = parseInt(checkedRadio.value);

    //correct answer or not
    if (userAnswer === questions[questionIndex]["correct"]) {
        score++;
    }

    //last answer or not
    if (questionIndex !== questions.length - 1){
      questionIndex++;
      clearPage();
      showQuestion();
      return;
    } else {
      clearPage();
      showResults();
    };
};

function showResults() {
    const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
      `;

    let title, message;

    if (score === questions.length) {
      title = "Поздравляем! 🎉";
      message = "Вы ответили верно на все вопросы! 😎👍";
    } else if ((score * 100) / questions.length >= 50){
      title = "Неплохой результат! 😉";
      message = "Вы ответили верно на больше половину вопросов! 👍";
    } else {
      title = "Стоит постараться...🥺 ";
      message = "Пока у вас меньше половины правильных ответов.";
    };

    //Result
    let result = `${score} из ${questions.length}`;

    //Final message
    const finalMessage = resultsTemplate
                          .replace("%title%", title)
                          .replace("%message%", message)
                          .replace("%result%", result);
    
    headerContainer.innerHTML = finalMessage;

    //Change button message to "Play again"
    submitBtn.blur();
    submitBtn.innerHTML = "Начать заново";
    submitBtn.onclick = () => history.go();
};

