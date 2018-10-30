
wacht = false
eerstekaart = null
correctekaarten = 0
kaarten = document.querySelectorAll("div.grid-item")

shuffle()
for (let kaart of kaarten) {
    kaart.addEventListener("click", function () {
        if (wacht) return
        if (kaart.className.includes("correct")) return

        kaart.classList.remove("hidden")
        if (eerstekaart == null) {
            eerstekaart = kaart
        } else {
            tweedekaart = kaart
            if (eerstekaart != tweedekaart) {
                if (eerstekaart.textContent == tweedekaart.textContent) {
                    correctekaarten = correctekaarten + 2
                    eerstekaart.classList.add("correct")
                    tweedekaart.classList.add("correct")
                    eerstekaart = null
                    if (correctekaarten == 16) {
                        setTimeout(function () {
                            alert("you win")
                            shuffle()
                            for (let kaartje of kaarten) {
                                kaartje.classList.add("hidden")
                                kaartje.classList.remove("correct")
                            }
                        }, 2)
                    }
                } else {
                    wacht = true
                    eerstekaart.classList.add("fout")
                    tweedekaart.classList.add("fout")
                    setTimeout(function () {
                        eerstekaart.classList.add("hidden")
                        eerstekaart.classList.remove("fout")
                        tweedekaart.classList.add("hidden")
                        tweedekaart.classList.remove("fout")
                        eerstekaart = null
                        wacht = false
                    }, 1000)
                }
            }

        }
    })
}

function shuffle() {
    for (let kaartje of kaarten) {
        kaartje.querySelector('p').textContent = ''
    }

    for (let j = 0; j < 2; ++j) {
        for (let i = 0; i < 8; ++i) {
            while (true) {
                let random = Math.floor(Math.random() * 16)
                let kaartje = kaarten[random]
                if (kaartje.querySelector('p').textContent == "") {
                    kaartje.querySelector('p').textContent = i + 1
                    break
                }
            }
        }
    }

}
