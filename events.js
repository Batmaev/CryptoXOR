const form = document.forms.all
const messageObj = all.message
const keyObj = all.key

messageObj.addEventListener("keypress", isEnter)
keyObj.addEventListener("keydown", isEnter.bind(this))

function isEnter(event) {
    if(event.key === "Enter"){
        event.preventDefault()
        main()
    }
}

function main(){

    if(keyObj.value === ""){
        keyObj.focus()
    }
    else if(messageObj.value === ""){
        messageObj.focus()
    }
    else {
        let key = Number(keyObj.value)
        if(isNaN(key)) {
            alert(`В поле для ключа должно быть число, а вы ввели "${keyObj.value}"`)
        }
        else{
            if(key < 0){
                key -= Math.floor(key/MAX_UINT) * MAX_UINT
            }
            //На целое key проверять не нужно, потому что в linearCongruent (randoms.js) есть Math.floor, и в конечном счёте всё округляется

            let result = trans(messageObj.value, key)
            const outputObj = document.getElementById("output")
            outputObj.value = result

            //На мобильных устройствах прямоугольники "до" и "после" расположены вертикально, поэтому имеет смысл прокрутить
            if(before.getBoundingClientRect().top < after.getBoundingClientRect().top){
                after.scrollIntoView()
            }
        }
    } 
}