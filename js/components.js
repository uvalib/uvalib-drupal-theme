//TOGGLE BUTTON - switching classes based on "active" or not

// const toggleButton = document.querySelector(".toggle-button");
// const listDiv = document.querySelector(".list-view");
// const gridDiv = document.querySelector(".grid-view");

// toggleButton.addEventListener("click", function () {
// 	if (listDiv.classList.contains("active")) {
// 		listDiv.classList.remove("active");
// 		gridDiv.classList.add("active");
// 		toggleButton.classList.add("active");
// 		toggleButton.setAttribute("aria-pressed", "true");
// 	} else {
// 		listDiv.classList.add("active");
// 		gridDiv.classList.remove("active");
// 		toggleButton.classList.remove("active");
// 		toggleButton.setAttribute("aria-pressed", "false");
// 	}
// });

const toggleButton = document.querySelector(".toggle-button");
const listDiv = document.querySelector(".list-view");
const gridDiv = document.querySelector(".grid-view");

// Add the "active" class to the listDiv element
listDiv.classList.add("active");

toggleButton.addEventListener("click", function () {
	if (listDiv.classList.contains("active")) {
		listDiv.classList.remove("active");
		gridDiv.classList.add("active");
		toggleButton.classList.add("active");
		toggleButton.setAttribute("aria-pressed", "true");
	} else {
		listDiv.classList.add("active");
		gridDiv.classList.remove("active");
		toggleButton.classList.remove("active");
		toggleButton.setAttribute("aria-pressed", "false");
	}
});
