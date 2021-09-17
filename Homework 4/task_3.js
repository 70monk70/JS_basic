/*3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

Надеюсь, я правильно понял задание. Структура очень сильно примерная и она будет меняться ближе к релизу.
*/

catalog = {
    processors: [],
    videoCard: [],
    hddSsd: [],
    memory: [],
    notebooks: []
}

product = {
    name: 'Ryzen 9',
    price: 10000,
    brand: '',
    specifications: {},
    description: '',
    picture: ????,
    catalogCategory: {},
    promotion: flag
}

favorites = {} or[]

comparisonList = {} or[]

cart = {}


function addProductInCatalog(arg1, arg2) { }

function addProductInCart(arg) { }

function addProductToFavourites(arg) { }

function addProductsForComparison(arg)

function deleteProductFromCart(arg) { }

function deleteProductFromFavorites(arg) { }

function deleteProductFromComparisonList(arg) { }

function showCatalog(catalog) { }

function showProductsForComparison(comparisonList) { }

function showSomeCategory(arg) { }

function showFavorites(favorites) { }

function showProductInCart(cart) { }

function showPriceOfCart(cart) { }

function showProductsWithPromotion(arg) { }

function sortProductsInList(arg, listForSort) { }