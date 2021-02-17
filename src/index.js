
module.exports = function towelSort (matrix) {
    let result = [];
    if (typeof matrix === "undefined") return result;
    for (let i = 0; i < matrix.length; i++) {
        if (i%2 === 0) {
            for (let element of matrix[i]) {
                result.push(element);
            }
        }
        else {
            for (let element of matrix[i].reverse()) {
                result.push(element);
            }
        }
    }
  if (result.length > 0) return result;
  else return [];
}
