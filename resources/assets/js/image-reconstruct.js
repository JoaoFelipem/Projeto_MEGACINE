
document.addEventListener('DOMContentLoaded', function () {
    const capa = document.getElementById('capa');
    const base = capa.textContent;
    console.log(base);
    preview.setAttribute('src', base);
});