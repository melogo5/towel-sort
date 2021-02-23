
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const result = [];
  let rev = false;
  matrix.map(function (elem) {
    if (rev) elem = elem.reverse();
    rev = !rev;
    elem.map(function (el) {
      result.push(el);
    })
  });
  return result;
}
