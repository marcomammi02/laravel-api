const { default: Axios } = require('axios');

require('./bootstrap');

window.Vue = require('vue');

const inputTitle = document.querySelector('[data-sluger=title]');
const inputSlug = document.querySelector('[data-sluger=slug]');
const btnGetSlug = document.querySelector('[data-sluger=button]');

if (inputTitle && inputSlug && btnGetSlug) {
    inputTitle.addEventListener('focusout', function() {
        if (inputSlug.value === '') {
            getSlug();
        }
    });

    btnGetSlug.addEventListener('click', getSlug);

    function getSlug() {
        // richiesta al server dello slug
        axios.get('/admin/categories/slug?title=' + inputTitle.value)
            .then(response => inputSlug.value = response.data.slug);
    }
}
