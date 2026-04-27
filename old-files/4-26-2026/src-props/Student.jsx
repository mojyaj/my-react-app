import PropTypes from 'prop-types'

// 'props' is the Prop
function Student( { name="Fred", age="1", isStudent="true"} ) {
    return(
        <div className="student">
            {/* 'props' is the KEY name of the prop
                The VALUE is assigned in 'App.jsx'
            */}
            <p>Name: { name }</p>
            <p>Age: { age }</p>
            <p>Student: { isStudent ? "Yes" : "No" }</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
// defaultProps don't work for function components defaultProps Deprecated since React 19
// Student.defaultProps = {
//     name: "Guest",
//     age: 1,
//     isStudent: true,
// };

export default Student