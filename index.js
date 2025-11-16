/**** Escreva o código abaixo 👇******/
function somar(a,b){
  return a + b
};

function multiplicar(a,b){
  return a*b
};

function subtrair(a,b){
  return a - b
};

function dividir(a,b){
  if (b === 0){
    throw Error("Erro: divisão por zero");
  } else{
    return a/b
  };
};

function calcularMedia(nota1, nota2, nota3, nota4){
  return (nota1 + nota2 + nota3 + nota4) /4
};
function elevarPotencia(base, expoente){
  return Math.pow(base, expoente);
};

function calcularAreaRetangulo(largura, altura){
  return largura*altura
};

function verificarParOuImpar(numero){
  if (numero %2 ===0){
    return "par"
  } else{
    return"ímpar"
  };
};
function calcularRaizQuadrada(numero){
    return Math.sqrt(numero)
}
function calcularHipotenusa(cateto1, cateto2){
    return Math.sqrt(cateto1* cateto1 + cateto2* cateto2);
};
/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
