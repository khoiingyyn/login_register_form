let login = document.getElementById('login')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let users = JSON.parse(localStorage.users)

    let username = document.getElementById("username")
    let pw = document.getElementById("password");

    //kiểm tra user vừa nhập có khớp với username và password trong localStorage không ?
    let check = users.map(index => index.username == username.value.trim() && index.pw == pw.value.trim())

    if (check[0] == true){
        window.location.href = "../logout.html"
    } else {
        alert("Please input again")
    }
})