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
  else if (select.value == "A31") {
    imagem.src = "https://imagens.trocafone.com/images/phones/dt-galaxy-a31-azul-costas.png";
  }
  else if (select.value == "A32") {
    imagem.src = "https://static.lojaonlinetim.com.br/desbloqueados_production/product_images/0001/6867/large.png?1630092050";
  }
  else if (select.value == "A50") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/218439/galaxy-a50-preto-back.png?v=637862482390330000";
  }
  else if (select.value == "A51") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/240677/galaxy-a51-preto-costas.png?v=637919490184970000";
  }
  else if (select.value == "A52") {
    imagem.src = "https://www.atacadogames.com/imagem/samsung/celular-samsung-a52-a525m-128gb-6gb-ram-dual-sim-tela-6-5-cameras-64mp-12mp-5mp-5mp-e-32mp-preto/2/125737.jpg?pfdrid_c=true";
  }
  else if (select.value == "A70") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/225972/galaxy-a70-preto-back.png?v=637867777421400000";
  }
  else if (select.value == "A80") {
    imagem.src = "https://files.tecnoblog.net/wp-content/uploads/2020/11/galaxy-a80-produto-700x700.png";
  }
  else if (select.value == "S10") {
    imagem.src = "https://files.tecnoblog.net/wp-content/uploads/2020/11/galaxy-s10-plus-produto-700x700.png";
  }
  else if (select.value == "S10+") {
    imagem.src = "https://ola.tech/wp-content/uploads/samsung-galaxy-s10plus-prism-black.jpg";
  }
  else if (select.value == "S20") {
    imagem.src = "https://trocafone.vtexassets.com/arquivos/ids/240725/galaxy-s20-rosa-costas.png?v=637919490476170000";
  }
  else if (select.value == "S20FE") {
    imagem.src = "https://files.tecnoblog.net/wp-content/uploads/2021/01/galaxy-s20-fe-produtos-2-700x700.png";
  }
});


const button = document.getElementById('print-button');
        const divToPrint = document.getElementById('div-to-print');
      
        button.addEventListener('click', () => {
          // Usa a API window.print() para gerar o print da página
          window.print();
      
          // Usa a API html2canvas para capturar o conteúdo da div e gerar uma imagem
          html2canvas(divToPrint).then(canvas => {
            // Salva a imagem no computador do usuário
            const link = document.createElement('a');
            link.download = 'print.png';
            link.href = window.URL.createObjectURL(canvas.toBlob());
            link.click();
          });
        });


