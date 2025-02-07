// select element
const input = document.querySelectorAll('input')
const firstTranslate = document.querySelector('#first-translate')
const secondTranslate = document.querySelector('#second-translate')
const loginForm = document.querySelector('#login')
const signupForm = document.querySelector('#signup')
const fullNameInp = document.getElementById('fullname')
const emailInp = document.getElementById('email')
const passwordInp = document.getElementById('password')
const phoneNumberInp = document.getElementById('phone-number')
const confirmPasswordInp = document.getElementById('confirm-password')
const emailLogin = document.getElementById('email-login')
const passwordLogin = document.getElementById('password-login')
const eye1 = document.querySelector('.eye1')
const eye2 = document.querySelector('.eye2')
const eye3 = document.querySelector('.eye3')
// select element


// translate forms
firstTranslate.addEventListener('click', () => {
    loginForm.style.transform = 'translateX(10px)'
    signupForm.style.transform = 'translateX(-10px)'
    setTimeout(() => {
        loginForm.style.transform = 'translateX(500px)'
        loginForm.style.zIndex = '40'
        signupForm.style.transform = 'translateX(-500px)'
        signupForm.style.zIndex = '0'
    }, 500)
})

secondTranslate.addEventListener('click', () => {
    loginForm.style.transform = 'translateX(540px)'
    signupForm.style.transform = 'translateX(-540px)'
    setTimeout(() => {
        loginForm.style.transform = 'translateX(50px)'
        loginForm.style.zIndex = '0'
        signupForm.style.transform = 'translateX(-50px)'
        signupForm.style.zIndex = '40'
    }, 500)
})
// translate forms


// focus & blur
input.forEach(inp => {
    inp.addEventListener('focus', () => {
        inp.previousElementSibling.style.top = '-15px'
        inp.previousElementSibling.style.fontSize = '11px'
        inp.previousElementSibling.style.opacity = '1'
    })

    inp.addEventListener('blur', () => {
        inp.previousElementSibling.style.top = '25%'
        inp.previousElementSibling.style.fontSize = '13px'

        if (inp.value.length > 0) {
            inp.previousElementSibling.style.opacity = '0'
        }
    })
})
// focus & blur


// signup form
signupForm.addEventListener('submit', e => {
    const fullNameRegex = /^[a-zA-Z_-\s]{3,26}$/
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if (!fullNameRegex.test(fullNameInp.value)) {
        fullNameInp.nextElementSibling.style.opacity = '1'
        e.preventDefault()
    } else {
        fullNameInp.nextElementSibling.style.opacity = '0'
    }

    if (!emailRegex.test(emailInp.value)) {
        emailInp.nextElementSibling.style.opacity = '1'
        e.preventDefault()
    } else {
        emailInp.nextElementSibling.style.opacity = '0'
    }

    if (!passwordRegex.test(passwordInp.value)) {
        passwordInp.nextElementSibling.style.opacity = '1'
        e.preventDefault()
    } else {
        passwordInp.nextElementSibling.style.opacity = '0'

        if (confirmPasswordInp.value !== passwordInp.value) {
            confirmPasswordInp.nextElementSibling.style.opacity = '1'
            e.preventDefault()
        } else {
            confirmPasswordInp.nextElementSibling.style.opacity = '0'
        }
    }
})
// signup form


// login form
loginForm.addEventListener('submit', e => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/

    if (!emailRegex.test(emailLogin.value)) {
        emailLogin.nextElementSibling.style.opacity = '1'
        e.preventDefault()
    } else {
        emailLogin.nextElementSibling.style.opacity = '0'
    }

    if (!passwordRegex.test(passwordLogin.value)) {
        passwordLogin.nextElementSibling.style.opacity = '1'
        e.preventDefault()
    } else {
        passwordLogin.nextElementSibling.style.opacity = '0'
    }
})
// login form


// maxlength in inputs
fullNameInp.addEventListener('input', () => sliceValue(fullNameInp, 25))
emailInp.addEventListener('input', () => sliceValue(emailInp, 40))
phoneNumberInp.addEventListener('input', () => sliceValue(phoneNumberInp, 16))
emailLogin.addEventListener('input', () => sliceValue(emailLogin, 40))

passwordInp.addEventListener('input', () => {
    sliceValue(passwordInp, 35)
    passwordValidation(passwordInp)
})

passwordLogin.addEventListener('input', () => {
    sliceValue(passwordLogin, 35)
    passwordValidation(passwordLogin)
})

confirmPasswordInp.addEventListener('input', () => {
    sliceValue(confirmPasswordInp, 35)

    if (confirmPasswordInp.value === passwordInp.value) {
        confirmPasswordInp.nextElementSibling.style.opacity = '0'
    } else {
        confirmPasswordInp.nextElementSibling.style.opacity = '1'
    }
})

function sliceValue(inp, max) {
    let value = inp.value
    if (value.length > 0) {
        inp.nextElementSibling.style.opacity = '0'
    } else {
        inp.nextElementSibling.style.opacity = '1'
    }

    if (value.length >= max) {
        inp.value = value.slice(0, max + 1)
    }
}

function passwordValidation(inp) {
    let w = 0
    let value = inp.value

    if (value.search(/[a-z]/) >= 0) w++
    if (value.search(/[A-Z]/) >= 0) w++
    if (value.search(/[0-9]/) >= 0) w++
    if (value.search(/[!@#$%^&*()]/) >= 0) w++
    if (value.length >= 8) w++

    let line = inp.nextElementSibling.nextElementSibling

    switch (w) {
        case 0:
            line.style.backgroundColor = 'red'
            line.style.width = '0'
            break
        case 1:
            line.style.backgroundColor = 'orangered'
            line.style.width = '20%'
            break
        case 2:
            line.style.backgroundColor = 'orange'
            line.style.width = '40%'
            break
        case 3:
            line.style.backgroundColor = 'yellow'
            line.style.width = '60%'
            break
        case 4:
            line.style.backgroundColor = 'yellowgreen'
            line.style.width = '80%'
            break
        case 5:
            line.style.backgroundColor = 'green'
            line.style.width = '100%'
            break
    }
}
// maxlength in inputs


// eye password
eye1.addEventListener('click', () => {
    if (passwordInp.type === 'password') {
        passwordInp.type = 'text'
        eye1.classList.remove('bi-eye')
        eye1.classList.add('bi-eye-slash')
    } else {
        passwordInp.type = 'password'
        eye1.classList.add('bi-eye')
        eye1.classList.remove('bi-eye-slash')
    }
})

eye2.addEventListener('click', () => {
    if (confirmPasswordInp.type === 'password') {
        confirmPasswordInp.type = 'text'
        eye2.classList.remove('bi-eye')
        eye2.classList.add('bi-eye-slash')
    } else {
        confirmPasswordInp.type = 'password'
        eye2.classList.add('bi-eye')
        eye2.classList.remove('bi-eye-slash')
    }
})

eye3.addEventListener('click', () => {
    if (passwordLogin.type === 'password') {
        passwordLogin.type = 'text'
        eye3.classList.remove('bi-eye')
        eye3.classList.add('bi-eye-slash')
    } else {
        passwordLogin.type = 'password'
        eye3.classList.add('bi-eye')
        eye3.classList.remove('bi-eye-slash')
    }
})
// eye password