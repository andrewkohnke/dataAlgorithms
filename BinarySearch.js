/* Binary Search
    TimeComplexity: O(logN) - iterate half each time
    SpaceComplexity: O(1) - Consistant variables
    Pseudo Code:
    1. Create "left" pointer variable.
    2. Create "right" pointer variable.
    3. Create "while loop" for while left <= right.
      a. Create middle variable by adding right + left /2 (rd dwn)
      b. Create middle index.
      c. Create match condition match = target, return mid.
      d. Create greater than target, change pointer to mid - 1.
      e. Create less than target, change pointer to mid + 1.
*/
var search = function(nums, target) {
  let left = 0;
  let right = nums.length -1;

  while (left <= right){
    let middle = Math.floor((left + right) / 2);
    let newMatch = nums[middle];      // gets value

      if (newMatch === target){
        return middle;
      } else if (newMatch > target) {   // greater > target, adjust pointers
        right = middle - 1;
      } else {
        left = middle + 1;
      }
  }
    return -1;
};




/*
    https://www.youtube.com/watch?v=zl04yByV1Ac
    https://leetcode.com/problems/binary-search/
*/
