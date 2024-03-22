function saturdayFun(activity = "roller-skate") {
    if (activity === "bathe my dog") {
        return `This Saturday, I want to ${activity}!`;
    } else {
        return "This Saturday, I want to roller-skate!";
    }
}
console.log(saturdayFun()); 
console.log(saturdayFun("bathe my dog")); 

function mondayWork(activity = 'go to the office') {
    if (activity === "work from home") {
        return `This Monday, I will ${activity}.`;
    } else {
        return "This Monday, I will go to the office.";
    }
}
console.log(mondayWork()); 
console.log(mondayWork("bathe my dog")); 

function wrapAdjective(symbol = '*') {
    return function(adjective = "special") {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

let result = wrapAdjective('*');
let emphatic = result("a hard worker");
console.log(emphatic); 
