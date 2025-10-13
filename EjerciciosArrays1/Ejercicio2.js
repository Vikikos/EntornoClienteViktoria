const paises = ['España', 'Francia', 'Alemania', 'Italia'];
for (const pais in paises) {
  console.log(paises[pais]);
}
console.log('');
delete paises[0];

for (const pais in paises) {
  console.log(paises[pais]);
}
