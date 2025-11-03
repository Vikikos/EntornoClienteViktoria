let selectPaises = document.getElementById('paises');

selectPaises.addEventListener('change',() => {
    alert('Has seleccionado: ' + selectPaises.value);
});