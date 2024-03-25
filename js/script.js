/* feito por ismael */
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

const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const b5 = document.querySelector('.b5')
const b6 = document.querySelector('.b6')
const b7 = document.querySelector('.b7')
const b8 = document.querySelector('.b8')
const b9 = document.querySelector('.b9')
const b10 = document.querySelector('.b10')

const sucess = document.querySelector(".sucesso")
let valorAtual = document.querySelector(".valor-da-pizza")
let quantidadePizzas = document.querySelector(".quantia-de-pizza")
let valorTotal = 0;
let grandes = 0
let pequenas = 0

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

let itemB1 = 0;
let itemB2 = 0;
let itemB3 = 0;
let itemB4 = 0;
let itemB5 = 0;
let itemB6 = 0;
let itemB7 = 0;
let itemB8 = 0;
let itemB9 = 0;
let itemB10 = 0;


function escolheuitem1G(){
    item1G = 53.90
    valorTotal = valorTotal + item1G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c1G.addEventListener("click", escolheuitem1G)

function escolheuitem2G(){
    item2G = 51.90
    valorTotal = valorTotal + item2G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c2G.addEventListener("click", escolheuitem2G)

function escolheuitem3G(){
    item3G = 51.90
    valorTotal = valorTotal + item3G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c3G.addEventListener("click", escolheuitem3G)

function escolheuitem4G(){
    item4G = 51.90
    valorTotal = valorTotal + item4G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c4G.addEventListener("click", escolheuitem4G)

function escolheuitem5G(){
    item5G = 72.90
    valorTotal = valorTotal + item5G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c5G.addEventListener("click", escolheuitem5G)

function escolheuitem6G(){
    item6G = 63.90
    valorTotal = valorTotal + item6G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c6G.addEventListener("click", escolheuitem6G)

function escolheuitem7G(){
    item7G = 63.90
    valorTotal = valorTotal + item7G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c7G.addEventListener("click", escolheuitem7G)

function escolheuitem8G(){
    item8G = 72.90
    valorTotal = valorTotal + item8G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c8G.addEventListener("click", escolheuitem8G)

function escolheuitem9G(){
    item9G = 59.90
    valorTotal = valorTotal + item9G
    valorTotal = Number(valorTotal.toFixed(3))
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
    valorAtual.innerHTML = "Valor atual: " + valorTotal
}
c9G.addEventListener("click", escolheuitem9G)

function escolheuitem10G(){
    item10G = 72.90
    valorTotal = valorTotal + item10G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c10G.addEventListener("click", escolheuitem10G)

function escolheuitem11G(){
    item11G = 59.90
    valorTotal = valorTotal + item11G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c11G.addEventListener("click", escolheuitem11G)

function escolheuitem12G(){
    item12G = 59.90
    valorTotal = valorTotal + item12G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c12G.addEventListener("click", escolheuitem12G)

function escolheuitem13G(){
    item13G = 69.90
    valorTotal = valorTotal + item13G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c13G.addEventListener("click", escolheuitem13G)

function escolheuitem14G(){
    item14G = 85.90
    valorTotal = valorTotal + item14G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c14G.addEventListener("click", escolheuitem14G)

function escolheuitem15G(){
    item15G = 53.90
    valorTotal = valorTotal + item15G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c15G.addEventListener("click", escolheuitem15G)

function escolheuitem16G(){
    item16G = 53.90
    valorTotal = valorTotal + item16G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c16G.addEventListener("click", escolheuitem16G)

function escolheuitem17G(){
    item17G = 53.90
    valorTotal = valorTotal + item17G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c17G.addEventListener("click", escolheuitem17G)

function escolheuitem18G(){
    item18G = 85.90
    valorTotal = valorTotal + item18G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c18G.addEventListener("click", escolheuitem18G)

function escolheuitem19G(){
    item19G = 59.90
    valorTotal = valorTotal + item19G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c19G.addEventListener("click", escolheuitem19G)

function escolheuitem20G(){
    item20G = 72.90
    valorTotal = valorTotal + item20G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c20G.addEventListener("click", escolheuitem20G)

function escolheuitem21G(){
    item21G = 53.90
    valorTotal = valorTotal + item21G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c21G.addEventListener("click", escolheuitem21G)

function escolheuitem22G(){
    item22G = 53.90
    valorTotal = valorTotal + item22G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c22G.addEventListener("click", escolheuitem22G)

function escolheuitem23G(){
    item23G = 53.90
    valorTotal = valorTotal + item23G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c23G.addEventListener("click", escolheuitem23G)

function escolheuitem24G(){
    item24G = 53.90
    valorTotal = valorTotal + item24G
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    grandes = grandes + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c24G.addEventListener("click", escolheuitem24G)



function escolheuitem1P(){
    item1P = 33.90
    valorTotal = valorTotal + item1P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c1P.addEventListener("click", escolheuitem1P)

function escolheuitem2P(){
    item2P = 32.90
    valorTotal = valorTotal + item2P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c2P.addEventListener("click", escolheuitem2P)

function escolheuitem3P(){
    item3P = 32.90
    valorTotal = valorTotal + item3P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c3P.addEventListener("click", escolheuitem3P)

function escolheuitem4P(){
    item4P = 32.90
    valorTotal = valorTotal + item4P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c4P.addEventListener("click", escolheuitem4P)

function escolheuitem5P(){
    item5P = 45.90
    valorTotal = valorTotal + item5P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c5P.addEventListener("click", escolheuitem5P)

function escolheuitem6P(){
    item6P = 39.90
    valorTotal = valorTotal + item6P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c6P.addEventListener("click", escolheuitem6P)

function escolheuitem7P(){
    item7P = 39.90
    valorTotal = valorTotal + item7P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c7P.addEventListener("click", escolheuitem7P)

function escolheuitem8P(){
    item8P = 45.90
    valorTotal = valorTotal + item8P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c8P.addEventListener("click", escolheuitem8P)

function escolheuitem9P(){
    item9P = 45.90
    valorTotal = valorTotal + item9P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c9P.addEventListener("click", escolheuitem9P)

function escolheuitem10P(){
    item10P = 45.90
    valorTotal = valorTotal + item10P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c10P.addEventListener("click", escolheuitem10P)

function escolheuitem11P(){
    item11P = 45.90
    valorTotal = valorTotal + item11P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c11P.addEventListener("click", escolheuitem11P)

function escolheuitem12P(){
    item12P = 45.90
    valorTotal = valorTotal + item12P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c12P.addEventListener("click", escolheuitem12P)

function escolheuitem13P(){
    item13P = 43.90
    valorTotal = valorTotal + item13P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c13P.addEventListener("click", escolheuitem13P)

function escolheuitem14P(){
    item14P = 53.90
    valorTotal = valorTotal + item14P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c14P.addEventListener("click", escolheuitem14P)

function escolheuitem15P(){
    item15P = 33.90
    valorTotal = valorTotal + item15P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c15P.addEventListener("click", escolheuitem15P)

function escolheuitem16P(){
    item16P = 33.90
    valorTotal = valorTotal + item16P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c16P.addEventListener("click", escolheuitem16P)

function escolheuitem17P(){
    item17P = 33.90
    valorTotal = valorTotal + item17P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c17P.addEventListener("click", escolheuitem17P)

function escolheuitem18P(){
    item18P = 53.90
    valorTotal = valorTotal + item18P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c18P.addEventListener("click", escolheuitem18P)

function escolheuitem19P(){
    item19P = 45.90
    valorTotal = valorTotal + item19P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c19P.addEventListener("click", escolheuitem19P)

function escolheuitem20P(){
    item20P = 45.90
    valorTotal = valorTotal + item20P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c20P.addEventListener("click", escolheuitem20P)

function escolheuitem21P(){
    item21P = 33.90
    valorTotal = valorTotal + item21P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c21P.addEventListener("click", escolheuitem21P)

function escolheuitem22P(){
    item22P = 33.90
    valorTotal = valorTotal + item22P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c22P.addEventListener("click", escolheuitem22P)

function escolheuitem23P(){
    item23P = 33.90
    valorTotal = valorTotal + item23P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c23P.addEventListener("click", escolheuitem23P)

function escolheuitem24P(){
    item24P = 33.90
    valorTotal = valorTotal + item24P
    valorTotal = Number(valorTotal.toFixed(3))
    valorAtual.innerHTML = "Valor atual: " + valorTotal
    pequenas = pequenas + 1
    quantidadePizzas.innerHTML = "você escolheu: " + grandes + " pizzas grandes e " + pequenas + " pequenas"
}
c24P.addEventListener("click", escolheuitem24P)



function somarNoFinal(){
}
sucess.addEventListener("click", somarNoFinal)

/* feito por ismael */