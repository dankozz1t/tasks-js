function nextBigger(n) {
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length - 1;
  while (i > 0) {
    if (chars[i] > chars[i - 1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length - 1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length - 1] = suf[i];
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log('->' + num);
  return num;
}

// function nextBigger(n) {
//   let d = n.toString().split('');

//   let p = -1;
//   for (let i = d.length - 1; i > 0; i--) {
//     if (+d[i] > +d[i - 1]) {
//       p = i - 1;
//       break;
//     }
//   }

//   if (p == -1) return p;

//   let right = d.splice(p);

//   let pv = right.splice(0, 1)[0];

//   let mm = null,
//     mmi = null;
//   for (let i = 0; i < right.length; i++) {
//     if (right[i] > pv) {
//       if (mm == null || right[i] < mm) {
//         mm = right[i];
//         mmi = i;
//       }
//     }
//   }

//   if (mmi == null) return -1;

//   right.splice(mmi, 1);
//   right.push(pv);
//   right = right.sort();

//   let ret = +d.concat([mm]).concat(right).join('');
//   if (ret < n) return -1;

//   return ret;
// }

console.log(nextBigger(12)); //21
console.log(nextBigger(513)); //, 531
console.log(nextBigger(2017)); //, 2071
console.log(nextBigger(414)); //, 441
console.log(nextBigger(144)); //, 414
