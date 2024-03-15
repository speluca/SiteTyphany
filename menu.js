// Seleciona o botão de hambúrguer e o menu de navegação
var hamburgerBtn = document.querySelector('.hamburger-btn');
var menuLinks = document.querySelector('.menu-links');

// Adiciona um ouvinte de evento de clique ao botão de hambúrguer
hamburgerBtn.addEventListener('click', function() {
    // Alterna a exibição do menu de navegação
    if (menuLinks.style.display === 'none') {
        menuLinks.style.display = 'block';
    } else {
        menuLinks.style.display = 'none';
    }
});
