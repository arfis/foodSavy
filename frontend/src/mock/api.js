const posts = {
    '0': {
        id: 0,
        store: 'Kaufland',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Logo_Kaufland.svg/2000px-Logo_Kaufland.svg.png',
        products: [
            {
                id: 0,
                food: 'Kaiserka celozrnna',
                price: 0.03,
                count: 4,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: true,
            },
            {
                id: 1,
                food: 'Grotto bageta debrecinska',
                price: 0.5,
                count: 14,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: true,
            },
            {
                id: 2,
                food: 'Grotto bageta salamova',
                price: 0.5,
                count: 0,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: false,
            },
            {
                id: 3,
                food: 'Grotto bageta debrecinska',
                price: 0.5,
                count: 14,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: true,
            },
            {
                id: 4,
                food: 'Grotto bageta salamova',
                price: 0.5,
                count: 0,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: false,
            },
            {
                id: 5,
                food: 'Grotto bageta debrecinska',
                price: 0.5,
                count: 14,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: true,
            },
            {
                id: 6,
                food: 'Grotto bageta salamova',
                price: 0.5,
                count: 0,
                currency: '€',
                foodUrl: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
                available: false,
            }
            ]
    },
    '1': {
        id: 1,
        store: 'Gatto matto',
        imgUrl: 'http://www.promenu.sk//media/restaurants/733/24690_110620522309179_1237998_n.jpg',
        products: [
            {
                id: 0,
                food: 'Pizza humare',
                price: 1.3,
                count: 4,
                currency: '€',
                foodUrl: 'https://www.stockthehouse.com/wp-content/uploads/2018/06/pep-pizza.jpg',
                available: true,
            },
            {
                id: 1,
                food: 'Polo la spinachi',
                price: 2.5,
                count: 10,
                currency: '€',
                foodUrl: 'https://www.themeatsociety.com.au/media/d2db48a2-2cc0-4299-8a05-b885ef36efe6/81YqsA/cooked%20whole%20chicken%20close%20up.jpg?mw=870&mh=430',
                available: true,
            },
            {
                id: 2,
                food: 'Polo la baguette',
                price: 1.5,
                count: 0,
                currency: '€',
                foodUrl: 'https://www.themeatsociety.com.au/media/d2db48a2-2cc0-4299-8a05-b885ef36efe6/81YqsA/cooked%20whole%20chicken%20close%20up.jpg?mw=870&mh=430',
                available: false,
            }
        ]
    }
}

const suppliers = [
    {
        id: 0,
        store: 'Kaufland',
        thumbnail: 'https://www.deadlysins.info/wp-content/uploads/2018/01/kaufland-logo-353033943B-seeklogo.com_.png',
        description: 'Nemecky dodavatel potravin',
        products: [
            'rozky', 'bagety', 'kompoty', 'balene potraviny'
        ]
    },
    {
        id: 1,
        store: 'Gatto matto',
        thumbnail: 'http://www.italymagazine.com/sites/default/files/styles/220x220/public/brand/gatto-matto-design-logo-1452531049.jpg?itok=1TblSxCm',
        description: 'Vyborna talianska restauracia v starom meste',
        products: [
            'pizza', 'hotove jedla z denneho menu'
        ]
    },
    {
        id: 2,
        store: 'Kaufland',
        thumbnail: 'https://www.deadlysins.info/wp-content/uploads/2018/01/kaufland-logo-353033943B-seeklogo.com_.png',
        description: 'Nemecky dodavatel potravin',
        products: [
            'rozky', 'bagety', 'kompoty', 'balene potraviny'
        ]
    },
]

export function getSuppliers(cb) {
    setTimeout(() => {
        cb(null, suppliers);
    }, 100)
}
export function getPost (id, cb) {
    // fake an API request
    setTimeout(() => {
        if (posts[id]) {
            cb(null, posts[id])
        } else {
            cb(new Error('Post not found.'))
        }
    }, 100)
}