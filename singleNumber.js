/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var uniqueNums = [];
    for(var i=0; i< nums.length; i++) {
        
        if(uniqueNums.indexOf(nums[i]) === -1) {
            uniqueNums.push(nums[i]);
        }else {
            uniqueNums.splice(uniqueNums.indexOf(nums[i]), 1);
        }
        
    }
    
    return uniqueNums[0]
};

console.log(singleNumber( [4,1,2,1,2]))

// expected: 4