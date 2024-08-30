document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton')?.addEventListener('click', function() {
        var key = document.getElementById('keyInput').value;
        if (key === '0208') {
            document.querySelector('.login-form').classList.add('slide-out');
            document.getElementById('successMessage').classList.add('visible', 'fade-in');
            setTimeout(function() {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'page2.html';
            }, 1000);
        } else {
            document.getElementById('errorMessage').classList.add('visible');
        }
    });

    if (window.location.pathname.endsWith('page2.html') && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }

    document.getElementById('logoutButton')?.addEventListener('click', function() {
        document.body.classList.add('fade-out');

        setTimeout(function() {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        }, 1000);
    });

    document.querySelectorAll('.gallery-image, .gallery-video').forEach(item => {
        item.addEventListener('click', function() {
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

    document.querySelector('.lightbox .close-btn')?.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    });
});
