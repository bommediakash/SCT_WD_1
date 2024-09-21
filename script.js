const sidebar = document.querySelector(".sidebar");
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-item");

let currentSection = "home";

function showSidebar() {
	sidebar.style.display = "flex";
}

function hideSidebar() {
	sidebar.style.display = "none";
}

window.addEventListener("scroll", () => {
	sections.forEach((sec) => {
		if (window.scrollY >= sec.offsetTop - 50) { 
			currentSection = sec.id;
		}
	});

	navItems.forEach((item) => {
		if (item.href.includes(currentSection)) {
			document.querySelector(".active").classList.remove("active");
			item.classList.add("active");
		}
	});
});