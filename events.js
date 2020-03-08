const form = document.forms.all
const messageObj = all.message
const keyObj = all.key

form.addEventListener("submit", _onSubmit.bind(this))
messageObj.addEventListener("keypress", _onKeyPress.bind(this))
keyObj.addEventListener("keypress", _onKeyPress.bind(this))

function _onKeyPress(event) {
    if(event.keyCode === 13){
        event.preventDefault()
        form.dispatchEvent(new Event("submit", {cancelable: true}))
    }
}

function _onSubmit(event){
    event.preventDefault()

    if(keyObj.value !== "" && messageObj.value === ""){
        messageObj.focus()
    }
    else if(keyObj.value === "" && messageObj.value !== ""){
        keyObj.focus()
    }
    else if(keyObj.value !== "" && messageObj.value){
        let key = Number(keyObj.value)
        if(isNaN(key)) {
            alert(`В поле для ключа должно быть число, вы ввели "${keyObj.value}"`)
        }
        else{
            if(key < 0){
                key -= Math.floor(key/MAX_UINT) * MAX_UINT
            }
            next = key
            let result = trans(messageObj.value)
            const outputObj = document.getElementById("output")
            outputObj.value = result
            if(beforePosition.top < afterPosition.top){
                after.scrollIntoView(true)
            }
        }
    } 
}