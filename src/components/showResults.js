import { questions } from "../index.js"; 
import { score}  from "./showQuestion.js"; 
import { headerContainer, submitBtn} from "./elements.js"; 

export function showResults() {
    const resultsTemplate = `
      <h2 class="title">%title%</h2>
      <h3 class="summary">%message%</h3>
      <p class="result">%result%</p>
      `;

    let title, message;

    if (score === questions.length) {
      title = "Поздравляем! 🎉";
      message = "Вы ответили верно на все вопросы! 😎👍";
    } else if ((score * 100) / questions.length >= 50){
      title = "Неплохой результат! 😉";
      message = "Вы ответили верно на больше половину вопросов! 👍";
    } else {
      title = "Стоит постараться...🥺 ";
      message = "Пока у вас меньше половины правильных ответов.";
    };

    //Result
    let result = `${score} из ${questions.length}`;

    //Final message
    const finalMessage = resultsTemplate
                          .replace("%title%", title)
                          .replace("%message%", message)
                          .replace("%result%", result);
    
    headerContainer.innerHTML = finalMessage;

    //Change button message to "Play again"
    submitBtn.blur();
    submitBtn.innerHTML = "Начать заново";
    submitBtn.onclick = () => history.go();
};
