let shoppingList=[]

// recupeation du div root id 

let root = document.getElementById('root')

// création du formulaire
let Form = document.createElement('form')

// creation d'un label
let label = document.createElement('label')
label.textContent = "Entrer votre produit"

// creation du input
let input = document.createElement('input')
input.setAttribute('type', 'text')

// creation du boutton d'ajout
let btnAdd = document.createElement('button')
btnAdd.textContent = 'Ajouter'
btnAdd.addEventListener('click' , function(e){
    e.preventDefault()
    addItem()
})

// creation du button de suppression
let btnDelete = document.createElement('button')
btnDelete.textContent = 'Vider mon panier'
btnDelete.style.backgroundColor = 'lightblue'
btnDelete.style.color = 'black'
btnDelete.addEventListener('click' , function(e){
    e.preventDefault()
    deleteItem()
})


// injection des differents element dans le DOM
Form.appendChild(label)
Form.appendChild(input)
Form.appendChild(btnAdd)
Form.appendChild(btnDelete)
root.appendChild(Form)


// ajouter dans le tableau 
function addItem(){
    let inputValue = document.getElementsByTagName('input')[0]
    if(inputValue.value == ''){
        alert('veuillez renseigner une course')
    }else{
        shoppingList.push(inputValue.value)
        inputValue.value = ''
        console.log('++++++++++++++++ Produit dans le panier ++++++++++++++')
        console.log(shoppingList)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
    }
}

// on vide le panier ici 
function deleteItem(){
    shoppingList = []
    console.log('++++++++++++++++++++++++++++++++++++++++++')
    console.log(shoppingList)
    console.log('+++++++++++++++++++++++++++++++++++++++++++')
}