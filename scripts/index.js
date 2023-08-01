let para = document.querySelector("#result");

function quadratic(a, b, c) {
  var root1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  var root2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
  return root1 + ", " + root2;
}

para.innerHTML = quadratic(2, 3, -1);
