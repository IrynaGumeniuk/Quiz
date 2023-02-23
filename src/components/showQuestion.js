import { questions } from "./dataBase.js";
import { questionIndex } from "./checkAnswer.js";
import { headerContainer, listContainer }  from "./elements.js";
import { Html2 } from "../index.js";

function changeCurrentlyTopicQuestion(data) {
    let currentTopicArray = "";
    
    


    return currentTopicArray;  
}

function changeCurrentLevel (currentLevel, currentTopic, previousLevel) {
    let defaultLevel = 2;
    
    

    return currentLevelArray; 
}

function notRepeatQuestion() {

  //compire data and history expirience user array

}

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