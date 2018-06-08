var initialState = [
    {
        id : 1,
        name: "Sản phẩm 1",
        Description: 'Dress',
        image: 'https://thoitrangtre.biz/wp-content/uploads/2018/04/LS759TR-ao-so-mi-trang-tay-coc-370k-2.jpg',
        price: 399,
        inventory:  5,
        number: 1
    },
    {
        id : 2,
        name: "Sản phẩm 2",
        Description: 'Clothes',
        image: 'https://thoitrangtre.biz/wp-content/uploads/2018/04/LS760N-ao-so-mi-co-canh-sen-370k-1.jpg',
        price: 159,
        inventory:  15,
        number: 1
        
    },
    {
        id : 3,
        name: "Sản phẩm 3",
        Description: 'Clothes',
        image: 'https://thoitrangtre.biz/wp-content/uploads/2018/04/LS756C-so-mi-cham-bi-co-no-3.jpg',
        price: 299,
        inventory:  10,
        number: 1
        
    },
    {
        id : 4,
        name: "Sản phẩm 4",
        Description: 'Clothes',
        image: 'https://thoitrangtre.biz/wp-content/uploads/2018/04/LS761V-ao-so-mi-co-no-kieu-tay-chun-370k-3.jpg',
        price: 199,
        inventory:  10,
        number: 1
        
    },
]

const products = (state = initialState, action) =>{
    switch(action.type){
        default:
            return [...state];
    }
}

export default products;