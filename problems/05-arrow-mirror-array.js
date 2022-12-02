/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = (array) => {
  let arr = []
  for (let i = 0; i < array.length; i++){
    let first = array[i]
    // console.log(array[i])
    arr.push(first)
 }
  for (let j = array.length - 1; j >= 0; j--) {
    let second = array[j]
    // console.log('J loop', array[j])
    arr.push(second)
  }
return arr
}
console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
