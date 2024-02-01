const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
};

const opcaoCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcaoTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarTamanho(){
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcaoTamanho[tamanhoSelecionado];
}