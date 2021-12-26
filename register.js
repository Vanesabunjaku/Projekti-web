var usernameRegex = /^[A-Za-z]\w{7,14}$/;
var emailRegex =  /^\w+([._-]?\w+)*@[a-z]+[-]?[a-z]*\.[a-z]{2,3}/;
var passwordRegex = /^[A-Z][a-z]+\d{3}$/;


var registerButton = document.getElementById("submit");
var userMsg = document.getElementById("usernameMessage");
var emailMsg = document.getElementById("emailMessage");
var passMsg = document.getElementById("passMessage");
var pass2Msg = document.getElementById("pass2Message");

registerButton.addEventListener("click",function(event){
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var password2 = document.getElementById("Password2").value;

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
        if(email == ""){
            emailMsg.innerText = "Enter an email"
            event.preventDefault();
            }
            else{
                if(emailRegex.test(email)){
                    emailMsg.innerText=""
                }else{
                    emailMsg.innerText = "Enter a valid email"
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
            if(password2 == ""){
                pass2Msg.innerText = "Password cannot be blank"
                event.preventDefault();
                }
                else{
                    if(password2 == password){
                        pass2Msg.innerText=""
                    }else{
                        pass2Msg.innerText = "Please make sure your passwords match"
                        event.preventDefault();
                    }
                }
           
                if(passwordRegex.test(password) && usernameRegex.test(username)){
                    alert("You've account was created succesfully");
                }
    })

