let banners = [
  "img/banner1.jpg",
  "img/banner2.jpg",
  "img/banner3.jpg"
];

let bannerAtual = 0;

let produtos = [

  {
    nome: "Camisa Argentina Adidas",
    preco: 199,
    imagem: "img/argentina-adidas.png",
    categoria: "camisas",
    destaque: true,
    marca: "adidas",
    estoque: 12,
    descricao: "Camisa oficial da Argentina confortável e estilosa.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Brasil Nike",
    preco: 210,
    imagem: "img/brasil-nike.png",
    categoria: "camisas",
    destaque: true,
    marca: "nike",
    estoque: 10,
    descricao: "Camisa oficial do Brasil com tecido premium.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa França Puma",
    preco: 220,
    imagem: "img/fraça-puma.jpg",
    categoria: "camisas",
    destaque: true,
    marca: "puma",
    estoque: 8,
    descricao: "Camisa esportiva da França com ótimo acabamento.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa França Nike",
    preco: 229,
    imagem: "img/franca-nike.png",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 7,
    descricao: "Modelo moderno da seleção francesa.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Itália Adidas",
    preco: 215,
    imagem: "img/italia-adidas1.jpg",
    categoria: "camisas",
    destaque: true,
    marca: "adidas",
    estoque: 9,
    descricao: "Camisa oficial da Itália com visual elegante.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Portugal",
    preco: 225,
    imagem: "img/portugal.png",
    categoria: "camisas",
    destaque: true,
    marca: "nike",
    estoque: 11,
    descricao: "Camisa confortável da seleção portuguesa.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Portugal Puma",
    preco: 219,
    imagem: "img/portugal-puma2.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "puma",
    estoque: 5,
    descricao: "Modelo alternativo de Portugal.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Portugal Vermelha",
    preco: 235,
    imagem: "img/portugal-puma3.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "puma",
    estoque: 4,
    descricao: "Camisa premium da seleção portuguesa.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Escócia Adidas",
    preco: 189,
    imagem: "img/escossia-adidas.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 6,
    descricao: "Camisa da Escócia moderna e confortável.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Egito Puma",
    preco: 195,
    imagem: "img/egito-puma.png",
    categoria: "camisas",
    destaque: false,
    marca: "puma",
    estoque: 8,
    descricao: "Camisa esportiva do Egito.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Adidas 1",
    preco: 180,
    imagem: "img/camisa-adidas1.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 9,
    descricao: "Camisa Adidas confortável para o dia a dia.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Adidas 2",
    preco: 185,
    imagem: "img/camisa-adidas2.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 8,
    descricao: "Modelo esportivo Adidas premium.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Nike 3",
    preco: 195,
    imagem: "img/camisa-nike3.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 7,
    descricao: "Camisa Nike moderna e confortável.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Nike 4",
    preco: 198,
    imagem: "img/camisa-nike4.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 7,
    descricao: "Modelo Nike esportivo.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa 5",
    preco: 170,
    imagem: "img/camisa5.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 6,
    descricao: "Camisa casual confortável.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Adidas 6",
    preco: 205,
    imagem: "img/camisa-adidas6.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 6,
    descricao: "Camisa Adidas com ótimo acabamento.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Nike 7",
    preco: 210,
    imagem: "img/camisa-nike7.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 5,
    descricao: "Modelo Nike premium esportivo.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Nike 8",
    preco: 215,
    imagem: "img/camisa-nike8.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 5,
    descricao: "Camisa Nike confortável e moderna.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa Adidas 9",
    preco: 225,
    imagem: "img/camisa-adidas9.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "adidas",
    estoque: 4,
    descricao: "Camisa Adidas premium.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Camisa 10",
    preco: 190,
    imagem: "img/camisa10.jpg",
    categoria: "camisas",
    destaque: false,
    marca: "nike",
    estoque: 8,
    descricao: "Camisa esportiva confortável.",
    tamanhos: ["P","M","G","GG"]
  },

  {
    nome: "Chuteira Nike",
    preco: 499,
    imagem: "img/chuteira-nike.jpg",
    categoria: "chuteiras",
    destaque: true,
    marca: "nike",
    estoque: 7,
    descricao: "Chuteira Nike profissional.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Nike Elite",
    preco: 560,
    imagem: "img/chuteira-nike6.jpg",
    categoria: "chuteiras",
    destaque: true,
    marca: "nike",
    estoque: 6,
    descricao: "Modelo Nike Elite para alta performance.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Nike Speed",
    preco: 599,
    imagem: "img/chuteira-nike7.jpg",
    categoria: "chuteiras",
    destaque: true,
    marca: "nike",
    estoque: 5,
    descricao: "Modelo Nike Speed extremamente leve.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Puma",
    preco: 459,
    imagem: "img/chuteira-puma.jpg",
    categoria: "chuteiras",
    destaque: true,
    marca: "puma",
    estoque: 6,
    descricao: "Chuteira Puma confortável e resistente.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Puma 2",
    preco: 480,
    imagem: "img/chuteira-puma2.jpg",
    categoria: "chuteiras",
    destaque: false,
    marca: "puma",
    estoque: 5,
    descricao: "Modelo Puma premium.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Adidas",
    preco: 520,
    imagem: "img/chuteira-adidas.jpg",
    categoria: "chuteiras",
    destaque: true,
    marca: "adidas",
    estoque: 6,
    descricao: "Chuteira Adidas profissional.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Mizuno",
    preco: 430,
    imagem: "img/chuteira-mizuno.jpg",
    categoria: "chuteiras",
    destaque: false,
    marca: "mizuno",
    estoque: 7,
    descricao: "Modelo confortável da Mizuno.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Mizuno Wave",
    preco: 470,
    imagem: "img/chuteira-mizuno2.jpg",
    categoria: "chuteiras",
    destaque: false,
    marca: "mizuno",
    estoque: 5,
    descricao: "Chuteira Wave com ótimo amortecimento.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira Mizuno Neo",
    preco: 510,
    imagem: "img/chuteira-mizuno3.jpg",
    categoria: "chuteiras",
    destaque: false,
    marca: "mizuno",
    estoque: 4,
    descricao: "Modelo Neo premium da Mizuno.",
    tamanhos: ["38","39","40","41","42","43"]
  },

  {
    nome: "Chuteira New Balance",
    preco: 530,
    imagem: "img/chuteira-NB.jpg",
    categoria: "chuteiras",
    destaque: false,
    marca: "newbalance",
    estoque: 5,
    descricao: "Chuteira New Balance moderna.",
    tamanhos: ["38","39","40","41","42","43"]
  }


];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarBanner(){
  let bannerImg = document.getElementById("banner-img");

  if(bannerImg){
    bannerImg.src = banners[bannerAtual];
  }
}

