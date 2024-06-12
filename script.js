function toggleCards() {
    var button = document.querySelector('.see-more');
    var cardsContainer = document.querySelector('.cards');
    var defaultCards = 6; 

    if (button.textContent === 'See More Products') {
        button.innerHTML = '<p>See Less Products</p><img src="./img/Arrow - Right Circle.png" alt="">';

        var products = ['Coffee', 'Tea', 'Chocolate', 'Ice Cream', 'Cookies', 'Juice'];
        var images = ['coffee.jpg', 'tea.jpg', 'chocolate.jpg', 'icecream.jpg', 'cookies.jpg', 'juice.jpg'];

        for (var i = 0; i < 6; i++) {
            var newCard = `
                <div class="card">
                    <img src="./img/main/cards/${images[i]}" alt="Card Image">
                    <div style="display: flex; justify-content: space-between;  padding: 0px 10px;">
                        <h2>${products[i]}</h2>
                        <div style="display: flex; justify-content: space-between;gap: 3px; align-items: center;">
                            <img style="height: 10px;width: auto;" src="./img/Vector.png" alt="">
                            <p>${getRandomRating()}</p>
                        </div>
                    </div>
                    <div style="margin: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <p style="border-radius: 24px; background-color: #F48E28; width: 150px; text-align: center; height: 50px; align-items:center ; justify-content: center;text-align: center;
                        justify-content: center;
                        display: flex;
                        color: white;
                        align-items: center; ">Add to cart</p>
                        <p>$${getRandomPrice()}</p>
                    </div>
                </div>
            `;
            cardsContainer.insertAdjacentHTML('beforeend', newCard);
        }
    } else {
        button.innerHTML = '<p>See More Products</p><img src="./img/Arrow - Right Circle.png" alt="">';

        var dynamicallyAddedCards = cardsContainer.querySelectorAll('.card:nth-child(n + ' + (defaultCards + 1) + ')');
        dynamicallyAddedCards.forEach(function(card) {
            cardsContainer.removeChild(card);
        });
    }
}

function getRandomRating() {
    return (Math.random() * (5 - 3) + 3).toFixed(1);
}

function getRandomPrice() {
    return (Math.random() * (10 - 5) + 5).toFixed(2); 
}

toggleCards(); 




// subscribe
function subscribeNewsletter(event) {
    event.preventDefault(); 
    const email = document.getElementById('emailInput').value;
    
    const subscriptionMessage = document.getElementById('subscriptionMessage');
    subscriptionMessage.style.display = 'block';
}
