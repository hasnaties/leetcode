// O(n*3)
var maximumProduct = function(nums) {
  let maxProduct = undefined;
  let currentProduct = undefined;

  nums.forEach((n, i) => {
    for (let index = 0; index < nums.length; index++) {
      if (i === index) {
        continue;
      } else {
        for (let indexN = 0; indexN < nums.length; indexN++) {
          currentProduct = nums[i] * (nums[index] * nums[indexN]);
          if (indexN === index || indexN === i || currentProduct ===  maxProduct) {
            continue;
          } else {
            if (maxProduct === undefined || currentProduct > maxProduct) {
              maxProduct = currentProduct;
            };
          };
        };
      }
    };
  });

  return maxProduct;
};

// O(n log n)
const  maximumProduct2 = (nums) => {

  nums.sort((a, b) => a - b);

  const topNegative = nums[0] * nums[1] * nums[nums.length - 1];
  const topPositive = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];  

  return Math.max(topNegative, topPositive);
};