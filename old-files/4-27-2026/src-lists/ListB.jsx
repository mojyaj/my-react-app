
import PropTypes from 'prop-types'

function ListB({ category="Category", items=[] }) {
    // 👇 manually trigger validation
  PropTypes.checkPropTypes(
    ListB.propTypes,
    { items, category },
    "prop",
    "ListB"
  );

    const listCategory = category;
    const itemList = items; // 'items' is our fruits array in 'App.jsx'

    const mappedItems = itemList.map(item => 
                                    <li key={item.id}> 
                                        {item.name}: &nbsp;
                                        <b>{item.calories}</b>
                                    </li>
                                );

    return( <>
            <h3 className="list_category"> {listCategory} </h3>
            <ol className="list_items"> {mappedItems} </ol>
    </>);
}
ListB.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
                                id: PropTypes.number,
                                name: PropTypes.string,
                                calories: PropTypes.number
                            }))
}

export default ListB