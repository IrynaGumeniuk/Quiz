import { headerContainer, listContainer } from '../elements.js';

//Clean HTML page and render current question
export function clearPage(){
    headerContainer.innerHTML = " ";
    listContainer.innerHTML = " ";
};