// document.addEventListener("DOMContentLoaded", function () {
//     const parentItems = document.querySelectorAll(
//         ".site-sidebar--subnav-collaspsable > nav > ul > li > h3"
//     );

//     // Select all the nested <ul> elements
//     const nestedLists = document.querySelectorAll(
//         ".site-sidebar--subnav-collaspsable > nav > ul > li > ul"
//     );

//     // Log the number of elements to debug
//     console.log('parentItems:', parentItems.length);
//     console.log('nestedLists:', nestedLists.length);

//     // Make sure the parentItems and nestedLists are found
//     if (parentItems.length === 0 || nestedLists.length === 0) {
//         console.warn("No collapsible sidebar items or nested lists found.");
//         return; // Exit if no collapsible items or nested lists are found
//     }

//     // Initially collapse all menus
//     nestedLists.forEach((list) => {
//         list.style.display = "none";
//         list.setAttribute("aria-expanded", "false"); // Set aria-expanded to false
//     });

//     // Open the first menu by default (if available)
//     if (nestedLists[0]) {
//         nestedLists[0].style.display = "block";
//         nestedLists[0].setAttribute("aria-expanded", "true");
//     }

//     // Update arrows immediately after the first menu is open (if available)
//     if (parentItems[0]) {
//         parentItems[0].classList.add("open");
//         parentItems[0].classList.remove("closed");
//     }

//     // Add event listener for each parent item
//     parentItems.forEach((item, index) => {
//         item.addEventListener("click", function () {
//             const nestedList = this.nextElementSibling;

//             // Only proceed if a nested <ul> exists
//             if (nestedList && nestedList.tagName === "UL") {
//                 const isOpen = nestedList.style.display === "block"; // Check if the menu is already open

//                 // Collapse all nested lists
//                 nestedLists.forEach((list) => {
//                     list.style.display = "none";
//                     list.setAttribute("aria-expanded", "false");
//                 });

//                 // If the clicked list was not open, open it
//                 if (!isOpen) {
//                     nestedList.style.display = "block";
//                     nestedList.setAttribute("aria-expanded", "true");
//                 }
//             }

//             // Update the icons (arrows) in the h3
//             updateArrows();
//         });
//     });

//     // Update the arrows based on aria-expanded state
//     function updateArrows() {
//         parentItems.forEach((item, index) => {
//             const nestedList = item.nextElementSibling;

//             // Make sure we are referencing a valid nested <ul>
//             if (nestedList && nestedList.tagName === "UL") {
//                 if (nestedList.getAttribute("aria-expanded") === "true") {
//                     item.classList.add("open"); // Add class when open
//                     item.classList.remove("closed"); // Remove class when open
//                 } else {
//                     item.classList.add("closed"); // Add class when closed
//                     item.classList.remove("open"); // Remove class when closed
//                 }
//             } else {
//                 console.log("No valid nested list found for item:", item);
//             }
//         });
//     }
//     // Initial update for the arrows (to handle the first menu state)
//     updateArrows();
// });

document.addEventListener("DOMContentLoaded", function () {
	const parentItems = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > h3"
	);
	const nestedLists = document.querySelectorAll(
		".site-sidebar--subnav-collaspsable > nav > ul > li > ul"
	);

	if (parentItems.length === 0 || nestedLists.length === 0) {
		console.warn("No collapsible sidebar items or nested lists found.");
		return;
	}

	// Function to update the arrows based on the state of nested lists
	function updateArrows() {
		parentItems.forEach((item) => {
			const nestedList = item.nextElementSibling;
			if (nestedList && nestedList.tagName === "UL") {
				if (nestedList.getAttribute("aria-expanded") === "true") {
					item.classList.add("open");
					item.classList.remove("closed");
				} else {
					item.classList.add("closed");
					item.classList.remove("open");
				}
			}
		});
	}

	// Function to initialize the sidebar based on the current page URL
	function initSidebar() {
		// Collapse all the nested lists by default
		nestedLists.forEach((list) => {
			list.style.display = "none";
			list.setAttribute("aria-expanded", "false");
		});

		// Get the current URL (pathname)
		const currentURL = window.location.pathname.toLowerCase();

		// Extract the floor name (i.e., 'first', 'second', etc.) from the URL
		const urlParts = currentURL.split("/");
		const currentFloor = urlParts[urlParts.length - 1]; // The last part of the URL

		let activeIndex = -1;
		parentItems.forEach((item, index) => {
			const sidebarIdentifier = item.getAttribute("data-sidebar").toLowerCase(); // Get the sidebar identifier (e.g., 'first', 'second', etc.)

			// Check if the current floor matches the data-sidebar value
			if (currentFloor === sidebarIdentifier) {
				activeIndex = index; // Found the matching section
			}
		});

		if (activeIndex !== -1) {
			// If a match is found, open the corresponding nested list
			const activeNestedList = nestedLists[activeIndex];
			if (activeNestedList) {
				activeNestedList.style.display = "block";
				activeNestedList.setAttribute("aria-expanded", "true");
				parentItems[activeIndex].classList.add("open");
				parentItems[activeIndex].classList.remove("closed");
			}
		} else {
			// Default to opening the first item if no match is found
			nestedLists[0].style.display = "block";
			nestedLists[0].setAttribute("aria-expanded", "true");
			parentItems[0].classList.add("open");
			parentItems[0].classList.remove("closed");
		}

		updateArrows();
	}

	// Initialize the sidebar when the page loads
	initSidebar();

	// Add event listener to each h3 to toggle the visibility of the corresponding nested list
	parentItems.forEach((item) => {
		item.setAttribute("role", "button");
		item.addEventListener("click", function () {
			const nestedList = this.nextElementSibling;
			if (nestedList && nestedList.tagName === "UL") {
				const isOpen = nestedList.style.display === "block";
				nestedLists.forEach((list) => {
					list.style.display = "none";
					list.setAttribute("aria-expanded", "false");
				});
				if (!isOpen) {
					nestedList.style.display = "block";
					nestedList.setAttribute("aria-expanded", "true");
				}
			}
			updateArrows();
		});
	});
});
// updated 3:50pm
