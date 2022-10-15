const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    const password = document.getElementById('password')
    const confpassword = document.getElementById('conf-password')
    const errormsg = document.querySelector(".psw-msg")

    if(password !== confpassword){
       errormsg.textContent = "Passwords doesn't match"
    } 
    
})