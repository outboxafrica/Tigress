function openpage(){
    var x = document.getElementById("search").value;

    if(x == "fashions"){
        window.open("/fashions.html");
    }
    
    if(x == "electronics"){
        window.open("/elctronics.html");
    }
    
    if(x == "grocery"){
        window.open("/grocery.html");
    }
    
    if(x == "health"){
        window.open("/health.html");
    }
    else{
        document.write("your search didn't match any result");
    }
}