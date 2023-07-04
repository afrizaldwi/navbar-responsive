/** @format */

const navbarCollapse = document.getElementById("navbarCollapse");
const navbarNav = document.getElementById("navbarNav");

navbarCollapse.addEventListener("click", () => {
	if (navbarNav.style.display === "block") {
		navbarNav.style.display = "none";
	} else {
		navbarNav.style.display = "block";

	}
});

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
	this.scrollY > 10
		? navbar.classList.add("sticky")
		: navbar.classList.remove("sticky");
};
