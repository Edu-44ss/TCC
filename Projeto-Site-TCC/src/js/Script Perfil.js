// Função para exibir o modal de edição
function exibirFormulario() {
    document.getElementById("myModal").style.display = "block"; // Exibe o modal ao clicar no botão "Editar Perfil"
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("myModal").style.display = "none"; // Esconde o modal ao clicar no botão de fechar
}

// Função para pré-visualizar a nova imagem de perfil
function previewImagem() {
    const file = document.getElementById("fotoPerfil").files[0]; // Obtém o arquivo selecionado
    const reader = new FileReader(); // Cria um objeto FileReader para ler o arquivo

    reader.onloadend = function () {
        document.getElementById("imgPreview").src = reader.result; // Atualiza a imagem de pré-visualização
    };

    if (file) {
        reader.readAsDataURL(file); // Lê o arquivo se ele existir
    } else {
        document.getElementById("imgPreview").src = "foto_perfil.jpg"; // Define a imagem padrão se nenhum arquivo for selecionado
    }
}

// Função para atualizar os dados do perfil ao submeter o formulário
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    const nome = document.getElementById("nomeUsuario").value; // Obtém o nome do usuário
    const email = document.getElementById("emailUsuario").value; // Obtém o e-mail do usuário
    const telefone = document.getElementById("telefoneUsuario").value; // Obtém o telefone do usuário

    // Atualiza os elementos da página com os novos dados do perfil
    document.getElementById("userName").textContent = nome;
    document.getElementById("userEmail").textContent = "Email: " + email;
    document.getElementById("userPhone").textContent = "Telefone: " + telefone;

    alert("Perfil atualizado com sucesso!"); // Exibe uma mensagem de sucesso

    fecharModal(); // Fecha o modal após salvar as alterações
});

// Fecha o modal se o usuário clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        fecharModal(); // Chama a função fecharModal se o clique for fora do modal
    }
}
