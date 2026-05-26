let parametros = new URLSearchParams(window.location.search);

let id = parametros.get("id");

let produto = produtos[id];

let tamanhoSelecionado = "";

if(produto){

  document.getElementById("produto-imagem").src = produto.imagem;
  document.getElementById("produto-miniatura").src = produto.imagem;
  document.getElementById("produto-categoria").innerHTML = produto.categoria;
  document.getElementById("produto-nome").innerHTML = produto.nome;

  document.getElementById("produto-preco").innerHTML =
    "R$ " + produto.preco.toFixed(2);

  document.getElementById("produto-parcela").innerHTML =
    (produto.preco / 2).toFixed(2);

  document.getElementById("produto-estoque").innerHTML =
    "Estoque disponível: " + produto.estoque;

  document.getElementById("produto-descricao").innerHTML =
    produto.descricao;

  let areaTamanhos = document.getElementById("produto-tamanhos");

  areaTamanhos.innerHTML = "";

  produto.tamanhos.forEach(function(tamanho){

    areaTamanhos.innerHTML += `
      <button class="btn-tamanho" onclick="selecionarTamanho(this, '${tamanho}')">
        ${tamanho}
      </button>
    `;

  });

  document.getElementById("btn-adicionar").onclick = function(){

    if(tamanhoSelecionado === ""){
      alert("Escolha um tamanho antes de adicionar ao carrinho!");
      return;
    }

    adicionarProdutoComTamanho(id, tamanhoSelecionado);

  };

  document.getElementById("btn-comprar-agora").onclick = function(){

    if(tamanhoSelecionado === ""){
      alert("Escolha um tamanho antes de comprar!");
      return;
    }

    adicionarProdutoComTamanho(id, tamanhoSelecionado);

    window.location.href = "carrinho.html";

  };

}else{

  document.body.innerHTML = "<h1>Produto não encontrado</h1>";

}

function selecionarTamanho(botao, tamanho){

  tamanhoSelecionado = tamanho;

  let botoes = document.querySelectorAll(".btn-tamanho");

  botoes.forEach(function(btn){
    btn.classList.remove("tamanho-ativo");
  });

  botao.classList.add("tamanho-ativo");

}

function adicionarProdutoComTamanho(index, tamanho){

  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  let produtoEscolhido = {
    nome: produtos[index].nome,
    preco: produtos[index].preco,
    imagem: produtos[index].imagem,
    categoria: produtos[index].categoria,
    marca: produtos[index].marca,
    descricao: produtos[index].descricao,
    tamanho: tamanho,
    quantidade: 1
  };

  carrinho.push(produtoEscolhido);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");

}