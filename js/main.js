/*
* Fix race condition per apertura e chiusura menu mobile
*
*/
document.addEventListener('DOMContentLoaded', function () {
    //console.log('DOM fully loaded and parsed');
    const navOffcanvas = document.getElementById('navOffcanvas');
    //console.log('navOffcanvas element:', navOffcanvas);
    const offcanvasInstance = bootstrap.Offcanvas.getOrCreateInstance(navOffcanvas);
    //console.log('Istanza Bootstrap:', offcanvasInstance);
    const offCanvasLinks = document.querySelectorAll('.offcanvas-nav-link');
    //console.log('Link trovati:', offCanvasLinks);
    //console.log('Numero di link:', offCanvasLinks.length);

    offCanvasLinks.forEach(function (link) {
        //console.log('Processando link:', link);
        link.addEventListener('click', function (event) {
            event.preventDefault();
            //console.log('Link cliccato:', link);
            const targetID = link.getAttribute('href');
            //console.log('Target ID:', targetID);
            //console.log('Chiudendo offcanvas menu');
            offcanvasInstance.hide();
            navOffcanvas.addEventListener('hidden.bs.offcanvas', function onHidden() {
                //console.log('Offcanvas menu chiuso, navigando a:', targetID);
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