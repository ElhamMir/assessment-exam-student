/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  const results = {};

  for (let i = 0; i < arr.length; i++) {


    if (results[arr[i]]) {
      console.log("results[arr[i]]" + results[arr[i]]);
      results[arr[i]] += 1;
    } else {
      console.log("results[arr[i]]" + results[arr[i]]);
      results[arr[i]] = 1;
      console.log("results[arr[i]]" + results[arr[i]]);
    }
  }
  let keys = Object.keys(results);
  let max = results[keys[0]];
  let maxKey = keys[0];
  for (i = 1; i < keys.length; i++) {
    let value = results[keys[i]];

    if (value > max) {
      max = results[keys[i]];
      maxKey = keys[i];
    }
  }
  return maxKey;
  //  let max = results[j]
  // for(let j = 0; j < results.length ; j++){

  // }
  // Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
  /* IMPLEMENT ME */
};

// Don't change below:

//console.log(mode([6,2,3,4,9,6,1,0,5]))
//console.log(mode([0,1,5,2,6,2,5,0,0]))
module.exports = { mode };
