function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const message = document.getElementById('message');

    if (fileInput.files.length === 0) {
        alert("Please select a file.");
        return;
    }

    const file = fileInput.files[0];
    setTimeout(() => {
        message.textContent = `File "${file.name}" has been successfully uploaded!`;
    }, 1000);
}
