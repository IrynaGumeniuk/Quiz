import { questions } from "../dataBase.js";
import { headerContainer, listContainer }  from "../elements.js";
import { checkBeforeShowQuestion } from "./checkBeforeShowQuestion.js";
import { currentTopic, currentLevel, historyExperience, shuffledQuestions } from "../../index.js"; 
import { isCorrectAnswer } from "../actions/checkAnswer.js";

let currentQuestion; 
let previousLevel = 2 ; // historyExperience.at(-1).level
// let correctAnswer = 2;  // number

function finishedTopic () {
  return;
  // before show result
};

function changeCurrentlyTopic() {
    let currentTopicArray = "";

    // if( result)


    // логіка для перевірки по рівню питання та коли треба переключитись на інший topic


    return;  
};

function changeCurrentLevel (currentLevel, currentTopic, previousLevel ) {
  const highLevel = 3; //remove to controlers

  if(historyExperience.length === 0){
    previousLevel = currentLevel;
  };
  
  if(isCorrectAnswer){
    if (!highLevel) currentLevel + 1;
  } else {
    currentLevel - 1;
  }
  
  if(highLevel){
    currentTopic
  }

  // if() [
  //   //add result off each topic
  // ]

    

    //2+         
    //3+ result 3 {topic} "message"   changeTopic
    //3-
    //2+  result 2   changeTopic
    //2-  
    //1+  result 1     changeTopic
    //1 - result 0    changeTopic

    //switch

    return; 
};

function notRepeatQuestion(shuffledQuestions, historyExperience) {

  return [...shuffledQuestions].every( question => {
      !historyExperience.include(question)
  })
};

// Array.find(!historyExperience.include(question))

export function showQuestion(){
  //Question
  const headerTemplate = `<h2 class="title">%title%</h2>`;

  currentQuestion = checkBeforeShowQuestion(currentTopic, currentLevel, historyExperience);

  while (currentQuestion === null || finishedTopic()) {
    changeCurrentlyTopic();
    checkBeforeShowQuestion(); 
  }

  if (!(currentQuestion === null && !finishedTopic() )) {
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