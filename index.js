const pokemons = [];

let p = 1
let n = 12

function next() {
    p += 12
    n += 12
    const toDelete = document.querySelectorAll(".pokemon")
    toDelete.forEach(el => el.remove())
    fetchPokes()
    window.scrollTo(0, 0)
}

function previous() {
    p -= 12
    n -= 12
    fetchPokes()
    const toDelete = document.querySelectorAll(".pokemon")
    toDelete.forEach(el => el.remove())
    window.scrollTo(0, 0)
}

const buttonPrevious = document.querySelector(".previous")
buttonPrevious.addEventListener("click", previous)

const buttonNext = document.querySelector(".next")
buttonNext.addEventListener("click", next)


async function fetchPokes() {
    const promises = []
    for (let i = p; i <= n; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`

        promises.push(fetch(url).then((res) => res.json()))
    }

    Promise.all(promises).then(results => {
        const pokemon = results.map((data) => ({
            name: data.name[0].toUpperCase() + data.name.substring(1),
            id: data.id,
            image: data.sprites["front_default"],
            type: data.types.map((type) => type.type.name[0].toUpperCase() + type.type.name.substring(1))
                .join(", ")
        })
        )
        pokemons.push(...pokemon)
        renderPokes(pokemons)

    })
    pokemons.splice(0, pokemons.length)
}

function renderPokes(pokemons) {
    const div = document.querySelector(".pokemons")
    pokemons.forEach(poke => {
        const pokeDiv = document.createElement("div")
        pokeDiv.setAttribute("class", `pokemon is-${poke.type.replace(/,/g, "")}`)
        const html =
            `
        <p  class="pokemon-id">${"#" + poke.id}</p>
        <p class="pokemon-name">${poke.name}</p>
        <img class="pokemon-image" src="${poke.image}"></img>
        <p class="pokemon-type">${poke.type}</p>
        `
        pokeDiv.innerHTML = html
        div.appendChild(pokeDiv)
    })
}


fetchPokes()