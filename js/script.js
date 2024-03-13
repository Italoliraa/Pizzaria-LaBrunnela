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


const c1G = document.querySelector(".c1G")
const c2G = document.querySelector(".c2G")
const c3G = document.querySelector(".c3G")
const c4G = document.querySelector(".c4G")
const c5G = document.querySelector(".c5G")
const c6G = document.querySelector(".c6G")
const c7G = document.querySelector(".c7G")
const c8G = document.querySelector(".c8G")
const c9G = document.querySelector(".c9G")
const c10G = document.querySelector(".c10G")
const c11G = document.querySelector(".c11G")
const c12G = document.querySelector(".c12G")
const c13G = document.querySelector(".c13G")
const c14G = document.querySelector(".c14G")
const c15G = document.querySelector(".c15G")
const c16G = document.querySelector(".c16G")
const c17G = document.querySelector(".c17G")
const c18G = document.querySelector(".c18G")
const c19G = document.querySelector(".c19G")
const c20G = document.querySelector(".c20G")
const c21G = document.querySelector(".c21G")
const c22G = document.querySelector(".c22G")
const c23G = document.querySelector(".c23G")
const c24G = document.querySelector(".c24G")

const c1P = document.querySelector(".c1P")
const c2P = document.querySelector(".c2P")
const c3P = document.querySelector(".c3P")
const c4P = document.querySelector(".c4P")
const c5P = document.querySelector(".c5P")
const c6P = document.querySelector(".c6P")
const c7P = document.querySelector(".c7P")
const c8P = document.querySelector(".c8P")
const c9P = document.querySelector(".c9P")
const c10P = document.querySelector(".c10P")
const c11P = document.querySelector(".c11P")
const c12P = document.querySelector(".c12P")
const c13P = document.querySelector(".c13P")
const c14P = document.querySelector(".c14P")
const c15P = document.querySelector(".c15P")
const c16P = document.querySelector(".c16P")
const c17P = document.querySelector(".c17P")
const c18P = document.querySelector(".c18P")
const c19P = document.querySelector(".c19P")
const c20P = document.querySelector(".c20P")
const c21P = document.querySelector(".c21P")
const c22P = document.querySelector(".c22P")
const c23P = document.querySelector(".c23P")
const c24P = document.querySelector(".c24P")
const sucess = document.querySelector(".sucesso")
let valorAtual = document.querySelector(".valor-da-pizza")
let valorTotal = 0;

let item1G = 0;
let item2G = 0;
let item3G = 0;
let item4G = 0;
let item5G = 0;
let item6G = 0;
let item7G = 0;
let item8G = 0;
let item9G = 0;
let item10G = 0;
let item11G = 0;
let item12G = 0;
let item13G = 0;
let item14G = 0;
let item15G = 0;
let item16G = 0;
let item17G = 0;
let item18G = 0;
let item19G = 0;
let item20G = 0;
let item21G = 0;
let item22G = 0;
let item23G = 0;
let item24G = 0;

let item1P = 0;
let item2P = 0;
let item3P = 0;
let item4P = 0;
let item5P = 0;
let item6P = 0;
let item7P = 0;
let item8P = 0;
let item9P = 0;
let item10P = 0;
let item11P = 0;
let item12P = 0;
let item13P = 0;
let item14P = 0;
let item15P = 0;
let item16P = 0;
let item17P = 0;
let item18P = 0;
let item19P = 0;
let item20P = 0;
let item21P = 0;
let item22P = 0;
let item23P = 0;
let item24P = 0;


