const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    const password = document.getElementById('password').value
    const confpassword = document.getElementById('conf-password').value
    const errormsg = document.querySelector(".psw-msg")

    if(password !== confpassword){
        errormsg.classList.add('error')
        errormsg.textContent = "Passwords doesn't match"
    } 

})