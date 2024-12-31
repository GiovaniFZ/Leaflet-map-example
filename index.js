
function createMap() {
    const map = L.map('map', {
        zoom: 16
      }).setView([51,-0.09]);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{scale}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        style: 'dark_all',
        scale: '@1x'
      }).addTo(map);
}

createMap();