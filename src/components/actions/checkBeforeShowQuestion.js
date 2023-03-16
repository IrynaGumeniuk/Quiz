import { questions } from "../dataBase.js";

export function checkBeforeShowQuestion (currentTopic, currentLevel, historyExperience ) {
    let itemDataBase = 0; 
    let foundElement = false; 
    let result; 

    while ((itemDataBase < questions.length-1) || (!foundElement)) {
        if (questions[itemDataBase].topic === currentTopic) {
            if (questions[itemDataBase].level === currentLevel) {
                if (!historyExperience.includes(questions[itemDataBase])) {
                    foundElement = true; 
                    result = questions[itemDataBase]; 
                }
            }
        }
    };

    if (foundElement === true) {
        return result;
    };
}; 

// if return is Null === there are not more questions of that topic and level