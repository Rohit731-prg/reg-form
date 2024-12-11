const smsEmail = document.getElementById('sms-email');
const pass = document.getElementById('sms-password');
const conPass = document.getElementById('sms-con-password');
const EyeOne = document.getElementById('eyeOne');
const EyeTwo = document.getElementById('eyeTwo');

document.querySelector('.btn').addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const conPassword = document.getElementById('con-password').value;

    const validEmailForm = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9.-]+\.)?(edu\.in|ac\.in|org\.in)$/; // Regex to match multiple domains

    if (name !== '' && phone !== '' && email !== '') {
        if (name.length < 15 && phone.length === 10) {
            if (validEmailForm.test(email)) {
                smsEmail.innerHTML = '';
                if (password.length >= 8) {
                    pass.innerHTML = '';
                    if (password === conPassword) {
                        alert('Registration Successful');
                        console.log(name);
                        console.log(phone);
                        console.log(email);
                        conPass.textContent = '';
                    } else {
                        conPass.innerHTML = 'Passwords do not match';
                    }
                } else {
                    pass.innerHTML = 'Password must be at least 8 characters long.';
                }
            } else {
                smsEmail.innerHTML = 'Please use an email with the domain edu.in, ac.in, or org.in';
            }
        } else {
            alert('Ensure the name is less than 15 characters and the phone number is 10 digits long.');
        }
    } else {
        alert('Please fill all the fields');
    }
});

function togglePasswordVisibility(eyeElement, targetInputId) {
    const targetInput = document.getElementById(targetInputId);
    if (targetInput.type === 'password') {
        targetInput.type = 'text';
        eyeElement.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        targetInput.type = 'password';
        eyeElement.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}

EyeOne.addEventListener('click', (event) => {
    event.preventDefault();
    togglePasswordVisibility(EyeOne, 'password');
});

EyeTwo.addEventListener('click', (event) => {
    event.preventDefault();
    togglePasswordVisibility(EyeTwo, 'con-password');
});
