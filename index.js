let submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', (e) => {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let firstName = document.getElementById('firstName').value;
    let secondName = document.getElementById('secondName').value
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.querySelector(".emailError");

    if (emailFormat.test(email)) {
        emailError.innerHTML = 'Please provide the valid email.<'
        emailError.style.display = "block";
    } else {
        emailError.innerHTML = 'Please provide the valid email.<'
        emailError.style.display = "block";
    }

})