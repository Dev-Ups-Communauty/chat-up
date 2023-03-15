//Constantes
const submit = document.querySelector("#submit")

//Variables
let account_id = document.querySelector("#account-id")
let account_password = document.querySelector("#account-password")

let id_error = document.querySelector(".id-error")
let password_error = document.querySelector(".password-error")


let login_control = function ()
{
    let content_null = false
    account_id = account_id.value
    account_password = account_password.value

    let render = function (HTML_element, error_msg, error_type, type_of_render)
    {


        // for the render
        HTML_element.innerHTML = "<div></div>"
        let err = HTML_element.querySelector("div")
        err.classList.add("login-alert")
        err.classList.add("alert")

        if(error_type === "danger")
        {
            err.classList.add("alert-danger")
        }
        else if(error_type === "warning")
        {
            err.classList.add("alert-warning")
        }
        
        err.innerHTML = error_msg

    }

    

    if(account_id === "" || account_id === undefined)
    {
        render(id_error, "Please complete the information", "danger")
        content_null = true    
    }

    if(account_password === '' || account_password === undefined)
    {
        render(password_error, "Please complete the information", "danger")
        content_null = true
    }

    return content_null

}

let login_content_control = login_control
submit.addEventListener("click", login_control)

console.log(login_content_control)

if(login_content_control == true)
{
    alert("please enter a valid information")
}

alert("milay eh")