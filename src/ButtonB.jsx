
export default function ButtonB() {

    const handleClick = (e) => e.target.textContent = "Clicked ButtonB";


    return(
        <>
            <button onClick={ (e) => handleClick(e) }> ButtonB onClick </button>
            <br></br>
            <br></br>
            <button onDoubleClick={ (e) => handleClick(e) }> ButtonB onDoubleClick </button>
       </>
    );
};