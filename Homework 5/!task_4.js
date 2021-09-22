let product = [
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

function catalog(arr) {
    let content = document.createElement('div')
    content.className = 'content'
    document.body.appendChild(content)

    for (let prod of arr) {
        let product = document.createElement('div')
        let productImg = document.createElement('div')
        let productCategory = document.createElement('div')
        let productDescription = document.createElement('div')
        let priceAndButtom = document.createElement('div')
        let addToCart = document.createElement('button')
        let anchorModel = document.createElement('a')
        let anchorImg = document.createElement('a')
        let img = document.createElement('img')
        let price = document.createElement('span')


        product.className = 'product'
        productImg.className = 'productImg'
        productCategory.className = 'productCategory'
        productDescription.className = 'productDescription'
        priceAndButtom.className = 'priceAndButtom'
        price.className = 'price'
        addToCart.className = 'addToCart'
        anchorModel.setAttribute('href', '#')
        anchorImg.setAttribute('href', '#')
        img.setAttribute('src', '#')

        productCategory.innerText = prod.category
        anchorModel.innerText = prod.model
        price.innerText = prod.price
        addToCart.innerText = 'Купить'

        content.appendChild(product)
        product.appendChild(productCategory)
        product.appendChild(productImg)
        product.appendChild(productDescription)
        product.appendChild(priceAndButtom)
        priceAndButtom.appendChild(price)
        priceAndButtom.appendChild(addToCart)
        productDescription.appendChild(anchorModel)
        productImg.appendChild(anchorImg)
        anchorImg.appendChild(img)

    }
}

catalog(product)