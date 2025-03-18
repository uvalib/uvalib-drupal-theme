// class is .sidebar_subnav_class_accordian
// and is applied to the parent div of the <nav>

document.addEventListener("DOMContentLoaded", function () {
	const parentItems = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > h3"
	);

	// Select all the nested <ul> elements
	const nestedLists = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > ul"
	);

	// Initially collapse all menus
	nestedLists.forEach((list) => {
		list.style.display = "none";
		list.setAttribute("aria-expanded", "false"); // Set aria-expanded to false
	});

	// Open the first menu by default (or keep previously opened menu)
	nestedLists[0].style.display = "block";
	nestedLists[0].setAttribute("aria-expanded", "true");

	// Update arrows immediately after the first menu is open
	parentItems[0].classList.add("open");
	parentItems[0].classList.remove("closed");

	parentItems.forEach((item, index) => {
		item.addEventListener("click", function () {
			const nestedList = this.nextElementSibling;

			if (nestedList && nestedList.tagName === "UL") {
				const isOpen = nestedList.style.display === "block"; // Check if the menu is already open

				// Collapse all nested lists
				nestedLists.forEach((list) => {
					list.style.display = "none";
					list.setAttribute("aria-expanded", "false");
				});

				// If the clicked list was not open, open it
				if (!isOpen) {
					nestedList.style.display = "block";
					nestedList.setAttribute("aria-expanded", "true");
				}
			}

			// Update the icons (arrows) in the h3
			updateArrows();
		});
	});

	// Update the arrows based on aria-expanded state
	function updateArrows() {
		parentItems.forEach((item, index) => {
			const nestedList = item.nextElementSibling;

			if (nestedList && nestedList.tagName === "UL") {
				if (nestedList.getAttribute("aria-expanded") === "true") {
					item.classList.add("open"); // Add class when open
					item.classList.remove("closed"); // Remove class when open
				} else {
					item.classList.add("closed"); // Add class when closed
					item.classList.remove("open"); // Remove class when closed
				}
			}
		});
	}

	// Initial update for the arrows (to handle the first menu state)
	updateArrows();
});
