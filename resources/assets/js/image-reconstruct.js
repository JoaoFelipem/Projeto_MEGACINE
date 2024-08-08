'use strict';

file.addEventListener("change", previewFile);
imagem.addEventListener("input", previewText);

function reconstructFile({ target }) {
    let file = target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
        preview.src = reader.result;
    }
}