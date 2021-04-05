// MIDDLE FUNCTION

const middle = function(arr) {
  const numOfElements = arr.length;
  const newArr = [];
  if (numOfElements <= 2) {
    return newArr;
  }
  const oddIndex = (arr.length - 1) / 2;
  const evenIndex1 = (arr.length / 2) - 1;
  const evenIndex2 = arr.length / 2;
  if (!(numOfElements % 2 === 0)) {
    newArr.push(arr[oddIndex]);
  } else {
    newArr.push(arr[evenIndex1], arr[evenIndex2]);
  }
  return newArr;
};

// EXPORT

module.exports = middle;