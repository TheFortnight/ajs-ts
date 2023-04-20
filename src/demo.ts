const message = 'hello world';
console.log('message')

type Item = {
    id: number,
    name: string,
    author: string,
    pages?: number
    };
    let item : Item = {
    id: 1008,
    name: 'Meteora',
    author: 'Linkin Park',
    };

    item = {
        id: 1001,
        name: 'War and Piece',
        author: 'Leo Tolstoy',
        pages: 1225
        }