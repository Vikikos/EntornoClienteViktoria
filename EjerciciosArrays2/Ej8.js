let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];
console.log(data);
//A
data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
);
//B
//console.log(data);
//C
data.sort (function (n1, n2) {
    //para ordenar numeros
    return n1.age - n2.age;
});
//console.log(data);

//D
data.sort (function (n1, n2) {
    return n1.name.localeCompare(n2.name);
});

//console.log(data);

//E
let d2 = data.filter(function (d1){
    return d1.age >= 30;
});

console.log(d2);