/*
Sum of natural numbers, square numbers, and cubed numbers
*/

//sum of natural numbers
function sum(n) {
  if (n == 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}

function sumClosedForm(n) {
  return n * (n + 1) / 2;
}

console.log( "sum(20) = " + sum(20) + " and the closed formula says " + sumClosedForm(20) );

// sum of square numbers
function sumsq(n){
   //var sumsq = 0;
   if (n == 0) {
   return 0;
   }
   else {
      /*for (i = 1; i <=n; i++)
      sumsq += (i * i);
      //return sumsq;*/
      return sumsq(n-1) + n*n;
   }
}
function sumsqClosedForm(n) {
  return n * ((n + 1) * (2*n + 1)) / 6;
}

console.log( "sumsq(3) = " + sumsq(3) + " and the closed formula says " + sumsqClosedForm(3) );

//sum of cube numbers

function sumcube(n){
   //var sumsq = 0;
   if (n == 0) {
   return 0;
   }
   else {
      return sumcube(n-1) + n**3;
   }
}
function sumcubeClosedForm(n) {
  return (n**2 * (n+1)**2)/ 4;
}

console.log( "sumcube(4) = " + sumcube(4) + " and the closed formula says " + sumcubeClosedForm(4) );