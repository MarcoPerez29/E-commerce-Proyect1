// EVENTO CART
const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.add("show");
});

//EVENTO CART-DELETE
const cartDelete = cart.firstElementChild;

cartDelete.addEventListener("click", () => {
    cart.classList.remove("show");
});


// EVENTO MENU
const menuIcon = header.firstElementChild;
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.add("show");
});


// EVENTO MENU-DELETE
const menuInconX = menu.firstElementChild;

menuInconX.addEventListener("click", () => {
    menu.classList.remove("show");
});


//EVENTO
const menuList = document.querySelectorAll(".menu__words");
menuList.forEach (elem => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

// EVENTO AGREGAR-ELIMINAR AL CARRITO
const cartAdd = document.querySelector(".cart__add");
const badgeNum = document.querySelector(".header__badge");
const products = document.querySelectorAll(".products__product");


products.forEach (elem => {
    const productsIcon = elem.lastElementChild;
    productsIcon.addEventListener("click", () => {

        //Obtiene los datos del elemento que se le hizo click
        const elemImg = elem.firstElementChild.getAttribute("src");
        const elemName = elem.children[1].textContent;
        const elemPrice = elem.children[2].textContent;

        let elemNum = false;
        let count = 0;
        const productsName = document.querySelectorAll(".cart__text");
        let productsNum = document.querySelectorAll(".cart__num");
        for (const item of productsName) {
            if (item.textContent == elemName){
                elemNum = true;
                break;
            }else{
                elemNum = false;
            }
            count++;
        }

        if (!elemNum) {
            //Realiza la clase y la agrega al carrito (cart)
            const newDiv = document.createElement("div");
            newDiv.classList.add("cart__section");

            const newP0 = document.createElement("p");
            newP0.textContent = "X";
            newDiv.appendChild(newP0);

            const newP1 = document.createElement("p");
            newP1.classList.add("cart__num");
            newP1.textContent = `${1}`;
            newDiv.appendChild(newP1);

            const newImg = document.createElement("img");
            newImg.setAttribute("src", elemImg);
            newImg.classList.add("cart__img");
            newDiv.appendChild(newImg);

            const newP2 = document.createElement("p");
            newP2.classList.add("cart__text");
            newP2.textContent = elemName;
            newDiv.appendChild(newP2);

            const newP3 = document.createElement("p");
            newP3.classList.add("cart__text--price");
            newP3.textContent = elemPrice;
            newDiv.appendChild(newP3);

            const newIcon = document.createElement("i");
            newIcon.classList.add("cart__icons");
            const newImg2 = document.createElement("img");
            newImg2.setAttribute("src", "img/trash-2.svg");
            newImg2.classList.add("cart__icons--delete");
            newIcon.appendChild(newImg2);
            newDiv.appendChild(newIcon);

            // const cartAdd = document.querySelector(".cart__add"); --Ya lo agregue
            cartAdd.appendChild(newDiv);


            //EVENTO
            const iconRemove = document.querySelectorAll(".cart__icons");
            
            iconRemove.forEach(elem => {
                elem.addEventListener("click", () => {
                    const elemParent = elem.parentElement;
                    elemParent.remove();
                    
                    let badgeCount = 0;
                    productsNum = document.querySelectorAll(".cart__num");
                    for (const item of productsNum) {
                        badgeCount = badgeCount + parseInt(item.textContent, 10);
                    }
                    badgeNum.lastElementChild.textContent = badgeCount; //numero productos
                });
            }); 

        } else {
            const numSum = parseInt(productsNum[count].textContent, 10) + 1;
            productsNum[count].textContent = numSum;
        }
        
        
        

        productsNum = document.querySelectorAll(".cart__num");
        let badgeCount = 0;
        for (const item of productsNum) {
            badgeCount = badgeCount + parseInt(item.textContent, 10);
        }
        badgeNum.lastElementChild.textContent = badgeCount; //numero productos
    });
});