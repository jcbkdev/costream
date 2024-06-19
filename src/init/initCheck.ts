import { sleep } from "../utils/sleep";
import { init } from "./init";
import { getStateFirstInitialized, getStateReinitializing, setStateReinitializing } from "./state";

export async function initCheck(){
    while(true){
        if(getStateFirstInitialized() && getStateReinitializing() === false){
            console.log("init check")
            const costreamBtn = document.querySelector("#costreamBtn");
            if(costreamBtn === null){
                console.log("reinitializing");
                setStateReinitializing(true);
                init();
            }
        }
        await sleep(5000);
    }
}
