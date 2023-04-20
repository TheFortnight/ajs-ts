import Buyable from "./interface";
import Book from "./book";
import Cart from "./cart";
    
const cart = new Cart();

    function addToCard(item: Buyable): void {
        
        cart.add(item);
        const result = cart.get(); 
        

    }

    


    console.log('RESULT: ' + cart.getSumDisc(10));