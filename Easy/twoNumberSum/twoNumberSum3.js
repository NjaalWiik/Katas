function twoNumberSum(array, targetSum) {
  const nums = {};
  for (let i = 0; i < array.length; i++) {
    const needed = targetSum - array[i];
    if (needed in nums) {
      return [array[i], needed];
    } else {
      nums[array[i]] = true;
    }
  }
  return [];
}
