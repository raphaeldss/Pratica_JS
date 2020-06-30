/*alert("meu primeiro js");
var nome = "Raphael dos santos";
var idade = 35;
alert(nome + " tem " + idade);
//console.log(nome.toUpperCase());
//console.log(idade);
var n1 = 10;
var n2 = 3;
alert(n1 + n2);*/

/*var idade = prompt("Qual a sua idade ?");
if (idade < 18) {
    alert("Menor de idade");
} else {
    alert("Maior de idade");
};*/

//repetição
/*var count;
for (count = 0; count <= 5; count++) {
    alert(count);
};*/

//var d = new Date();
//alert(d);

/*function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(5, 10));*/

function clicou() {
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar() {
    window.open("https://www.randstad.com.br/");
}

function trocar() {
    //alert("trocar texto");
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse aqui";
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "<b>passe o mouse aqui</b>";
}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    alert(elemento.value);
}