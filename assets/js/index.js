// Change Main Image

const thumbImages = document.querySelectorAll('[data-image]')
const mainImage = document.querySelector('[data-image-main]')

thumbImages.forEach(e => {
    e.addEventListener('click', () => {
        mainImage.src = e.src
    })
})

// Quantity 

const quantityValue = document.querySelector('[data-quantity-value]')
const quantityPlus = document.querySelector('[data-quantity-plus]')
const quantityMinus = document.querySelector('[data-quantity-minus]')

quantityPlus.addEventListener('click', () => {
    let aux;
    aux = Number(quantityValue.value);
    aux += 1;

    quantityValue.value = aux;
})

quantityMinus.addEventListener('click', () => {
    let aux;
    aux = Number(quantityValue.value);

    if(aux > 1) {
        aux -= 1;
        quantityValue.value = aux;
    }
})

// Cart

const countCartProducts = document.querySelector('.count')
const addToCart = document.querySelector('[data-add-to-cart]')

addToCart.addEventListener('click', () => {
    countCartProducts.innerHTML = quantityValue.value
})