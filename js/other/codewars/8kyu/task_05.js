function updateLight(current) {
  switch (current) {
    case 'green':
      current = 'yellow';
      break;
    case 'yellow':
      current = 'red';
      break;
    case 'red':
      current = 'green';
      break;
  }
  return current;

  //   return current === 'yellow'
  //     ? 'red'
  //     : current === 'green'
  //     ? 'yellow'
  //     : 'green';
}
