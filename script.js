const input = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const previewContainer = document.getElementById("previewContainer");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", () => {
    const url = input.value.trim();

    if (url === "") {
        alert("Por favor ingresa una URL válida");
        return;
    }

    // Generar QR como data URL
    QRCode.toDataURL(url, { width: 250 }, (err, dataUrl) => {
        if (err) {
            console.error(err);
            alert("Hubo un error generando el código QR");
            return;
        }

        qrImage.src = dataUrl;
        downloadBtn.href = dataUrl;
        previewContainer.style.display = "block";
    });
});
