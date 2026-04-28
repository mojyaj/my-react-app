

export default function ProfilePicture() {

    const imageUrl = './src/assets/dummy-profile-pic-A.jpg';

    // Not recommended to work directly with the DOM in React
    //let img = document.body.getElementByClassName(".profilePic");

    const handleClickImage = (e) => e.target.style.display = "none";

    //const handleClickedText = () => {  img.style.display = "block"; }

    return(
        <>
            {/* <h3 onClick= { () => handleClickedText() }>Click To Show Image</h3> */}
            <img className="profilePic" onClick={ (e) => handleClickImage(e) } src={imageUrl}></img>
        </>
    );
}
