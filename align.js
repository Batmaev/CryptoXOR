const before = document.getElementById("before")
const after = document.getElementById("after")

const beforePosition = before.getBoundingClientRect()
const afterPosition = after.getBoundingClientRect()

if(beforePosition.top < afterPosition.top){
    if(beforePosition.width == 400){ //магическая константа = width + padding + padding
        const container = document.getElementById("before-and-after")
        container.style.flexDirection = "column"
    }
    before.style.maxHeight = "35vh"
    after.style.maxHeight = "35vh"

    const keyetc = document.getElementById("key-etc")
    keyetc.style.maxWidth = "400px"
}