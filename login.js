var usernameRegex = /^[A-Za-z]\w{7,14}$/;
var passwordRegex = /^[A-Z][a-z]+\d{3}$/;

var loginButton = document.getElementById("submit");
var userMsg = document.getElementById("usernameMessage");
var passMsg = document.getElementById("passMessage");

loginButton.addEventListener("click",function(event){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username == ""){
        userMsg.innerText = "Username cannot be blank"
        event.preventDefault();
        }
        else{
            if(usernameRegex.test(username)){
                userMsg.innerText=""
            }else{
                userMsg.innerText = "Username must be 8 to 15 characters"
                event.preventDefault();
            }
            
            
        }
    
        if(password == ""){
            passMsg.innerText = "Password cannot be blank"
            event.preventDefault();
            }
            else{
                if(passwordRegex.test(password)){
                    passMsg.innerText=""
                }else{
                    passMsg.innerText = "Password must:     Start with uppercase characters and end with 3 numbers"
                    event.preventDefault();
                }
            }
            
            if(passwordRegex.test(password) && usernameRegex.test(username)){
                alert("You've succesfully logged in!");
            }
})
