let barraPesquisa = document.querySelector('input[type=number]');
let buscar = document.querySelector('input[type=submit]');


buscar.addEventListener('click', async () => {
    let url = `https://rickandmortyapi.com/api/character/${barraPesquisa.value}`;

    let req = await fetch(url);
    let json = await req.json();
    console.log(json);

});

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
carregarId()

