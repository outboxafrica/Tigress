function validate(){
    var password = document.getElementById("password").Value;
    var cpassword = document.getElementById("cpassword").Value;
    if(password != cpassword)
    {
        alert("Pass and confirm password does not match");
        return false;
    }
}