const MENU = require('./menu.js');
const smallBasket = 5;
// const mediumBasket = 10;
// const largeBasket = 15;

class Basket {
  constructor(capacity = smallBasket) {
    this.basket = [];
    this.basketSize = capacity;
  }
  // good
  getBasket() {
    return this.basket;
  }
  //good
  addItem(itemName, itemQuantity) {
    const fullMenu = MENU.GetMenu();
    if (itemQuantity > 0) {
      for (const items in fullMenu) {
        if (items === itemName) {
          const insideBasket = {
            item: itemName,
            quantity: itemQuantity,
            price: fullMenu[items],
          };
          this.basket.push(insideBasket);
        }
      }
    } else return 'Please enter valid quantity';
  }
  // good
  removeItem(itemName) {
    for (let i = 0; i < this.basket.length; i++) {
      if (this.basket[i].item === itemName) {
        this.basket.splice(i, 1);
        return this.basket;
      } else return 'This item is not in the basket.';
    }
  }
  // good
  basketCapacity() {
    const totalCapacity = this.basket.reduce((prev, current) => prev + current.quantity, 0);
    if (totalCapacity > this.basketSize) return 'Basket full, Please choose a bigger basket.';
  }

  priceChecker(itemName) {
    const fullMenu = MENU.GetMenu();
    for (const items in fullMenu)
      if (itemName === items) {
        return fullMenu[items];
      }
  }

  basketTotal() {
    let eachItem = [];
    for (let i = 0; i < this.basket.length; i++) {
      eachItem.push(this.basket[i].quantity * this.basket[i].price);
    }
    const totalPrice = eachItem.reduce((total, quantity) => {
      return total + quantity;
    }, 0);
    return '£' + totalPrice;
  }
}

// const basket = new Basket();
// console.log(basket.addItem('brownie', 3));
module.exports = Basket;
