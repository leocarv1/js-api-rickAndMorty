const apiURL = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"


const btn = document.querySelector("#btn")
const inputBuscar = document.querySelector("#buscar")
const cardImg = document.querySelector("#card__img")
const cardName = document.querySelector("#card__name")
const cardStatus = document.querySelector("#card__status__alive")
const cardLocation = document.querySelector("#card__status__location")
const cardType = document.querySelector("#card__type")
const cardEp = document.querySelector("#episodeos")
const btn__next = document.querySelector("#btn__next")




const getCharacter =  async (id) => {

    const apiImgURL = `https://rickandmortyapi.com/api/character/${id}`

    const res = await fetch(apiImgURL) 
    const data = await res.json()

    return data
}

const showCharacter = async (id) => {
    const data = await getCharacter(id)
    console.log(data)

    cardName.innerHTML = data.name
    cardImg.setAttribute("src", data.image)
    cardStatus.innerHTML = ('Status:' + data.status)
    cardLocation.innerHTML = ('Location:' + data.location.name)
    cardType.innerHTML = ('Specie: ' + data.species)
    cardEp.innerHTML = 'Nº Episodes: ' + data.episode.length   

}


// Eventos 
btn.addEventListener("click", (e) => {
    e.preventDefault()

    const id = inputBuscar.value

    showCharacter(id)
})

btn__next.addEventListener("click", (e) => {
    e.preventDefault()

    showCharacter()
    
})
