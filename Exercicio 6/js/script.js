function telas(x){

    // Pegando os elementos div na tela a partir do seu iD 
    const telaAluno = document.getElementById("telaAluno");
    const telaProf = document.getElementById("telaProf");

    // Quando um botao e apertado, a outra div (referente ao professor, por exemplo) tem o seu display alterado
    if (x == 0){
        telaAluno.style.display = "block";
        telaProf.style.display = "none";
    }
    else {
        telaAluno.style.display = "none";
        telaProf.style.display = "block";
    }

}

function addPessoa(x){

    // Popup de input 
    let nome = prompt("Digite o nome:");

    // Criando a linha da lista e o seu conteudo
    const node = document.createElement("li");
    const textnode = document.createTextNode(nome);
    node.appendChild(textnode);

    // Adicionando linha a lista determinada
    if (x == 0){
        document.getElementById("lstAluno").appendChild(node);
    }
    else {
        document.getElementById("lstProf").appendChild(node);
    }

}