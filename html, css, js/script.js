const whatsappNumber = "+62895398194010";
const message = "Pacaran YUK!!!";

function moveButton(button) {
    const container = document.querySelector('.container');
    const maxWidth = container.clientWidth - button.clientWidth;
    const maxHeight = container.clientHeight - button.clientHeight;

    const newX = Math.random() * maxWidth;
    const newY = Math.random() * maxHeight;

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

document.getElementById('yes-button').addEventListener('click', () => {
    alert("How you are my partner?");
    openWhatsApp();
});

document.getElementById('no-button').addEventListener('click', function() {
    moveButton(this);
});

function openWhatsApp() {
    const encodedMessage = encodeURIComponent(message);
    const url = `http://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(url, '_blank');
}
