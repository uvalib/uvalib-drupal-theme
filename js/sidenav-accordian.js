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
