var twoSum = function (nums, target) {
  let hashMap = new Map();
  for (i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      let j = hashMap.get(nums[i]);
      return [j, i]
    }
    let diff = target - nums[i];
    hashMap.set(diff, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));