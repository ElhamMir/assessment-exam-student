/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  if (arr.length === 0) {
    return;
  }
  //let arr1 = arr.sort();
  //console.log(arr1+"sjfgkzbg")
  //return arr1[0];
  let min1 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min1) {
      min1 = arr[i];
    }
  }
  return min1;

};
  //console.log( min([6,2,3,4,9,6,1,0,5]))
  //console.log( min([-9,-2,-4]))
  /* IMPLMENT ME */



/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let max1 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }
  return max1;
  /* IMPLEMENT ME */
};
//console.log( max([6,2,3,4,9,6,1,0,5]))
/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  if (arr.length === 0) {
    return;
  }
  let difference = max(arr) - min(arr);
  return difference;
  /* IMPLEMENT ME */
};

// Don't change below:

module.exports = { min, max, range };
