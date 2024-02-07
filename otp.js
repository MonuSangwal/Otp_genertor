function genertorOTP(length) {
    let otp = ""
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp
}
let otp_btn = document.querySelector("#btn")
otp_btn.addEventListener("click", () => {
    setTimeout(() => {
        document.querySelector("#demo").innerText = genertorOTP(4)
        // console.log(genertorOTP(4));
    }, 2500)
})


let resetall = document.querySelector("#reset")
resetall.addEventListener("click", () => {
    location.reload()
})
