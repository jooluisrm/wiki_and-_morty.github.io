let barraPesquisa = document.querySelector('input[type=number]');
let buscar = document.querySelector('input[type=submit]');
let section = document.querySelector('section');
let containerGeral = document.querySelector('.container-geral');
let fundo = document.querySelector('.fundo-preto');


buscar.addEventListener('click', async () => {
    if (barraPesquisa.value.length > 0 && barraPesquisa.value != '0') {
        let url = `https://rickandmortyapi.com/api/character/${Number(barraPesquisa.value)}`;

        let req = await fetch(url);
        let json = await req.json();

        mostrarPersonagem(json);
        console.log(json);

        section.style.display = 'flex';
        fundo.style.display = 'flex';
        containerGeral.style.display = 'none';
        barraLateral.style.display = 'none';
    } else {
        alert('Informe um ID para continuar!');
    }
    

});

function mostrarPersonagem(json) {
    let painelPersonagem = document.querySelector('.infos-personagen');

    let nome = painelPersonagem.querySelector('.name-person');
    let status = painelPersonagem.querySelector('.status-person');
    let specie = painelPersonagem.querySelector('.specie-person');
    let genero = painelPersonagem.querySelector('.genero-person');
    let origen = painelPersonagem.querySelector('.origen-person');
    let local = painelPersonagem.querySelector('.local-name');

    nome.innerHTML = `Nome: ${json.name}`

}







let barraLateral = document.querySelector('aside');
let personagem = barraLateral.querySelector('.personagem');
let ul = barraLateral.querySelector('ul');


async function carregarId() {
    let url = `https://rickandmortyapi.com/api/character`;

    let req = await fetch(url);
    let json = await req.json();

    criarAside(json.results);
}

function criarAside(json) {

    for(let i = 0; i < json.length; i++) {
        let novaDiv = document.createElement('li');
        novaDiv.textContent = `Nome: ${json[i].name} | ID: ${json[i].id}`;
        ul.appendChild(novaDiv);
        console.log(json[i]);
    };
};


