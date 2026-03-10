// Button alert when user clicks Buy Now

const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
button.addEventListener("click", () => {
alert("Product added to cart!");
});
});


// Smooth scroll for navigation

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});

});
