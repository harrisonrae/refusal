        // JavaScript function to toggle the display of the text box
        function toggleTextBox(imageElement) {
            const textBox = imageElement.nextElementSibling;
            if (textBox.style.display === "none" || textBox.style.display === "") {
                textBox.style.display = "flex";
            } else {
                textBox.style.display = "none";
            }
        }

        // Randomly position each image container
        document.querySelectorAll('.image-container').forEach(container => {
            container.style.top = `calc(100vh * ${Math.random()})`;
            container.style.left = `calc(100vw * ${Math.random()})`;
        });