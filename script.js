document.addEventListener('DOMContentLoaded', function () {
    // Evento para o botão de login
    document.getElementById('loginButton')?.addEventListener('click', function () {
        var key = document.getElementById('keyInput').value;
        if (key === '0208') {
            document.querySelector('.login-form').classList.add('fade-out');
            document.getElementById('successMessage').classList.add('visible');
            setTimeout(function () {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'page2.html';
            }, 1000);
        } else {
            document.getElementById('errorMessage').classList.add('visible');
        }
    });

    // Verificação de login ao acessar a segunda página
    if (window.location.pathname.endsWith('page2.html') && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }

    // Evento para o botão de logout
    document.getElementById('logoutButton')?.addEventListener('click', function () {
        document.body.classList.add('fade-out');
        setTimeout(function () {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        }, 1000);
    });

    // Função para abrir a lightbox com imagens e vídeos
    document.querySelectorAll('.gallery-image, .gallery-video').forEach(item => {
        item.addEventListener('click', function () {
            const lightbox = document.getElementById('lightbox');
            const lightboxImage = document.getElementById('lightbox-image');
            const lightboxVideo = document.getElementById('lightbox-video');

            if (item.tagName === 'IMG') {
                lightboxImage.src = item.src;
                lightboxImage.style.display = 'block';
                lightboxVideo.style.display = 'none';
            } else if (item.tagName === 'VIDEO') {
                lightboxVideo.src = item.src;
                lightboxVideo.style.display = 'block';
                lightboxImage.style.display = 'none';
            }

            lightbox.style.display = 'flex';
        });
    });

    // Evento para fechar a lightbox
    document.querySelector('.lightbox .close-btn')?.addEventListener('click', function () {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    });    
});

document.addEventListener('DOMContentLoaded', function () {
    const cardLink = document.getElementById('cardLink');
    const cardSection = document.getElementById('card-section');
    const cardIcon = document.getElementById('cardIcon');

    // Mostrar a seção do Card quando clicado
    cardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        cardSection.style.display = 'flex';
        
        // Rolagem suave
        window.scrollTo({
            top: cardSection.offsetTop,
            behavior: 'smooth'
        });
    });

    // Navegar para carta.html ao clicar no ícone
    cardIcon.addEventListener('click', function () {
        window.location.href = 'carta.html';
    });
});


document.querySelector('.card-pulse').addEventListener('click', function(event) {
    // Evita o comportamento padrão do link
    event.preventDefault();

    // Adiciona uma pequena animação para o clique
    document.body.style.scrollBehavior = 'smooth';

    // Redireciona após a animação
    setTimeout(() => {
        window.location.href = this.href;
    }, 300); // Ajuste o tempo conforme necessário
});
