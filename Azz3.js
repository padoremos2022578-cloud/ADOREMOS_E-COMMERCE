
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        
        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        
        this.classList.add("active");
    });

});

const logoutButton = document.getElementById("logoutBtn");

logoutButton.addEventListener("click", function(event) {

    event.preventDefault();

    alert("You have selected Logout.");

});