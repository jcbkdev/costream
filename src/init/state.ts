let firstInitialized = false;
let reinitializing = false;

export function setStateFirstInitialized(value: boolean) {
    firstInitialized = value;
}

export function setStateReinitializing(value: boolean) {
    reinitializing = value;
}

export function getStateFirstInitialized(){
    return firstInitialized;
}

export function getStateReinitializing(){
    return reinitializing;
}