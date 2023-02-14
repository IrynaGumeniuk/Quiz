import { questions } from "./dataBase.js"; 
import { questionIndex, score } from "../index.js";
import { listContainer, submitBtn } from "./elements.js";
import { clearPage } from "./clearPage.js"; 
import { showQuestion } from "./showQuestion.js";

//Answer button
export function checkAnswer(){
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