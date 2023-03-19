const menu = {
    _meal: "",
    _price: 0,
    _mealArr: ["Spaghetti", "Hamburger", "Sushi", "Corndog"],
    _priceArr: [219, 129, 399, 79],

    get todaysSpecial() {
        const randomMealIndex = Math.floor(Math.random() * this._mealArr.length);

        this._meal = this._mealArr[randomMealIndex];
        this._price = this._priceArr[randomMealIndex];

        return `Today's Special is ${this._meal} for ${this._price}.`;
    },
};

console.log(menu.todaysSpecial);