document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const topHeader = document.querySelector('.top-header');
    const navigation = document.querySelector('nav');
    const languageModal = document.getElementById('languageModal');
    const openLanguageModalButton = document.querySelector('#openLanguageModal'); // Button that opens the modal
    const closeLanguageModalButton = languageModal.querySelector('.close'); // Button that closes the modal

    // Function to open language modal
    function openLanguageModal() {
        languageModal.style.display = 'block';
        languageModal.setAttribute('aria-hidden', 'false');
    }

    // Function to close language modal
    function closeLanguageModal() {
        languageModal.style.display = 'none';
        languageModal.setAttribute('aria-hidden', 'true');
    }

    // Attaching event listeners for modal open/close
    if (openLanguageModalButton) {
        openLanguageModalButton.addEventListener('click', openLanguageModal);
    }

    if (closeLanguageModalButton) {
        closeLanguageModalButton.addEventListener('click', closeLanguageModal);
    }

    // Smooth scrolling to top functionality
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Throttled scroll event to manage header class toggling
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    window.onscroll = throttle(function() {
        if (window.pageYOffset > 100) {
            topHeader.classList.add('shrink');
            header.classList.add('shrink');
            navigation.classList.add('shrink');
        } else {
            topHeader.classList.remove('shrink');
            header.classList.remove('shrink');
            navigation.classList.remove('shrink');
        }
    }, 100);
});
