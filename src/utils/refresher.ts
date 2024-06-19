import { sleep } from "./sleep";

export async function refresher(variable: Function, msg = "refreshing...", onTrue = true){
    while(variable() == onTrue){
        console.log(msg);
        await sleep(5000);
    }
    console.log("after refresh")
}