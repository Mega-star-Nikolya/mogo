const nav__linkSearch = document.querySelector('.nav__linkSearch');
const body = document.querySelector('body');
nav__linkSearch.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.add('nav__linkSearch--active')
});
body.addEventListener('click', function() {
    nav__linkSearch.classList.remove('nav__linkSearch--active')
});