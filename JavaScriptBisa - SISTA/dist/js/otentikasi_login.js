function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "nurulfikri" && password.value === "12345"){
        alert("Login Sucefull")
        window.location.href = "detail_jadwal.html";
    }
    else{
        alert("Username or Password Is Wrong!");
        pw.value = "";
        uname.focus();
    }
}