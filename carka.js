function generate() {
    const lineLength = parseInt (document.getElementById("lineLength").value);
    if (!isNaN(lineLength)){
        const line = "-".repeat(lineLength);
        document.getElementById("output").textContent = line;
    }

}