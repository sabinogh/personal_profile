const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuBtn.addEventListener('click', function() {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }); 