/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var targetMap = new Map();
    var result = [];
    for(var i=0;i<nums.length;i++) {
        if (targetMap.has(target - nums[i])) {
            result = [targetMap.get(target - nums[i]), i]
        } else {
            targetMap.set(nums[i], i);
        }
    }
    return result
};

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]