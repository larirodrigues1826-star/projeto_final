// Localizar a barra de pesquisa
const pesquisa = document.getElementById("pesquisa");

// Localizar todas as publicações
const posts = document.querySelectorAll(".post");

// Localizar mensagem de resultado vazio
const mensagemVazia = document.getElementById("mensagem-vazia");

// Executar quando o usuário digitar
pesquisa.addEventListener("input", function() {

    const texto = pesquisa.value.toLowerCase();

    let encontrados = 0;

    // Percorrer todas as publicações
    posts.forEach(function(post) {

        const conteudo = post.textContent.toLowerCase();

        // Verificar se existe correspondência
        if (conteudo.includes(texto)) {

            post.style.display = "block";
            encontrados++;

        } else {

            post.style.display = "none";

        }

    });

    // Mostrar mensagem se não houver resultados
    if (encontrados === 0) {

        mensagemVazia.style.display = "block";

    } else {

        mensagemVazia.style.display = "none";

    }

});
