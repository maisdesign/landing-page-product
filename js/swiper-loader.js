function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Script non caricato: ${src}`));
    document.head.appendChild(script);
  });
}

function loadStylesheet(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Stylesheet non caricato: ${href}`));
    document.head.appendChild(link);
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const swiperElement = document.querySelector('.mySwiper');
    if (swiperElement){
        loadScript('https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js')
        .then(() => {
            return loadStylesheet('https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css');
        })
        .then(() => {
            initSwiper();
        })
        .catch((error) => {
            console.warn('⚠️ Swiper non caricato, fallback card statiche attivo:', error);
        });
    }
});