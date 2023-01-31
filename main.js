var raceNumber = Math.floor(Math.random() * 1000);

var earlyReg = false;

var age = 10;


if (age > 18 && earlyReg === true) {
    raceNumber += 1000;
    console.log(raceNumber);

}

if (age > 18 && earlyReg === true) {
    console.log(`You will race at 9:30 A.M. Your race number is ${raceNumber}.`)
}
else if (age > 18 && earlyReg === false) {
    console.log(`You will race at 11:00 A.M. Your race number is ${raceNumber}.`)
}
else if (age < 18) {
    console.log(`You will race at 12:30 P.M. Your race number is ${raceNumber}.`)
}
