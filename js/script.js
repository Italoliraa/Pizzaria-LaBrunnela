let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll(' .container .image-container .image');

searchBox.oninput = () => {

    images.forEach(hide => hide.style.display = "none");
    let value = searchBox.value;
    
    images.forEach(filter => {

        let title = filter.getAttribute('data-title');

        if (value == title) {
            filter.style.display = 'flex';
        }

        if (searchBox.value == '') {
            filter.style.display = 'flex';
        }
    })
}