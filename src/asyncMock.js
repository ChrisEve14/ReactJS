const products = [{
        id: '1',
        name: 'Red Wine',
        price: 50,
        category: 'Red Wine',
        img: 'https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2021/07/best_red_wine_lead.jpg?itok=AxuG20uy',
        stock: 30,
        description: 'Red Blossom'
    },

    {
        id: '2',
        name: 'White Wine',
        price: 45,
        category: 'White Wine',
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/14/18/istock-1147260427.jpg?width=1200',
        stock: 30,
        description: 'White Blossom'
    },

    {
        id: '3',
        name: 'Rose Wine',
        price: 47,
        category: 'Rose Wine',
        img: 'https://carpe-travel.com/wp-content/uploads/2020/06/rose-scaled.jpg',
        stock: 30,
        description: 'Rose Blossom'
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}