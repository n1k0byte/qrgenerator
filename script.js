function generateQR() {
    var text = document.getElementById('text').value;
    var qrDiv = document.getElementById('qrcode');
    qrDiv.innerHTML = '';

    if (text.trim() !== '') {
        new QRCode(qrDiv, {
            text: text,
            width: 200,
            height: 200
        });
    } else {
        alert('Please enter some text or URL.');
    }
}
