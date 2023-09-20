// code your solution here
/*function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}`);
    return `roller-skate`;
}
    saturdayFun();

function mondayWork(activity = 'go to the office') {
    console.log(`This Monday, I will ${activity}`);
    return `go to the office`;
}
    mondayWork();
*/

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }
    saturdayFun()
    
    let mondayWork = function(activity="go to the office"){
     return `This Monday, I will ${activity}.` 
    }
    mondayWork()
    
    function wrapAdjective (style="*") {
      return function(stringOne="special"){
        return `You are ${style}${stringOne}${style}!`
      }
    }
    
    let Calculator = {
      add: function (a,b){
        return a+b
      } ,
      subtract: (a,b) => {
        return a - b
      } ,
      multiply: (a,b) => {
        return a * b
      } ,
      divide: (a,b) => {
        return a / b
      } ,
    }
    
    
    function actionApplyer (start, array){
      let a = start
        for(let i = 0; i < array.length; i++){
           a = array[i](a)
          }
        return a
    }