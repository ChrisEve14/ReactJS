const products = [{
        id: '1',
        name: 'Red Wine',
        price: 50,
        category: 'red',
        // img: 'https://thelordfather.com/wp-content/uploads/2021/08/Wine-Web-2.jpg',
        img: 'https://media.istockphoto.com/id/482533989/photo/pouring-red-wine.jpg?s=612x612&w=0&k=20&c=aAILeGYRvtWMBbdWN--pGuBcIvsd7WvKophjMU6Jd8c=',
        stock: 5,
        description: 'Red Blossom'
    },

    {
        id: '2',
        name: 'White Wine',
        price: 45,
        category: 'white',
        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/14/18/istock-1147260427.jpg?width=1200',
        stock: 10,
        description: 'White Blossom'
    },

    {
        id: '3',
        name: 'Rosé Wine',
        price: 47,
        category: 'rose',
        img: 'https://carpe-travel.com/wp-content/uploads/2020/06/rose-scaled.jpg',
        stock: 7,
        description: 'Rosé Blossom'
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })

}