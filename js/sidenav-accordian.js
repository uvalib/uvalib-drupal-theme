// document.addEventListener("DOMContentLoaded", function () {
// 	const currentPath = window.location.pathname.toLowerCase();
// 	const sidebarItems = document.querySelectorAll(
// 		".site-sidebar--subnav-collaspsable h3"
// 	);

// 	sidebarItems.forEach((h3) => {
// 		const li = h3.closest("li");
// 		const sublist = li.querySelector("ul");
// 		const link = h3.querySelector("a");
// 		const href = link?.getAttribute("href")?.toLowerCase();

// 		// Collapse all sublists by default
// 		sublist.style.display = "none";
// 		h3.classList.add("closed");

// 		// Expand if href matches current path
// 		if (href && currentPath.startsWith(href)) {
// 			sublist.style.display = "block";
// 			h3.classList.add("open");
// 			h3.classList.remove("closed");
// 		}

// 		// Toggle on click
// 		h3.addEventListener("click", function (e) {
// 			if (e.target.tagName !== "A") {
// 				e.preventDefault();
// 				const isVisible = sublist.style.display === "block";

// 				// Close all other open sublists
// 				document
// 					.querySelectorAll(".site-sidebar--subnav-collaspsable h3.open")
// 					.forEach((openH3) => {
// 						if (openH3 !== h3) {
// 							openH3.classList.remove("open");
// 							openH3.classList.add("closed");
// 							const otherSublist = openH3.closest("li").querySelector("ul");
// 							if (otherSublist) otherSublist.style.display = "none";
// 						}
// 					});

// 				// Toggle this one
// 				sublist.style.display = isVisible ? "none" : "block";
// 				h3.classList.toggle("open", !isVisible);
// 				h3.classList.toggle("closed", isVisible);
// 			}
// 		});
// 	});
// });

document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable .li-0"
	);

	const collapseAll = () => {
		sections.forEach((section) => {
			section.classList.remove("open");
			section.classList.add("closed");
			const ul = section.querySelector(".ul-1");
			if (ul) ul.style.display = "none";
		});
	};

	const expandSection = (section) => {
		section.classList.remove("closed");
		section.classList.add("open");
		const ul = section.querySelector(".ul-1");
		if (ul) ul.style.display = "block";
	};

	// Collapse all sections by default
	collapseAll();

	// Expand section if current page matches
	const currentPath = window.location.pathname;
	sections.forEach((section) => {
		const link = section.querySelector("h3 a");
		if (link && currentPath === new URL(link.href).pathname) {
			expandSection(section);
		}
	});

	// Click and keyboard handling
	sections.forEach((section) => {
		const h3 = section.querySelector("h3");
		const arrow = section.querySelector(".arrow");

		// Click on <h3> (excluding links)
		h3.parentElement.addEventListener("click", (e) => {
			if (e.target.closest("a")) return; // ignore clicks on links
			const isOpen = section.classList.contains("open");
			collapseAll();
			if (!isOpen) expandSection(section);
		});

		// Click on arrow only
		arrow.addEventListener("click", (e) => {
			e.stopPropagation();
			const isOpen = section.classList.contains("open");
			collapseAll();
			if (!isOpen) expandSection(section);
		});

		// Keyboard accessibility for arrow
		arrow.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				arrow.click();
			}
		});
	});
});
