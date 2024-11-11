// JavaScript function to toggle the display of the text box
function toggleTextBox(imageElement) {
    const textBox = imageElement.nextElementSibling;
    if (textBox.style.display === "none" || textBox.style.display === "") {
        textBox.style.display = "flex";
    } else {
        textBox.style.display = "none";
    }
}
