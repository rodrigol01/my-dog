
const input = document.querySelectorAll('input')
const buttonLogin = document.querySelector('.buttonLogin')

function doLogin(event){
    input.forEach((item) =>{
        if(item.value === ''){
            item.classList.add('error')
            event.preventDefault()
        }
        else{
            item.classList.remove('error')
        }
    })
}

buttonLogin.addEventListener('click', doLogin)