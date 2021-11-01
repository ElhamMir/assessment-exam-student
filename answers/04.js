/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  let arr2 = [];
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
    console.log("sum " + sum);
  }
  let average = (sum / arr.length);
  console.log("averahe" + average);
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x = arr[i] - average;
    if (x < 0) {
      x = x * -1;
    }
    arr2.push((x * x));
    // arr2.push(sqrt(sum((x - populationMean)^2)/numberOfValues))
  }
  //console.log(arr2 + "arr2")
  sum = 0;
  for (let k = 0; k < arr2.length; k++) {
    sum  += arr2[k];
  }

  let answer = Math.sqrt(sum / (arr2.length));
  return round(answer);
  /* IMPLEMENT ME */
};
//console.log(stdev([2,4,4,4,5,5,7,9])
//)

// Don't change below:
module.exports = { stdev };
