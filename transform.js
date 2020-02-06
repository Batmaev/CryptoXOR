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
        event.preventDefault()
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
    let array = str.split("")
    //alert(array)
    // array.map(item => item + item)
    // return array.join(" ")
    array = array.map(item => item.charCodeAt(0))
    //alert(array)
    array = array.map(item => unicodeToMyCode(item))
    //alert(array)
    array = array.map(item => item ^ (rand() % 128))
    //alert(array)
    array = array.map(item => myCodeToUnicode(item))
    //alert(array)
    array = array.map(item => String.fromCharCode(item))
    //alert(array)
    return array.join("")
}

function unicodeToMyCode(n){
    if(n < 31){
        alert(`Похоже, вы ввели недопустимый символ с кодом ${n}. Автор сайта предполагал, что это невозможно.`)
        return false
    } else if(n < 128){
        return n - 32
    } else if(n >= 1040 && n <= 1103){
        return n - 944
    } else {
        alert(`Жаль, но символ ${String.fromCharCode(n)} не поддерживается`)
        return false
    }
}

function myCodeToUnicode(n){
    if(n < 0){
        return false
    }
    else if(n <= 95){
        return n + 32
    }
    else if(n <= 159){
        return n + 944
    }
    else{
        return false
    }
}