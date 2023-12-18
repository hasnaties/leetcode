const isExist = (stack, ch) => {
  let doesExist = false;
  stack.forEach(e => {
    if (e === ch) {
      doesExist = true;
    }
  })

  return doesExist;
}

const updateSubString = (subString, stack) => {
  if (subString.length < stack.length || subString.length <= 0) {
    subString.splice(0, subString.length, ...stack);
  }
};

const lengthOfLongestSubstring = function (s) {

  if (s.length === 0) {
    return 0;
  }
  let stack = [];
  let subString = [];

  s.split('').forEach(e => {
    if (!isExist(stack, e)) {
      stack.push(e);
      updateSubString(subString, stack);
    }
    else {
      stack = stack.slice(stack.findIndex((element) => element === e) + 1, undefined);
      updateSubString(subString, stack);
      stack.push(e);
    }
  });
  
  if (subString.length <= 0 && stack.length != 0) {
    subString = stack;
  }
  
  return subString.length;

};