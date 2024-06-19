import { getChannelHeaderRightElement } from "../utils/domUtils";
import { addCostreamSection } from "./costreamSection";

export function addCostreamButton(){
    const headerRightElement = getChannelHeaderRightElement();
    const costreamButton = document.createElement("button");
    
    if(!headerRightElement) return;

    costreamButton.innerText = "Co-Stream";
    costreamButton.id = "costreamBtn"
    costreamButton.classList.add("costreamBtn");
    headerRightElement.appendChild(costreamButton);
    costreamButton.addEventListener("click", addCostreamSection);
    console.log("ADDED BUTTON")
}
