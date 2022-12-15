// modal menu located in page.html.twig line 68 - #main-navigation-vTEST
// hamburger menu located in page.html.twig line 102 - #openmobilemenu
// close menu located in page.html.twig line 70 - #close-nav

document
	.getElementById("openmobilemenu")
	.addEventListener(
		"click",
		(e) =>
			(document.getElementById("main-navigation-vTEST").style.display = "block")
	);
undefined;

document
	.getElementById("close-nav")
	.addEventListener(
		"click",
		(e) =>
			(document.getElementById("main-navigation-vTEST").style.display = "none")
	);

// const targetDivOpen = document.getElementById("main-navigation-vTEST");
// const btnOpen = document.querySelectorAll("#openmobilemenu");
// btnOpen.onclick = function () {
// 	if (targetDivOpen.style.display !== "none") {
// 		targetDivOpen.style.display = "none";
// 	} else {
// 		targetDivOpen.style.display = "block";
// 	}
// };

// const targetDivClose = document.getElementById("main-navigation-vTEST");
// const btnClose = document.querySelectorAll("#close-nav");
// btnClose.onclick = function () {
// 	if (targetDivClose.style.display !== "none") {
// 		targetDivClose.style.display = "none";
// 	} else {
// 		targetDivClose.style.display = "block";
// 	}
// };

// var isDialogSupported = true;
// if (!window.HTMLDialogElement) {
// 	document.body.classList.add("no-dialog");
// 	isDialogSupported = false;
// }

// openmobilemenu.onclick = () => {
// 	// if (isDialogSupported) {
// 	// mobilemenumodal.showModal();
// 	// } else {
// 	mobilemenumodal.setAttribute("open", "");
// 	// }
// 	//   Focus first input when dialog opens
// 	mobilemenumodal.querySelector(".li-0").focus();
// };

// mobilemenumodal.addEventListener("transitionend", (e) => {
// 	mobilemenumodal.querySelector(".li-0").focus();
// });

// const showButton = document.getElementById("openmobilemenu");
// const mobileDialog = document.getElementById("main-navigation-v");
// // const outputBox = document.querySelector("output");
// const selectEl = mobileDialog.querySelector(".li-item-mobile-main-nav");
// const closeBtn = mobileDialog.querySelector("#close-nav");

// // "Update details" button opens the <dialog> modally
// showButton.addEventListener("click", () => {
// 	mobileDialog.showModal();
// });
// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener("change", (e) => {
// 	closeBtn.value = selectEl.value;
// });
// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// mobileDialog.addEventListener("close", () => {
// 	outputBox.value = `ReturnValue: ${mobileDialog.returnValue}.`;
// });
