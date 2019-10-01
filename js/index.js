//VARIABLES GENERALES

let theBody = document.getElementsByTagName('body');

//CALCUALTE TOTAL PRICES FUNCTION

const calculateTotalPrice = () =>{
  let totalPrice = 0;
  
  let pricesArray = document.getElementsByClassName('price');
  
  let productsQuantityArray = document.getElementsByClassName('quantity');
  
  let productTotalPriceArray = document.getElementsByClassName('product-total-price');

  let finalTotalPrice= document.getElementsByClassName('total-price');
  
  for(let i = 0; i < productsQuantityArray.length; i++){
    
    let productTotalPrice = parseFloat(productsQuantityArray[i].value) * parseFloat(pricesArray[i].innerText);
    
    productTotalPriceArray[i].innerText = productTotalPrice

    totalPrice += productTotalPrice
    
  }

  finalTotalPrice[0].innerText = totalPrice; 
}

//CALCULATE TOTAL PRICES CLICK EVENT

document.getElementById('calc-prices-button').addEventListener('click',calculateTotalPrice)

// DELETE ITEM FUNCTION

function deleteItem(event){

    if(event.target){
      let element = event.target.parentNode.parentNode;
      console.log(element)
      theBody[0].removeChild(element)
    }
 
   
}


let addClickEvent = () => {
  let arrDeleteBtn = document.getElementsByClassName('btn-delete')
  
  for (let i = 0; i < arrDeleteBtn.length; i++){
    arrDeleteBtn[i].addEventListener('click',deleteItem)
    console.log(arrDeleteBtn[i])
  }
}
addClickEvent()

//CREAR INPUTS PARA INTRODUCIR NUEVOS PRODUCTOS

let inputOne = document.createElement("input");
input.type = "text";
input.className = "name-product";

let inputTwo = document.createElement("input");
input.type = "text";
input.className = "name-product";
/*
function getPriceByProduct(itemNode){
  
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};*/
