let productsForCatalog = [
    {
        category: 'Процессор',
        model: 'AMD Ryzen 7 4800 H',
        price: 17500,
        img: ['img/процессор 1.jpg', 'img/процессор 2.jpg', 'img/процессор 3.jpg']
    },
    {
        category: 'Видео карта',
        model: 'GeForce GTX 1650i 4Gb',
        price: 12500,
        img: ['img/видеокарта 1.jpg', 'img/видеокарта 2.jpg', 'img/видеокарта 3.jpg']
    },
    {
        category: 'Жесткий диск',
        model: 'SSD Kingston KC2500 1Tb',
        price: 10000,
        img: ['img/жесткий диск 1.jpg', 'img/жесткий диск 2.jpg', 'img/жесткий диск 3.jpg']

    },
    {
        category: 'Оперативная память',
        model: 'Kingston ValueRAM DDR3 8 Gb',
        price: 8000,
        img: ['img/оперативная память 1.jpg', 'img/оперативная память 2.jpg', 'img/оперативная память 3.jpg']
    },
    {
        category: 'Материнская плата',
        model: 'Lenovo 700-15ISK',
        price: 17000,
        img: ['img/материнская плата 1.jpg', 'img/материнская плата 2.jpg', 'img/материнская плата 3.jpg']
    }
]

let cart = [
]

function catalog(arr) {
    let catalog = document.createElement('div')
    catalog.className = 'catalog'
    catalog.id = 'catalog'
    document.body.appendChild(catalog)

    for (let prod of arr) {
        let product = document.createElement('div')
        let productImg = document.createElement('div')
        let productCategory = document.createElement('div')
        let productDescription = document.createElement('div')
        let priceAndButton = document.createElement('div')
        let addToCart = document.createElement('button')
        let anchorModel = document.createElement('a')
        let img = document.createElement('img')
        let productPrice = document.createElement('span')

        product.className = 'product'
        productImg.className = 'productImg'
        productCategory.className = 'productCategory'
        productDescription.className = 'productDescription'
        priceAndButton.className = 'priceAndButton'
        productPrice.className = 'productPrice'
        addToCart.className = 'addToCart'
        img.className = 'img'
        anchorModel.setAttribute('href', '#')
        img.setAttribute('src', prod.img[0])
        img.setAttribute('data-seed', arr.indexOf(prod))
        addToCart.setAttribute('data-seed', arr.indexOf(prod))

        productCategory.innerText = prod.category
        productPrice.innerText = prod.price
        addToCart.innerText = 'Купить'

        catalog.appendChild(product)
        product.appendChild(productCategory)
        product.appendChild(productImg)
        product.appendChild(productDescription)

        product.appendChild(priceAndButton)
        priceAndButton.appendChild(productPrice)
        priceAndButton.appendChild(addToCart)
        productDescription.appendChild(anchorModel)
        productImg.appendChild(img)
    }
}

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
        title.className = 'titleCart'
        cartPrice.className = 'totalPriceOfCart'

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

            product.className = 'itemCart'
            productImg.className = 'imgProductInCart'
            description.className = 'descriptionProductInCart'
            category.className = 'categoryProductInCart'
            price.className = 'priceProductInCart'

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
        cart.className = 'emptyCart'
        cart.appendChild(emptyCart)
        cart.textContent = `Корзина пуста`
    }
    cart.setAttribute('id', 'cart')
}

window.addEventListener('load', catalog(productsForCatalog))
shopCart(cart)