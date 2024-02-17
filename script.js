// script.js
function generateQR() {
    var qrText = document.getElementById('qrText').value.trim();
    
    if (qrText !== '') {
        var qrCodeDiv = document.getElementById('qrCode');
        qrCodeDiv.innerHTML = '';
        
        var qr = new QRious({
            element: qrCodeDiv,
            value: qrText,
            size: 250
        });
    } else {
        alert('Please enter text or URL to generate QR code.');
    }
}
