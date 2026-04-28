import ListA from "./ListA.jsx"
import ListB from "./ListB.jsx"

function App() {
  
  // ListB:
  const fruits = [
      {id: 1, name: "apple", calories: "asdf"}, 
      {id: 2, name: "orange", calories: 45}, 
      {id: 3, name: "banana", calories: 105}, 
      {id: 4, name: "coconut", calories: 159}, 
      {id: 5, name: "pineapple", calories: 37}
  ];

  const vegetables = [
      {id: 6, name: "potatoes", calories: 110}, 
      {id: 7, name: "celery", calories: 15}, 
      {id: 8, name: "carrots", calories: 25}, 
      {id: 9, name: "corn", calories: 63}, 
      {id: 10, name: "broccoli", calories: 50}
  ];

  return(
    <>
      <ListA/>
      <hr></hr>

      {/* Send data from 'fruits' & 'category' as 'props' to the component 'ListB' */}
      { fruits.length > 0 && <ListB items={fruits} category="Fruits"/> } 
      {/*                 ^^  Short Circuiting  NOTE: no fallback value, but its OK since 'null' = NO HTML CODE*/}
      { vegetables.length > 0 && <ListB items={vegetables} category="Vegetables"/> }
      {/* Component with no 'category' or 'items' array */}
      { vegetables.length > 0 && <ListB /> }
    </>
  );
}

export default App
