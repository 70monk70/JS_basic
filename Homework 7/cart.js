let cart = [

]

function shopCart(arr) {

    function countCartPrice(arr) {
        let cartPrice = 0
        for (let prod of arr) {
            cartPrice = cartPrice + (prod.price * prod.count);
        }
        return cartPrice
    }

    let countProducts = 0
    let cart = document.createElement('div')
    cart.className = 'cart'
    document.body.appendChild(cart)

    if (arr.length > 0) {
        let title = document.createElement('div')
        let cartPrice = document.createElement('div')
        let cartContent = document.createElement('div')
        let cartContentTitle = document.createElement('div')
        let buttonBox = document.createElement('div')
        let nextButtonInCart = document.createElement('button')

        cartContent.className = 'cartContent'
        cartContentTitle.className = 'cartContentTitle'
        title.className = 'titleCart'
        cartPrice.className = 'totalPriceOfCart'
        nextButtonInCart.className = 'nextButton'
        buttonBox.className = 'itemCart'

        cart.appendChild(title)
        cart.appendChild(cartContent)
        cartContent.appendChild(cartContentTitle)
        buttonBox.appendChild(nextButtonInCart)
        title.textContent = 'Корзина покупок'
        cartContentTitle.textContent = 'Состав корзины:'
        nextButtonInCart.textContent = 'Далее'
        nextButtonInCart.setAttribute('id', 'nextButtonInCart')
        cartContentTitle.setAttribute('id', 'cartContentTitle')

        for (let prod of arr) {
            let product = document.createElement('div')
            let description = document.createElement('div')
            let quantity = document.createElement('div')
            let buttonPlus = document.createElement('button')
            let count = document.createElement('p')
            let deleteButton = document.createElement('button')
            let buttonMinus = document.createElement('button')
            let price = document.createElement('div')

            product.className = 'itemCart'
            description.className = 'descriptionProductInCart'
            quantity.className = 'quantity'
            price.className = 'priceProductInCart'
            buttonMinus.className = 'minus'
            buttonPlus.className = 'plus'
            deleteButton.className = 'deleteButton'

            description.textContent = prod.model
            deleteButton.textContent = 'X'
            price.textContent = prod.price
            count.innerHTML = prod.count
            buttonMinus.innerText = '-'
            buttonPlus.innerText = '+'
            buttonMinus.setAttribute('data-seed', arr.indexOf(prod))
            buttonPlus.setAttribute('data-seed', arr.indexOf(prod))
            deleteButton.setAttribute('data-seed', arr.indexOf(prod))


            cartContent.appendChild(product)
            product.appendChild(deleteButton)
            product.appendChild(description)
            product.appendChild(quantity)
            quantity.appendChild(buttonPlus)
            quantity.appendChild(count)
            quantity.appendChild(buttonMinus)
            product.appendChild(price)
        }
        cart.appendChild(cartPrice)
        cartContent.appendChild(buttonBox)
        for (let prod of arr) {
            countProducts += prod.count;
        }
        if (countProducts == 1) {
            cartPrice.textContent = `В корзине: ${countProducts} товар на сумму ${countCartPrice(arr)} рублей`
        }
        else if (countProducts > 1 && countProducts < 5) {
            cartPrice.textContent = `В корзине: ${countProducts} товара на сумму ${countCartPrice(arr)} рублей`
        }
        else { cartPrice.textContent = `В корзине: ${countProducts} товаров на сумму ${countCartPrice(arr)} рублей` }

        const getTagToCartContentTitle = () => {
            (document.getElementById('cartContentTitle')).addEventListener('click', hideCartContent)
        }

        const getTagToDeliveryTitle = () => {
            (document.getElementById('deliveryTitle')).addEventListener('click', hideDeliveryForm)
        }

        const getTagToCommentTitle = () => {
            (document.getElementById('commentTitle')).addEventListener('click', hideComment)
        }

        nextButtonInCart.addEventListener('click', hideCartOpenDelivery)

        function deliveryAddress() {
            let delivery = document.createElement('div')
            let deliveryTitle = document.createElement('div')
            let nameOfConsumer = document.createElement('input')
            let country = document.createElement('input')
            let city = document.createElement('input')
            let address = document.createElement('input')
            let email = document.createElement('input')
            let phoneNumber = document.createElement('input')
            let nextButtonInDelivery = document.createElement('button')
            let formNameOfConsumer = document.createElement('div')
            let formCountry = document.createElement('div')
            let formCity = document.createElement('div')
            let formAddress = document.createElement('div')
            let formEmail = document.createElement('div')
            let formPhoneNumber = document.createElement('div')
            let formNextButtonInDelivery = document.createElement('div')
            let textNameOfConsumer = document.createElement('p')
            let textCountry = document.createElement('p')
            let textCity = document.createElement('p')
            let textAddress = document.createElement('p')
            let textEmail = document.createElement('p')
            let textPhoneNumber = document.createElement('p')

            delivery.className = 'delivery'
            deliveryTitle.className = 'deliveryTitle'
            formNameOfConsumer.className = 'form'
            formCountry.className = 'form'
            formCity.className = 'form'
            formAddress.className = 'form'
            formEmail.className = 'form'
            formPhoneNumber.className = 'form'
            formNextButtonInDelivery.className = 'form'
            textNameOfConsumer.className = 'text'
            textCountry.className = 'text'
            textCity.className = 'text'
            textAddress.className = 'text'
            textEmail.className = 'text'
            textPhoneNumber.className = 'text'
            nextButtonInDelivery.className = 'nextButton'

            deliveryTitle.setAttribute('id', 'deliveryTitle')
            nameOfConsumer.setAttribute('type', 'text')
            nameOfConsumer.setAttribute('placeholder', 'Иванов Иван')
            country.setAttribute('type', 'text')
            country.setAttribute('placeholder', 'Россия')
            city.setAttribute('type', 'text')
            city.setAttribute('placeholder', 'Томск')
            address.setAttribute('type', 'text')
            address.setAttribute('placeholder', 'ул. Ленина, д. 1, кв. 1')
            email.setAttribute('type', 'email')
            email.setAttribute('placeholder', 'example@gmail.com')
            phoneNumber.setAttribute('type', 'number')
            phoneNumber.setAttribute('placeholder', '8-888-888-88-88')
            nextButtonInDelivery.setAttribute('type', 'submit')
            nextButtonInDelivery.setAttribute('id', 'nextButtonInDelivery')

            deliveryTitle.innerText = 'Адрес доставки:'
            textNameOfConsumer.innerText = 'ФИО покупателя'
            textCountry.innerText = 'Страна'
            textCity.innerText = 'Город'
            textAddress.innerText = 'Адрес'
            textEmail.innerText = 'E-mail'
            textPhoneNumber.innerText = 'Номер телефона'
            nextButtonInDelivery.innerText = 'Далее'

            delivery.appendChild(deliveryTitle)
            delivery.appendChild(formNameOfConsumer)
            formNameOfConsumer.appendChild(textNameOfConsumer)
            formNameOfConsumer.appendChild(nameOfConsumer)
            delivery.appendChild(formCountry)
            formCountry.appendChild(textCountry)
            formCountry.appendChild(country)
            delivery.appendChild(formCity)
            formCity.appendChild(textCity)
            formCity.appendChild(city)
            delivery.appendChild(formAddress)
            formAddress.appendChild(textAddress)
            formAddress.appendChild(address)
            delivery.appendChild(formEmail)
            formEmail.appendChild(textEmail)
            formEmail.appendChild(email)
            delivery.appendChild(formPhoneNumber)
            formPhoneNumber.appendChild(textPhoneNumber)
            formPhoneNumber.appendChild(phoneNumber)
            delivery.appendChild(formNextButtonInDelivery)
            formNextButtonInDelivery.appendChild(nextButtonInDelivery)
            cartContent.appendChild(delivery)

            nextButtonInDelivery.addEventListener('click', hideDeliveryOpenComment)
        }

        function comment() {
            let commentTitle = document.createElement('div')
            let comment = document.createElement('div')
            let commentArea = document.createElement('textarea')
            let nextButtoninComment = document.createElement('button')

            commentTitle.className = 'commentTitle'
            commentArea.className = 'commentArea'
            comment.className = 'comment'
            nextButtoninComment.className = 'nextButton'

            commentTitle.setAttribute('id', 'commentTitle')
            commentArea.setAttribute('name', 'textarea')
            commentArea.setAttribute('placeholder', 'Оставьте комментарий (при необходимости) и нажмите кнопку "Отправить"')
            nextButtoninComment.setAttribute('id', 'nextButtonInComment')

            commentTitle.innerText = 'Комментарий:'
            nextButtoninComment.innerText = 'Отправить'

            comment.appendChild(commentArea)
            comment.appendChild(nextButtoninComment)
            cartContent.appendChild(commentTitle)
            cartContent.appendChild(comment)

            nextButtoninComment.addEventListener('click', hideAllForms)
        }
        deliveryAddress()
        comment()
        getTagToCartContentTitle()
        getTagToDeliveryTitle()
        getTagToCommentTitle()
    }
    else {
        let emptyCart = document.createElement('div')
        cart.className = 'emptyCart'
        cart.appendChild(emptyCart)
        cart.textContent = `Корзина пуста`
    }
    cart.setAttribute('id', 'cart')
}

window.addEventListener('load', shopCart(cart))