// File name: 2sum.js
// Author: boasmarbun (https://github.com/boasmarbun)
// Date created: 02/10/2020

function twoSum (nums, target) {
    var diff = 0;
    for (var firstIndex = 0; firstIndex <= nums.length; firstIndex++) {
        diff = target - nums[firstIndex];
        var secondIndex = nums.indexOf(diff, firstIndex+1);
        if(secondIndex != -1) {
            return [firstIndex, secondIndex];
        }
    }
    return [0];
};

// uncomment below for testing
// var testArray1 = [1,2,3,9]
// var target1 = 5
// var testArray2 = [0,3,4,0]
// var target2 = 0
// var testArray3 = [-2, -3, -7, -13, -6]
// var target3 = -8
// var testArray4 = []
// var target4 = 2

// console.log(twoSum(testArray1, target1))
// console.log(twoSum(testArray2, target2))
// console.log(twoSum(testArray3, target3))
// console.log(twoSum(testArray4, target4))