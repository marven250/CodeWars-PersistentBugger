function persistence(num) {
  let arr = num.toString().split("");
  let number;
  let count = 0;
  while (arr.length !== 1) {
    number = arr.reduce((a, b) => {
      return a * b;
    });
    count++;
    arr = number.toString().split("");
  }
  return count;
}
