

const prompt = require('prompt-sync')({sigint: true});

function SpeedDetector() {


speed=prompt("how fast?")

const speedLimit=70;

if (speed<=70) {

    console.log("OK");
    
}
else {
    
    const demeritpoints= Math.floor(( speed - speedLimit ) / 5 );

    console.log(`you have earned ${demeritpoints} demeritpoints`);
}



    
}


