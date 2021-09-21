const button = document.getElementById("button");
const email = document.getElementById("email");
const password = document.getElementById("password");
const charEsp = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const letMai = /[A-Z]/;
const letMin = /[a-z]/;

function verifCampo() {
    let inputError = []

    //verificando se email esté preencido, se contém um @ e um .
    if (!email.value.length || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        inputError.push("email");
    }

    //verificando se a senha esté preenchida, se contém ao menos 1 caractere especial,
    //se a senha contém mais entre 6 a 30 dígitos, ao menos 1 letra maiúscula e 1 letra minúscula
    if (!password.value.length || !password.value.match(charEsp) || password.value.length <= 5 ||
        password.value.length >= 31 || !password.value.match(letMai) || !password.value.match(letMin)) {
        inputError.push("password");
    }
    return inputError;
}
button.addEventListener("click", (event) => {
    event.preventDefault()

    let inputError = verifCampo();

    if (inputError.length) {
        inputError.forEach((campo) => {
            let el = document.getElementById(campo)
            el.classList.add("errorInput")
        })
    } else {
        window.location = "../../home.html"
    }
})