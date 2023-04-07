const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = 'Your Company Logo'
let index = 1
let speed = 500 / speedElement.value

writeText()

function writeText() {
    textElement.innerText = text.slice(0, index)
    index++

    if(index > text.length) {
        index = 1
    }

    setTimeout(writeText, speed)
}

speedElement.addEventListener('input', (e) => speed = 300 / e.target.value)