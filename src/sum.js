function sum(a, b) {
  if (!a || !b) {
    return undefined;
  }

  return parseInt(a) + parseInt(b);
}
module.exports = sum;
