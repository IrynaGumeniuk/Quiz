import { questions } from "../dataBase.js"; 
import { listContainer, submitBtn } from "../elements.js";
import { clearPage } from "./clearPage.js"; 
import { showQuestion } from "./showQuestion.js";
import { levels, questionIndex } from "../../index.js"


export function checkAnswer()
{
  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
  const userAnswer = parseInt(checkedRadio.value);


  if(userAnswer === !questions[questionIndex]["correct"])
   {
         return false;
   }
   else
   {
      //  //if any answer was selected
      if(!checkedRadio)
      {
         submitBtn.blur();
         return false;
      }
   }
   return true;
};

export function checkLastAnswer(){
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







/*
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
  //changeCurrentlyTopicQuestion();

  //change questionIndex
  if (userAnswer === questions[questionIndex]["correct"]) { 
    
    let currentScore = scores.get(currentTopic);
    scores.set(currentTopic, currentScore+1);

    return true; 

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
/*