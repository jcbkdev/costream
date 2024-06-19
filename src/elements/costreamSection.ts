import { getChannelInfoContentElement, getCostreamSection } from "../utils/domUtils";
import { addCostream } from "./costreamStream";

export function addCostreamSection(){
    const result = getCostreamSection();
    if(result != null){
        result.remove();
        return;
    }

    const channelInfoElement = getChannelInfoContentElement();
    if(!channelInfoElement) return;

    const costreamSection = document.createElement("div");
    costreamSection.id = "costreamSection";
    costreamSection.innerHTML = `
    <div id="costreamSection-header">
    </div>
    <div id="costream-streams">
    </div>
    `
    
    channelInfoElement.insertBefore(costreamSection, channelInfoElement.firstChild);

    const costreamSectionHeader = document.getElementById("costreamSection-header");
    if(!costreamSectionHeader) return;

    const addStreamBtn = document.createElement("button");
    addStreamBtn.innerText = "Add Channel";
    addStreamBtn.classList.add("costreamAddBtn");
    addStreamBtn.addEventListener("click", () => {
        let streamer = prompt("Enter costreaming channel name:")?.toLowerCase();
        if(!streamer) streamer = "";
        if(streamer === "costream-cancel" || streamer.replace(/\s/g, "") === ""){
            return;
        }
        addCostream(streamer);
    })

    costreamSectionHeader.appendChild(addStreamBtn);
}
