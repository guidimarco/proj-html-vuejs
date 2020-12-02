// VUE
var app = new Vue({
    el: "#root",
    data: {
        dishes: [
            {
                name: "skin on fries", // dish name
                info: {
                    vegetarian: true,
                    glutenFree: true,
                    dairyFree: true,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "small",
                        price: 3.00,
                    },
                    {
                        size: "medium",
                        price: 4.50,
                    },
                    {
                        size: "large",
                        price: 6.00,
                    },
                ], // all prices: array of obj (price and size)
                menuCategories: [
                    "fries",
                ], // all category: array of string (#"appetazer")
                quantity: 0, // number of item in cart
                popular: true,
            }, // skin on fries
            {
                name: "choco cookie frappe", // dish name
                info: {
                    vegetarian: true,
                    glutenFree: true,
                    dairyFree: false,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "200 mL",
                        price: 4.99,
                    },
                ], // all prices: array of obj (price and size)
                menuCategories: [
                    "beverages",
                ], // all category: array of string (#"appetazer")
                quantity: 0, // number of item in cart
                popular: true,
            }, // choco cookie frappe
            {
                name: "the donut burger", // dish name
                info: {
                    vegetarian: false,
                    glutenFree: false,
                    dairyFree: false,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "medium",
                        price: 6.99,
                    },
                ], // all prices: array of obj (price and size)
                menuCategories: [
                    "burgers",
                ], // all category: array of string (#"appetazer")
                quantity: 0, // number of item in cart
                popular: true,
            }, // donut burger
        ], // all dishes: array of dish-obj
        news: [
            {
                title: "titolo", // title string
                article: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", // article string
                date: "day",
            }, // single-news-obj
        ], // all news: array of new-obj
        navMenu: {
            "navigate": {
                "home": {
                    href: "#",
                },
                "alternate home": {
                    href: "#",
                },
                "order online": {
                    href: "#",
                    submenu: { // menu-categories submenu
                        "appetizers": {
                            href: "#",
                            imgSrc: "",
                        },
                        "burgers": {
                            href: "#",
                            imgSrc: "",
                        },
                        "pizzas": {
                            href: "#",
                            imgSrc: "",
                        },
                        "fries": {
                            href: "#",
                            imgSrc: "",
                        },
                        "sides": {
                            href: "#",
                            imgSrc: "",
                        },
                        "desserts": {
                            href: "#",
                            imgSrc: "",
                        },
                        "beverages": {
                            href: "#",
                            imgSrc: "",
                        },
                        "specials": {
                            href: "#",
                            imgSrc: "",
                        },
                    },
                },
                "about": {
                    href: "#",
                },
                "news": {
                    href: "#",
                },
                "contact us": {
                    href: "#",
                },
                "cart": {
                    href: "#",
                },
            }, // end nav-menu
            "information": {
                "my account": {
                    href: "#",
                },
                "terms of service": {
                    href: "#",
                },
                "privacy policy": {
                    href: "#",
                },
            }, // end info-menu
            "opening hours": {
                "mon": {
                    "opening": "10am",
                    "closing": "11pm",
                },
                "tue": {
                    "opening": "10am",
                    "closing": "11pm",
                },
                "wed": {
                    "opening": "10am",
                    "closing": "11pm",
                },
                "thur": {
                    "opening": "10am",
                    "closing": "11pm",
                },
                "fri": {
                    "opening": "10am",
                    "closing": "11pm",
                },
                "sat": {
                    "opening": "10am",
                    "closing": "1am",
                },
                "sun": {
                    "opening": "11am",
                    "closing": "10pm",
                },
            }, // end opening-hours-menu
            "voucher": {
                "first order": {
                    href: "#",
                    imgSrc: "assets/img/first_order/footer-coupon-200x200.png",
                },
            },
        }, // <-- END all navMenu
        restFeatures: [
            {
                icon: "far fa-clock",
                text: "24/7 delivery",
            },
            {
                icon: "fas fa-hamburger",
                text: "over 100 dishes",
            },
            {
                icon: "fas fa-mobile-alt",
                text: "in app ordering",
            },
            {
                icon: "fas fa-car",
                text: "fast delivery",
            },
        ], // <-- END icon restaurant features
    },
    methods: { // for function

    }


});
