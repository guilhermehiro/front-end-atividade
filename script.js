function calcular(){

const homens = parseInt(document.getElementById('homens').value)  || 0;
const mulheres = parseInt(document.getElementById('mulheres').value)  || 0;
const criancas = parseInt(document.getElementById('criancas').value)  || 0;

const carne = (homens * 500) + (mulheres * 300) + (criancas * 200);
const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
const cerveja = (homens * 800) + (mulheres * 500);

document.getElementById('caixa1').innerHTML = `<div class = "format2">
<h3>Quantidade de intens a serem consumidos</h3>
<div class = "itens">
<p>${carne / 1000}Kg  Carne Bovina</p>
<p>${frango / 1000}Kg  Frango</p>
<p>${linguica / 1000}Kg  Linguiça</p>
<p>${refrigerante / 1000}L  Refrigerante</p>
<p>${cerveja / 1000}L  Cerveja</p> 
</div>
<button onclick = "location.replace(location.href)">VOLTAR</button>
</div>`

}

function recarregar(){
    location.replace(location.href)
}