
function isPalindrome(word) {
  // Write your algorithm here
    let original = word.toString();
    let result = original.split("").reverse().join("");
    return original === result;
    }
  
  console.log(isPalindrome("mom"));
  console.log(isPalindrome("robot"));

/* 
  Add your pseudocode here
  function isPalindrome(word){
  let original = string();
  let result = original.split("").reverse().join("");
  return original === result;
  }

*/
/*
  Add written explanation of your solution here
  -declare two functions one stating the orginal state of the word
  and the second stating the reversed version of the orginal word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
