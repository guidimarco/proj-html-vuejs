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
        navMenu: [
            {
                name: "home",
                link: "src",
            },
            {
                name: "alternate home",
                link: "src",
            },
            {
                name: "menu",
                submenu: [

                ], // all sub-menu link: array of menu categories
                link: "src",
            },
            {
                name: "about",
                link: "src",
            },
            {
                name: "news",
                link: "src",
            },
            {
                name: "contact us",
                link: "src",
            },
            {
                name: "cart",
                link: "src",
            },
        ], // all menu link: array of obj
    },
    methods: { // for function

    }


});
