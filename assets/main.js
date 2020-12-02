// VUE
var app = new Vue({
    el: "#root",
    data: {
        dishes: [
            {
                name: "skin on fries", // dish name
                imgSrc: "assets/img/dishes/skin-on-fries-400x571.jpg", // cover-img src
                info: {
                    vegetarian: true,
                    glutenFree: true,
                    dairyFree: true,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "small",
                        price: "3.00",
                    },
                    {
                        size: "medium",
                        price: "4.50",
                    },
                    {
                        size: "large",
                        price: "6.00",
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
                imgSrc: "assets/img/dishes/choco-cookie-frappe-400x571.jpg", // cover-img src
                info: {
                    vegetarian: true,
                    glutenFree: true,
                    dairyFree: false,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "200 mL",
                        price: "4.99",
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
                imgSrc: "assets/img/dishes/donut-burger-400x571.jpg", // cover-img src
                info: {
                    vegetarian: false,
                    glutenFree: false,
                    dairyFree: false,
                    Keto: true,
                }, // dish info obj --> info: true/false
                prices: [ // size and price
                    {
                        size: "medium",
                        price: "6.99",
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
                            bcgImg: "background-image: url(assets/img/cat/appetizers-menu-background.jpg);",
                        },
                        "burgers": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/burgers-menu-background.jpg);",
                        },
                        "pizzas": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/pizza-menu-background.jpg);",
                        },
                        "fries": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/fries-menu-background.jpg);",
                        },
                        "sides": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/sides-menu-background.jpg);",
                        },
                        "desserts": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/desserts-menu-background.jpg);",
                        },
                        "beverages": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/beverages-menu-background.jpg);",
                        },
                        "specials": {
                            href: "#",
                            bcgImg: "background-image: url(assets/img/cat/specials-menu-background.jpg);",
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
        allergies: {
            "vegetarian": {
                imgSrc: "assets/img/allergy/vegetarian.png",
            },
            "gluten free": {
                imgSrc: "assets/img/allergy/gluten.png",
            },
            "dairy free": {
                imgSrc: "assets/img/allergy/dairy.png",
            },
            "keto friendly": {
                imgSrc: "assets/img/allergy/keto.png",
            },
        }, // <-- END allergy and intollerance-info
    },
    methods: { // for function
        stampPrices: function(pricesArray) {
            let thisPrice = "";
            if (!pricesArray.length || pricesArray == undefined) {
                // if there is no price
                thisPrice = "n.d.";
            } else if (pricesArray.length == 1) {
                thisPrice = "$ " + pricesArray[0].price;
            } else {
                let min = pricesArray[0].price;
                let max = pricesArray[pricesArray.length-1].price;
                thisPrice = "$ " + min + " - $ " + max;
            }
            return thisPrice;
        }, // return price-string
        toggleCart: function(currentQuantity, dishIndex) {
            if (currentQuantity == 0) {
                this.dishes[dishIndex].quantity = 1;
            } else if (currentQuantity == 1) {
                this.dishes[dishIndex].quantity = 0;
            }
        }, // add the first (remove) item to cart
    }


});
