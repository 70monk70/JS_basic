/*1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида.

Поскольку код завязан на скрипт создания магазина и корзины, этот файл тоже прикреплю (проверять не обязательно, называется shop) + файлы css. В целом, они соотвествует Практическому заданию № 5, только:
а) для корзины я добавил id (Поскольку классы разные для пустой корзины и корзины с товарами (разные, потому что на этапе верстки не получилось нормально реализовать переход отрисовки корзины));
б)добавил id на корзину для того, чтобы удалять предыдущую корзину в функции updateCart))\
в)добавил атрибут data-seed для изображений товаров.

*/

function updateCart(event) {
    const dSeed = event.target.dataset.seed
    const cartId = document.getElementById('cart')
    cartId.remove()
    cart.push(productsForCatalog[dSeed])
    shopCart(cart)
}

function getButton() {
    const adToCart = document.querySelectorAll('.addToCart')
    for (let button of adToCart) {
        button.addEventListener('click', updateCart)
    }
}

window.addEventListener('load', getButton)