function escolheuitem1G(){
    item1G = 69.90
    valorTotal = valorTotal + item1G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c1G.addEventListener("click", escolheuitem1G)

function escolheuitem2G(){
    item2G = 69.90
    valorTotal = valorTotal + item2G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c2G.addEventListener("click", escolheuitem2G)

function escolheuitem3G(){
    item3G = 69.90
    valorTotal = valorTotal + item3G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c3G.addEventListener("click", escolheuitem3G)

function escolheuitem4G(){
    item4G = 69.90
    valorTotal = valorTotal + item4G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c4G.addEventListener("click", escolheuitem4G)

function escolheuitem5G(){
    item5G = 69.90
    valorTotal = valorTotal + item5G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c5G.addEventListener("click", escolheuitem5G)

function escolheuitem6G(){
    item6G = 69.90
    valorTotal = valorTotal + item6G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c6G.addEventListener("click", escolheuitem6G)

function escolheuitem7G(){
    item7G = 69.90
    valorTotal = valorTotal + item7G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c7G.addEventListener("click", escolheuitem7G)

function escolheuitem8G(){
    item8G = 69.90
    valorTotal = valorTotal + item8G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c8G.addEventListener("click", escolheuitem8G)

function escolheuitem9G(){
    item9G = 69.90
    valorTotal = valorTotal + item9G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c9G.addEventListener("click", escolheuitem9G)

function escolheuitem10G(){
    item10G = 69.90
    valorTotal = valorTotal + item10G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c10G.addEventListener("click", escolheuitem10G)

function escolheuitem11G(){
    item11G = 69.90
    valorTotal = valorTotal + item11G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c11G.addEventListener("click", escolheuitem11G)

function escolheuitem12G(){
    item12G = 129.90
    valorTotal = valorTotal + item12G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c12G.addEventListener("click", escolheuitem12G)

function escolheuitem13G(){
    item13G = 69.90
    valorTotal = valorTotal + item13G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c13G.addEventListener("click", escolheuitem13G)

function escolheuitem14G(){
    item14G = 69.90
    valorTotal = valorTotal + item14G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c14G.addEventListener("click", escolheuitem14G)

function escolheuitem15G(){
    item15G = 69.90
    valorTotal = valorTotal + item15G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c15G.addEventListener("click", escolheuitem15G)

function escolheuitem16G(){
    item16G = 69.90
    valorTotal = valorTotal + item16G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c16G.addEventListener("click", escolheuitem16G)

function escolheuitem17G(){
    item17G = 69.90
    valorTotal = valorTotal + item17G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c17G.addEventListener("click", escolheuitem17G)

function escolheuitem18G(){
    item18G = 189.90
    valorTotal = valorTotal + item18G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c18G.addEventListener("click", escolheuitem18G)

function escolheuitem19G(){
    item19G = 69.90
    valorTotal = valorTotal + item19G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c19G.addEventListener("click", escolheuitem19G)

function escolheuitem20G(){
    item20G = 69.90
    valorTotal = valorTotal + item20G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c20G.addEventListener("click", escolheuitem20G)

function escolheuitem21G(){
    item21G = 621.210
    valorTotal = valorTotal + item21G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c21G.addEventListener("click", escolheuitem21G)

function escolheuitem22G(){
    item22G = 69.90
    valorTotal = valorTotal + item22G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c22G.addEventListener("click", escolheuitem22G)

function escolheuitem23G(){
    item23G = 69.90
    valorTotal = valorTotal + item23G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c23G.addEventListener("click", escolheuitem23G)

function escolheuitem24G(){
    item24G = 249.90
    valorTotal = valorTotal + item24G
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c24G.addEventListener("click", escolheuitem24G)



function escolheuitem1P(){
    item1P = 69.90
    valorTotal = valorTotal + item1P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c1P.addEventListener("click", escolheuitem1P)

function escolheuitem2P(){
    item2P = 69.90
    valorTotal = valorTotal + item2P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c2P.addEventListener("click", escolheuitem2P)

function escolheuitem3P(){
    item3P = 69.90
    valorTotal = valorTotal + item3P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c3P.addEventListener("click", escolheuitem3P)

function escolheuitem4P(){
    item4P = 69.90
    valorTotal = valorTotal + item4P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c4P.addEventListener("click", escolheuitem4P)

function escolheuitem5P(){
    item5P = 69.90
    valorTotal = valorTotal + item5P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c5P.addEventListener("click", escolheuitem5P)

function escolheuitem6P(){
    item6P = 69.90
    valorTotal = valorTotal + item6P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c6P.addEventListener("click", escolheuitem6P)

function escolheuitem7P(){
    item7P = 69.90
    valorTotal = valorTotal + item7P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c7P.addEventListener("click", escolheuitem7P)

function escolheuitem8P(){
    item8P = 69.90
    valorTotal = valorTotal + item8P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c8P.addEventListener("click", escolheuitem8P)

function escolheuitem9P(){
    item9P = 69.90
    valorTotal = valorTotal + item9P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c9P.addEventListener("click", escolheuitem9P)

function escolheuitem10P(){
    item10P = 69.90
    valorTotal = valorTotal + item10P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c10P.addEventListener("click", escolheuitem10P)

function escolheuitem11P(){
    item11P = 69.90
    valorTotal = valorTotal + item11P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c11P.addEventListener("click", escolheuitem11P)

function escolheuitem12P(){
    item12P = 129.90
    valorTotal = valorTotal + item12P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c12P.addEventListener("click", escolheuitem12P)

function escolheuitem13P(){
    item13P = 69.90
    valorTotal = valorTotal + item13P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c13P.addEventListener("click", escolheuitem13P)

function escolheuitem14P(){
    item14P = 69.90
    valorTotal = valorTotal + item14P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c14P.addEventListener("click", escolheuitem14P)

function escolheuitem15P(){
    item15P = 69.90
    valorTotal = valorTotal + item15P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c15P.addEventListener("click", escolheuitem15P)

function escolheuitem16P(){
    item16P = 69.90
    valorTotal = valorTotal + item16P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c16P.addEventListener("click", escolheuitem16P)

function escolheuitem17P(){
    item17P = 69.90
    valorTotal = valorTotal + item17P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c17P.addEventListener("click", escolheuitem17P)

function escolheuitem18P(){
    item18P = 189.90
    valorTotal = valorTotal + item18P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c18P.addEventListener("click", escolheuitem18P)

function escolheuitem19P(){
    item19P = 69.90
    valorTotal = valorTotal + item19P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c19P.addEventListener("click", escolheuitem19P)

function escolheuitem20P(){
    item20P = 69.90
    valorTotal = valorTotal + item20P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c20P.addEventListener("click", escolheuitem20P)

function escolheuitem21P(){
    item21P = 621.210
    valorTotal = valorTotal + item21P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c21P.addEventListener("click", escolheuitem21P)

function escolheuitem22P(){
    item22P = 69.90
    valorTotal = valorTotal + item22P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c22P.addEventListener("click", escolheuitem22P)

function escolheuitem23P(){
    item23P = 69.90
    valorTotal = valorTotal + item23P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c23P.addEventListener("click", escolheuitem23P)

function escolheuitem24P(){
    item24P = 249.90
    valorTotal = valorTotal + item24P
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    console.log(valorTotal)
}
c24P.addEventListener("click", escolheuitem24P)



function somarNoFinal(){
    console.log(valorTotal)
}
sucess.addEventListener("click", somarNoFinal)