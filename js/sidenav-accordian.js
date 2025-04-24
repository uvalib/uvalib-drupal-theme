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

document.addEventListener("DOMContentLoaded", function () {
	const currentPath = window.location.pathname.toLowerCase();
	const sidebarItems = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable h3"
	);

	sidebarItems.forEach((h3) => {
		const li = h3.closest("li");
		const sublist = li.querySelector("ul");
		const link = h3.querySelector("a");
		const href = link?.getAttribute("href")?.toLowerCase();

		// Collapse all sublists by default
		sublist.style.display = "none";
		h3.classList.add("closed");
		h3.setAttribute("aria-expanded", "false");

		// Expand if href matches current path
		if (href && currentPath.startsWith(href)) {
			sublist.style.display = "block";
			h3.classList.add("open");
			h3.classList.remove("closed");
			h3.setAttribute("aria-expanded", "true");
		}

		// Toggle on click for the h3
		h3.addEventListener("click", function (e) {
			if (e.target.tagName !== "A") {
				e.preventDefault();
				const isVisible = sublist.style.display === "block";

				// Close all other open sublists
				document
					.querySelectorAll(".site-sidebar--subnav-collaspsable h3.open")
					.forEach((openH3) => {
						if (openH3 !== h3) {
							openH3.classList.remove("open");
							openH3.classList.add("closed");
							const otherSublist = openH3.closest("li").querySelector("ul");
							if (otherSublist) otherSublist.style.display = "none";
							openH3.setAttribute("aria-expanded", "false");
						}
					});

				// Toggle this one
				sublist.style.display = isVisible ? "none" : "block";
				h3.classList.toggle("open", !isVisible);
				h3.classList.toggle("closed", isVisible);
				h3.setAttribute("aria-expanded", !isVisible ? "true" : "false");
			}
		});

		// Keyboard support: Enter or Space should trigger the same action as click
		const arrowSpan = h3.querySelector("span.arrow");
		arrowSpan.addEventListener("keydown", function (e) {
			if (e.key === "Enter" || e.key === " ") {
				// Allow both Enter and Space
				e.preventDefault(); // Prevent scrolling when space is pressed
				const isVisible = sublist.style.display === "block";

				// Close all other open sublists
				document
					.querySelectorAll(".site-sidebar--subnav-collaspsable h3.open")
					.forEach((openH3) => {
						if (openH3 !== h3) {
							openH3.classList.remove("open");
							openH3.classList.add("closed");
							const otherSublist = openH3.closest("li").querySelector("ul");
							if (otherSublist) otherSublist.style.display = "none";
							openH3.setAttribute("aria-expanded", "false");
						}
					});

				// Toggle this one
				sublist.style.display = isVisible ? "none" : "block";
				h3.classList.toggle("open", !isVisible);
				h3.classList.toggle("closed", isVisible);
				h3.setAttribute("aria-expanded", !isVisible ? "true" : "false");
			}
		});
	});
});
