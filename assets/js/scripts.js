const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function loadHTML(url, elementId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            $(elementId).innerHTML = data;
        });
}
