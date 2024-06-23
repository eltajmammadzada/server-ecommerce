const express = require("express");
const router = express.Router();


const products =[
    {
        id:1,
        title:'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        description:'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        price: 399,
        category: 'laptop',
        image:'../img/image.png',
    },
    {
        id: 2,
        title: 'Acer Aspire 5 Slim Laptop',
        description: 'Powerful and portable. The Aspire 5 packs a lot of power into the chassis and with an Intel Core i5 processor, it’s more than capable.',
        price: 549,
        category: 'laptop',
        image: '../img/image2.png'
    },
    {
        id: 3,
        title: 'MacBook Pro 16-inch',
        description: 'The best for the brightest. The MacBook Pro 16-inch model is the ultimate pro notebook, designed for the biggest projects.',
        price: 2399,
        category: 'laptop',
        image: '../img/image3.png'
    },
    {
        id: 4,
        title: 'Dell XPS 13',
        description: 'Stunning inside and out. The Dell XPS 13 features a sleek design, a stunning display, and high performance.',
        price: 999,
        category: 'laptop',
        image: '../img/image4.png'
    },
    {
        id: 5,
        title: 'HP Spectre x360',
        description: 'Ultra-light and versatile. The HP Spectre x360 is a powerful, ultra-light convertible laptop with exceptional battery life.',
        price: 1299,
        category: 'laptop',
        image: '../img/image5.png'
    },
    {
        id: 6,
        title: 'Lenovo ThinkPad X1 Carbon',
        description: 'Business ready. The ThinkPad X1 Carbon is lightweight, long-lasting, and packed with powerful performance.',
        price: 1399,
        category: 'laptop',
        image: '../img/image6.png'
    },
    {
        id: 7,
        title: 'Asus ROG Zephyrus G14',
        description: 'Gaming on the go. The ROG Zephyrus G14 offers power and portability in a sleek package, perfect for gaming anywhere.',
        price: 1499,
        category: 'laptop',
        image: '../img/image7.png'
    },
    {
        id: 8,
        title: 'Microsoft Surface Laptop 4',
        description: 'Style and speed. The Surface Laptop 4 combines performance and sleek design, with a stunning touchscreen display.',
        price: 1199,
        category: 'laptop',
        image: '../img/image8.png'
    },
    {
        id: 9,
        title: 'Razer Blade 15',
        description: 'Ultimate gaming laptop. The Razer Blade 15 features an advanced GPU, high refresh rate display, and powerful processor.',
        price: 1699,
        category: 'laptop',
        image: '../img/image9.png'
    },
    {
        id: 10,
        title: 'Apple MacBook Air',
        description: 'Light and powerful. The MacBook Air is ultra-light, fast, and has an impressive battery life, perfect for everyday use.',
        price: 999,
        category: 'laptop',
        image: '../img/image10.png'
    },
    {
        id: 11,
        title: 'Samsung Galaxy Book Flex',
        description: 'The Galaxy Book Flex offers a unique design, great performance, and a long-lasting battery in a compact form.',
        price: 1499,
        category: 'laptop',
        image: '../img/image11.png'
    },
    {
        id: 12,
        title: 'Huawei MateBook X Pro',
        description: 'With a stunning 3K touchscreen, the MateBook X Pro offers high performance in a sleek, portable package.',
        price: 1699,
        category: 'laptop',
        image: '../img/image12.png'
    },
    {
        id: 13,
        title: 'Google Pixelbook Go',
        description: 'Light, fast, and smart. The Pixelbook Go is the Chromebook that goes anywhere and keeps you productive.',
        price: 849,
        category: 'laptop',
        image: '../img/image13.png'
    },
    {
        id: 14,
        title: 'Alienware m15 R4',
        description: 'A powerful gaming laptop with advanced cooling technology, high refresh rate display, and customizable RGB lighting.',
        price: 2199,
        category: 'laptop',
        image: '../img/image14.png'
    },
    {
        id: 15,
        title: 'LG Gram 17',
        description: 'The LG Gram 17 combines a large display with ultra-lightweight design and long battery life for ultimate portability.',
        price: 1599,
        category: 'laptop',
        image: '../img/image15.png'
    },
    {
        id: 16,
        title: 'ASUS ZenBook 13',
        description: 'With its sleek design and high performance, the ZenBook 13 is perfect for both work and entertainment.',
        price: 999,
        category: 'laptop',
        image: '../img/image16.png'
    },
    {
        id: 17,
        title: 'Acer Predator Helios 300',
        description: 'A powerful gaming laptop with a 144Hz display, advanced cooling technology, and high-performance graphics.',
        price: 1299,
        category: 'laptop',
        image: '../img/image17.png'
    },
    {
        id: 18,
        title: 'Microsoft Surface Book 3',
        description: 'The Surface Book 3 combines performance, versatility, and a detachable touchscreen in a premium laptop.',
        price: 2299,
        category: 'laptop',
        image: '../img/image18.png'
    },
    {
        id: 19,
        title: 'Razer Blade Stealth 13',
        description: 'A sleek, ultra-portable gaming laptop with powerful performance and a stunning display.',
        price: 1599,
        category: 'laptop',
        image: '../img/image19.png'
    },
    {
        id: 20,
        title: 'HP Envy 13',
        description: 'The HP Envy 13 offers high performance, long battery life, and a beautiful design in an ultra-portable package.',
        price: 1099,
        category: 'laptop',
        image: '../img/image20.png'
    }
]

router.get("/", (req, res) => {
    res.send(products);
});
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send("Product not found"); 
    }
});

module.exports = router;