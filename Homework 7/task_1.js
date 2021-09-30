/*1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

В принципе, весь новый функционал описан здесь, в файле создания корзины только доделал верстку и повесил функции на кнопки, поэтому прикладывать тот файл не стал. 
*/

function addProductToCart(event) {
    const dSeed = event.target.dataset.seed
    const currentProduct = productsForCatalog[dSeed]

    if (!cart.includes(productsForCatalog[dSeed])) {
        currentProduct['count'] = 1
        cart.push(currentProduct)
    }
    else {
        currentProduct['count']++
    }
    renderCart()
}

document.onclick = event => {
    if (event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.seed)
    }
    else if (event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.seed)
    }
    else if (event.target.classList.contains('deleteButton')) {
        deleteFunction(event.target.dataset.seed)
    }
}

const renderCart = () => {
    const cartId = document.getElementById('cart')
    cartId.remove()
    shopCart(cart)
}

const plusFunction = seed => {
    cart[seed].count += 1
    renderCart()
}

const minusFunction = seed => {
    if (cart[seed].count - 1 == 0) {
        deleteFunction(seed)
        return true
    }
    console.log(seed)
    cart[seed].count -= 1
    renderCart()
}

const deleteFunction = seed => {
    cart.splice(seed, 1)
    renderCart()
}

function getButton() {
    const adToCart = document.querySelectorAll('.addToCart')
    for (let button of adToCart) {
        button.addEventListener('click', addProductToCart)
    }
}

function hideCartContent() {
    const products = document.getElementsByClassName('itemCart')
    for (let prod of products) {
        if (prod.style.display != 'none') prod.style.display = 'none'
        else prod.style.display = 'flex'
    }
}

function hideDeliveryForm() {
    const deliveryForm = document.getElementsByClassName('form')
    for (let element of deliveryForm) {
        if (element.style.display != 'flex') element.style.display = 'flex'
        else element.style.display = 'none'
    }
}

function hideComment() {
    const comments = document.getElementsByClassName('comment')
    for (let comment of comments) {
        if (comment.style.display != 'flex') comment.style.display = 'flex'
        else comment.style.display = 'none'
    }
}

const hideCartOpenDelivery = () => {
    const itemsOfCart = document.getElementsByClassName('itemCart')
    const deliveryForm = document.getElementsByClassName('form')
    for (let elementCart of itemsOfCart) {
        if (elementCart.style.display != 'none') elementCart.style.display = 'none'
    }
    for (let elementDeliv of deliveryForm) {
        if (elementDeliv.style.display != 'flex') elementDeliv.style.display = 'flex'
    }
}

const hideDeliveryOpenComment = () => {
    const deliveryForm = document.getElementsByClassName('form')
    const comments = document.getElementsByClassName('comment')
    for (let elementDeliv of deliveryForm) {
        if (elementDeliv.style.display != 'none') elementDeliv.style.display = 'none'
    }
    for (let comment of comments) {
        if (comment.style.display != 'flex') comment.style.display = 'flex'
    }
}

const hideAllForms = () => {
    const itemsOfCart = document.getElementsByClassName('itemCart')
    const deliveryForm = document.getElementsByClassName('form')
    const comments = document.getElementsByClassName('comment')

    for (let elementCart of itemsOfCart) {
        elementCart.style.display = 'none'
    }
    for (let deliveryItem of deliveryForm) {
        deliveryItem.style.display = 'none'
    }
    for (let comment of comments) {
        comment.style.display = 'none'
    }
}

window.addEventListener('load', getButton)