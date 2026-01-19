var appStart = getTime();
console.log("App has begun initialization");

function timeSinceInit(){
    console.log(((getTime() - appStart)/1000) + " Seconds since app intialization");
}

function newLabel(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newLabel must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newLabel must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    textLabel(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "text-align", "center");
    setProperty(desiredId, "font-size", fontSize);
}

function newButton(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newButton must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newButton must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    button(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "text-align", "center");
}

function newInput(desiredId, desiredMessage, desiredXPosition, desiredYPosition, elementWidth, elementHeight, fontSize){
    if(typeof desiredId !== "string"){
        throw new Error("desiredId in newInput must be a string");
    } if(typeof desiredMessage !== "string"){
        throw new Error("desiredMessage in newInput must be a string");
    }
    var trueXPosition = desiredXPosition - elementWidth/2;
    var trueYPosition = desiredYPosition - elementHeight/2;
    textInput(desiredId, desiredMessage);
    setPosition(desiredId, trueXPosition, trueYPosition, elementWidth, elementHeight);
    setProperty(desiredId, "font-size", fontSize);
    setProperty(desiredId, "text-align", "center");
}

function newScreenNavigationButtons(previousScreenId, nextScreenId, backButtonId, nextButtonId){
    if ((typeof previousScreenId !== "string") || (typeof backButtonId !== "string")){
        throw new Error("newScreenNavigationButtons requires string based parameters, nextScreenId and nextButtonId are optional");
    }
    newButton(backButtonId, "Back", 60, 420, 75, 40);
    onEvent(backButtonId, "click", function(){
        setScreen(previousScreenId);
    });
    if ((typeof nextButtonId === "string") && (typeof nextScreenId === "string")){
        newButton(nextButtonId, "Next", 260, 420, 75, 40);
        onEvent(nextButtonId, "click", function(){
        setScreen(nextScreenId);
            });
    } else{
        return;
    }
}

console.log("Fetching dataset...");
var datasetFetchInit = getTime();
var passwordsRank = getColumn("Passwords", "rank");
var passwordsCategory = getColumn("Passwords", "category");
var passwordsValue = getColumn("Passwords", "value");
var passwordsTime_Unit = getColumn("Passwords", "time_unit");
var strength = getColumn("Passwords", "strength");
var indexLimit = (strength.length - 1);
for(var index; index < indexLimit; index++){
    passwordsRank[index] = (passwordsRank[index]) - 1;
}
console.log("Finished fetching dataset in " + ((getTime() - datasetFetchInit)/1000) + " seconds and received " + (indexLimit + 1) + " entries \n");
timeSinceInit();

function fetchIndex(indexNumber){
    whileTrue
}




// UI Element Creation Below

// Already on screen1 so no set screen required
newLabel("screen1Title", "Passwords Dataset Analyzer", 160, 60, 300, 100, 25);
newLabel("screen1Intro", "Made by rjdklp, please enjoy", 160, 165, 250, 150, 18);
newButton("screen1NextButton", "Next", 260, 420, 75, 40);
onEvent("screen1NextButton", "click", function(){
    setScreen("screen2");
});
newButton("screen1Github", "Latest Source Code", 100, 310, 160, 160);
setProperty("screen1Github", "font-size", 35);
setProperty("screen1Github", "font-family", "Times");
setProperty("screen1Github", "text-color", rgb(0, 0, 0));
setProperty("screen1Github", "background-color", rgb(84, 234, 189));
onEvent("screen1Github", "click", function(){
    open("https://raw.githubusercontent.com/rjdklp/APCSP-25-26/refs/heads/main/unit6/U6L13/U6L13.js", undefined, "Window");
});

setScreen("screen2");
// Code for screen2 here
newScreenNavigationButtons("screen1", "screen3", "screen2BackButton", "screen2NextButton");
newLabel("screen2Title", "Passwords Visualizer", 160, 60, 400, 100, 25);
newLabel("screen2Intro", "Allows for visualization of user defined indexes in the passwords dataset", 160, 120, 250, 150, 14);
newLabel("screen2ListIndexInputUse", "Click on the text box to send a request", 160, 140, 250, 35, 10);
newLabel("screen2Rank", "Rank", 32, 215, 100, 35, 10);
newLabel("screen2Category", "Category", 96, 215, 100, 35, 10);
newLabel("screen2Value", "Value", 160, 215, 100, 35, 10);
newLabel("screen2TimeUnit", "Time Unit", 224, 215, 100, 35, 10);
newLabel("screen2Strength", "Strength", 288, 215, 100, 35, 10);
newLabel("screen2RankOut", "", 32, 230, 100, 35, 12);
newLabel("screen2CategoryOut", "", 96, 230, 100, 35, 12);
newLabel("screen2ValueOut", "", 160, 230, 100, 35, 12);
newLabel("screen2TimeUnitOut", "", 224, 230, 100, 35, 12);
newLabel("screen2StrengthOut", "", 288, 230, 100, 35, 12);
newInput("screen2ListIndexInput", "Insert a number between 1 and 494", 160, 160, 220, 35, 10);

setScreen("screen3");
// Code for screen3 here
newScreenNavigationButtons("screen2", undefined, "screen3BackButton", undefined);

setScreen("screen1");