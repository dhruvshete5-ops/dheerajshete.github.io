let bnt = document.getElementById("login");
bnt.addEventListener("click",()=>{
    let username = document.getElementById("name_text").value.trim();
    let password = document.getElementById("password_text").value.trim();
    let age = document.querySelector('input[name="age_group"]:checked');
    if (username === "" || password === "" || !age) {
    alert("Fields cannot be empty");
}
else if (password.length < 6) {
    alert("Password too short");
}
else {
    alert("Sending data to server...");
    document.cookie=`username=${encodeURIComponent(username)}; max-age=86400`;
alert("Login successful!");
let login = document.getElementById("login");
login.addEventListener("click", () => {
    window.location.href="../second_page/second_homepage.html";
});
}

});
