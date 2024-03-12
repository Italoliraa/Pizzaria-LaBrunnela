let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll(' .container .image-container .image');

searchBox.oninput = () => {

    images.forEach(hide => hide.style.display = "none");
    let value = searchBox.value;
    
    images.forEach(filter => {

        let title = filter.getAttribute('data-title');

        if (value == title) {
            filter.style.display = 'flex';
        }

        if (searchBox.value == '') {
            filter.style.display = 'flex';
        }
    })
}


const c1 = document.querySelector(".c1G")
const c2 = document.querySelector(".c2G")
const c3 = document.querySelector(".c3G")
const c4 = document.querySelector(".c4G")
const c5 = document.querySelector(".c5G")
const c6 = document.querySelector(".c6G")
const sucess = document.querySelector(".sucesso")
let valorAtual = document.querySelector(".valor-da-pizza")
let valorTotal = 0;

let item1 = 0;
let item2 = 0;
let item3 = 0;
let item4 = 0;
let item5 = 0;
let item6 = 0;

function escolheuitem1(){
    item1 = 69.90
    valorTotal = valorTotal + item1
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c1.addEventListener("click", escolheuitem1)

function escolheuitem2(){
    item2 = 69.90
    valorTotal = valorTotal + item2
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c2.addEventListener("click", escolheuitem2)

function escolheuitem3(){
    item3 = 69.90
    valorTotal = valorTotal + item3
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c3.addEventListener("click", escolheuitem3)

function escolheuitem4(){
    item4 = 69.90
    valorTotal = valorTotal + item4
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c4.addEventListener("click", escolheuitem4)

function escolheuitem5(){
    item5 = 69.90
    valorTotal = valorTotal + item5
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c5.addEventListener("click", escolheuitem5)

function escolheuitem6(){
    item6 = 69.90
    valorTotal = valorTotal + item6
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c6.addEventListener("click", escolheuitem6)


function somarNoFinal(){
    console.log(valorTotal)
}
sucess.addEventListener("click", somarNoFinal)