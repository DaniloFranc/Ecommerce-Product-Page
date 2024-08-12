var cartIcon = document.getElementById('iconCart');
var cartPopup = document.getElementById('cartPopup');
var addToCartButton = document.getElementById('add');
var itemCount = document.getElementById('itemCount');
var menosButton = document.getElementById('menos');
var maisButton = document.getElementById('mais');
var numeroProduto = document.getElementById('numeroProduto');
var pricePerProduct = 125.00;
var thumbnails = document.querySelectorAll('.imageProductThumb');
// const btnImage: HTMLElement | null = document.getElementById("imageProduct1");
var prod = document.getElementById("prod");
var fechar = document.getElementById("fechar");
var figpopup1 = document.getElementById('figpopup1');
var figpopup2 = document.getElementById('figpopup2');
var figpopup3 = document.getElementById('figpopup3');
var figpopup4 = document.getElementById('figpopup4');
var princPopup = document.getElementById('princPopup');
var imageProduct1 = document.getElementById('imageProduct1');
var imageProduct2 = document.getElementById('imageProduct2');
var imageProduct3 = document.getElementById('imageProduct3');
var imageProduct4 = document.getElementById('imageProduct4');
var nextButton = document.getElementById('next');
var previousButton = document.getElementById('previous');
var count = 0;
// btnImage?.addEventListener("click",()=>{
//     prod?.removeAttribute("class","ocultarPopup")
//     prod?.setAttribute("class","popupp")
// })
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", function () {
});
fechar === null || fechar === void 0 ? void 0 : fechar.addEventListener("click", function () {
    prod === null || prod === void 0 ? void 0 : prod.removeAttribute("class", "popupp");
    prod === null || prod === void 0 ? void 0 : prod.setAttribute("class", "ocultarPopup");
});
function updateItemCount() {
    if (count > 0 && itemCount) {
        itemCount.style.display = 'block';
        itemCount.textContent = count.toString();
    }
    else if (itemCount) {
        itemCount.style.display = 'none';
    }
}
// thumbnails.forEach((thumbnail) => {
//     thumbnail.addEventListener('click', (event) => {
//         // Remove a classe 'selected' de todas as miniaturas
//         thumbnails.forEach((thumb) => thumb.classList.remove('selected'));
//         // Adiciona a classe 'selected' à miniatura clicada
//         (event.target as HTMLElement).classList.add('selected');
//     });
// });
function updateCartDetails() {
    var quantity = count;
    var total = (count * pricePerProduct).toFixed(2);
    if (count > 0 && cartPopup) {
        cartPopup.innerHTML = "\n            <div class=\"popupContent\">\n                <p class=\"tituloPopup\">Cart</p>\n                <hr class=\"linePopup\">\n                <div>\n                    <div class=\"odemPopup\">\n                        <img class=\"imageProcutPopup\" src=\"img/image-product-1-thumbnail.jpg\">\n                        <div class=\"popupStart\">\n                            <p class=\"popupTextProduto\">Fall Limited Edition Sneakers</p>\n                            <p><span class=\"produtoPopup\">$125.00 x</span> <span class=\"produtoPopup\" id=\"quantity\">".concat(quantity, "</span> <span id=\"total\" class=\"precoMulti\">$").concat(total, "</span></p>\n                        </div>\n                        <img class=\"imagemPopupLixeira\" src=\"img/icon-delete.svg\" onclick=\"removeFromCart()\">\n                    </div>\n                    <button class=\"botPopup\">Checkout</button>\n                </div>\n            </div>");
    }
    else if (cartPopup) {
        cartPopup.innerHTML = "\n            <div class=\"popupContent\">\n                <p class=\"tituloPopup\">Cart</p>\n                <hr class=\"linePopup\">\n                <p class=\"textPopup\">Your cart is empty.</p>\n            </div>";
    }
}
function removeFromCart() {
    count = 0;
    updateItemCount();
    updateCartDetails();
}
cartIcon === null || cartIcon === void 0 ? void 0 : cartIcon.addEventListener('click', function () {
    if ((cartPopup === null || cartPopup === void 0 ? void 0 : cartPopup.style.display) === 'none' || (cartPopup === null || cartPopup === void 0 ? void 0 : cartPopup.style.display) === '') {
        cartPopup.style.display = 'block';
    }
    else {
        cartPopup === null || cartPopup === void 0 ? void 0 : cartPopup.style.display = 'none';
    }
});
window.addEventListener('click', function (event) {
    if (event.target !== cartIcon && cartPopup && !cartPopup.contains(event.target)) {
        cartPopup.style.display = 'none';
    }
});
addToCartButton === null || addToCartButton === void 0 ? void 0 : addToCartButton.addEventListener('click', function () {
    var numberOfProducts = parseInt(numeroProduto.textContent, 10);
    count += numberOfProducts;
    updateItemCount();
    updateCartDetails();
    numeroProduto.innerHTML = "0";
});
updateItemCount();
menosButton === null || menosButton === void 0 ? void 0 : menosButton.addEventListener('click', function () {
    var currentCount = parseInt(numeroProduto.textContent, 10);
    if (currentCount > 0) {
        numeroProduto.textContent = (currentCount - 1).toString();
    }
});
maisButton === null || maisButton === void 0 ? void 0 : maisButton.addEventListener('click', function () {
    var currentCount = parseInt(numeroProduto.textContent, 10);
    numeroProduto.textContent = (currentCount + 1).toString();
});
figpopup1 === null || figpopup1 === void 0 ? void 0 : figpopup1.addEventListener('click', function () {
    if (princPopup) {
        princPopup.src = 'img/image-product-1.jpg';
    }
    if (figpopup1) {
        figpopup1.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.add("selected");
    }
});
figpopup2 === null || figpopup2 === void 0 ? void 0 : figpopup2.addEventListener('click', function () {
    if (princPopup) {
        princPopup.src = 'img/image-product-2.jpg';
    }
    if (figpopup2) {
        figpopup2.classList.add("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.add("selected");
    }
});
figpopup3 === null || figpopup3 === void 0 ? void 0 : figpopup3.addEventListener('click', function () {
    if (princPopup) {
        princPopup.src = 'img/image-product-3.jpg';
    }
    if (figpopup3) {
        figpopup3.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.add("selected");
    }
});
figpopup4 === null || figpopup4 === void 0 ? void 0 : figpopup4.addEventListener('click', function () {
    if (princPopup) {
        princPopup.src = 'img/image-product-4.jpg';
    }
    if (figpopup4) {
        figpopup4.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.add("selected");
    }
});
imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.addEventListener('click', function () {
    if (imageProduct1) {
        imageProduct1.classList.add("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (prod) {
        prod.removeAttribute("ocultarPopup");
        prod.setAttribute("class", "popupp");
    }
    if (princPopup) {
        princPopup.src = 'img/image-product-1.jpg';
    }
    if (figpopup1) {
        figpopup1.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
});
imageProduct2 === null || imageProduct2 === void 0 ? void 0 : imageProduct2.addEventListener('click', function () {
    if (imageProduct2) {
        imageProduct2.classList.add("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (prod) {
        prod.removeAttribute("ocultarPopup");
        prod.setAttribute("class", "popupp");
    }
    if (princPopup) {
        princPopup.src = 'img/image-product-2.jpg';
    }
    if (figpopup2) {
        figpopup2.classList.add("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
});
imageProduct3 === null || imageProduct3 === void 0 ? void 0 : imageProduct3.addEventListener('click', function () {
    if (imageProduct3) {
        imageProduct3.classList.add("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct4) {
        imageProduct4.classList.remove("selected");
    }
    if (prod) {
        prod.removeAttribute("ocultarPopup");
        prod.setAttribute("class", "popupp");
    }
    if (princPopup) {
        princPopup.src = 'img/image-product-3.jpg';
    }
    if (figpopup3) {
        figpopup3.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
    if (figpopup4) {
        figpopup4.classList.remove("selected");
    }
});
imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.addEventListener('click', function () {
    if (imageProduct4) {
        imageProduct4.classList.add("selected");
    }
    if (imageProduct1) {
        imageProduct1.classList.remove("selected");
    }
    if (imageProduct2) {
        imageProduct2.classList.remove("selected");
    }
    if (imageProduct3) {
        imageProduct3.classList.remove("selected");
    }
    if (prod) {
        prod.removeAttribute("ocultarPopup");
        prod.setAttribute("class", "popupp");
    }
    if (princPopup) {
        princPopup.src = 'img/image-product-4.jpg';
    }
    if (figpopup4) {
        figpopup4.classList.add("selected");
    }
    if (figpopup2) {
        figpopup2.classList.remove("selected");
    }
    if (figpopup3) {
        figpopup3.classList.remove("selected");
    }
    if (figpopup1) {
        figpopup1.classList.remove("selected");
    }
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', function () {
    if ((figpopup1 === null || figpopup1 === void 0 ? void 0 : figpopup1.classList.contains('selected')) && figpopup2 && imageProduct2 && imageProduct1 && imageProduct3 && imageProduct4) {
        removeSelectedClass();
        figpopup2.classList.add('selected');
        imageProduct2.classList.add("selected");
        imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.classList.remove("selected");
        imageProduct3 === null || imageProduct3 === void 0 ? void 0 : imageProduct3.classList.remove("selected");
        imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-2.jpg';
        }
    }
    else if ((figpopup2 === null || figpopup2 === void 0 ? void 0 : figpopup2.classList.contains('selected')) && figpopup3 && imageProduct3 && imageProduct1 && imageProduct2 && imageProduct4) {
        removeSelectedClass();
        figpopup3.classList.add('selected');
        imageProduct3.classList.add("selected");
        imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.classList.remove("selected");
        imageProduct2 === null || imageProduct2 === void 0 ? void 0 : imageProduct2.classList.remove("selected");
        imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-3.jpg';
        }
    }
    else if ((figpopup3 === null || figpopup3 === void 0 ? void 0 : figpopup3.classList.contains('selected')) && figpopup4 && imageProduct4 && imageProduct1 && imageProduct3 && imageProduct2) {
        removeSelectedClass();
        figpopup4.classList.add('selected');
        imageProduct4.classList.add("selected");
        imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.classList.remove("selected");
        imageProduct3 === null || imageProduct3 === void 0 ? void 0 : imageProduct3.classList.remove("selected");
        imageProduct2 === null || imageProduct2 === void 0 ? void 0 : imageProduct2.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-4.jpg';
        }
    }
});
previousButton === null || previousButton === void 0 ? void 0 : previousButton.addEventListener('click', function () {
    if ((figpopup4 === null || figpopup4 === void 0 ? void 0 : figpopup4.classList.contains('selected')) && figpopup3 && imageProduct3 && imageProduct1 && imageProduct2 && imageProduct4) {
        removeSelectedClass();
        figpopup3.classList.add('selected');
        imageProduct3.classList.add("selected");
        imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.classList.remove("selected");
        imageProduct2 === null || imageProduct2 === void 0 ? void 0 : imageProduct2.classList.remove("selected");
        imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-3.jpg';
        }
    }
    else if ((figpopup3 === null || figpopup3 === void 0 ? void 0 : figpopup3.classList.contains('selected')) && figpopup2 && imageProduct2 && imageProduct1 && imageProduct3 && imageProduct4) {
        removeSelectedClass();
        figpopup2.classList.add('selected');
        imageProduct2.classList.add("selected");
        imageProduct1 === null || imageProduct1 === void 0 ? void 0 : imageProduct1.classList.remove("selected");
        imageProduct3 === null || imageProduct3 === void 0 ? void 0 : imageProduct3.classList.remove("selected");
        imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-2.jpg';
        }
    }
    else if ((figpopup2 === null || figpopup2 === void 0 ? void 0 : figpopup2.classList.contains('selected')) && figpopup1 && imageProduct1 && imageProduct2 && imageProduct3 && imageProduct4) {
        removeSelectedClass();
        figpopup1.classList.add('selected');
        imageProduct1.classList.add("selected");
        imageProduct2 === null || imageProduct2 === void 0 ? void 0 : imageProduct2.classList.remove("selected");
        imageProduct3 === null || imageProduct3 === void 0 ? void 0 : imageProduct3.classList.remove("selected");
        imageProduct4 === null || imageProduct4 === void 0 ? void 0 : imageProduct4.classList.remove("selected");
        if (princPopup) {
            princPopup.src = 'img/image-product-1.jpg';
        }
    }
});
function removeSelectedClass() {
    if (figpopup1) {
        figpopup1.classList.remove('selected');
    }
    if (figpopup2) {
        figpopup2.classList.remove('selected');
    }
    if (figpopup3) {
        figpopup3.classList.remove('selected');
    }
    if (figpopup4) {
        figpopup4.classList.remove('selected');
    }
}
