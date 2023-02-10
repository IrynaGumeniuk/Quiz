import { questions, questionIndex } from "../index.js";
import { headerContainer, listContainer }  from "./elements.js";

export function showQuestion(){
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

//Answers
    const questionAnswers = questions[questionIndex]["answers"];
    let idQuiz = questionIndex + 1;
    let answerText;
    for (answerText of questionAnswers){
        const questionTemplate = 
        `<li>
          <label>
            <input value="%number%" type="radio" class="answer" name="answer" />
            <span>%answer%</span>
          </label>
         </li>`;
        const answerHTML = questionTemplate
                            .replace("%answer%", answerText)
                            .replace("%number%", idQuiz);
        
        listContainer.innerHTML += answerHTML;
        idQuiz++;