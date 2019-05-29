var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const myArray = [1];
  myArray.unshift(element);
  return myArray;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var Array = array
  array.unshift(element);
  return array;
}