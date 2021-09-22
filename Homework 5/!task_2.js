let cart = [
    {
        category: 'Процессор',
        model: 'AMD Ryzen 7 4800 H',
        price: 17500
    },
    {
        category: 'Видео карта',
        model: 'GeForce GTX 1650i 4Gb',
        price: 12500
    },
    {
        category: 'Жесткий диск',
        model: 'SSD Kingston KC2500 1Tb',
        price: 10000

    },
    {
        category: 'Оперативная память',
        model: 'Kingston ValueRAM DDR3 8 Gb',
        price: 8000
    },
    {
        category: 'Материнская плата',
        model: 'Lenovo 700-15ISK',
        price: 17000
    }
]

function shopCart(arr) {
    function countCartPrice(arr) {
        let InitialValue = 0
        let cartPrice = arr.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.price
        }, InitialValue)
        return cartPrice
    }

    let cart = document.createElement('div')
    cart.className = 'cart'
    document.body.appendChild(cart)

    if (arr.length > 0) {
        let title = document.createElement('div')
        let cartPrice = document.createElement('div')
        title.className = 'title'
        cartPrice.className = 'totalPrice'

        cart.appendChild(title)
        title.textContent = 'Корзина покупок'

        for (let prod of arr) {
            let product = document.createElement('div')
            let description = document.createElement('div')
            let productImg = document.createElement('div')
            let img = document.createElement('img')
            let category = document.createElement('span')
            let price = document.createElement('div')
            let anchorImg = document.createElement('a')

            product.className = 'item'
            productImg.className = 'img'
            description.className = 'description'
            category.className = 'category'
            price.className = 'price'

            anchorImg.setAttribute('href', '#')
            img.setAttribute('src', '#')
            description.textContent = prod.model
            category.textContent = prod.category
            price.textContent = prod.price


            cart.appendChild(product)
            productImg.appendChild(anchorImg)
            product.appendChild(anchorImg)
            product.appendChild(description)
            description.appendChild(category)
            product.appendChild(price)
            anchorImg.appendChild(img)
        }
        cart.appendChild(cartPrice)
        cartPrice.textContent = `В корзине: ${arr.length} товаров на сумму ${countCartPrice(arr)} рублей`
    }
    else {
        let emptyCart = document.createElement('div')
        emptyCart.className = 'emptyCart'
        cart.appendChild(emptyCart)
        emptyCart.textContent = `Корзина пуста`
    }
}

shopCart(cart)