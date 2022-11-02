/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttach = 25;
let jamieLannisterAttack = 35;

if(jonSnowAttach > jamieLannisterAttack){
    console.log('Jon Snow has a better attach than Jamie Lannister');
} else if(jamieLannisterAttack > jonSnowAttach){
    console.log('Jamie Lannister has a better attach than Jon Snow');
} else {
    console.log("It's a tie")
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if(jonSnowHealth < jamieLannisterAttack){
  console.log('Jon Snow has been slain!!!');  
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

// One of the town's people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon's health by 50pts. However, Jon's health cannot exceed 100. Using a if else statement, raise Jon's health to the appropriate level.

let healthKit = 50;

if(jonSnowHealth >= healthKit){
    jonSnowHealth = 100;
} else {
    jonSnowHealth += healthKit;
}
console.log(jonSnowHealth);

let coinLandsHeads = false;

if(coinLandsHeads === true){
    console.log('They continue to fight and Jamie takes Jon head');
} else {
    console.log(`Jon is allowed to run away`);
}

// for (let i=1; i<=5; i++){
//     jonSnowHealth -= jamieLannisterAttack;
//     console.log(`Jon Snow's health is ${jonSnowHealth}`)

//     if(jonSnowHealth <=0){
//         console.log(`Jon Snow has beeen Slain`)
//         break;
//     }
// }

for(let i = 0; i < 5; i++)
{
    jonSnowHealth -= jamieLannisterAttack;
    if(jonSnowHealth <= 0)
    {
        console.log(`Jon Snow has died after Attack #${i + 1}`);
        break;
    }
    else
    {
        console.log(`Jon Snow's Health: ${jonSnowHealth}`);
    }
}

console.log(`Made some changes`)