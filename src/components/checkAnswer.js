import { questions } from "./dataBase.js"; 
import { listContainer, submitBtn } from "./elements.js";
import { clearPage } from "./clearPage.js"; 
import { showQuestion } from "./showQuestion.js";

//Variables
export let score = {  
  // topic: string: result: number
};
export let questionIndex = 0;

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
  changeCurrentlyTopicQuestion();

  //change questionIndex
  if (userAnswer === questions[questionIndex]["correct"]) { 
      score++;
  }

// ended quiz by results (заокруглення)

  //last answer or not
//historyExperience.length !== questions.length - 1

// result: Html: 5 CSS: result -3, JS: 1

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