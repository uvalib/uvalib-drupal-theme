document.addEventListener("DOMContentLoaded", function () {
	// Create the button element
	var closeButton = document.createElement("button");
	closeButton.setAttribute("type", "button");
	closeButton.setAttribute("class", "close-alert");
	closeButton.setAttribute("aria-label", "Close this window");
	closeButton.setAttribute("data-close-modal", "");

	// Create the new SVG element
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("viewBox", "0 0 448 512");

	// Create the path element inside the SVG
	var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	path.setAttribute(
		"d",
		"M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416zM330.4 131.8c-6.688-5.75-16.8-4.938-22.55 1.75L224 231.4l-83.86-97.84C134.4 126.9 124.3 126.2 117.6 131.8c-6.719 5.75-7.5 15.88-1.734 22.56L202.9 256l-87.08 101.6c-5.766 6.688-4.984 16.81 1.734 22.56C120.6 382.8 124.3 384 128 384c4.5 0 8.984-1.906 12.14-5.594L224 280.6l83.86 97.84C311 382.1 315.5 384 320 384c3.688 0 7.391-1.281 10.41-3.844c6.719-5.75 7.5-15.88 1.734-22.56L245.1 256l87.08-101.6C337.9 147.7 337.1 137.6 330.4 131.8z"
	);
	// path.setAttribute("fill", "#2B2B2B");

	// Append the path element to the SVG
	svg.appendChild(path);

	// Append the SVG to the button
	closeButton.appendChild(svg);

	// Find all elements with class "alert2" or "alert3"
	var alerts = document.querySelectorAll(".alert2, .alert3");

	// Iterate through each alert element
	alerts.forEach(function (alert) {
		// Find the close-container element inside each alert
		var closeContainer = alert.querySelector(".close-container");
		// Insert the button before the close-container
		if (closeContainer) {
			closeContainer.parentNode.insertBefore(
				closeButton.cloneNode(true),
				closeContainer
			);
		}
	});
});

//Close the alert

document.addEventListener("DOMContentLoaded", function () {
	// Find all close buttons
	var closeButtons = document.querySelectorAll(".close-alert");

	// Attach click event listener to each close button
	closeButtons.forEach(function (closeButton) {
		closeButton.addEventListener("click", function () {
			// Find the parent div with class "alert2" or "alert3"
			var alertParent = closeButton.closest(".alert2, .alert3");

			// Check if alertParent is found and store its class in localStorage
			if (alertParent) {
				localStorage.setItem(alertParent.classList[0], "closed");
				alertParent.style.display = "none";
			}
		});
	});

	// Check localStorage to hide closed alerts
	var closedAlerts = Object.keys(localStorage);
	closedAlerts.forEach(function (alertClass) {
		var closedAlert = document.querySelector("." + alertClass);
		if (closedAlert && localStorage.getItem(alertClass) === "closed") {
			closedAlert.style.display = "none";
		}
	});
});
