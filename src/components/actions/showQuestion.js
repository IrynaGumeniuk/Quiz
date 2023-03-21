import { questions } from "../dataBase.js";
import { headerContainer, listContainer }  from "../elements.js";
import { checkBeforeShowQuestion } from "./checkBeforeShowQuestion.js";
import { currentTopic, currentLevel, historyExperience, shuffledQuestions } from "../../index.js"; 
import { checkAnswer, checkLastAnswer } from "../actions/checkAnswer.js";

let currentQuestion; 
let previousLevel = historyExperience.at(-1).level;
let correctAnswer = questions[correct]

function finishedTopic () {
  // before show result
};

function changeCurrentlyTopic() {
    let currentTopicArray = "";

    // if( result)


    // логіка для перевірки по рівню питання та коли треба переключитись на інший topic


    return currentTopicArray;  
};

function changeCurrentLevel (currentLevel, currentTopic, previousLevel, correctAnswer) {
  if(historyExperience.length === 0){
    previousLevel = currentLevel;
  };
  
  if(checkAnswer === true || !== 3){
    currentLevel + 1; //checkAnswer: boolean
  }, else {
    currentLevel - 1;
  };

  

    

    //2+         
    //3+ result 3 {topic} "message"   changeTopic
    //3-
    //2+  result 2   changeTopic
    //2-  
    //1+  result 1     changeTopic
    //1 - result 0    changeTopic

    //switch

    return currentLevelArray; 
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