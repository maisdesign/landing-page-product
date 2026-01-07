/*
* Fix race condition per apertura e chiusura menu mobile
*
*/
document.addEventListener('DOMContentLoaded', function () {

    const navOffcanvas = document.getElementById('navOffcanvas');

    const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(navOffcanvas);

    const offCanvasLinks = document.querySelectorAll('.offcanvas-nav-link');


    offCanvasLinks.forEach(function (link) {

        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetID = link.getAttribute('href');

            offcanvasInstance.hide();
            navOffcanvas.addEventListener('hidden.bs.offcanvas', function onHidden() {

                const targetElement = document.querySelector(targetID);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.warn('Elemento target non trovato:', targetID);
                }
                navOffcanvas.removeEventListener('hidden.bs.offcanvas', onHidden);
            });
        });
    });

});