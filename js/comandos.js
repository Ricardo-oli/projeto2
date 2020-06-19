function validar () {
    var nome = formuser.nome.value;
    var celular = formuser.celular.value;
    var email = formuser.email.value;
    var user = formuser.user.value;
    var senha = formuser.senha.value;
    var confirmacao = formuser.confirmacao.value;

    if(nome== "") {
        alert ('Preencha o campo nome');
        formuser.nome.focus();
        return false; 
    }

}