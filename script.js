// To toggle the cart bar visibility
const cartIcon = document.querySelector(".cart-icon");
const cartBar = document.querySelector(".cart-bar")

cartIcon.addEventListener('click', () => {
    cartBar.classList.toggle('show');
        if (cartBar.classList.contains('show')) {
      cartBar.innerHTML = '<h4>Cart</h4><p>Your cart is empty</p>';
    }
  });








// Function to change the main image and update the thumbnail border
function changeImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-image'); 
    mainImage.src = imageSrc; 

// Get all thumbnails and remove the 'selected-thumbnail' class
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('selected-thumbnail'); // Remove border from all thumbnails
    });

// Add the 'selected-thumbnail' class to the clicked thumbnail
    thumbnail.classList.add('selected-thumbnail');
}


// Get references to the quantity elements and buttons

const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const amountInput = document.querySelector('.amount');
let quantity = 0;



function updateQuantity(){
    amountInput.textContent = quantity;
}

decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});

increaseBtn.addEventListener('click', () => {
    quantity++;
    updateQuantity();
});


const addBtn = document.querySelector(".add-to-cart");


