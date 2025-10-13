let espacios = '';
for (let i = 20; i > 0; i--) {
  for (let j = 0; j <= i; j++) {
    espacios += '  ';
  }
  console.log(espacios + '*');
  espacios = '';
}
