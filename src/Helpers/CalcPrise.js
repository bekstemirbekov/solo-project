export function calcSubPrice(product) {
    return product.count * product.item.price  //только отношение суммы и количества одного вида товара
}

export function calcTotalPrice(products) {
    let totalPrice = 0;
    products.forEach(elem => {
        totalPrice = totalPrice + elem.subPrice  // применяется для общей суммировки 
    })
    return totalPrice
}

export function getCountProductsInCart() {
    let cart = JSON.parse(localStorage.getItem('cart'))    // для выведения суммы 
    return cart ? cart.products.length : 0
}