function trocarBanner(direcao){
  bannerAtual += direcao;

  if(bannerAtual < 0){
    bannerAtual = banners.length - 1;
  }

  if(bannerAtual >= banners.length){
    bannerAtual = 0;
  }

  atualizarBanner();
}

setInterval(function(){
  bannerAtual++;

  if(bannerAtual >= banners.length){
    bannerAtual = 0;
  }

  atualizarBanner();
}, 4000);

function mostrarListaProdutos(listaProdutos){
  let areaProdutos = document.getElementById("produtos-destaque");

  if(!areaProdutos){
    return;
  }

  areaProdutos.innerHTML = "";

  if(listaProdutos.length === 0){
    areaProdutos.innerHTML = "<p>Nenhum produto encontrado.</p>";
    return;
  }

  listaProdutos.forEach(function(produto){
    let indexOriginal = produtos.indexOf(produto);

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `

<div class="card-conteudo"
onclick="abrirProduto(${indexOriginal})">

  <span class="categoria-produto">
    ${produto.categoria}
  </span>

  <img src="${produto.imagem}"
  alt="${produto.nome}">

  <h3>${produto.nome}</h3>

  <p>R$ ${produto.preco.toFixed(2)}</p>

  <span class="estoque">
    Estoque: ${produto.estoque}
  </span>

</div>

<button onclick="adicionarProduto(${indexOriginal})">
  Adicionar ao carrinho
</button>

<button
onclick="comprarProduto(${indexOriginal})"
class="btn-comprar">

  Comprar

</button>

`;

    areaProdutos.appendChild(card);
  });
}

