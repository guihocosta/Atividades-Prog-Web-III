let i = 0;

function menu() {
    const menu = document.getElementsByClassName("menu");

    if (i === 0) {
        menu[0].style.display = "inline";
        i = i + 1;

    }

    else {
        menu[0].style.display = "none";
        i = i - 1;
    }
}

function autenticar() {
    const usuario = document.getElementById("idUsu");
    const txtUsu = usuario.value.trim();

    const password = document.getElementById("idPwd");
    const txtPwd = password.value.trim();

    const p1 = document.getElementById("idAviso");
    const p2 = document.getElementById("idAviso2");


    if (txtUsu === "") {
        usuario.style.borderBlockColor = "red";
        p1.innerText = "Usuário precisa ser preenchido";
    }

    else {
        usuario.style.borderBlockColor = "green";
        p1.innerText = "";
    }

    if (txtPwd === "") {
        password.style.borderBlockColor = "red";
        p2.innerText = "Senha precisa ser preenchida";
    }

    else if (txtPwd.length <= 6 || txtPwd.length >= 30) {
        console.log("Salve");
        password.style.borderBlockColor = "red";
        p2.innerText = "Senha deve ter entre 6 a 30 caracteres";
    }


    else {
        password.style.borderBlockColor = "green";
        p2.innerText = "";
    }
}