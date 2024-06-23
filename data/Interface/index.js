const express = require("express");
const router = express.Router();

const websiteface ={
    menu: [
        { text: "Home", href: "/" },
        { text: "Products", href: "/api/product" },
        { text: "About", href: "/api/about" },
        { text: "Blog", href: "/api/blog" },
        { text: "Contact", href: "/api/contact" }
    ],
    contact: {
        email: "emdev@tamtheme.com",
        phone: "+1234567890"
    },
    socialMedia: [
        { name: "Twitter", href: "https://twitter.com/example" },
        { name: "Facebook", href: "https://facebook.com/example" },
        { name: "Instagram", href: "https://instagram.com/example" }
    ],
    discout: [
        {text:"Follow Us  and get a chance to win 80% off"},
        {text:"Follow us"}
    ],
    client: [
        {
            id:1,
            imgAlt: "image alt desc",
            img:"../img/image.png"
        },
        {
            id:2,
            imgAlt: "image alt desc",
            img:"../img/image.png"
        },
        {
            id:3,
            imgAlt: "image alt desc",
            img:"../img/image.png"
        },
        {
            id:4,
            imgAlt: "image alt desc",
            img:"../img/image.png"
        }
    ]
}

router.get("/", (req, res) => {
    res.send(websiteface);
});

module.exports = router;