function mostrarPorCategoria(categoria){
  let titulo = document.getElementById("titulo-produtos");
  let subtitulo = document.getElementById("subtitulo-produtos");

  if(!titulo || !subtitulo){
    return;
  }

  let listaProdutos = [];

  if(categoria === "destaques"){
    titulo.innerHTML = "Produtos em Destaque";
    subtitulo.innerHTML = "Escolha um produto em destaque.";

    listaProdutos = produtos.filter(function(produto){
      return produto.destaque === true;
    });

  }else{
    titulo.innerHTML = "Categoria: " + categoria;
    subtitulo.innerHTML = "Produtos da categoria " + categoria;

    listaProdutos = produtos.filter(function(produto){
      return produto.categoria === categoria;
    });
  }

  mostrarListaProdutos(listaProdutos);
}

function mostrarPorMarca(marcaEscolhida){
  let titulo = document.getElementById("titulo-produtos");
  let subtitulo = document.getElementById("subtitulo-produtos");

  if(!titulo || !subtitulo){
    return;
  }

  titulo.innerHTML = "Marca: " + marcaEscolhida;
  subtitulo.innerHTML = "Produtos da marca " + marcaEscolhida;

  let produtosFiltrados = produtos.filter(function(produto){
    return produto.marca === marcaEscolhida;
  });

  mostrarListaProdutos(produtosFiltrados);
}

function abrirProduto(index){
  window.location.href = "produto.html?id=" + index;
}

function adicionarProduto(index){
  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.push(produtos[index]);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
}

function comprarProduto(index){
  adicionarProduto(index);
  window.location.href = "carrinho.html";
}

function atualizarCarrinho(){
  let lista = document.getElementById("lista-carrinho");
  let totalTela = document.getElementById("total");

  if(!lista || !totalTela){
    return;
  }

  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  lista.innerHTML = "";

  if(carrinho.length === 0){
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalTela.innerHTML = "0.00";
    mostrarBotaoPaypal();
    return;
  }

  carrinho.forEach(function(produto, index){
    lista.innerHTML += `
      <div class="item-carrinho">

        <img src="${produto.imagem}" alt="${produto.nome}">

        <div>
          <h3>${produto.nome}</h3>
          <p>R$ ${produto.preco.toFixed(2)}</p>
        </div>

        <button onclick="removerProduto(${index})">
          Remover
        </button>

      </div>
    `;
  });

  let total = carrinho.reduce(function(soma, produto){
    return soma + produto.preco;
  }, 0);

  totalTela.innerHTML = total.toFixed(2);

  mostrarBotaoPaypal();
}

function removerProduto(index){
  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.splice(index, 1);

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  atualizarCarrinho();
}

function mostrarBotaoPaypal(){
  let container = document.getElementById("paypal-button-container");

  if(!container){
    return;
  }

  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  let total = carrinho.reduce(function(soma, produto){
    return soma + produto.preco;
  }, 0);

  container.innerHTML = "";

  if(total <= 0){
    return;
  }

  if(typeof paypal === "undefined"){
    container.innerHTML = "<p>PayPal não carregou. Verifique seu Client ID.</p>";
    return;
  }

  paypal.Buttons({

    createOrder: function(data, actions){
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: total.toFixed(2)
          }
        }]
      });
    },

    onApprove: function(data, actions){
      return actions.order.capture().then(function(){

        alert("Pagamento aprovado!");

        carrinho = [];

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        atualizarCarrinho();

      });
    }

  }).render("#paypal-button-container");
}

atualizarBanner();
mostrarPorCategoria("destaques");

function mostrarResumoCheckout(){

  let areaResumo = document.getElementById("resumo-produtos");
  let totalTela = document.getElementById("checkout-total");

  if(!areaResumo || !totalTela){
    return;
  }

  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  areaResumo.innerHTML = "";

  if(carrinho.length === 0){
    areaResumo.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalTela.innerHTML = "0.00";
    return;
  }

  carrinho.forEach(function(produto){

    areaResumo.innerHTML += `
      <div class="resumo-item">
        <img src="${produto.imagem}" alt="${produto.nome}">

        <div>
          <h3>${produto.nome}</h3>
          <p>R$ ${produto.preco.toFixed(2)}</p>
        </div>
      </div>
    `;

  });

  let total = carrinho.reduce(function(soma, produto){
    return soma + produto.preco;
  }, 0);

  totalTela.innerHTML = total.toFixed(2);

  mostrarBotaoPaypal();
}