

export default function ButtonA() {

    let count = 0;

    const handleClick1 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked ButtonA ${count} times.`)
        }
        else
        {
            console.log(`${name}, stop clicking ButtonA!`);
        }
    }

    //const handleClick2 = (name) => console.log(`${name} stop calling me.`);

    return(
        <>
            <button onClick={ () => handleClick1("John") } > ButtonA </button>
       </>
    );
};