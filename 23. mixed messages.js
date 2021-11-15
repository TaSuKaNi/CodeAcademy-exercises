/*
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  MIXED MESSAGES  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// ------------------------------------------------------------------------------------------------- creates a random text
*/


const obj = {
names: ["Adam", "Beatrice", "Mike", "Thunder"] ,
year: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"] ,
character: ["Harry Potter", "Ronalde Weasley", "Hermione", "Alvos Dumbledores", "Severus Snape", "Draco Malfoy", "Dobby", "Hagrid" ] ,
place: ["Great Hall", "Dormitories", "Dungeons", "forbiden forest", "Hogsmead", "Askaban"] ,
doing: ["making love", "fighting", "studying how to make babies", "smoking potions", "doing nothing at all, I swear!"] 
}

//-----------------------------------  FUNCTION --------------------------------------------------------------------------
//----------------------------------------------------------------------------- takes a random element from the arr in obj

findRandomNumber = (arr) => {return Math.floor(Math.random()*arr.length)}
findRandomElement = (arr) => {return arr[findRandomNumber(arr)]}


//---------------------------------------------------------------------------- Pushes the random selection to a new object
let randomObj = { }

Object.keys(obj).forEach ( el => {
    randomObj[el] = findRandomElement(obj[el])
})


//----------------------------------------------------------------------------------------------------- The random message

console.log(`Your name is ${randomObj.names} and it is your ${randomObj.year} year in Hogwarts! On your first day you meet ${randomObj.character} who becomes your best friend! A week later you are found with your BFF at the ${randomObj.place} ${randomObj.doing}. The End. `)


/*
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  THE END  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


*/