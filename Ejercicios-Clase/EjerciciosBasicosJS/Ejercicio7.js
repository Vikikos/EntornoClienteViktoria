let espacios = '';
for (let i = 0; i < 20; i++) {
  for (let j = 0; j <= i; j++) {
    espacios += '  ';
  }
  console.log(espacios + '*');
  espacios = '';
}
