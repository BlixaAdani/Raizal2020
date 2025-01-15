document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtén los datos del formulario
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Número de WhatsApp (reemplaza con el tuyo)
    const phoneNumber = '5491159479921';

    // Crea el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${name}.\nMi correo es: ${email}.\nMensaje: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirige a WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
});