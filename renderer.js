document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("demo-btn");
	const output = document.getElementById("output");

	button.addEventListener("click", () => {
		output.textContent = "Button clicked! Electron is working!";
	});
});
