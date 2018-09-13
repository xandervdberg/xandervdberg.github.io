titles = document.querySelectorAll("h1")
for (let title of titles) {
    title.addEventListener("click", function () {
        if (title.style.color == "blue") {
            title.style.color = "white"
        } else {
            title.style.color = "blue"
        }
    })
}

botton = document.querySelector("#eerste")
botton.addEventListener("mouseover", function () {
    botton.style.color = "blue"
})

botton2 = document.querySelector("#tweede")
botton2.addEventListener("mouseover", function () {
    botton2.style.color = "blue"
})
botton3 = document.querySelector("#derde")
botton3.addEventListener("mouseover", function () {
    botton3.style.color = "blue"
})
botton4 = document.querySelector("#vierde")
botton4.addEventListener("mouseover", function () {
    botton4.style.color = "blue"
})
botton5 = document.querySelector("#vijfde")
botton5.addEventListener("mouseover", function () {
    botton5.style.color = "blue"
})
botton6 = document.querySelector("#zesde")
botton6.addEventListener("mouseover", function () {
    botton6.style.color = "blue"
})
botton7 = document.querySelector("#zevende")
botton7.addEventListener("mouseover", function () {
    botton7.style.color = "blue"
})
botton.addEventListener("mouseout", function () {
    botton.style.color = "greenyellow"
})
botton2.addEventListener("mouseout", function () {
    botton2.style.color = "greenyellow"
})
botton3.addEventListener("mouseout", function () {
    botton3.style.color = "greenyellow"
})
botton4.addEventListener("mouseout", function () {
    botton4.style.color = "greenyellow"
})
botton5.addEventListener("mouseout", function () {
    botton5.style.color = "greenyellow"
})
botton6.addEventListener("mouseout", function () {
    botton6.style.color = "greenyellow"
})
botton7.addEventListener("mouseout", function () {
    botton7.style.color = "greenyellow"
})
afbeelding = document.querySelector("#verstopt")
titel = document.querySelector("#toonAfbeelding")
titel.addEventListener("click", function () {
    if (afbeelding.style.visibility != "visible") {
        afbeelding.style.visibility = "visible"
    } else {
        afbeelding.style.visibility = "hidden"
    }

})

