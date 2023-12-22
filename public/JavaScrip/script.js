window.addEventListener("load", async function () {
    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let list = document.querySelector('.list');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');

    openShopping.addEventListener('click', () => {
        body.classList.add('active');
    });

    closeShopping.addEventListener('click', () => {
        body.classList.remove('active');
    });

    let resultado = await fetch("/api/productos");
    let data = await resultado.json();

    let listCards = [];

    function initApp() {
        data.forEach((value, key) => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.dataset.categoryId = value.category_id;
            newDiv.innerHTML = `
                <div class="product-container">
                    <img src="/Images/${value.id}.jpg" class="product-image">
                    <div class="description-overlay">
                        <p class="description-text">${value.description}</p>
                    </div>
                    <div class="title">${value.name}</div>
                    <div class="price">${value.price.toLocaleString()}</div>
                </div>`;

            let button = document.createElement('button');
            button.textContent = 'Add To Card';
            button.addEventListener('click', () => addToCard(key));
            newDiv.appendChild(button);

            list.appendChild(newDiv);
        });
    }

    function addToCard(key) {
        if (listCards[key] == null) {
            listCards[key] = JSON.parse(JSON.stringify(data[key]));
            listCards[key].quantity = 1;
        }
        reloadCard();
    }

    function reloadCard() {
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;

        listCards.forEach((value, key) => {
            totalPrice += value.price * value.quantity;
            count += value.quantity;

            if (value != null) {
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="/Images/${value.id}.jpg" /></div>
                    <div>${value.name}</div>
                    <div>${value.price.toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>`;
                listCard.appendChild(newDiv);
            }
        });

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    }

    document.addEventListener('click', (event) => {
        if (!list.contains(event.target) && !body.classList.contains('active')) {
            body.classList.remove('active');
        }
    });

    window.changeQuantity = function (key, quantity) {
        if (quantity == 0) {
            delete listCards[key];
        } else {
            listCards[key].quantity = quantity;
            // Aquí está el cambio que hice
            let originalPrice = data[key].price;
            listCards[key].price = quantity * originalPrice;
        }
        reloadCard();
    };

    const categories = {
        "Platos": 1,
        "Bebidas": 2,
        "Postres": 3,
        "Promos": 4,
        "Todo": 0  // Agregamos una categoría "Todo" con id 0
    };

    const dropdownMenu = document.querySelector('.dropdown-menu.categoria');
    dropdownMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const categoryName = event.target.textContent.trim();
            const categoryId = categories[categoryName];
            filterItemsByCategory(categoryId);
        }
    });

    const showAllButton = document.querySelector('.dropdown-menu.categoria .dropdown-item[href="#"]');
    showAllButton.addEventListener('click', () => {
        filterItemsByCategory(0);  // Mostrar todos, categoría con id 0
    });

    function filterItemsByCategory(categoryId) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const itemCategoryId = parseInt(item.dataset.categoryId);
            if (categoryId === 0 || itemCategoryId === categoryId) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    initApp();
});
