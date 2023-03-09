import { questions } from "./dataBase.js";

export function nextQuestion (currentTopic, currentLevel, historyExperience ) {
    let i = 0; 
    let foundElement = false; 
    let result; 

    while ((i < questions.length-1) || (!foundElement)) {
        if (questions[i].topic === currentTopic) {
            if (questions[i].level === currentLevel) {
                if (!historyExperience.includes(questions[i])) {
                    foundElement = true; 
                    result = questions[i]; 
                }
            }
        }
    };

    if (foundElement === true) {
        return result;
    };
}; 

// if return is Null === there are not more questions of that topic and level