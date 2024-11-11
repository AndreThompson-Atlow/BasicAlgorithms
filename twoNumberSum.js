function twoNumberSum(array, targetSum) {
  let nums = {};
  let ans = [];

  for (let i = 0; i < array.length; i++){
    let currentNum = array[i];
    let requiredNum = targetSum - currentNum;

    if(nums[requiredNum]){
      ans = [requiredNum, currentNum];
    } else {
      nums[currentNum] = true;
    }
  }
  return ans;
}