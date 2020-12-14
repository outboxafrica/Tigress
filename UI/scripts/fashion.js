const nodes= document.querySelectorAll('.cart')

function changeVisibility(){
    for (let node of nodes){
        node.style.visibility = 'unset'
    }
}

function hideCart(){
    for (let node of nodes){
        node.style.visibility = 'hidden'
    }
}