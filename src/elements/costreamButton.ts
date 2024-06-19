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

    /* 
    bg var(--color-background-button-primary-default)
    text var(--color-text-button-primary)
    font weight bold
    border radius var(--border-radius-medium)
    padding 5px 10px
    margin-left 1rem

    hover:
    bg var(--color-background-button-brand-hover)

    active:
    bg var(--color-background-button-brand-active)
    */
}
