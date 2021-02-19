$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength : 5
            },
            surname:{
                required:true,
                minlength : 4,
                maxlength : 10
            },
            password:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            dobdate:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:"enter first name"
        }
    })
})

document.getElementById("signupbutton").onclick=function(){
    location.href='https://www.facebook.com'
}