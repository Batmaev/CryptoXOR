const before = document.getElementById("before")
const after = document.getElementById("after")

const beforePosition = before.getBoundingClientRect()
const afterPosition = after.getBoundingClientRect()

if(beforePosition.top < afterPosition.top
    && beforePosition.width == 440){ //магическая константа = width + padding + padding
    const container = document.getElementById("before-and-after")
    container.style.flexDirection = "column"
}