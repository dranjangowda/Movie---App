let div = document.getElementById("error")
let userdata =[]
function startSignup(event) {
    event.preventDefault()

    const form = document.getElementById("signup")
    
    const username = form.username.value
    const usercontact = form.contact.value
    const useremail = form.email.value
    const userpassword = form.password.value
        if(username === "" || usercontact === "" || useremail === "" || userpassword == ""){
            // window.alert("fill the required fields")
            let p = document.createElement("p")
            p.innerText="please enter the required fields !!"
            div.append(p)
        }else{
            let user = {
                 name :username,
                 contact : usercontact,
                 email : useremail,
                 password : userpassword
            }
            userdata.push(user)
            localStorage.setItem("userdata",JSON.stringify(userdata))
            document.forms[0].reset()
            window.location.href="login.html"
        }
}