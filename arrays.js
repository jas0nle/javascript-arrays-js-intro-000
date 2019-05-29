var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = [1];
  myArray.unshift(element);
  return myArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var Array = array;
  Array.unshift(element);
  return Array;
}

function addElementToEndOfArray(array, element) {
  const Array = [1];
  Array.push(element);
  return Array;
  
}

function destructivelyAddElementToEndOfArray(array, element) {
  var Array = array;
  Array.push(element);
  return Array;
  
}