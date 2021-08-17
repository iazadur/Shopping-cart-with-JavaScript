let updateProductNumber = function (product, price, isIncrement) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    if (isIncrement) {
        productNumber = parseInt(productNumber) + 1
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1

    }
    productInput.value = productNumber

    // update Product total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price
    calculateTotal()
}


let getInputValue = function (product, price) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value
    return productNumber * price
}


let calculateTotal = function () {
    const phoneTotal = getInputValue('phone', 1219)
    const caseTotal = getInputValue('case', 59)
    const subtotal = phoneTotal + caseTotal
    const tax = subtotal / 10 // 10% vat calculation
    const totalPrice = subtotal + tax
    document.getElementById('sub-total').innerText = subtotal
    document.getElementById('tax-ammount').innerText = tax
    document.getElementById('total-price').innerText = totalPrice
}


// handle Phone
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

// handle case
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})