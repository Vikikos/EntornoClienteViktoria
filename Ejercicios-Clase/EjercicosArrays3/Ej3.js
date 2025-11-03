let nombres = new Set(['viki','belen','carlos','laura','juan']);
nombres.add('guille');

if(nombres.has('laura')){
    nombres.delete('laura');
}else{
    nombres.delete('carlos');
}

console.log(nombres)