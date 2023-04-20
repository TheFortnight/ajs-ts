import Buyable from "./interface";
import Book from "./book";
import Cart from "./cart";
    
const cart = new Cart();

    function addToCard(item: Buyable): void {
        
        cart.add(item);
        const result = cart.get(); 
        

    }

    addToCard({
        id: 1,
        name: "some book",
        price: 100,

    });

    addToCard({
        id: 2,
        name: "another book",
        price: 200,
    });


    console.log('RESULT: ' + cart.getSumDisc(10));