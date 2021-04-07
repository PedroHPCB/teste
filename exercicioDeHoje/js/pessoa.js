var cont = 0;
var nome = prompt('qual o seu nome ?');
var idade = parseInt(prompt('qual a sua idade ?'));
var sexo = prompt('qual seu sexo ?[M/F]:').toUpperCase().substr(0, 1);
if (sexo == "M") {
    sexo = "Masculino"
}

else if (sexo == "F"){
    sexo = "Feminino"
}
else {
    alert("escreva apenas feminino ou masculino.")
}

let pessoa = {
    nome,
    idade,
    sexo
};

document.write("<h2>Pessoa cadastrada<br></h2>", pessoa.nome,'<br>',
pessoa.idade, '<br>', pessoa.sexo, '<br><br>')
alterador();

