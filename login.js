let div = document.getElementById("error")

function login(event){
    event.preventDefault()
    const form = document.getElementById("login")
    const email = form.email.value 
    const password = form.password.value
    if(localStorage.getItem("userdata") == null){
        // a.innerText = "please sign up"
        window.alert("The user needs to signup")
        // window.location.href="signup.html"
       
       }else if(email == "" || password == ""){
        let p = document.createElement("p")
        p.innerText="please enter the required fields !!"
        div.append(p)
        // alert("please enter the required fields")
    }else{
            const userdata = JSON.parse(localStorage.getItem("userdata"))
            for(let i=0;i<userdata.length;i++){
                let e = userdata[i].email
                let p = userdata[i].password
                let n = userdata[i].username
                if(e === email && p === password){
                    alert("succes",n)
                    window.location.href="home.html"
                    break;
                }else{
                    let div = document.getElementById("error")
                    let incorrectMsg = document.createElement("p")
                    incorrectMsg.innerText = "entered username or password is incorrect!!"
                    div.append(incorrectMsg)
                }
            }
    }
}