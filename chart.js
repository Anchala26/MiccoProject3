const foodData = require('./food.json');


    //list all the food items
console.log(foodData);

    //list all the food items with category vegetables
let vegetablesItem = foodData.filter(item => item.category == 'Vegetable' );
console.log(vegetablesItem);

    //list all the food items with category fruit
let fruitItems = foodData.filter(item=>item.category == 'Fruit');
console.log(fruitItems);
    
    //list all the food items with category protien
let proteinItems = foodData.filter(items => items.category === 'Protein');
console.log(proteinItems);

    //list all the food items with category nuts
let nutItems = foodData.filter(item => item.category === 'Nuts');
console.log(nutItems);
    //list all the food items with category grains
let grainItems = foodData.filter(items => items.category === 'Grain');
console.log(grainItems);

    //list all the food items with category dairy
let dairyItems = foodData.filter(items => items.category === 'Dairy');
console.log(dairyItems);

    //list all the food items with calorie above 100
let calorieAbove100 = foodData.filter(item => item.calorie > 100);
    console.log(calorieAbove100);

    // list all the food items with calorie below 100
let calorieBelow100 = foodData.filter(item => item.calorie < 100);
console.log(calorieBelow100);

    //list all the food items with highest protien content to lowest

let sortProtien = foodData.slice();
sortProtien.sort((a,b) => b.protiens - a.protiens);
console.log(sortProtien);

    //list all the food items with lowest cab content to highest

let sortCab = foodData.slice();
sortCab.sort((a,b)=>(a.cab - b.cab));
console.log(sortCab);