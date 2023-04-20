import Cart from "../src/cart";

test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart._items.length).toBe(0);
    });

test('add items', () => {
    const cart = new Cart();
    cart.add({id: 1,
        name: "some book",
        price: 100,});

    cart.add({
        id: 2,
        name: "another book",
        price: 200,
    });

    expect(cart._items.length).toBe(2);
    });

test('get sum', () => {
    const cart = new Cart();
    cart.add({id: 1,
        name: "some book",
        price: 100,});
    
    cart.add({
        id: 2,
        name: "another book",
        price: 200,
    });
    let result: number = cart.getSum()
    expect(result).toEqual(300);
    });

test('get sum with discount', () => {
    const cart = new Cart();
    cart.add({id: 1,
        name: "some book",
        price: 100,});
        
    cart.add({
        id: 2,
        name: "another book",
        price: 200,
    });
    let result: number = cart.getSumDisc(10);
    expect(result).toEqual(270);
    });

    test('add items', () => {
        const cart = new Cart();
        cart.add({id: 1,
            name: "some book",
            price: 100,});
    
        cart.add({
            id: 2,
            name: "another book",
            price: 200,
        });

        cart.removeItem(1);
    
        expect(cart._items.length).toBe(1);
        });