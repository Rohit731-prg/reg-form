document.querySelector('.btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    if(name != '' && phone != '') {
        if(name.length < 15 && phone.length == 10) {
            alert('Registration Successfull');
        } else {
            console.log('not filled')
        }
    } else {
        alert('Please fill all the fields');
    }
})