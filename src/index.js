import { questions } from "./components/dataBase.js";
import { submitBtn } from "./components/elements.js";
import { clearPage } from "./components/actions/clearPage.js";
import { showQuestion } from "./components/actions/showQuestion.js";
import { isCorrectAnswer } from "./components/actions/checkAnswer.js";
import { shuffle } from "./components/actions/shuffle.js";

let questionIndex = 0;
let currentTopic = "HTML"; 
let currentLevel = 2; 
let historyExperience = [];


let levels = new Map();

levels.set("HTML", 0);
levels.set("CSS", 0);
levels.set("JS", 0);


clearPage();

const shuffledQuestions = shuffle(questions);

showQuestion();  
activateBtn();


function activateBtn() {

 if(checkedRadio){
   document.submitBtn.disabled = false;
   submitBtn.onclick = isCorrectAnswer;
  }
};

export { levels, questionIndex, shuffledQuestions, currentTopic, currentLevel, historyExperience }; 


/*let Html1 = []; 
let Html2 = []; 
let Html3 = []; 
let Css1 = []; 
let Css2 = []; 
let Css3 = []; 
let Js1 = []; 
let Js2 = []; 
let Js3 = []; 

let n = 0;  


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

export {score, questionIndex, Html1, Html2, Html3, Css1, Css2, Css3, Js1, Js2, Js3, n }; */