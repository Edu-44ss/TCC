function exibirFormulario() {
    document.getElementById("form-editar").style.display = "block";
}

function previewImagem() {
    const file = document.getElementById("fotoPerfil").files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        document.getElementById("imgPreview").src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById("imgPreview").src = "foto_perfil.jpg";
    }
}

document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;
    const telefone = document.getElementById("telefoneUsuario").value;

    document.getElementById("userName").textContent = nome;
    document.getElementById("userEmail").textContent = "Email: " + email;
    document.getElementById("userPhone").textContent = "Telefone: " + telefone;

    alert("Perfil atualizado com sucesso!");

    document.getElementById("form-editar").style.display = "none";
});
