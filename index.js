/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

var votingAge = 7

if(votingAge >= 18){
    console.log('true')
}
else{
    console.log(false)
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let sky = 'sunset';
let view = 'pretty';

if(view === 'pretty'){
    sky = "beautiful";
}
else{
    sky = "blue";
}

// console.log(sky);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var date = '1999'
Number(date);

// console.log(date);

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogAge(age){
    return (age * 7);
}

// console.log(dogAge(3))

//html window example


// var age = window.prompt("What is your age?");
// document.write("Your age in dog years is ", age * 7)


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFeed(age, weight){
    if (age >= 1 && weight <= 5){
        return(weight * 0.05);
    }
    else if (age >= 1 && weight > 5 && weight <= 10){
        return(weight * 0.04);
    }
    else if (age >= 1 && weight > 10 && weight <= 15){
        return(weight * 0.03);
    }
    else if(age >= 1 && weight > 15){
        return(weight * 0.02);
    }
    else if (age >= 0.16 && age <= 0.33){
        return(weight * 0.1);
    }
    else if (age >= 0.33 && age <=0.58){
        return(weight *0.05);
    }
    else if (age >= 0.58 && age < 1){
        return(weight *0.04);
    }
    
}
// console.log(dogFeed(1, 15))
// console.log(dogFeed(0.25, 15))


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


var random1 = Math.random();
    if (random1 < 0.3){
        random1 = "rock"; 
    }
    else if (random1 <= 0.6){
        random = "paper";
    }
    else {
        random1 = "scissors";
    }

//     // console.log(random)

    var random2 = Math.random();
    if (random2 < 0.3){
        random2 = "rock"; 
    }
    else if (random2 <= 0.6){
        random2 = "paper";
    }
    else {
        random2 = "scissors";
    }

 function game (hand1, hand2){
     if(hand1 === hand2){
         return "tie!";
     }
     if (hand1 === "rock"){
         if(hand2 === "scissors"){
            return "rock wins!";
         }
         else {
            return "paper wins!";
         }
        }
        if (hand1 === "paper"){
            if( hand2 === rock){
                return "paper wins!";
            }
            else {
                return "scissors wins!";
            }
         }
         if (hand1 === "scissors"){
             if (hand2 === "paper"){
                 return "scissors wins!";
             }
             else{
                 return "paper wins!";
             }
         }
        }
        
//  console.log(game(random1, random2));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function converter (km){
    Number(km);
    return (km / 1.6 + " miles");
}

// console.log(converter(5))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetCM (feet){
    Number(feet);
    return (feet * 30.48 + " centimeters");
}

// console.log(feetCM(3))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong (bottles){
    while (bottles > 0){
        numberleft = bottles -1;
        console.log(bottles + " bottles of soda on the wall, " + bottles + " bottles of soda, take one down pass it around " + numberleft + " bottles of soda on the wall");
        bottles--;
    }
}

// console.log(annoyingSong(10))

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(score){
if (score >= 90){
    return "A"
}
if (score >= 80 && score < 90){
    return "B"
}
if (score >= 70 && score < 80){
    return "C"
}
if (score >= 60 && score < 70){
    return "D"
}
if (score < 60){
    return "F"
}
}

// console.log(grade(89))
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method


/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// var hand1 = window.prompt("rock, paper, or scissors?");



