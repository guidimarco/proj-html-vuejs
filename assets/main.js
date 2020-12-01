// VUE
var app = new Vue({
    el: "#root",
    data: {
        dishes: [
            {
                name: "nome", // dish name
                info: {
                    vegetarian: true,
                    glutenFree: true,
                    dairyFree: true,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [
                    {
                        size: "small",
                        price: 3.00,
                    }, // single price obj
                ], // all prices: array of obj (price and size)
                menuCategories: [
                    "category",
                ], // all category: array of string (#"appetazer")
                quantity: 0, // number of item in cart
            }, // single-dish-obj
        ], // all dishes: array of dish-obj
        news: [
            {
                title: "titolo", // title string
                article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." // article string
            }, // single-news-obj
        ], // all news: array of new-obj
        htmlNavMenu: [
            { // NAV MENU
                name: "navigate",
                submenu: [ // MAIN MENU
                    {
                        name: "home",
                        href: "#",
                    },
                    {
                        name: "alternate home",
                        href: "#",
                    },
                    {
                        name: "order online",
                        href: "#",
                        submenu: [ // MENU-CATEGORIES
                            {
                                name: "appetizers",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "burgers",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "pizzas",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "fries",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "sides",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "desserts",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "beverages",
                                href: "#",
                                imgSrc: "",
                            },
                            {
                                name: "specials",
                                href: "#",
                                imgSrc: "",
                            },
                        ],
                    },
                    {
                        name: "about",
                        href: "#",
                    },
                    {
                        name: "news",
                        href: "#",
                    },
                    {
                        name: "contact us",
                        href: "#",
                    },
                    {
                        name: "cart",
                        href: "#",
                    },
                ],
            },
            { // INFO MENU
                name: "information",
                submenu: [
                    {
                        name: "my account",
                        href: "#",
                    },
                    {
                        name: "terms of service",
                        href: "#",
                    },
                    {
                        name: "privacy policy",
                        href: "#",
                    },
                ],
            },
            { // OPENING HOURS MENU
                name: "opening hours",
                submenu: [ // SUBMENU: DAY, OPENING HOURS
                    {
                        day: "monday",
                        openingTime: "12",
                        closingTime: "18",
                    },
                ],
            },
            { // VOUCHER MENU
                name: "voucher",
                submenu: [
                    {
                        name: "first order",
                        href: "#",
                        imgSrc: "assets/img/first_order/footer-coupon-200x200.png",
                    },
                ],
            },
        ], // <-- END htmlNavMenu
    },
    methods: { // for function

    }


});
