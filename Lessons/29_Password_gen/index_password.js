function generatePassword(lenght, includeLowerCase,includeUppercase, includeNumbers,  includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWYS";
    const numberChars = "1234567890";
    const symbolChars = "!@#%^&*()-_=+[]{}+$=-";
    

    let allowedChars = "";
    let pwrd  =  "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeNumbers ?  numberChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(lenght <= 0){
        return 'Please insert a password longer than 1 char. ';
        
    }
    if(allowedChars.length === 0 ){
        return 'Please select more than 1 charachter type';

    }
    for(let i= 1;i <lenght;i++){
        let random = Math.floor(Math.random() * passwordLength);
        pwrd+= allowedChars[random];  
    }
    return pwrd;
}



const passwordLength = 50; 
const includeLowerCase = true; 
const includeUppercase= false ;
const includeNumbers = false;
const includeSymbols = false; 

const p = document.getElementById('pass');


const password =  generatePassword(passwordLength, includeLowerCase,includeUppercase,includeNumbers,includeSymbols);

// console.log(`Generated Password: ${password}`);

p.textContent = password;

