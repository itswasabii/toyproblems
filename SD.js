//speed detector function

const prompt = require('prompt-sync')({sigint: true});

function SpeedDetector() {


speed=prompt("how fast?")

const speedLimit=70;

if (speed<=70) {

    console.log("OK");
    
}

else if (speed>=130) {
    
    let = demeritPoints = Math.floor((speed - speedLimit) / 5);

    console.log("YOUR LICENSE HAS BEEN SUSPENDED");

}

else {

    let = demeritPoints = Math.floor((speed - speedLimit) / 5);

console.log(`you have earned ${demeritPoints} demerit points`);

}

}

SpeedDetector();

