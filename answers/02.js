/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {

  let arr1 = arr.sort();
  //console.log(arr);

  if (arr1.length % 2 === 0) {
    let indexeven = arr1.length / 2;
    let indexeven1 = (arr1.length / 2) - 1;

    // console.log("herererer" +round(arr[arr.length /2] + arr[(arr.length /2)-1] /2) )
    return round((arr1[indexeven] + arr1[indexeven1]) / 2);
  }
  let index = Math.floor(arr1.length / 2);

  return arr1[index];
  /* IMPLEMENT ME */
};

//console.log( median([6,2,3,4,9,6,1,0,5]))
//console.log(median([1,2,3]));
//console.log(median([1,2,3]))
//console.log(median([1,2,3,4]))
//console.log(median([3,4,1,2]))
// Don't change below:

module.exports = { median };
