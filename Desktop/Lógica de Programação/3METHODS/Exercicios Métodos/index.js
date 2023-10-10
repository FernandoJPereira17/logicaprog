//1*
// const nomes = ['Samuel', 'Lopes', 'Teste', 'Outro Teste'];
// const nomesFiltrados = nomes.filter((nome) => nome);
// console.log(nomes);
// console.log(nomesFiltrados);

// //2*
// const numeros = [1, 2, 5, 10, 22, 18, 77, 100, 920, 1235];
// const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// console.log(numerosPares);

// const numerosImpares = numeros.filter((numero) => numero % 2 !== 0);
// console.log(numerosImpares);

////////////////////////////////////////////////

const convidado = document.getElementById('convidado');
const btnSend = document.getElementById('btnSend');
const lista = document.getElementById('lista');
const filter = document.getElementById('filter');

const convidados = [];

function renderList(array) {
    const resultado = (lista.innerHTML = array
        .map((convidado) => {
            return `<li>${convidado}</li>`
        }).join(""));

    return resultado;
}

function renderConvidados(){
    convidados.push(convidado.value);
    renderList(convidados);
    convidado.value = "";
}

function renderConvidadosFiltrados(){
    const convidadosFiltrados = convidados.filter((convidado) =>
        convidado.toLowerCase().includes(filter.value.toLowerCase())
    );
    renderList(convidadosFiltrados);
}

btnSend.addEventListener("click", renderConvidados);
filter.addEventListener("input", renderConvidadosFiltrados);

// convidado.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         const item = document.createElement("li");
//         item.innerText = convidado.value;
//         lista.appendChild(item);
//         convidado.value = "";
//     }
// });

