let button = document.getElementById("button");
let secret = document.getElementById("secret");

button.addEventListener("click", ()=>{
    let text = secret.value;
    window.location.href = "/secret?secret="+text;
})