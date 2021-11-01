
/*

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%  CREDIT CARD CHECKER  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-------------- checa para saber se um cartão de crédito é valido ou
               não
-------------- usa luhn algorithm
-------------- .reduce()  .filter () .forEach() [... new Set(arr)]


*/



// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]




//***********************  FUNCTION  ***********************************
//**********************************************************************
//-------Luhn algorithm: começa do ultimo digito. vou alternando entre x2
//        ou x1. Se for >9, eu subtraio 9. Somo todos os resultados na função
//        validateCred ()

function luhnAlgorithm(index,num) {
    let multiply = index%2 ==0 ? num*2 : num;
    return multiply > 9 ? multiply-9 : multiply;
}


// *************************  FUNCTION  ******************************
//********************************************************************
//------- uses Luhn Algorithm to check if a credit card number is valid
function validateCred(arr) {
    if (arr.length !==16) {
       return false
    }
    
    let validating =arr.reduceRight((total, atual, index) => {total += luhnAlgorithm(index,atual); return total }, 0) 
    
    return validating%10 ==0 ? true : false

}

//*****************************************************************
//***************************  FUNCTION  **************************
//-------------------------------------- find all the invalid cards
let invalid = [];
function findInvalidCards (arr) {
    invalid = arr.filter(item => !validateCred(item))
    return invalid
}


//******************************************************************
//***************************  FUNCTION  ***************************
//-------------------------------------- find all invalid companies
let invalidCompanies =[]
let idInvalidCardCompanies = function (arr) {
    arr.forEach(element => {
    switch (element[0]) {
        case 3: invalidCompanies.push("amex"); break;
        case 4: invalidCompanies.push("visa"); break;
        case 5: invalidCompanies.push("mastercard"); break
        case 6: invalidCompanies.push("discover"); break
        default: console.log("undentified company")
    }
} ) 

//------------------------------------------- in comments A
    return [...new Set(invalidCompanies)]
}


//**********************************************************************
//*********************  FUNCTION **************************************
//-------------------------------------- convert str into a number array

function strToNum(str) {
    let arr = str.split("");
   return arr.map (element => parseInt(element))
}


//-----------------------------------------------------------------------------------
findInvalidCards(batch)
console.log(idInvalidCardCompanies(invalid))
console.log(strToNum("207284"))

/*

************************************************************************************
******************************  COMMENTS ******************************************
************************************************************************************

--------------A)
     new Set(array) -> remove duplicates
    [... new Set()] -> convert back to array

*/



