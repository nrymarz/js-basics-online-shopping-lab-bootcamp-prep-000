var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var groceryItem = {itemName:item, itemPrice: price()};
  cart.push(groceryItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(cart.length===0){
    return "Your shopping cart is empty.";
  }
  else{
    var str = `In Your cart, you have ${cart[0]['itemName']} at ${cart[0].itemPrice}`;
    for(let i = 1;i<cart.length-1;i++){
      str = str + `, ${cart[i][itemName]} at ${cart[i].itemPrice}`;
    }
    str = str + `, and ${cart[-1].itemName} at ${cart[-1].itemPrice}`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
function price(){
  return Math.floor(Math.random()*99+1);
}
