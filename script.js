let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.querySelector("body")
let random1 = ""
let random2 = ""


// Functions
function displayColors() {
    css.innerHTML = `Left colour: ${color1.value} <br> Right colour: ${color2.value}`
}

function updateColor() {
    displayColors()
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function randomColorGenerator() {
    return "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    })
}


// Event listeners
color1.addEventListener("input", updateColor)
color2.addEventListener("input", updateColor)

document.querySelector("#random").addEventListener("click", function () {
    random1 = randomColorGenerator()
    random2 = randomColorGenerator()
    color1.value = random1
    color2.value = random2
    updateColor()
})

// On load
displayColors()