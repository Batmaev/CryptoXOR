function copy(elem){
    elem = document.getElementById(elem)
    elem.select()
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
}