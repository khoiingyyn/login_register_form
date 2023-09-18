let register = document.querySelector("#register")

register.addEventListener("submit", (e) => {
    e.preventDefault()

  
    let username = document.getElementById('username')
    let pw = document.getElementById("password")

    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g
    //không được để ô user name và password trống
    if (username.value.trim().length == 0
     && pw.value.trim().length == 0) 
    {
        alert("Please input your username & password")
    }

    
        else if (username.value.trim().length == 0) 
    {
        alert("Please input your username")
    }
        else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }

    //điều kiện password không được dưới 8 ký tự
        else if (pw.value.trim().length < 8) {
        alert("Password must be at least 8 characters.")
    }  

    //điều kiện password phải chứa ít nhất 1 ký tự thường
        else if (!pw.value.trim().match(lowerCaseLetter)) {
            alert("Password must contain a lowercase letter")
    }

    //điều kiện password phải chứa ít nhất 1 ký tự in hoa
        else if (!pw.value.trim().match(upperCaseLetter)) {
        alert("Password must contain a uppercase letter")
    }

    //điều kiện password phải chứa ít nhất 1 ký tự đặc biệt hoặc số
        else if (!pw.value.trim().match(numbers)) {
        alert("Password must contain a number or special character")
    }
        else {
            if(localStorage.users) {
                let users = JSON.parse(localStorage.users)
                // thêm tài khoản
                // với user và password vừa nhập ở trên
                users.push({
                    username: username.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
            } else {
                localStorage.setItem("users",
                JSON.stringify(
                [
                    {
                      username: username.value.trim(),
                      pw: pw.value.trim()
                    }
                ]));
            }
            location.replace("../login/login.html")
    }

})