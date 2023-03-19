var select = document.getElementById("opcoes");
var imagem = document.getElementById("imagem");

select.addEventListener("change", function() {
  if (select.value == "A10") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/240787/galaxy-a10-preto-back.png?v=637919490905000000";
  } else if (select.value == "A20") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/240577/galaxy-a20-azul-back.png?v=637919489504800000";
  } else if (select.value == "A30") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/240568/galaxy-a30-azul-back.png?v=637919489446870000";
  }
});



