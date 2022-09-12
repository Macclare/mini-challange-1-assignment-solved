/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str){
  //create an empty array variable
let element = [];
//use of for loop to loop through the str
for (let i = 0; i < str.length; i++){
  //create a bracketElement variable and store the length of the element
  let bracketElement = element[element.length - 1];
  // make an if statement checking if the element is equal to the open bracket and push into the element (empty) array. 
  // make an else if statement  checking if the open brackets and str are equal to the closed brackets. 
  //if it is, pop out of the array(element) else, return invalid.
  if (str[i] == '(' || str[i]== '['|| str[i] == '{'){
    element.push(str[i]);
  } 
  else if ((bracketElement == '(' && str[i] == ')') || (bracketElement == '[' && str[i] == ']') || (bracketElement == '{' && str[i] == '}')) {
      element.pop();
  }else{   
return 'invalid';
   }
   }
   //check if the element are all equal, if it is equal, return valid, if not return invalid.
   if(element.length == 0){
    return 'valid';
   }else{
    return 'invalid';
}
}

module.exports = isValid;