/*2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

let cart = [
    {
        product: 'Процессор',
        price: 12500
    },
    {
        product: 'Видео карта',
        price: 7500
    },
    {
        product: 'Материнская плата',
        price: 10000
    },
    {
        product: 'Жесткий диск',
        price: 6000
    },
    {
        product: 'Оперативная память',
        price: 4000
    },
]

function countCartPrice(arr) {
    let InitialValue = 0
    let cartPrice = arr.reduce(function (accumulator, currentValue) {
        console.log(`${currentValue.product} стоит ${currentValue.price} рублей`)
        return accumulator + currentValue.price
    }, InitialValue)
    return console.log(`Общая стоимость товаров корзины составляет ${cartPrice} рублей`)
}
countCartPrice(cart)