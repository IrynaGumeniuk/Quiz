import { questions } from "./dataBase.js";
import { questionIndex } from "./checkAnswer.js";
import { headerContainer, listContainer }  from "./elements.js";
import { Html2 } from "../index.js";

let correctAnswer = 

function changeCurrentlyTopicQuestion() {
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

  return [...questions].every( question => {
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
  const title = headerTemplate.replace("%title%", changeCurrentlyTopicQuestion(questions[questionIndex]["question"]));
  headerContainer.innerHTML = title;

  //Answers
  let answerNumber = 1;
  let answerText;
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