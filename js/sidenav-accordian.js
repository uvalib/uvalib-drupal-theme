document.addEventListener("DOMContentLoaded", function () {
	const parentItems = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > h3"
	);

	// Select all the nested <ul> elements
	const nestedLists = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > ul"
	);

	// Log the number of elements to debug
	console.log("parentItems:", parentItems.length);
	console.log("nestedLists:", nestedLists.length);

	// Make sure the parentItems and nestedLists are found
	if (parentItems.length === 0 || nestedLists.length === 0) {
		console.warn("No collapsible sidebar items or nested lists found.");
		return; // Exit if no collapsible items or nested lists are found
	}

	// Initially collapse all menus
	nestedLists.forEach((list) => {
		list.style.display = "none";
		list.setAttribute("aria-expanded", "false"); // Set aria-expanded to false
	});

	// Check for the current active page or anchor
	const currentUrl = window.location.href; // Get the current URL
	let currentAnchor = null;

	// Look through each <a> tag inside the sidebar to check if the href matches the current URL
	const links = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable a"
	);
	links.forEach((link) => {
		if (currentUrl.includes(link.getAttribute("href"))) {
			currentAnchor = link.getAttribute("href");
		}
	});

	// If an anchor is found, open the corresponding nested <ul>
	if (currentAnchor) {
		const targetLi = Array.from(parentItems).find((item) => {
			const nestedUl = item.nextElementSibling; // Get the <ul> that follows the <h3>
			if (nestedUl && nestedUl.querySelector(`a[href="${currentAnchor}"]`)) {
				return true;
			}
			return false;
		});

		if (targetLi) {
			// Open the corresponding <ul> and set the aria-expanded attribute
			const nestedUl = targetLi.nextElementSibling;
			if (nestedUl) {
				nestedUl.style.display = "block";
				nestedUl.setAttribute("aria-expanded", "true");
				targetLi.classList.add("open");
				targetLi.classList.remove("closed");
			}
		}
	}

	// Update arrows immediately after the first menu is open (if available)
	// We don't need this for "first menu" anymore, since it will be dynamically handled now
	updateArrows();

	// Add event listener for each parent item
	parentItems.forEach((item) => {
		item.addEventListener("click", function () {
			const nestedList = this.nextElementSibling;

			// Only proceed if a nested <ul> exists
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
		parentItems.forEach((item) => {
			const nestedList = item.nextElementSibling;

			// Make sure we are referencing a valid nested <ul>
			if (nestedList && nestedList.tagName === "UL") {
				if (nestedList.getAttribute("aria-expanded") === "true") {
					item.classList.add("open"); // Add class when open
					item.classList.remove("closed"); // Remove class when open
				} else {
					item.classList.add("closed"); // Add class when closed
					item.classList.remove("open"); // Remove class when closed
				}
			} else {
				console.log("No valid nested list found for item:", item);
			}
		});
	}

	// Initial update for the arrows (to handle the first menu state)
	updateArrows();
});

document.addEventListener("DOMContentLoaded", function () {
	const parentItems = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > h3"
	);

	// Select all the nested <ul> elements
	const nestedLists = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > ul"
	);

	// Log the number of elements to debug
	console.log("parentItems:", parentItems.length);
	console.log("nestedLists:", nestedLists.length);

	// Make sure the parentItems and nestedLists are found
	if (parentItems.length === 0 || nestedLists.length === 0) {
		console.warn("No collapsible sidebar items or nested lists found.");
		return; // Exit if no collapsible items or nested lists are found
	}

	// Initially collapse all menus
	nestedLists.forEach((list) => {
		list.style.display = "none";
		list.setAttribute("aria-expanded", "false"); // Set aria-expanded to false
	});

	// Open the first menu by default (if available)
	if (nestedLists[0]) {
		nestedLists[0].style.display = "block";
		nestedLists[0].setAttribute("aria-expanded", "true");
	}

	// Update arrows immediately after the first menu is open (if available)
	if (parentItems[0]) {
		parentItems[0].classList.add("open");
		parentItems[0].classList.remove("closed");
	}

	// Add event listener for each parent item
	parentItems.forEach((item, index) => {
		item.addEventListener("click", function () {
			const nestedList = this.nextElementSibling;

			// Only proceed if a nested <ul> exists
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

			// Make sure we are referencing a valid nested <ul>
			if (nestedList && nestedList.tagName === "UL") {
				if (nestedList.getAttribute("aria-expanded") === "true") {
					item.classList.add("open"); // Add class when open
					item.classList.remove("closed"); // Remove class when open
				} else {
					item.classList.add("closed"); // Add class when closed
					item.classList.remove("open"); // Remove class when closed
				}
			} else {
				console.log("No valid nested list found for item:", item);
			}
		});
	}

	// Initial update for the arrows (to handle the first menu state)
	updateArrows();
});
