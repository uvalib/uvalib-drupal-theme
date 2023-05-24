//TOGGLE BUTTON - switching classes
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
	// Get the checkbox input element
	var checkbox = document.querySelector('.toggleSwitch input[type="checkbox"]');
	// Get the list-view and grid-view elements
	var listView = document.querySelector(".list-view");
	var gridView = document.querySelector(".grid-view");

	// Set the initial state (grid-view active, list-view hidden)
	listView.style.display = "block";
	gridView.style.display = "none";

	// Add an event listener for the change event on the checkbox
	checkbox.addEventListener("change", function () {
		if (checkbox.checked) {
			// Hours selected, show list-view and hide grid-view
			listView.style.display = "block";
			gridView.style.display = "none";
		} else {
			// Location selected, show grid-view and hide list-view
			listView.style.display = "none";
			gridView.style.display = "block";
		}
	});
});
