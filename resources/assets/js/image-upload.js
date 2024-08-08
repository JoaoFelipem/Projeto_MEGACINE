'use strict';

file.addEventListener("change", previewFile);
capa.addEventListener("input", previewText);

function previewFile({ target }) {
  let file = target.files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    capa.value = reader.result;
    preview.src = reader.result;
  };
}

function previewText({ target }) {
  let base64 = target.value.replace(/^data:image\/[a-z]+;base64,/, "");
  preview.src = `data:image/png;base64,${base64}`;
}

