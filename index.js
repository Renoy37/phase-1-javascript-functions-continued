// code your solution here
function saturdayFun(argument = "roller-skate") {
  return `This Saturday, I want to ${argument}!`;
}

function mondayWork(argument2 = "go to the office") {
  return `This Monday, I will ${argument2}.`;
}

function wrapAdjective(flair = "*") {
  return function (argument3 = "special") {
    return `You are ${flair}${argument3}${flair}!`;
  };
}
