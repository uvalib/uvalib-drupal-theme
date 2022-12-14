// modal menu id - mobilemenumodal
// hamburger menu id - openmobilemenu

// var isDialogSupported = true;
// if (!window.HTMLDialogElement) {
// 	document.body.classList.add("no-dialog");
// 	isDialogSupported = false;
// }

openmobilemenu.onclick = () => {
	// if (isDialogSupported) {
	// mobilemenumodal.showModal();
	// } else {
	mobilemenumodal.setAttribute("open", "");
	// }
	//   Focus first input when dialog opens
	mobilemenumodal.querySelector(".li-0").focus();
};

mobilemenumodal.addEventListener("transitionend", (e) => {
	mobilemenumodal.querySelector(".li-0").focus();
});
