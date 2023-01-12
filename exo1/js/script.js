// recuperation du conteneur showSelectElement
let Element = document.getElementsByClassName('showSelectElement')[0]


// recuperation du div id : genres
let genres = document.getElementById('genres')


// recuperation de la valeur selectionné
genres.onchange = (event) =>{
   Element.textContent = `la valeur selectionnée est ${event.target.value}`
}