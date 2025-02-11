
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




document.addEventListener("DOMContentLoaded", () => {
    // Get ELEMENTS FROM HTML    
    const addToCartBtn = document.querySelector('.add-to-cart');
    const cartIcon = document.querySelector('.cart-icon');
    const cartBar = document.getElementById('cart-bar');
    const amountInput = document.querySelector('.amount');
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
  
    let quantity = 0;
    const cart = [];
  
    // Update quantity on the page
    function updateQuantity() {
      amountInput.textContent = quantity;
    }
  
    // Handle quantity increase and decrease
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
  
    // Add items to cart
    function addItemToCart() {
      if (quantity > 0) {
        const productName = document.querySelector(".product-details h1").textContent;
        const productPrice = parseFloat(document.querySelector(".current-price").textContent.replace("$", ""));
  

        const existingItem = cart.find(item => item.name === productName);

        // Add item to the cart array
        if (existingItem) {
            // If it exists, update its quantity
            existingItem.quantity += quantity;
          } else {
            // Otherwise, add a new item
            cart.push({
              name: productName,
              price: productPrice,
              quantity: quantity
            });
          }
      
  
        // Update the cart view
        updateCart();
  
        // Reset quantity after adding to cart
        quantity = 0;
        updateQuantity();
      }
    }
  
    // Update cart content display
    function updateCart() {
      let cartContent = "";
      const mainImage = document.getElementById('main-image');
      imageSrc= mainImage.src;
      if (cart.length === 0) {
        cartContent = ` <h4>Cart</h4>
        <p>Your cart is empty</p>`;
      } else {
        cart.forEach(item => {
          cartContent += `
            <div class="cart-item">
            <h4>Cart</h4>
            <div class="cart-detail">
            <span> <img src="${imageSrc}" alt="${item.name}"></span>
            <span> 
            <p>${item.name}</p>
            <p>$${item.price} x ${item.quantity} <span>$${getTotalPrice()} </span></p>
            </span>
            <span class="delete-icon"> <img src="/images/icon-delete.svg" alt="icon delete-icon"></span>
            </div>
            <button class="checkout">Checkout </button>
            </div>
          `;
        });
      }
  
      cartBar.innerHTML = `
        <div class="cart-items">
          ${cartContent}
        </div>
      `;

      const deleteIcons = document.querySelectorAll(".delete-icon")
      deleteIcons.forEach(deleteIcon=>{
        deleteIcon.addEventListener("click", ()=>{
            const index = event.target.closest('.delete-icon').getAttribute('data-index');
            // Remove item from cart array by index
            cart.splice(index, 1);
            // Update the cart view
            updateCart();
        });
      });
    }
  
    // Calculate total price
    function getTotalPrice() {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }
  
    // Event listener for "Add to Cart" button
    addToCartBtn.addEventListener('click', () => {
      addItemToCart();
    });
  
    // Toggle cart visibility when clicking the cart icon
    cartIcon.addEventListener('click', () => {
      cartBar.classList.toggle('show');
      updateCart();  // Ensure cart is updated when it's toggled
    });
 
 
    
     


  });
  








document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox)

    const productImage = document.querySelector(".product-image img");
    const images = [
        "images/image-product-1.jpg",
        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg"
    ];
    let currentIndex = 0;

    lightbox.innerHTML = `
            <div class="lightbox-content">
            <button id="close-lightbox"><img src="images/icon-close.svg" alt="Close"></button>
            <img id="lightbox-img" src="" alt="Product Image">
            <div class="lightbox-thumbnails"></div>
            <button id="prev-lightbox"><img src="images/icon-previous.svg" alt="Previous"></button>
            <button id="next-lightbox"><img src="images/icon-next.svg" alt="Next"></button>
        </div>
    `;

    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightboxBtn = document.getElementById("close-lightbox");
    const nextLightboxBtn = document.getElementById("next-lightbox");
    const prevLightboxBtn = document.getElementById("prev-lightbox");
    const thumbnailsContainer = document.querySelector(".thumbnails");


    productImage.addEventListener("click", () => {
        currentIndex = 0;
        lightboxImg.src = images[currentIndex];
        lightbox.classList.add("show");
        thumbnailsContainer.classList.add("show")
    });

    closeLightboxBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
        thumbnailsContainer.classList.remove("show")

    });

    nextLightboxBtn.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImg.src = images[currentIndex];
        changeImage(images[currentIndex], thumbnails[currentIndex]);
    });

    prevLightboxBtn.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        lightboxImg.src = images[currentIndex];
        changeImage(images[currentIndex], thumbnail);
    });


    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
        });
    });


})



const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle the nav menu when hamburger menu is clicked
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.add("show");
    hamburgerMenu.style.display = "none";  // Hide the hamburger menu icon
    closeMenu.style.display = "block";     // Show the close menu icon
});

// Close the nav menu when close menu is clicked
closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburgerMenu.style.display = "block"; // Show the hamburger menu icon
    closeMenu.style.display = "none";      // Hide the close menu icon
});




