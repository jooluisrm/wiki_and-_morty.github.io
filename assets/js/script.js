let barraPesquisa = document.querySelector('input[type=number]');
let buscar = document.querySelector('input[type=submit]');
let section = document.querySelector('section');
let containerGeral = document.querySelector('.container-geral');
let fundo = document.querySelector('.fundo-preto');
let buttonClose = document.querySelector('.painel-personagem button');

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
    barraPesquisa.value = '';
    

});

buttonClose.addEventListener('click', () => {
    section.style.display = 'flex';
    fundo.style.display = 'none';
    containerGeral.style.display = 'block';
    barraLateral.style.display = 'flex';
});

function mostrarPersonagem(json) {
    let painelPersonagem = document.querySelector('.infos-personagen');

    let nome = painelPersonagem.querySelector('.name-person');
    let status = painelPersonagem.querySelector('.status-person');
    let specie = painelPersonagem.querySelector('.specie-person');
    let genero = painelPersonagem.querySelector('.genero-person');
    let origen = painelPersonagem.querySelector('.origen-person');
    let local = painelPersonagem.querySelector('.local-name');
    let img = document.querySelector('.img-person img');

    img.src = json.image;
    nome.innerHTML = `<span>Nome: </span> ${json.name}`;

    if(json.status === 'Alive') {
        status.style.color = 'darkGreen';
    } else {
        status.style.color = 'darkRed'
    }
    status.innerHTML = `<span>Status: </span> ${json.status}`;
    specie.innerHTML = `<span>Especie: </span> ${json.species}`;
    genero.innerHTML = `<span>Genêro: </span> ${json.gender}`;
    origen.innerHTML = `<span>Planeta: </span> ${json.origin.name}`;
    local.innerHTML = `<span>Local: </span> ${json.location.name}`;


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

carregarId();


