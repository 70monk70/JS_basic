/*(*) У товара может быть несколько изображений. Нужно:
a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
b. Реализовать функционал перехода между картинками внутри модального окна.
*/
function openGallery(event) {
    function openAnotherImg(event) {
        let selectImg = event.target
        galleryImage.setAttribute('src', selectImg.getAttribute('src'))
    }

    const gallery = document.getElementById('gallery')
    const galleryImage = document.getElementById('galleryImg')
    const thumbnails = document.getElementById('thumbnails')
    const closeButton = document.getElementById('galleryClose')
    const imgSeed = event.target.dataset.seed
    const mainImg = event.target

    gallery.style.display = 'block'
    closeButton.addEventListener('click', function () { gallery.style.display = 'none' })
    galleryImage.setAttribute('src', mainImg.getAttribute('src'))
    arr = productsForCatalog[imgSeed].img

    thumbnails.innerHTML = ''

    for (let element of arr) {
        let img = document.createElement('img')
        thumbnails.appendChild(img)
        img.setAttribute('src', element)
        img.setAttribute('alt', 'картинка')
        img.addEventListener('click', openAnotherImg)

    }
}

function getTag() {
    const elements = document.querySelectorAll('.productImg > img')
    for (let image of elements) {
        image.addEventListener('click', openGallery)
    }
}

window.addEventListener('load', getTag)