#! /usr/bin/env node
//shabang
import inquirer from "inquirer";
let myBALANCE = 10000; //DOLLAR
let myPin = 4231;
let pinAnswer = await inquirer.prompt(
    [
        {
        name:"pin",
        message:"please enter your pin ",
        type:"number"
        }
       
    ]
);
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!");
   let operationAns = await inquirer.prompt(
        [
            {
                
        
            name:"operation",
            message:"please select option",
            type:"list",
            choices:["withdraw","check balance"]
            }
        ]
    );
    console.log(operationAns);
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        );
        myBALANCE -= amountAns.amount;
        console.log("your remaining balance is:"+myBALANCE)
    }else if(operationAns.operation === "check balance"){
        console.log("your balance is:"+ myBALANCE)
    }
}
        
    



else {
    console.log("incorrect pin number");
}
console.log(pinAnswer);