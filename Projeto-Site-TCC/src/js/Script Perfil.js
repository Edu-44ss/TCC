 // Função para exibir o modal
 function exibirFormulario() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("myModal").style.display = "none";
}

// Função para pré-visualizar a imagem
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

// Adiciona o evento de envio do formulário
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nomeUsuario").value;
    const email = document.getElementById("emailUsuario").value;
    const telefone = document.getElementById("telefoneUsuario").value;

    document.getElementById("userName").textContent = nome;
    document.getElementById("userEmail").textContent = "Email: " + email;
    document.getElementById("userPhone").textContent = "Telefone: " + telefone;

    alert("Perfil atualizado com sucesso!");

    fecharModal(); // Fecha o modal após salvar
});

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        fecharModal();
    }
}