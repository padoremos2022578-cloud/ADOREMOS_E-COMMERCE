let cartCount = 0;

let cartTotal = 1499;


function showSection(sectionId, clickedItem) {

    const sections = document.querySelectorAll(".content-section");

    sections.forEach(function(section) {
        section.classList.remove("active-section");
    });


    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active-section");
    }


    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function(item) {
        item.classList.remove("active");
    });


    if (clickedItem) {
        clickedItem.classList.add("active");
    }


    const titles = {
        home: "Welcome to ShopEase",
        products: "Products",
        categories: "Categories",
        cart: "Shopping Cart",
        orders: "My Orders",
        wishlist: "Wishlist",
        profile: "My Profile",
        settings: "Settings",
        logout: "Logout"
    };


    document.getElementById("pageTitle").textContent = titles[sectionId];

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function addToCart(productName, price) {

    cartCount++;

    cartTotal += price;

    document.getElementById("cartCount").textContent = cartCount;

    document.getElementById("cartTotal").textContent =
        "₱" + cartTotal.toLocaleString();


    alert(productName + " has been added to your cart!");
}


function checkout() {

    if (cartCount === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Checkout successful! Thank you for your purchase.");
}


function logout() {

    const confirmation = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmation) {
        alert("You have been logged out successfully.");
    }

}