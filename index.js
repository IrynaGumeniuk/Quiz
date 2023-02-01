let Html1 = []; 
let Html2 = []; 
let Html3 = []; 
let Css1 = []; 
let Css2 = []; 
let Css3 = []; 
let Js1 = []; 
let Js2 = []; 
let Js3 = []; 

let n = 0;  

const questions = [ 
  {
    question: "Яка мова працює у браузурі?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
    topic: "JS",
    level: 2,
  },
  {
    question: "Тег- це?",
    answers: ["код для визначення структури веб-сторінок", 
              "команда у мові HTML", "будь-яке текстове повідомлення, що розташоване в кутових дужках", 
              "настроювання вигляду частини веб-сторінки за допомогою спеціального коду"],
    correct: 2,
    topic: "HTML",
    level: 1,
  },
  { 
    question: "Що означає CSS?",
    answers: ["Central Style Sheets",
              "Cascading Style Sheets",
              "Cascading Simple Sheets", 
              "Cars SUVs Sailboats"],
    correct: 2,
    topic: "CSS",
    level: 1,
  },
  {
    question: "Що означає HTML?",
    answers: ["Hypertext Markup Language", 
              "Hypertext Markdown Language", 
              "Hyperloop Machine Language", 
              "Helicopters Terminals Motorboats Lamborginis"],
    correct: 1,
    topic: "HTML",
    level: 1, 
  },
  {
    question: "Атрибут- це?",
    answers: ["характеристика тегу, що впливає на створюваний ним ефект", 
              "характеристика тегу, що вивчає місце його розташування в HTML- документі", 
              "характеристика кольорів тексту та тла веб-сторінки", 
              "властивість тегу"],
    correct: 4,
    topic: "HTML",
    level: 1,
  },
  {
    question: "В якому HTML елементі правильно підключати CSS файл??",
    answers: ["< body >", "< head >", "Вкінці документа", "< script >"],
    correct: 2,
    topic: "HTML",
    level: 2,
  },
  {
    question: "Як правильно додавати коментарі в CSS документ?",
    answers: ["< !-- коментар --> ", " /* коментар */ ", "// коментар", "// коментар // "],
    correct: 2,
    topic: "CSS",
    level: 2,
  },
  {
    question: " Виберіть правильний CSS синтаксис ",
    answers: ["{div;color:black;}", "div:color=black;", "div {color: black;}", "{div:color=black;} "],
    correct: 3,
    topic: "CSS",
    level: 2,
  },
  {
    question: "В якому році був створенний JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
    topic: "JS",
    level: 3,
  },
  {
    question: "Хто створив Javascript?",
    answers: ["Тім Бернер Лі", "Стів Джобс", "Ларі Пейдж", "Брендан Айк", "Біл Гейтс"],
    correct: 4,
    topic: "JS",
    level: 3,
  },
  {
    question: "Яка компанія започаткувала використання Javascript?",
    answers: ["Netscape", "Microsoft", "Google", "Apple"],
    correct: 1,
    topic: "JS",
    level: 3,
  },
  {
    question: "Javascript є регістро - залежною чи незалежною мовою програмування",
    answers: ["так", "ні"],
    correct: 1,
    topic: "JS",
    level: 3,
  },
];

while (n < questions.length ) {
  let element = questions[n];

  switch (element.topic) {
    case "HTML" :
      switch (element.level) {
        case 1:
          Html1.push(element);
          break;
        
        case 2:
          Html2.push(element);
          break;

        case 3:
          Html3.push(element);
          break;
      };
      break;

      case "CSS" :
        switch (element.level) {
          case 1:
            Css1.push(element);
            break;
          
          case 2:
            Css2.push(element);
            break;
  
          case 3:
            Css3.push(element);
            break;
        };
        break;

        case "JS" :
          switch (element.level) {
            case 1:
              Js1.push(element);
              break;
            
            case 2:
              Js2.push(element);
              break;
    
            case 3:
              Js3.push(element);
              break;
          };
          break;
  };

  n++;
}


//Find elements
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#answers");
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

