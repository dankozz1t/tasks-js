function solution(str) {
  const result = str.split(/^(A(B(C)?)?)?$/);
  //   let pattern = /^A(BC?)?$/;
  //   //   const result = /(\d)+/.exec(str);
  //   const result = pattern.exec(str);
  return result;
}
// , @"\s+", " "
console.log(solution('abcdef')); //, ['ab', 'cd', 'ef']
console.log(solution('abcdefg')); //, ['ab', 'cd', 'ef', 'g_']
console.log(solution('')); // []
