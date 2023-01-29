let imageIndex = 0;
let images = ["img/main-header.jpeg", "img/main-header1.jpeg"];

// let u_name = document.contactForm.u_name;
// let u_mail = document.contactForm.u_mail;
// let u_message = document.contactForm.u_message;

function changeImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    document.getElementById("image").src = images[imageIndex];
}

// function checkValidation() {
//     if(u_name.value == '') {
//         u_name.classList.add('is-invalid');
//     } else if(u_name.value) {
//         u_name.classList.remove('is-invalid');
//         u_name.classList.add('is-valid');
//     }
//     if(u_mail.value == '') {
//         u_mail.classList.add('is-invalid');
//     } else if(u_mail.value) {
//         u_mail.classList.remove('is-invalid');
//         u_mail.classList.add('is-valid');
//     }
//     if(u_message.value == '') {
//         u_message.classList.add('is-invalid');
//     } else if(u_message.value) {
//         u_message.classList.remove('is-invalid');
//         u_message.classList.add('is-valid');
//     }
// }

