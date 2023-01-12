// recuperation du input boutton
let input = document.getElementsByTagName('input')[0]


// recuperation du colorSelect id
let colorSelect = document.getElementById('colorSelect')

// recuperation des enfants de colorSelect
let allChildren = colorSelect.children


// creation de la fonction de suppression de la couleur removecolor 
function removecolor(){
    for (const key in allChildren) {
       if(allChildren[key]?.value == colorSelect.value){
        // suppression de la couleur courante du DOM
        colorSelect.removeChild(allChildren[key])
       }
    }
}