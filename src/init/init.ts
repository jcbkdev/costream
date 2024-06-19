import { getStateReinitializing, getStateFirstInitialized, setStateFirstInitialized, setStateReinitializing } from "./state";
import { refresher } from "../utils/refresher";
import { addCostreamButton } from "../elements/costreamButton";
import { addStyles } from "../styles/styles";
import { sleep } from "../utils/sleep";
import { isAboutSectionLoaded, isChannelHeaderRightLoaded, isChannelStreamInformationLoaded, isOnHomepage } from "../utils/domUtils";

export async function init(){
    await refresher(isOnHomepage, "still on homepage");
    await refresher(isAboutSectionLoaded, "still loading about section", false)
    await refresher(isChannelStreamInformationLoaded, "still loading channel stream info", false)
    await refresher(isChannelHeaderRightLoaded, "still loading header right", false)
    getStateFirstInitialized()? await sleep(2000) : await sleep(4000);
    addCostreamButton();
    addStyles();
    
    if(getStateReinitializing()){
        setStateReinitializing(false);
    }

    await sleep(2000);
    if(!getStateFirstInitialized()){
        setStateFirstInitialized(true);
    }
}