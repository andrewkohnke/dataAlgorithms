/* Two Sum ~ Brute Force (twoNestedLoop),
    TimeComplexity: O(n^2) - nested(n*n)
    SpaceComplexity: O(n) -  Arr + num input, two variables to store indices
*/
var twoSum = function(nums, target){
  for (let i = 0; i < nums.length; i++){    // 2 variables to store indices
    for ( let j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
}

/* Two Sum ~ One loop w/ a HashMap
   TimeComplexity: O(n) - Loops over arr only once, Constant time
   SpaceComplexity: O(n) - Arr as input & a number, using object of length(n+n)
*/
var twoSum = function(nums, target){
  const obj = {};    // declare HashMap (obj)

  for (let i = 0; i < nums.length; i++){    // iterate through the index arr
    if(target - nums[i] in obj){            // difference of HashMap
      return [obj[target - nums[i]], i];    // return HashMap index
    }else{
        obj[nums[i]] = i;                   // push arr in HashMap
    }
  }
}
