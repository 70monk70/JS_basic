/*2. Для задачи со звездочкой из шестого урока реализовать функционал переключения между картинками по стрелкам на клавиатуре.

Функционал реализован в функции iterationImg, остальной код точно такой же, как и в задании 6 урока. Если можно как-то иначе решить задачу, буду рад, если подскажите*/

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
    let arrayOfImages = []

    gallery.style.display = 'block'
    closeButton.addEventListener('click', function () { gallery.style.display = 'none' })
    galleryImage.setAttribute('src', mainImg.getAttribute('src'))
    arrayOfImages = productsForCatalog[imgSeed].img

    thumbnails.innerHTML = ''

    for (let element of arrayOfImages) {
        let img = document.createElement('img')
        thumbnails.appendChild(img)
        img.setAttribute('src', element)
        img.setAttribute('alt', 'картинка')
        img.setAttribute('data-seed', arrayOfImages.indexOf(element))
        img.addEventListener('click', openAnotherImg)
    }

    document.onkeyup = function iterationImg(event) {
        if (event.key == 'ArrowRight') {
            element = arrayOfImages.shift()
            arrayOfImages.push(element)
            galleryImage.setAttribute('src', arrayOfImages[0])
        }
        else if (event.key == 'ArrowLeft') {
            element = arrayOfImages.pop()
            arrayOfImages.unshift(element)
            galleryImage.setAttribute('src', arrayOfImages[0])
        }
    }
}

function getTag() {
    const elements = document.querySelectorAll('.productImg > img')
    for (let image of elements) {
        image.addEventListener('click', openGallery)
    }
}

window.addEventListener('load', getTag)