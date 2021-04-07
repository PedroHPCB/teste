var cont = 0;
var nome = prompt('qual o seu nome ?');
var idade = parseInt(prompt('qual a sua idade ?'));
var sexo = prompt('qual seu sexo ?[M/F]:').toUpperCase().substr(0, 1);
if (sexo == "M") {
    sexo = "Masculino";
}

else if (sexo == "F"){
    sexo = "Feminino";
}
else {
    while (sexo != "M" || sexo != "F"){
        alert("escreva apenas feminino ou masculino.");
        var sexo = prompt('qual seu sexo ?[M/F]:').toUpperCase().substr(0, 1);
    }
    break
}

let pessoa = {
    nome,
    idade,
    sexo
};

document.write("<h2>Pessoa cadastrada<br></h2>", pessoa.nome,'<br>',
pessoa.idade, '<br>', pessoa.sexo, '<br><br>')
alterador();