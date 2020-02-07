function copy(elem){
    elem = document.getElementById(elem)
    elem.select()
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
}

function randomKey(){
    let a = new Uint32Array(1)
    window.crypto.getRandomValues(a)
    keyObj.value = a[0]
}