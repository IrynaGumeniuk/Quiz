import { questions } from "./dataBase.js";
import { headerContainer, listContainer }  from "./elements.js";
import { nextQuestion } from "./nextQuestion.js";
import { currentTopic, currentLevel, historyExperience } from "../index.js"; 

let currentQuestion; 

let correctAnswer = 

function noTopic () {

};

function changeCurrentlyTopic() {
    let currentTopicArray = "";

    // логіка для перевірки по рівню питання та коли треба переключитись на інший topic


    return currentTopicArray;  
}

function changeCurrentLevel (currentLevel, currentTopic, previousLevel) {
    let defaultLevel = 2;

    switch (expr) {
      case '2-':
        ;
        break;
      case '2+':
        ;
        break;
      default:
        ;
    }

    //2+
    //3+ result 3 {topic} "message"
    //3-
    //2+  result 2
    //2-  
    //1+  result 1
    //1 - result 0

    //switch

    return currentLevelArray; 
}

function notRepeatQuestion(question, historyExperience) {

  return [...shuffledQuestions].every( question => {
    if(!historyExperience.include(question) ) {
      return //запускаемо питання
    }
    if (historyExperience.include(question)) 
  
   return true;
  })
}

// Array.find(!historyExperience.include(question))

export function showQuestion(){
  //Question
  const headerTemplate = `<h2 class="title">%title%</h2>`;

  currentQuestion = nextQuestion(currentTopic, currentLevel, historyExperience)

  while (currentQuestion === null || noTopic()) {
    changeCurrentlyTopic();
    nextQuestion(); 
  }

  if (!(currentQuestion === null && !noTopic() )) {
      const title = headerTemplate.replace("%title%", currentQuestion["question"]);
      headerContainer.innerHTML = title;

      //Answers
      let answerNumber = 1;
      let answerText;
      for (answerText of currentQuestion["answers"]){
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
    }
}; 