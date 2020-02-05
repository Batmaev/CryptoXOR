const form = document.forms.all
const messageObj = all.message
const keyObj = all.key

const RAND_MAX = 32767 

let next = 1;

function rand() {
  next = next * 1103515245 + 12345;
  return Math.floor((next/65536)) % (RAND_MAX + 1);
}

form.addEventListener("submit", _onSubmit.bind(this))
messageObj.addEventListener("keypress", _onKeyPress.bind(this))
keyObj.addEventListener("keypress", _onKeyPress.bind(this))

function _onKeyPress(event) {
    if(event.keyCode === 13){
        form.dispatchEvent(new Event("submit"))
    }
}

function _onSubmit(event){
    event.preventDefault()

    if(keyObj.value !== "" && messageObj.value){
        let key = Number(keyObj.value)
        if(isNaN(key)) {
            alert(`В поле для ключа должно быть число, вы ввели "${keyObj.value}"`)
        }
        else{
            next = key
            let result = trans(messageObj.value)
            const outputObj = document.getElementById("after")
            outputObj.innerText = result
        }
    } 
}

function trans(str){
    return str
}