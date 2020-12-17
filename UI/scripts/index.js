function validate(){
    var password = document.getElementById("password").Value;
    var cpassword = document.getElementById("cpassword").Value;
    if(password=="" || password==" ")
    {
        alert("Password should not be a null or an empty string.")
        return false;
    }
}

