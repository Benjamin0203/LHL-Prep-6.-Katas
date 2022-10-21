const checkAir = function (samples, threshold) {
  // Code here!
  let count = 0;
  for (let ele of samples) {
    if (ele === 'dirty') {
      count ++;
    }
  }
  if ((count / samples.length) > threshold) {
    return "Polluted";
  }
  else if ((count / samples.length) < threshold) {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))