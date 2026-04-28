
function ListA() {

    // 'fruits' removed at timestamp 12:18
    const fruits = [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 45}, 
        {id: 3, name: "banana", calories: 105}, 
        {id: 4, name: "coconut", calories: 159}, 
        {id: 5, name: "pineapple", calories: 37}
    ];

    // #region "Sorting"
    // sort() - sorts an array lexicographically
    // Write a custom sorting function
    
    // Sort by 'name' using Alphabetical order
    const fruitsAlphabetic = fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Sort by 'calories' using Numerical order
    const fruitsNumberic = fruits.sort((a, b) => a.calories - b.calories);
                                // b.calories - b.calories --> Descending Order

    // Sort by low/high calorie fruits
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

    // #endregion

    const listItems =  fruits.map(fruit => 
                                    <li key={fruit.id}> 
                                        {fruit.name}: &nbsp;
                                        <b>{fruit.calories}</b>
                                    </li>);

    return(<ol>{listItems}</ol>);
}

export default ListA;