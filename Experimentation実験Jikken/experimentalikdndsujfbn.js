function makeShoppingList(item1, item2, item3) {
    let item1 = "milk"; 
    let item2 = "bread";
    let item3 = "eggs";
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

