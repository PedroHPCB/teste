function alterador(){
    while (cont != 5){
        var alt = prompt("quer mudar algo nas suas informações ?[S/N]").toUpperCase().substr(0, 1);
        cont += 1;
        if (alt == "S"){
            nome = prompt('qual o seu nome ?');
            idade = parseInt(prompt('qual a sua idade ?'));
            sexo = prompt('qual seu sexo ?[M/F]:').toUpperCase().substr(0, 1);
            if (sexo == "M") {
                sexo = "Masculino"
            }
            
            else if (sexo == "F"){
                sexo = "Feminino"
            }
            else {
                alert("escreva apenas feminino ou masculino.")
            }        
            document.write("<h2>Mudança de dados<br></h2>", nome,'<br>',
            idade, '<br>', sexo, '<br><br>')
        }
        else{
            break
        }
    }
}